function setLanguage(lang){
localStorage.setItem('selectedLang',lang);
document.querySelectorAll('.lang-btn').forEach(btn=>{btn.classList.remove('active');if(btn.innerText.toLowerCase().includes(lang.toLowerCase()))btn.classList.add('active')});
document.querySelectorAll('[data-pt][data-en]').forEach(el=>{const text=lang==='en'?el.getAttribute('data-en'):el.getAttribute('data-pt');if(el.classList.contains('typing-text')){el.innerHTML='';typeWriterEffect(el,text)}else{el.innerText=text}})}

function typeWriterEffect(element,text){let i=0;function type(){if(i<text.length){element.innerHTML+=text.charAt(i);i++;setTimeout(type,15)}}type()}

document.addEventListener('DOMContentLoaded',()=>{const savedLang=localStorage.getItem('selectedLang')||'pt';setTimeout(()=>{setLanguage(savedLang)},600);const navLinks=document.querySelectorAll('.terminal-nav a');navLinks.forEach(link=>{link.addEventListener('click',function(){const href=this.getAttribute('href');if(href&&href.includes('.html')){}})})})