const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector("#nav-links");
if(toggle&&nav){
  toggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
  });
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded","false");
    toggle.setAttribute("aria-label","Open navigation");
  }));
}
document.querySelectorAll(".filter").forEach(button=>{
  button.addEventListener("click",()=>{
    const filter=button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item=>{
      const active=item===button;
      item.classList.toggle("active",active);
      item.setAttribute("aria-pressed",String(active));
    });
    document.querySelectorAll(".project").forEach(card=>{
      card.hidden=filter!=="all"&&card.dataset.category!==filter;
    });
  });
});
const year=document.querySelector("#year");
if(year)year.textContent=new Date().getFullYear();
