var t1 = gsap.timeline();

t1.from('.navitems',{
  stagger:.3,
  duration: 1,
  delay:7,
  y: 20,
  ease:'Expo.easeInOut',
  opacity:0
});
t1.from('#smline',{
 width:0,
  duration: 1,
  ease:'Expo.easeInOut'
},'-=2');

t1.from('.letfItems',{
  stagger:.3,
  duration: 1,
  y: 20,
  ease:'Expo.easeInOut',
  opacity:0
},'-=2');

t1.from('#right img',{
  duration: 1,
   scale:1.05,
  ease:'Expo.easeInOut',
  opacity:0
},'-=2');

 