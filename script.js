
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("open");
}

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>{
    document.getElementById("navLinks").classList.remove("open");
  });
});

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:.14});

revealElements.forEach(el=>revealObserver.observe(el));

async function copyAccountNumber(button){
  const accountNumber = "3333-08-0806797";
  const originalText = button.textContent.trim();
  try{
    await navigator.clipboard.writeText(accountNumber);
    button.textContent = "복사 완료";
    setTimeout(()=>button.textContent = originalText, 1600);
  }catch(error){
    window.prompt("계좌번호를 복사해 주세요.", accountNumber);
  }
}
