function runner(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
runner()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let pt=document.querySelector(".part-text")
gsap.from(".part-text",{
  y:100,
  opacity:0
})
gsap.to(".part-text",{
  y:0,
  opacity:1

})

Shery.mouseFollower({

  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  // duration: 1,
  color:"black"
});
Shery.makeMagnet(".magnet")
Shery.makeMagnet(".nav img")
Shery.makeMagnet("body>video")
Shery.hoverWithMediaCircle(".part-text h1",{videos:["./cover.mp4"]})
let index=0
let elem=document.querySelectorAll(".elem")
let elem1=document.querySelectorAll(".elem1")
let elem2=document.querySelectorAll(".elem2")












let img=document.querySelector(".feature-right img")
elem.forEach(function(elem){
  elem.addEventListener("click",function(){
    
  img.src="https://cdn.cuberto.com/cb/projects/puntopago/cover@2x.jpg"
    gsap.to(elem,{
      y:"-100%"
    })
    gsap.to("#elem2",{
      y:"-100%",
    
    })
 
  
  })

})

