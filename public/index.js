// build a function that returns the number of seconds until your birthday
// This number should be updated in the dom every second and displayed
// in a timer block on the right side of the screen

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  return age;
}

const bdDate = 'March 18, 2019'
const bdActaul = 'March 18, 1982'
const countDownDate = new Date(bdDate).getTime();

// Update the count down every 1 second
setInterval(() => {
  'use strict';
  // Get todays date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;
  let seconds = Math.floor(distance / 1000);
  let age = getAge(bdActaul)

  // Display the result in the element with id="demo"
  let html = `In ${seconds} seconds I will be ${age}`;
  document.getElementById('counter').innerHTML = html;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(this);
    document.getElementById('counter').innerHTML = `It's my birthday!`;
  }
}, 1000);