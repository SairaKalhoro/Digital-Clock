function clock (){
var a = new Date();


document.getElementById("time").innerHTML= a.toLocaleTimeString()
document.getElementById("date").innerHTML= a.toDateString()
}
clock();

setInterval(clock,1000);
