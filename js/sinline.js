let xs = []
for (var i = 0; i <= 200; i++) {
  xs.push(i)
}

let t = 1
let hh = 89
let tt = 1
 

function animate() {
  
  let points = xs.map(x => {
    
    let y = 90 + hh * Math.sin((x + t) / 38)
    
    return [x, y]
  })
  
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")
  
  document.querySelector("#linemain").setAttribute("d", path)
  
  t += tt
  
  
  requestAnimationFrame(animate)
}

animate()


//高度控制＿按下
$('svg').mousedown(function(){
  
var time=setInterval(function(){
  hh -=1;
  $('svg').mouseup(function(){
    clearInterval(time)
  })
  
  if(hh<30){
    clearInterval(time)
  }
  
},5)})
//速度控制＿按下
$('svg').mousedown(function(){
  
var time=setInterval(function(){
  tt +=1;
  $('svg').mouseup(function(){
    clearInterval(time)
  })
  
  if(tt>15){
    clearInterval(time)
  }
  
},5)})


//高度控制＿放開
$('svg').mouseup(function(){
var timee=setInterval(function(){
  hh +=1;
  
  if(hh>88){
    clearInterval(timee)
  }
},5)})
//速度控制＿放開
$('svg').mouseup(function(){
var timee=setInterval(function(){
  tt -=1;
  
  if(tt<2){
    clearInterval(timee)
  }
},5)})