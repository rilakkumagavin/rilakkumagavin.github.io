(() => {
  'use strict';
  const el = id => document.getElementById(id);
  const islands = [
    {grade:2,name:'春曉島',hint:'松林初醒，尋一縷春光',x:290,y:390,land:'#cfdbb1',roof:'#657c61',kind:'pine'},
    {grade:3,name:'竹影島',hint:'竹影搖曳，聽山中清音',x:475,y:170,land:'#b9d3b3',roof:'#48776b',kind:'bamboo'},
    {grade:4,name:'雲山島',hint:'登高望遠，讓詩心飛翔',x:750,y:335,land:'#c6d1bb',roof:'#6a7974',kind:'mountain'},
    {grade:5,name:'墨香島',hint:'書院煮茶，讀一頁光陰',x:1015,y:155,land:'#d8d2af',roof:'#876d58',kind:'school'},
    {grade:6,name:'明月島',hint:'水映明月，收藏少年時',x:1195,y:430,land:'#c7cfbd',roof:'#617183',kind:'moon'}
  ];
  const home={x:100,y:555};
  let position={...home}, landed=null, destination=null, strokes=0, moving=false, trip=0, pending=null;
  const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const tree=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0v-52m0 29-12-12m12 4 14-15" stroke="#6b7053" stroke-width="4" fill="none"/><path d="M-25-33q-5-17 13-18-4-23 13-23 15-1 16 21 24-2 22 15-10 13-29 7-22 12-35-2" fill="#789576" stroke="#647b62"/><path d="M-17-40q11-8 18-4m0-13q7 8 16 5" fill="none" stroke="#b1bfa1"/></g>`;
  const house=(x,y,roof,scale=1)=>`<g transform="translate(${x} ${y}) scale(${scale})"><path d="M-42 0v-49h85V0" fill="#e7d9b8" stroke="#7e8065"/><path d="M-56-47q20-5 28-28h57q9 21 27 28-24 5-56 2-34 3-56-2" fill="${roof}" stroke="#586b5e" stroke-width="2"/><path d="M-29-63h58m-67 9h75" stroke="#a3b29a" fill="none"/><path d="M-10 0v-32h22V0" fill="#766c54"/><path d="M-34-33h15v18h-15zm54 0h15v18H20z" fill="#b8c1a0" stroke="#7a7e62"/><path d="M-43 0h87" stroke="#a49471" stroke-width="5"/><path d="M-2-61h8" stroke="#dcc6a1" stroke-width="4"/></g>`;
  function islandArt(i){
    let scenery='';
    if(i.kind==='pine') scenery=tree(-75,-15,.85)+tree(69,-25,1)+house(-5,5,i.roof,.9);
    if(i.kind==='bamboo') scenery=`<g stroke="#6c8e70" fill="none" stroke-width="3"><path d="M-80 4v-91m10 89 5-105m-15 60-17-18m27 8 21-19m-21-3-17-20m21 9 17-17M80-6v-85m-10 88-5-105m15 56 17-18m-27 8-20-19"/></g>`+house(0,9,i.roof,1);
    if(i.kind==='mountain') scenery=`<path d="M-113-10l48-107 39 41 23-49 57 112z" fill="#96a999" stroke="#7b9688"/><path d="M-65-117l-11 44 14-9 13 14 11-18m41-39-12 47 15-8 15 17" fill="#c8d2bf"/><path d="M-55-61l-17 42m67-49 28 47" stroke="#6f8e80" fill="none"/>`+tree(85,0,.75)+house(16,15,i.roof,.8);
    if(i.kind==='school') scenery=tree(-90,-10,.85)+house(-30,7,i.roof,.85)+house(50,12,i.roof,1)+`<path d="M-70 25h130" stroke="#a59770" stroke-width="6"/><rect x="28" y="-25" width="42" height="15" rx="2" fill="#ebe2c7"/><text x="49" y="-14" text-anchor="middle" fill="#62664f" font-size="10">詩書院</text>`;
    if(i.kind==='moon') scenery=`<circle cx="52" cy="-89" r="31" fill="#f6edc9" opacity=".95"/><path d="M-99 8q7-49 25-68m-8 54q3-62 12-77m-12 33q-24 0-20 22m26-34q26-7 29 14" fill="none" stroke="#7c9478" stroke-width="4"/>`+house(10,10,i.roof,1)+`<ellipse cx="69" cy="21" rx="30" ry="9" fill="#a4c1b8"/><path d="M51 21h31" stroke="#e7e7cc"/>`;
    return `<g class="poetry-island" data-island="${i.grade}" role="button" tabindex="0" aria-label="選擇${i.grade}年級${i.name}，${i.hint}" transform="translate(${i.x} ${i.y})"><ellipse class="island-halo" cy="38" rx="147" ry="76"/><ellipse cy="35" rx="136" ry="57" fill="#759f9826"/><path d="M-120 9Q-137-27-90-40q25-30 67-21 32-19 73 1 43-3 64 26 43 22 9 55Q81 61 23 54q-65 12-115-7-37-9-28-38" fill="${i.land}" stroke="#f1e6c1" stroke-width="9"/><path d="M-109 25Q-49 58 10 47t104-20" fill="none" stroke="#9baf8a" stroke-width="3"/>${scenery}<path d="M-17 47v48h36V47" fill="#ac9572" stroke="#796f54" stroke-width="2"/><path d="M-17 58h36m-36 12h36m-36 12h36" stroke="#756e56"/><rect x="-55" y="-2" width="110" height="31" rx="4" fill="#f6ecd1" stroke="#978968"/><text class="island-name" y="20" text-anchor="middle">${i.name}</text><text class="island-grade" y="124" text-anchor="middle">${i.grade} 年級 · ${CATALOG.filter(x=>x.grade===i.grade).length} 篇詩文</text><text class="arrival-mark" y="-139" text-anchor="middle">已靠岸</text></g>`;
  }
  el('destinations').innerHTML=islands.map(i=>`<button class="destination" data-destination="${i.grade}" aria-pressed="false"><small>${i.grade} 年級</small><strong>${i.name}</strong><span>${i.hint}</span></button>`).join('');
  el('sea-map').innerHTML=`<svg id="archipelago" viewBox="0 0 1400 690" role="group" aria-labelledby="map-title" aria-describedby="map-description"><title id="map-title">古詩群島航海圖</title><desc id="map-description">啟程碼頭與五座詩詞小島，選目的地後，使用海圖下方的左右船槳前進。</desc><defs><linearGradient id="sea-color" x2="0" y2="1"><stop stop-color="#b7d4cc"/><stop offset="1" stop-color="#8fbab5"/></linearGradient><pattern id="sea-ripples" width="110" height="52" patternUnits="userSpaceOnUse"><path d="M8 22q12-6 24 0t24 0m23 18q9-5 18 0" fill="none" stroke="#e8f0d5" stroke-width="1.2" opacity=".45"/></pattern><filter id="paper-grain"><feTurbulence type="fractalNoise" baseFrequency=".4" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".045"/></feComponentTransfer><feBlend in="SourceGraphic" mode="multiply"/></filter></defs><rect width="1400" height="690" fill="url(#sea-color)"/><rect width="1400" height="690" fill="url(#sea-ripples)"/><g opacity=".21" fill="#eef1d8"><path d="M10 107q40-37 84-7 46-45 105-6 37-9 62 14z"/><path d="M590 77q47-29 76-4 32-37 77-8 40-10 57 18z"/><path d="M980 626q48-34 83-7 40-29 86 2 53-7 75 17H977z"/></g><g stroke="#567b73" stroke-width="2" fill="none" opacity=".6"><path d="M615 185q10-13 22 0 9-12 19 0m-10-20q7-8 14 0 6-7 12 0M1084 318q10-13 22 0 9-12 19 0"/></g><g opacity=".45" fill="#738e76"><path d="M0 14l50-26L108 8l51-19 97 17v10zM1210 0l66 30 56-19 68 20V0z"/></g><path d="M0 503q54-49 110-22l-12 42q-33 19-31 52l29 35Q53 648 0 638Z" fill="#d7d6b3" stroke="#eae2bd" stroke-width="7"/><g transform="translate(17 547)"><path d="M0-17h91v33H0" fill="#ad9877" stroke="#7e7457" stroke-width="2"/><path d="M12-17v33m15-33v33m15-33v33m15-33v33m15-33v33" stroke="#887b5e"/><path d="M0-19v-11m88 11v-11" stroke="#746b50" stroke-width="5"/><text x="20" y="58" fill="#4c665a" font-size="17" font-family="serif">啟程碼頭</text></g><path id="sailing-route" fill="none" stroke="#f7eed1" stroke-width="3" stroke-dasharray="7 10" opacity=".85"/>${islands.map(islandArt).join('')}<g id="little-boat" transform="translate(100 555)" aria-hidden="true"><ellipse cy="12" rx="40" ry="16" fill="#4d86844a"/><path d="M-42-5q5-17 31-18 37-1 54 18Q27 18-9 19-34 17-42-5" fill="#997652" stroke="#665a43" stroke-width="2.5"/><path d="M-30-5q5-10 21-11 25-2 38 11Q19 8-8 11-25 9-30-5" fill="#c7ad7a" stroke="#806a48"/><path d="M-16-17v31m12-31v31m12-29v27" stroke="#ad9263"/><g id="boat-oars" stroke="#755d43" stroke-width="4" stroke-linecap="round"><path d="M-6-1l17-37m-4 7 8-14M-6 1l17 37m-4-7 8 14"/></g><path d="M-17-8q6-6 14 0l3 15h-18z" fill="#526c67"/><circle cx="-10" cy="-10" r="7" fill="#c4a476"/><path d="M-22-13l12-9 13 9z" fill="#dfcb96" stroke="#89794f"/><path d="M-11 2h17" stroke="#d1b88f" stroke-width="4"/></g><text x="1280" y="649" font-size="15" font-family="serif" letter-spacing="5" fill="#52776e">一葉扁舟 · 詩海漫遊</text></svg>`;

  function endpoint(i){return {x:i.x,y:i.y+111};}
  function trackBoat(){
    const wrap=el('sea-window');
    if(wrap.scrollWidth>wrap.clientWidth){const width=el('archipelago').getBoundingClientRect().width;wrap.scrollTo({left:position.x/1400*width-wrap.clientWidth/2,behavior:'auto'});}
  }
  function showBoat(angle=0){el('little-boat').setAttribute('transform',`translate(${position.x} ${position.y}) rotate(${angle})`);}
  function sailTo(target,callback=null){
    const island=islands.find(i=>i.grade===Number(target));
    if(!island)return;
    if(landed===island.grade&&!destination){if(callback)callback();else el('disembark').click();return;}
    begin(island,callback);
  }
  let origin={...home},finish={...home},control={...home};
  function begin(target,callback){
    trip++;moving=false;destination=target;pending=callback;landed=null;strokes=0;
    origin={...position};finish=target?endpoint(target):{...home};
    control={x:(origin.x+finish.x)/2,y:Math.min(620,Math.max(origin.y,finish.y)+90)};
    el('sailing-route').setAttribute('d',`M${origin.x} ${origin.y}Q${control.x} ${control.y} ${finish.x} ${finish.y}`);
    el('journey-label').textContent=target?`前往 ${target.name} · ${target.grade} 年級`:'返回啟程碼頭';
    el('journey-status').textContent='小船準備好了，按左右船槳出發吧。';
    el('journey-progress').value=0;
    el('row-left').disabled=false;el('row-right').disabled=false;el('sail-home').disabled=true;el('disembark').hidden=true;
    document.querySelectorAll('[data-destination]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.destination)===target?.grade));
    document.querySelectorAll('[data-island]').forEach(g=>g.classList.toggle('chosen',Number(g.dataset.island)===target?.grade));
    document.querySelectorAll('[data-island]').forEach(g=>g.classList.remove('landed'));
    el('collection-title').textContent=target?`先划船前往${target.name}，靠岸後讀詩`:'小船正返回碼頭';
    window.dispatchEvent(new CustomEvent('island-departure'));
    el('voyage').scrollIntoView({behavior:reduceMotion.matches?'instant':'smooth',block:'start'});
    trackBoat();
  }
  function point(t){return {x:(1-t)*(1-t)*origin.x+2*(1-t)*t*control.x+t*t*finish.x,y:(1-t)*(1-t)*origin.y+2*(1-t)*t*control.y+t*t*finish.y};}
  function row(side){
    if(moving||el('row-left').disabled)return;
    moving=true;const my=trip;const from=strokes/10;const to=++strokes/10;
    const duration=reduceMotion.matches?0:360;
    let start;
    el('little-boat').classList.remove('stroke-left','stroke-right');
    if(!reduceMotion.matches)el('little-boat').classList.add('stroke-'+side);
    const animate=now=>{
      if(my!==trip)return;
      if(start===undefined)start=now;
      const t=duration?Math.min(1,(now-start)/duration):1;
      const progress=from+(to-from)*(1-(1-t)**3);
      position=point(progress);
      const look=point(Math.min(1,progress+.01));
      const angle=Math.atan2(look.y-position.y,look.x-position.x)*180/Math.PI;
      showBoat(Number.isFinite(angle)?angle:0);trackBoat();
      if(t<1){requestAnimationFrame(animate);return;}
      moving=false;el('little-boat').classList.remove('stroke-left','stroke-right');
      el('journey-progress').value=strokes;
      if(strokes===10){arrive();return;}
      el('journey-status').textContent=`已划 ${strokes} 槳，還有 ${10-strokes} 槳靠岸。${strokes===5?'已經能看見島上的屋簷了！':''}`;
    };requestAnimationFrame(animate);
  }
  function arrive(){
    el('row-left').disabled=true;el('row-right').disabled=true;
    el('sailing-route').setAttribute('d','');
    if(!destination){landed=null;el('journey-label').textContent='你在啟程碼頭';el('journey-status').textContent='回到碼頭了，選另一座島，再出發吧。';document.querySelectorAll('[data-destination]').forEach(b=>b.setAttribute('aria-pressed','false'));window.dispatchEvent(new CustomEvent('island-home'));return;}
    const island=destination;landed=island.grade;destination=null;
    document.querySelector(`[data-island="${landed}"]`).classList.add('landed');
    el('journey-label').textContent=`已靠岸 · ${island.name}`;
    el('journey-status').textContent=`歡迎來到${island.name}！詩人們正在島上等你。`;
    el('collection-title').textContent=`${island.name} · ${island.grade}年級詩箋`;
    el('disembark').hidden=false;el('sail-home').disabled=false;
    window.dispatchEvent(new CustomEvent('island-arrival',{detail:{grade:landed}}));
    const callback=pending;pending=null;
    if(callback)callback();else el('disembark').focus({preventScroll:true});
  }
  document.querySelectorAll('[data-destination]').forEach(b=>b.onclick=()=>sailTo(Number(b.dataset.destination)));
  document.querySelectorAll('[data-island]').forEach(g=>{g.addEventListener('click',()=>sailTo(Number(g.dataset.island)));g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();sailTo(Number(g.dataset.island));}});});
  el('row-left').onclick=()=>row('left');el('row-right').onclick=()=>row('right');
  el('sail-home').onclick=()=>begin(null,null);
  el('disembark').onclick=()=>{if(window.IslandScene?.ready){IslandScene.explore();return;}el('works').scrollIntoView({behavior:reduceMotion.matches?'instant':'smooth'});el('collection-title').setAttribute('tabindex','-1');el('collection-title').focus({preventScroll:true});};
  document.addEventListener('keydown',e=>{if(el('viewer').open||el('encounter')?.open||e.target.closest('input,textarea,select')||e.repeat)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){if(el('row-left').disabled)return;e.preventDefault();row(e.key==='ArrowLeft'?'left':'right');}});
  window.Voyage={sailTo,isLanded:grade=>landed===Number(grade)&&destination===null,getState:()=>({landed,target:destination?.grade??null,strokes,moving,position:{...position}})};
})();
