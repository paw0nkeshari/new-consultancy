
(()=>{
 const guide=document.getElementById('easeGuide'), launcher=document.getElementById('easeGuideLauncher');
 if(!guide||!launcher)return;
 const msg=document.getElementById('easeGuideMessage'), start=document.getElementById('easeGuideStart'), skip=document.getElementById('easeGuideSkip'), min=document.getElementById('easeGuideMin'), progress=document.getElementById('easeGuideProgress');
 const pages=[
  {url:'index.html',name:'Home',say:'Welcome to Ease Consultancy! This is your starting point. Discover what we do and jump into the right service.'},
  {url:'services.html',name:'Services',say:'Explore our 15 service categories, from accounting and GST to audits, company support and business advisory.'},
  {url:'tools.html',name:'Free tools',say:'Try practical calculators for EMI, GST, profit margin and indicative loan eligibility. Estimates are illustrative.'},
  {url:'resources.html',name:'Resources',say:'Browse useful checklists and downloadable resources to prepare for common business and compliance tasks.'},
  {url:'blog.html',name:'Knowledge centre',say:'Read practical explainers about finance, compliance and business topics in simple language.'},
  {url:'about.html',name:'About us',say:'Learn about the consultancy approach: understand the requirement first, explain the scope and agree the next steps.'},
  {url:'process.html',name:'Our process',say:'See how an enquiry moves from the first conversation to requirement review and scope confirmation.'},
  {url:'faq.html',name:'FAQs',say:'Find quick answers about service scope, documents, timelines and consultations.'},
  {url:'contact.html',name:'Contact',say:'Send an enquiry or request a consultation. Verify your official business contact details before publishing.'},
  {url:'portal.html',name:'Client portal',say:'This page previews a future client workspace. Secure login, document storage and live tracking require a backend.'}
 ];
 const nested=location.pathname.includes('/services/');
 const prefix=nested?'../':'';
 const current=location.pathname.split('/').pop()||'index.html';
 const pageNo=Math.max(0,pages.findIndex(p=>p.url===current));
 let active=false, index=0, stops=[];
 const key='easeGuideTourActive';
 function show(){guide.hidden=false;launcher.classList.remove('show')}
 function hide(){guide.hidden=true;launcher.classList.add('show')}
 function text(t){msg.textContent=t}
 function getStops(){const main=document.querySelector('main');return main?[...main.querySelectorAll('section')]:[]}
 function reset(){start.disabled=false;start.textContent='Start website tour';start.onclick=begin;skip.textContent='Not now'}
 function begin(){active=true;sessionStorage.setItem(key,'1');stops=getStops();index=0;show();start.textContent='Next stop';skip.textContent='End tour';text(pages[pageNo]?.say||'Let me show you around this page.');progress.textContent=`Page ${pageNo+1} of ${pages.length}`;next()}
 function next(){
   if(!active)return begin();
   if(index<stops.length){const el=stops[index++];el.scrollIntoView({behavior:'smooth',block:'center'});const h=el.querySelector('h1,h2,h3');text(h?`Let's explore “${h.textContent.trim()}”. Take a look, then press Next stop.`:'Explore this section, then press Next stop.');progress.textContent=`Section ${index} of ${stops.length}`;return}
   const upcoming=pages[pageNo+1];
   if(upcoming){text(`Nice! Next, I'll take you to ${upcoming.name}.`);start.textContent=`Visit ${upcoming.name}`;start.onclick=()=>{sessionStorage.setItem(key,'1');location.href=prefix+upcoming.url};progress.textContent=`Next page: ${upcoming.name}`;return}
   active=false;sessionStorage.removeItem(key);text('That completes our website tour! You can revisit any page or contact the team whenever you are ready.');start.textContent='Tour completed';start.disabled=true;skip.textContent='Close';progress.textContent='All done ✨';
 }
 start.onclick=begin;
 skip.onclick=()=>{active=false;sessionStorage.removeItem(key);text('No problem! Tap my icon whenever you want a guided tour.');reset();hide()};
 min.onclick=hide;
 launcher.onclick=()=>{show();if(active){start.textContent='Next stop';start.onclick=next}else reset()};
 document.getElementById('easeGuideAvatar').addEventListener('click',()=>text('Ready to explore? Press Start website tour and I will guide you through the key sections and pages.'));
 if(sessionStorage.getItem(key)==='1'){
   active=true;stops=getStops();index=0;show();start.textContent='Next stop';start.onclick=next;skip.textContent='End tour';progress.textContent=`Page ${pageNo+1} of ${pages.length}`;text(pages[pageNo]?.say||'Welcome to this page. Let’s explore it together.');
   if(stops.length){setTimeout(()=>{stops[0].scrollIntoView({behavior:'smooth',block:'center'});index=1;},600)}
   skip.onclick=()=>{active=false;sessionStorage.removeItem(key);text('Tour paused. Tap me whenever you want to explore again.');reset();hide()};
 }else{
   setTimeout(()=>{if(!sessionStorage.getItem('easeGuideDismissed'))show()},900);
   skip.onclick=()=>{sessionStorage.setItem('easeGuideDismissed','1');hide()};
 }
})();
