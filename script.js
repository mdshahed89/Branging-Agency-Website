let cursor = document.querySelector(".cursor");
let cursorOuter = document.querySelector(".cursor-outer")
let home = document.querySelector(".home");
let hoverContent = Array.from(document.querySelectorAll("#lists"));
window.addEventListener("mousemove", function (details) {

    const x = details.clientX;
    const y = details.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    cursorOuter.animate({
        left: `${x}px`,
        top: `${y}px`
    }, { duration: 1000, fill: "forwards" })

});

for (let element of hoverContent) {
    element.addEventListener("mouseover", () => {
        cursorOuter.classList.add("grow");
    });

    element.addEventListener("mouseout", () => {
        cursorOuter.classList.remove("grow");
    });
}

let items = document.querySelectorAll(".item");
console.log(items);
for(let it of items)
{
    it.addEventListener("click", function(){
        let preActive = document.querySelector(".active");
        preActive.classList.remove("active");
        it.classList.add("active");
    })
}


let sections = document.querySelectorAll("section");

window.onscroll = () => {
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            items.forEach(item => {
                item.classList.remove("active");
                document.querySelector(".header .nav a[href*="+id+"]").classList.add("active");
            })
        }
    })
}

let body =document.body;
let lastScroll=0;
let header=document.querySelector(".header");

window.addEventListener("scroll", function(){
    let currentScroll=window.scrollY;
    if(currentScroll<=0)
    {
        header.classList.remove("scroll-up");
    }
    if(currentScroll>lastScroll)
    {
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
    }
    if(lastScroll>currentScroll)
    {
        header.classList.remove("scroll-down");
        header.classList.add("scroll-up");
    }

    lastScroll=currentScroll;
})