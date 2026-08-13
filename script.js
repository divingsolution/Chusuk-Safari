
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
