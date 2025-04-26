let date=document.querySelector("#date");
let navtoggle=document.querySelector(".links-icon");
let navlinks=document.querySelector(".links-container2");
const scrollLinks = document.querySelectorAll('.links-container2 .scroll-link');
let nav=document.querySelector(".nav");
let banner=document.querySelector(".banner");
let links=document.querySelectorAll(".links a");
let top_btn=document.querySelector(".top-link");
let scroll_links=document.querySelectorAll(".scroll-link");


date.innerHTML=new Date().getFullYear();

navtoggle.addEventListener("click",()=>{
    navlinks.classList.toggle("show1");
})

scrollLinks.forEach(link => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('show1');
    });
});

window.addEventListener("scroll",()=>{
    const scrollheight=window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollheight > navHeight){
        nav.classList.add("fixed-nav");
        links.forEach(link=>{
            link.classList.add("black");
        })
        document.body.style.paddingTop = `${navHeight}px`; 
    }
    else{
        nav.classList.remove("fixed-nav");
        links.forEach(link=>{
            link.classList.remove("black");
        })
        document.body.style.paddingTop = `0`;
    }
    if(scrollheight > 500){
        top_btn.classList.add("show2");
    }
    else{
        top_btn.classList.remove("show2");
    }
})

scroll_links.forEach(link1=>{
    link1.addEventListener("click",(e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element=document.getElementById(id);
        const navHeight = nav.getBoundingClientRect().height;
        let position = element.offsetTop-72;
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
        })
    })
})