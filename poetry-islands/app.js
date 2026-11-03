const $=id=>document.getElementById(id);
let grade='all',selected=null,opener=null;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){
 const query=$('search').value.trim();
 const works=CATALOG.filter(x=>(grade==='all'||x.grade===Number(grade))&&[x.title,x.author,...x.lines].join(' ').includes(query));
 $('summary').textContent=`共 ${CATALOG.length} 篇作品 · 顯示 ${works.length} 篇`;
 $('cards').innerHTML=works.length?works.map(x=>`<article class="card"><span class="grade">${x.grade} 年級 · 詩文小屋</span><h3>${esc(x.title)}</h3><span class="author">${esc(x.author)}</span><p class="hook">${esc(x.hook)}</p><p class="availability">${'臺灣配音 · 慢10%'} / ${x.video?'YouTube 新版影片':'影片連結更新中'}</p><div class="actions"><button data-key="${x.key}" data-mode="web">${Voyage.isLanded(x.grade)?'開啟網頁動畫':'划船去讀詩'}</button><button data-key="${x.key}" data-mode="video">${x.video?(Voyage.isLanded(x.grade)?'觀看影片':'划船去看影片'):'影片素材狀態'}</button></div></article>`).join(''):'<p class="empty">沒有符合的作品，請換個關鍵字。</p>';

}
function showWork(key,mode,source){selected=CATALOG.find(x=>x.key===key);if(!selected)return;opener=source;$('viewtitle').textContent=selected.title;$('viewgrade').textContent=`${selected.grade} 年級 · ${selected.author}`;if(!$('viewer').open)$('viewer').showModal();switchMode(mode)}
function switchMode(mode){
 $('stage').replaceChildren();
 $('webmode').setAttribute('aria-pressed',mode==='web');$('videomode').setAttribute('aria-pressed',mode==='video');
 if(mode==='web'){const frame=document.createElement('iframe');frame.src=selected.web;frame.title=selected.title+'網頁動畫';frame.allow='autoplay; fullscreen';$('stage').append(frame);$('media-status').textContent='臺灣配音 · 慢10% · 句號與分號停頓';}
 else if(selected.youtubeId){
 const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+selected.youtubeId+'?rel=0';frame.title=selected.title+'｜慢10%新版影片';frame.className='story-player';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allow='autoplay; encrypted-media; fullscreen; picture-in-picture';frame.allowFullscreen=true;$('stage').append(frame);
 const tools=document.createElement('div');tools.className='video-tools';const link=document.createElement('a');link.href=selected.video;link.target='_blank';link.rel='noopener noreferrer';link.textContent='在 YouTube 觀看〈'+selected.title+'〉（另開分頁）';tools.append(link);$('stage').append(tools);
 const details=document.createElement('details');details.className='transcript';const summary=document.createElement('summary');summary.textContent='閱讀影片逐字稿';details.append(summary);for(const line of selected.transcript){const p=document.createElement('p');p.textContent=(line.speaker?line.speaker+'：':'')+line.text;details.append(p);}$('stage').append(details);$('media-status').textContent='YouTube · 慢10%新版 · 含畫面字幕';
 }
 else{$('media-status').textContent='正在更新影片連結';$('stage').innerHTML='<div class="missing"><p>這篇影片正在更新，請先使用網頁動畫模式。</p></div>';}

}
function openWork(key,mode,source){const work=CATALOG.find(x=>x.key===key);if(!work)return;if(!Voyage.isLanded(work.grade)){Voyage.sailTo(work.grade,()=>showWork(key,mode,source));return;}showWork(key,mode,source)}
window.addEventListener('island-departure',render);
window.addEventListener('island-arrival',e=>{grade=String(e.detail.grade);document.querySelectorAll('[data-grade]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.grade===grade));render()});
document.addEventListener('click',e=>{const b=e.target.closest('[data-key]');if(b)openWork(b.dataset.key,b.dataset.mode,b)});
document.querySelectorAll('[data-grade]').forEach(b=>b.onclick=()=>{grade=b.dataset.grade;document.querySelectorAll('[data-grade]').forEach(x=>x.setAttribute('aria-pressed',x===b));render()});
$('search').oninput=render;$('webmode').onclick=()=>switchMode('web');$('videomode').onclick=()=>switchMode('video');$('close').onclick=()=>$('viewer').close();$('viewer').addEventListener('close',()=>{$('stage').replaceChildren();opener?.isConnected?opener.focus():$('disembark').focus()});render();

window.addEventListener('message',e=>{if(e.source===$('stage').querySelector('iframe')?.contentWindow&&e.data?.type==='poetry-close')$('viewer').close();});

$('library-open').onclick=()=>{$('library').showModal();$('search').focus();};$('library-close').onclick=()=>$('library').close();document.querySelector('.skip').onclick=e=>{e.preventDefault();$('library').showModal();$('search').focus();};$('cards').addEventListener('click',e=>{if(e.target.closest('button'))$('library').close();},true);
