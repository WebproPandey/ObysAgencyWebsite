function locomotive() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive()
function laoder() {
  var numberDisplay = document.querySelector(".per1");
  let counter = 0;
  var intervalId = setInterval(() => {
    numberDisplay.textContent = counter;
    counter++;
    if (counter > 100) {
      clearInterval(intervalId);
    }
  }, 20);

  var tl = gsap.timeline()
  tl.from(".heading1,.heading2,.heading3",
    {
      y: 100,
      stagger: .6,
      duration: 0.9
    })
    .to(".min",
      {
        opacity: 1,
      })
  tl.to(".heading1,.heading2,.heading3 ,.min ,.per",
    {
      opacity: 0,
      stagger: .3,
      duration: 0.7,
      delay: 1,
    })
    .to(".loader",
      {
        y: -100,
        height: '0vh',
        duration: 2,
        ease: "power3.inOut",
      })
  tl.from(".text  .element",
    {
      y: 110,
      stagger: .1,
      duration: .7
    })

    .to(".navbar",
      {
        opacity: 1,
      }, ".4")
    .to(".line",
      {
        opacity: 1
      })
}
laoder()
function imageslide() {
  var texthover = document.querySelectorAll("#texthover")
  texthover.forEach(function (det) {
    det.addEventListener("mousemove", function (e) {
      gsap.to(".imgslide", {
        x: e.x - 1000,
        y: e.y - 450,
        opacity: 1,
      })
    })
    var text = document.querySelector(".texts")
    text.addEventListener("mouseenter", function (e) {
      gsap.to(".imgslide", {
        opacity: 0,
        duration:1,
      })
    })
  })
}
imageslide()

function navbareffect()
{
     gsap.to(".navbar #menu1",
     {
      opacity:0,
      scrollTrigger:
      {
        trigger:"#text2",
        scroller:".container",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
      }
     })
}

navbareffect()



function mainnnav()
{
  
 var flag = 0;
 var menusvg =  document.querySelector("#menusvg")
 menusvg.addEventListener("click",function()
 {
 if(flag == 0)
 {

    var tl = gsap.timeline()

    gsap.to(".mainmenu",
    {
      y:"100%",
      duration:1,
      ease:"Expos.inOut",
    })
    gsap.to("#menu1",
    {
      opacity:0,
    })


    flag = 1
  }
else
{
 
     gsap.to(".mainmenu",
     {
       y:"-100%",
       ease:"Expos.inOut",
       duration:2,
     })
     gsap.to("#menu1",
     {
       opacity:1,
     })
 
     flag = 0
    }

  })

}
mainnnav()
function palyandpaused() {

  var video = document.querySelector(".videobox")
  video.addEventListener("mousemove", function (det) {
    gsap.to(".cursur",
      {
        x: det.x - 1380,
        y: det.y - 120,
 
      })
   
   
  })

  var video = document.querySelector(".videobox video")
  var cursur = document.querySelector(".cursur")
  var flag = 0
  cursur.addEventListener("click",function(){
   if(flag == 0)
   {
    gsap.to("#image2",
    {
      opacity:0,
    })
    gsap.to(".cursur",
    {
    scale:0.8,

    })
    video.play()
    cursur.innerHTML = `<i class="ri-pause-line text-[5vw] text-white"></i>`
    flag = 1;
   }  
  else {
    gsap.to("#image2",
    {
      opacity:1,
    })
    gsap.to(".cursur",
    {
    scale:1,
    })
    video.pause()
    cursur.innerHTML = `<i id="redbtn" class="ri-play-fill text-[5vw] text-white"></i>`

    flag = 0
  }
  })

}

palyandpaused()

function texteffect() {
var h1 = document.querySelectorAll(".let")
h1.forEach(function (val) {
  var split = val.textContent.split("")
  cluttter = ""
  split.forEach(function (data) {
    cluttter += `<span class="inline-block">${data}</span>`
  })
  val.innerHTML = cluttter

})

var textbox = document.querySelector(".textbox")
textbox.addEventListener("mouseenter", function () {


   gsap.to("#silk span",
  {
    opacity: 1,
    stagger: {
      amount:0.9,
    },
    duration: .5,
    ease: "power4",
  })
  gsap.to("#plain span",
    {
      opacity: 0,
      stagger: {
        amount:0.9,
      },
      duration: .5,
      ease: "power4",
    })
    gsap.to(".svgcircle6",
    {
      x:20,
      ease:"power4"
    })


})
textbox.addEventListener("mouseleave", function () {
  gsap.to("#plain span",
    {
      opacity: 1,
      stagger: {
        amount:0.9,
      },
       duration: .5,
      ease: "power4",
    })
  gsap.to("#silk span",
    {
      opacity: 0,
      stagger: {
        amount:0.9,
      },
      duration: .5,
      ease: "power4",
    })
    gsap.to(".svgcircle6",
    {
      x:-20,
      ease:"power4"
    })
  


})

}
texteffect() 

Shery.mouseFollower();

Shery.makeMagnet(".menu-opener__square ,.menu1 a",{
  // skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  scale:.7,

})

Shery.imageEffect(".sheryeffect",
  {
    style: 5,
    config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -0.05, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333447272918 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 9.55, "range": [1, 15] }, "durationOut": { "value": 2.72, "range": [0.1, 5] }, "durationIn": { "value": 2.38, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 1.37, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 5 } }, "discard_threshold": { "value": 0.91, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.41, "range": [0, 2] }, "noise_scale": { "value": 22.9, "range": [0, 100] } },
    gooey: true,
  })


