var count = new Date("September 30, 2020 20:00:00").getTime();

   var set = setInterval(function() {
  var now = new Date().getTime();
  var time = count - now;

var days = math.floor(time/(1000*60*60*24));

var hours = math.floor((time%(1000*60*60*24))/(1000*60*60));

var minutes = math.floor((time%(100*60*60))/(1000*60));

var seconds = math.floor((time%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
}, 1000) ;