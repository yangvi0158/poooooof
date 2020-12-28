$(".SP1").hide();
$(".SP2").hide();
$(".SP3").hide();
$(".SP4").hide();
$(".SP5").hide();


var percent=0;
var time=setInterval(function(){
  percent+=1
	
  if(percent>150){
    $(".SP5").show()
  }
  if(percent>200){
    $(".SP4").show()
  }
  if(percent>250){
    $(".SP3").show()
  }
  if(percent>300){
    $(".SP2").show()
  }
  if(percent>350){
    $(".SP1").show()
  }
},0)



