var timeline=gsap.timeline();
timeline.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})
timeline.from("#line1-data,.line h2",{
opacity:0,
onStart:function(){
    var h5timer=document.querySelector("#line1-data h5")
var grow=0;
setInterval(function(){
    if(grow<100){
        grow++;
        h5timer.innerHTML=grow;
    }
    else{
        h5timer.innerHTML=grow;
    }
},33);    
},
});
timeline.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4
})
timeline.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:1,
    duration:0.5
})
