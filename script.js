
const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');
if(menu)menu.addEventListener('click',()=>links.classList.toggle('show'));
if(links)links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('show')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.faq button').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{const s=document.querySelector('#service');if(s)s.value=a.dataset.service}));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
