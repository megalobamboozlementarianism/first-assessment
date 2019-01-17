// build a function that returns the amount of time until your next birthday
// This number should be updated in the dom every second and displayed
// in a timer block on the right side of the screen


function bDayTimer(){
  let bday = new Date("October 18, 2019");
  let now = Date.now();
  let wait = (bday - now) / 1000;
  return Math.floor(wait);
}

setInterval(function(){document.getElementById('timer').innerHTML = bDayTimer();}, 1000);
console.log(bDayTimer());
