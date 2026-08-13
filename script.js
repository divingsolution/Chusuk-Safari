
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("open");
}
document.querySelectorAll(".nav-links a").forEach(a=>{
  a.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("open"));
});
async function copyAccountNumber(btn){
  const account="3333-08-0806797";
  const original=btn.textContent.trim();
  try{
    await navigator.clipboard.writeText(account);
    btn.textContent="복사 완료";
    setTimeout(()=>btn.textContent=original,1600);
  }catch(e){
    window.prompt("계좌번호를 복사해 주세요.",account);
  }
}
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
