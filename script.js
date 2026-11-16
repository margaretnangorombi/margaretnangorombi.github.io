const menuButton=document.querySelector(".menu-btn");
const navLinks=document.querySelector("#nav-links");
if(menuButton&&navLinks){
 menuButton.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(open));
  menuButton.setAttribute("aria-label",open?"Close navigation":"Open navigation");
  menuButton.textContent=open?"×":"☰";
 });
 navLinks.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
  menuButton.setAttribute("aria-label","Open navigation");
  menuButton.textContent="☰";
 }));
}
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
 const selected=button.dataset.filter;
 document.querySelectorAll(".filter").forEach(item=>{
  const active=item===button;
  item.classList.toggle("active",active);
  item.setAttribute("aria-pressed",String(active));
 });
 document.querySelectorAll(".project-card").forEach(card=>{
  card.hidden=selected!=="all"&&card.dataset.category!==selected;
 });
}));
const year=document.querySelector("[data-year]");
if(year)year.textContent=new Date().getFullYear();
const revealItems=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
 }),{threshold:.12});
 revealItems.forEach(item=>observer.observe(item));
}else revealItems.forEach(item=>item.classList.add("visible"));
