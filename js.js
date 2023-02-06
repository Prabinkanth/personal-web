//home page
const content1 = document.querySelector(".home-2")
const section1 = document.querySelector(".heading1")
const section2 = document.querySelector(".heading2")
//About page
const content2 = document.querySelector(".about-me")
const section3 = document.querySelector(".about_img_div")
const section5 = document.querySelector(".about-me-head")
const section4 = document.querySelector(".about_div")

//qualification page
const content3 = document.querySelector(".qualification")
const section6 = document.querySelector(".box-1")
const section7 = document.querySelector(".box-2")
const section8 = document.querySelector(".box-3")

//home page
let hiAnim = gsap.timeline({
    scrollTrigger: {
        trigger: content1,
        markers:  false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play reverse restart reverse "
    } 
});

hiAnim.fromTo(section2,{opacity:"0" ,x:-100}, {duration:.5,opacity:"1" ,x:0,ease: "power2.inOut"})
hiAnim.fromTo(section1,{opacity:"0" ,x:100}, {duration:.5,opacity:"1" ,x:0,ease: "power2.inOut"})

//About page

let hiAnim1 = gsap.timeline({
    scrollTrigger: {
        trigger: content2,
        markers:  false,
        start: "top 90% ",
        end: "bottom 10% ",
        toggleActions: "play reverse restart reverse "
    } 
});
hiAnim1.fromTo(section5,{opacity:"0" ,y:-100}, {duration:.5,opacity:"1" ,y:0,ease: "power2.inOut"})
hiAnim1.fromTo(section3,{opacity:"0" ,y:-100}, {duration:.5,opacity:"1" ,y:0,ease: "power2.inOut"})
hiAnim1.fromTo(section4,{opacity:"0" ,y:-100}, {duration:.5,opacity:"1" ,y:0,ease: "power2.inOut"})


//qualification pag.5
let hiAnim2 = gsap.timeline({
    scrollTrigger: {
        trigger: content3,
        markers:  false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play reverse restart reverse "
    } 
});
hiAnim2.fromTo(section6,{opacity:"0" ,x:-100}, {duration:.5,opacity:"1" ,x:0,ease: "power2.inOut"})
hiAnim2.fromTo(section7,{opacity:"0" ,x:-100}, {duration:.5,opacity:"1" ,x:0,ease: "power2.inOut"})
hiAnim2.fromTo(section8,{opacity:"0" ,x:-100}, {duration:.5,opacity:"1" ,x:0,ease: "power2.inOut"})