/* Gracebound interactive maps: only public non-weapon location categories are included. */
(() => {
  const MARKERS = window.ER_MAP_MARKERS || [];
  if (!MARKERS.length) return;
  const SCALE = 64, SIZE = 10496;
  const TILE_ROOT = "https://jw-ofs.github.io/elden-ring-map/ctiles/{map}/base/{z}/{y}/{x}.webp";
  const CAT = {
    grace:{label:"Gnadenort",icon:"✦",color:"#d9b66f"},
    boss:{label:"Boss",icon:"☠",color:"#c9786a"},
    npc:{label:"NPC",icon:"✧",color:"#9a85c4"},
    golden:{label:"Goldene Saat",icon:"✿",color:"#d6c45b"},
    tear:{label:"Heilige Träne",icon:"◆",color:"#83b7d8"},
    crystal:{label:"Kristallträne",icon:"◇",color:"#b18bc9"},
    greatrune:{label:"Große Rune",icon:"◎",color:"#c9a85b"},
    larval:{label:"Larventräne",icon:"◉",color:"#bd8eb8"},
    memory:{label:"Gedächtnisstein",icon:"▣",color:"#81a6bd"}
  };
  const xy = (px,py) => L.latLng(-py/SCALE,px/SCALE);
  const bounds = L.latLngBounds(xy(0,SIZE),xy(SIZE,0));
  const layerName = m => ({M00:"Zwischenlande",M01:"Untergrund",M10:"Schattenland"}[m]||m);
  const safe = s => String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const tile = master => L.tileLayer(TILE_ROOT.replace("{map}",master),{
    tileSize:256,minNativeZoom:0,maxNativeZoom:6,noWrap:true,bounds,
    updateWhenIdle:true,keepBuffer:2
  });
  const markerIcon = cat => {
    const d=CAT[cat]||CAT.grace;
    return L.divIcon({className:"",html:`<span class="er-map-pin pin-${cat}" style="--pin-color:${d.color}">${d.icon}</span>`,iconSize:[25,25],iconAnchor:[12,12],popupAnchor:[0,-12]});
  };
  const popupHtml = (m, custom=false) => {
    const d=CAT[m.cat]||{label:"Eigener Wegpunkt"};
    return `<div class="er-popup"><b>${safe(m.name)}</b><span>${safe(m.desc||m.location||d.label)}</span><small>${safe(custom?"Eigener Wegpunkt":d.label+" · "+layerName(m.master))}</small>${custom&&m.note?`<p>${safe(m.note)}</p>`:""}${custom?`<button type="button" class="popup-delete" data-delete-custom-pin="${safe(m.id)}">Wegpunkt löschen</button>`:""}</div>`;
  };

  function makeMap(id, master="M00") {
    const el=document.getElementById(id);
    if(!el||!window.L) return null;
    const map=L.map(el,{crs:L.CRS.Simple,minZoom:1,maxZoom:7,zoomControl:true,attributionControl:false,maxBounds:bounds.pad(0.18),maxBoundsViscosity:.65,zoomSnap:.25,zoomDelta:.5});
    const tileLayers={M00:tile("M00"),M01:tile("M01"),M10:tile("M10")};
    let active=master;
    tileLayers[active].addTo(map);
    map.fitBounds(bounds);
    return {map,tileLayers,get active(){return active;},setBase(next){
      if(!tileLayers[next]||active===next)return;
      map.removeLayer(tileLayers[active]);active=next;tileLayers[active].addTo(map);tileLayers[active].bringToBack();
    }};
  }

  let main=null,boss=null,pendingPin=false,customPins=[];
  const mainLayers=new Map(),bossLayers=new Map();
  const mainVisible={grace:true,boss:false,golden:true,npc:false,tear:false,crystal:false,greatrune:false,memory:false,larval:false};
  let mainMarkerRefs=new Map(),bossMarkerRefs=new Map();

  function addPin(target,m,group,refs,custom=false){
    const marker=L.marker(xy(m.px,m.py),{icon:custom?L.divIcon({className:"",html:'<span class="er-custom-pin">★</span>',iconSize:[27,27],iconAnchor:[13,13]}):markerIcon(m.cat)});
    marker.bindPopup(popupHtml(m,custom),{maxWidth:230});
    group.addLayer(marker); if(refs&&m.id)refs.set(m.id,marker);
    return marker;
  }
  function drawMainMarkers(){
    if(!main)return;
    const base=main.active;
    for(const layer of mainLayers.values())main.map.removeLayer(layer);
    mainLayers.clear();mainMarkerRefs=new Map();
    const selected=MARKERS.filter(m=>m.master===base&&mainVisible[m.cat]);
    const groups={};
    Object.keys(CAT).forEach(cat=>{groups[cat]=L.layerGroup();mainLayers.set(cat,groups[cat]);});
    selected.forEach(m=>addPin(main.map,m,groups[m.cat],mainMarkerRefs));
    Object.values(groups).forEach(g=>g.addTo(main.map));
    drawCustomPins();
    const count=document.getElementById("mapMarkerCount");if(count)count.textContent=selected.length+" angezeigt";
  }
  function drawCustomPins(){
    if(!main)return;
    if(mainLayers.has("custom"))main.map.removeLayer(mainLayers.get("custom"));
    const group=L.layerGroup();mainLayers.set("custom",group);
    customPins.filter(p=>p.master===main.active).forEach(p=>addPin(main.map,p,group,null,true));
    group.addTo(main.map);
  }
  function setLayerButtons(selector,attr,base){
    document.querySelectorAll(selector).forEach(b=>b.classList.toggle("active",b.getAttribute(attr)===base));
  }
  function changeMainBase(base){
    main.setBase(base);setLayerButtons("[data-map-layer]","data-map-layer",base);drawMainMarkers();main.map.invalidateSize();
  }
  function changeBossBase(base){
    boss.setBase(base);setLayerButtons("[data-boss-layer]","data-boss-layer",base);drawBossMarkers();boss.map.invalidateSize();
  }
  function mainSearch(){
    const q=(document.getElementById("mapSearch")?.value||"").trim().toLocaleLowerCase();
    const box=document.getElementById("mapSearchResults");if(!box)return;
    if(!q){box.innerHTML="";return;}
    const rows=MARKERS.filter(m=>(m.name+" "+m.desc+" "+(CAT[m.cat]?.label||"")).toLocaleLowerCase().includes(q)).slice(0,9);
    box.innerHTML=rows.length?rows.map(m=>`<button class="map-result" type="button" data-map-result="${safe(m.id)}"><span>${safe(m.name)}</span><small>${safe(CAT[m.cat]?.label||"Ort")} · ${safe(m.desc||layerName(m.master))}</small></button>`).join(""):`<p class="muted map-no-results">Keine passenden Markierungen gefunden.</p>`;
  }
  function focusMainMarker(m){
    if(!m||!main)return;
    document.querySelector('[data-view="map"]')?.click();
    setTimeout(()=>{
      changeMainBase(m.master);
      if(!mainVisible[m.cat]){
        mainVisible[m.cat]=true;
        const cb=document.querySelector(`[data-map-category="${m.cat}"]`);if(cb)cb.checked=true;
        drawMainMarkers();
      }
      const point=xy(m.px,m.py);main.map.setView(point,5);
      setTimeout(()=>mainMarkerRefs.get(m.id)?.openPopup(),160);
    },120);
  }
  function renderCustomPinList(){
    const box=document.getElementById("customPinList");if(!box)return;
    box.innerHTML=customPins.length?customPins.map(p=>`<div class="custom-pin-row"><button type="button" data-focus-custom-pin="${safe(p.id)}">${safe(p.name)}</button><button type="button" class="remove-pin" aria-label="Löschen" data-remove-custom-pin="${safe(p.id)}">×</button></div>`).join(""):`<p class="muted">Noch keine eigenen Wegpunkte.</p>`;
  }
  function saveCustomPins(){try{localStorage.setItem("gb_custom_pins",JSON.stringify(customPins));}catch(e){}}
  function beginPinPlacement(){
    const name=document.getElementById("customPinName")?.value.trim();
    const status=document.getElementById("customPinStatus");
    if(!name){document.getElementById("customPinName")?.focus();if(status)status.textContent="Bitte zuerst einen Namen eingeben.";return;}
    pendingPin=true;
    const button=document.getElementById("startCustomPin");
    if(button){button.textContent="Jetzt auf die Karte klicken";button.classList.add("placing-pin");}
    if(status)status.textContent="Wähle jetzt die Stelle auf der Karte.";
    main.map.getContainer().classList.add("pin-placement-mode");
  }
  function finishPinPlacement(e){
    if(!pendingPin)return;
    const name=document.getElementById("customPinName")?.value.trim();
    if(!name)return;
    const px=Math.max(0,Math.min(SIZE,Math.round(e.latlng.lng*SCALE)));
    const py=Math.max(0,Math.min(SIZE,Math.round(-e.latlng.lat*SCALE)));
    customPins.push({id:"custom-"+Date.now(),cat:"custom",name, note:document.getElementById("customPinNote")?.value.trim()||"",master:main.active,px,py});
    saveCustomPins();renderCustomPinList();drawCustomPins();
    document.getElementById("customPinName").value="";
    document.getElementById("customPinNote").value="";
    pendingPin=false;
    const button=document.getElementById("startCustomPin");
    if(button){button.textContent="Auf Karte platzieren ↗";button.classList.remove("placing-pin");}
    const status=document.getElementById("customPinStatus");if(status)status.textContent="Wegpunkt gespeichert.";
    main.map.getContainer().classList.remove("pin-placement-mode");
  }
  function drawBossMarkers(){
    if(!boss)return;
    if(bossLayers.has("boss"))boss.map.removeLayer(bossLayers.get("boss"));
    const group=L.layerGroup();bossLayers.set("boss",group);bossMarkerRefs=new Map();
    MARKERS.filter(m=>m.cat==="boss"&&m.master===boss.active).forEach(m=>addPin(boss.map,m,group,bossMarkerRefs));
    group.addTo(boss.map);
  }
  function renderBossResults(){
    const input=document.getElementById("bossSearch");
    const box=document.getElementById("bossResults");if(!box)return;
    const q=(input?.value||"").trim().toLocaleLowerCase();
    const all=MARKERS.filter(m=>m.cat==="boss");
    const rows=all.filter(m=>(m.name+" "+m.desc).toLocaleLowerCase().includes(q)).sort((a,b)=>a.name.localeCompare(b.name));
    const count=document.getElementById("bossCount");if(count)count.textContent=rows.length+" von "+all.length+" Boss-Standorten";
    box.innerHTML=rows.slice(0,60).map(m=>`<button class="boss-location-row" type="button" data-boss-result="${safe(m.id)}"><span class="boss-row-icon">☠</span><span><b>${safe(m.name)}</b><small>${safe(m.desc||layerName(m.master))} · ${safe(layerName(m.master))}</small></span><span class="boss-row-arrow">↗</span></button>`).join("")+(rows.length>60?`<p class="muted">Weitere Treffer werden durch eine genauere Suche angezeigt.</p>`:"");
  }
  function focusBoss(m){
    if(!m||!boss)return;
    document.querySelector('[data-view="bosses"]')?.click();
    setTimeout(()=>{
      changeBossBase(m.master);boss.map.setView(xy(m.px,m.py),5);
      setTimeout(()=>bossMarkerRefs.get(m.id)?.openPopup(),160);
    },120);
  }

  window.focusGraceboundMap=(master,px,py,label)=>{
    const point={master,px:Number(px),py:Number(py),name:label||"Queststation",id:"quest-"+Date.now(),cat:"npc",desc:"Queststation"};
    focusMainMarker(point);
  };

  document.addEventListener("DOMContentLoaded",()=>{
    if(!window.L)return;
    try{customPins=JSON.parse(localStorage.getItem("gb_custom_pins")||"[]");if(!Array.isArray(customPins))customPins=[];}catch(e){customPins=[];}
    main=makeMap("erMap","M00");
    boss=makeMap("bossMap","M00");
    if(!main||!boss)return;
    drawMainMarkers();drawBossMarkers();renderCustomPinList();renderBossResults();

    document.querySelectorAll("[data-map-layer]").forEach(b=>b.addEventListener("click",()=>changeMainBase(b.dataset.mapLayer)));
    document.querySelectorAll("[data-boss-layer]").forEach(b=>b.addEventListener("click",()=>changeBossBase(b.dataset.bossLayer)));
    document.querySelectorAll("[data-map-category]").forEach(cb=>{
      mainVisible[cb.dataset.mapCategory]=cb.checked;
      cb.addEventListener("change",()=>{mainVisible[cb.dataset.mapCategory]=cb.checked;drawMainMarkers();});
    });
    document.getElementById("mapSearch")?.addEventListener("input",mainSearch);
    document.getElementById("bossSearch")?.addEventListener("input",renderBossResults);
    document.getElementById("startCustomPin")?.addEventListener("click",beginPinPlacement);
    main.map.on("click",finishPinPlacement);
    document.getElementById("mapSearchResults")?.addEventListener("click",e=>{
      const b=e.target.closest("[data-map-result]");if(!b)return;
      const m=MARKERS.find(x=>x.id===b.dataset.mapResult);if(m)focusMainMarker(m);
    });
    document.getElementById("bossResults")?.addEventListener("click",e=>{
      const b=e.target.closest("[data-boss-result]");if(!b)return;
      const m=MARKERS.find(x=>x.id===b.dataset.bossResult);if(m)focusBoss(m);
    });
    document.addEventListener("click",e=>{
      const a=e.target.closest("[data-delete-custom-pin],[data-remove-custom-pin]");
      if(a){const id=a.dataset.deleteCustomPin||a.dataset.removeCustomPin;customPins=customPins.filter(p=>p.id!==id);saveCustomPins();renderCustomPinList();drawCustomPins();return;}
      const f=e.target.closest("[data-focus-custom-pin]");
      if(f){const p=customPins.find(x=>x.id===f.dataset.focusCustomPin);if(p){changeMainBase(p.master);main.map.setView(xy(p.px,p.py),5);}return;}
      const q=e.target.closest("[data-quest-map-pin]");
      if(q){window.focusGraceboundMap(q.dataset.master,q.dataset.px,q.dataset.py,q.dataset.label);}
    });
    document.querySelectorAll("[data-boss-reset]").forEach(b=>b.addEventListener("click",()=>{changeBossBase("M00");boss.map.fitBounds(bounds);}));
    document.querySelectorAll("[data-map-reset]").forEach(b=>b.addEventListener("click",()=>{changeMainBase("M00");main.map.fitBounds(bounds);}));
    document.querySelectorAll('[data-view="map"],[data-view="bosses"]').forEach(b=>b.addEventListener("click",()=>setTimeout(()=>{main.map.invalidateSize();boss.map.invalidateSize();},80)));
  });
})();