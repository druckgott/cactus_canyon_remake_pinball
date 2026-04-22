import React,{useMemo,useState} from 'react';
const nodes=[
{id:'root',x:520,y:80,c:'root',title:'🌵 Cactus Canyon Rules',desc:'Mindmap overview of game progression.'},
{id:'skill',x:180,y:220,c:'core',title:'🚀 Skill Shot',desc:'Awards at plunge. Can light Quick Draw, Bounty, Lock, EB and more.'},
{id:'bonus',x:180,y:380,c:'core',title:'⭐ Bonus X',desc:'Both Cactus Lanes +1 Bonus X.'},
{id:'modes',x:520,y:220,c:'mode',title:'🎯 Modes',desc:'Main timed modes and rescues.'},
{id:'train',x:520,y:360,c:'mode',title:'🚂 Polly Train',desc:'Train Ramp x3 then Train/Bank/River shots.'},
{id:'river',x:380,y:500,c:'mode',title:'🌊 Polly River',desc:'River Ramp x3 then Whitewater shot.'},
{id:'bank',x:660,y:500,c:'mode',title:'🏦 Polly Bank',desc:'Bank Ramp x3 then flashing robber.'},
{id:'combat',x:880,y:220,c:'combat',title:'🔫 Combat',desc:'Quick Draw / Gun Fight / Shootout.'},
{id:'quick',x:840,y:380,c:'combat',title:'⚡ Quick Draw',desc:'Defeat 4 bad guys to qualify Showdown.'},
{id:'gun',x:1020,y:380,c:'combat',title:'🔫 Gun Fight',desc:'Starts from lit inlane. Rank up on win.'},
{id:'award',x:180,y:560,c:'award',title:'🏆 Awards',desc:'Bounty, Extra Ball, Locks.'},
{id:'high',x:880,y:560,c:'wizard',title:'⭐ High Noon',desc:'Complete 5 stars wizard path.'},
{id:'stars',x:880,y:720,c:'wizard',title:'⭐ Stars 1-5',desc:'Bionic Bart / Showdown / Mine / Stampede / Combos.'}
];
const edges=[['root','skill'],['root','bonus'],['root','modes'],['root','combat'],['root','award'],['root','high'],['modes','train'],['modes','river'],['modes','bank'],['combat','quick'],['combat','gun'],['quick','high'],['award','high'],['high','stars'],['skill','quick'],['skill','award']];
const colors={root:'bg-yellow-700',core:'bg-lime-700',mode:'bg-orange-700',combat:'bg-red-700',award:'bg-blue-700',wizard:'bg-purple-700'};
function Node({n,onClick}){return <button onClick={()=>onClick(n)} className={`absolute rounded-2xl px-3 py-2 text-xs md:text-sm shadow-xl border border-yellow-200/30 ${colors[n.c]} text-white w-32 md:w-40`} style={{left:n.x,top:n.y}}>{n.title}</button>}
export default function App(){const [sel,setSel]=useState(nodes[0]); const [q,setQ]=useState(''); const filtered=useMemo(()=>nodes.filter(n=>n.title.toLowerCase().includes(q.toLowerCase())||n.desc.toLowerCase().includes(q.toLowerCase())),[q]); return <div className='min-h-screen bg-gradient-to-b from-amber-950 via-yellow-950 to-stone-900 text-white p-2 md:p-4 overflow-hidden'>
<div className='text-2xl md:text-4xl font-bold mb-2'>🤠 Western Mindmap</div>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder='Suchen...' className='w-full p-2 rounded text-black mb-3'/>
<div className='grid md:grid-cols-4 gap-3'>
<div className='md:col-span-3 overflow-auto rounded-2xl border border-yellow-700 bg-black/30 h-[70vh] relative'>
<div className='relative' style={{width:1200,height:860}}>
<svg className='absolute inset-0 w-full h-full'>
{edges.map((e,i)=>{const a=nodes.find(n=>n.id===e[0]); const b=nodes.find(n=>n.id===e[1]); if(!filtered.find(n=>n.id===a.id)||!filtered.find(n=>n.id===b.id)) return null; return <line key={i} x1={a.x+70} y1={a.y+25} x2={b.x+70} y2={b.y+25} stroke='#facc15' strokeWidth='2'/>})}
</svg>
{filtered.map(n=><Node key={n.id} n={n} onClick={setSel}/>)}
</div>
</div>
<div className='rounded-2xl border border-yellow-700 bg-black/40 p-4 h-fit'>
<div className='text-xl font-bold mb-2'>{sel.title}</div>
<div className='text-sm leading-relaxed'>{sel.desc}</div>
<div className='mt-4 text-xs opacity-70'>Kategorie: {sel.c}</div>
<div className='mt-4 text-xs opacity-70'>Tip: Zoome im Browser / pinch on mobile.</div>
</div>
</div>
</div>}
