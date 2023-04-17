// vacancy speedometer 1 script
const vacancy = document.querySelector('#vacancy')
const target = document.querySelector('#target');
const input = document.getElementById('#inputBox')

const totalStudents = 1200;
let currentStudents = document.getElementById('currentStudents');

var circle = document.getElementById('round-progress');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 126 * circumference;
  circle.style.strokeDashoffset = offset;
}

const inputBox = document.getElementById('inputBox');
setProgress(inputBox.value);

inputBox.addEventListener('change', function (e) {
  if (inputBox.value < 101 && inputBox.value > -1) {
    setProgress(inputBox.value);

    let percentageToStudentsEnrolled = inputBox.value / 100 * totalStudents;
    const val = inputBox.value;
    const rotAmount = 186 + ((val / 100) * 284);
    currentStudents.innerHTML = percentageToStudentsEnrolled;
    vacancy.innerHTML = totalStudents - percentageToStudentsEnrolled;
    target.style.transform = `rotate(${rotAmount}deg)`;

  }
});


// arrear speedometer 2 script
const arrear = document.querySelector('#arrear')
const targetArrear = document.querySelector('#target-arrear');
const inputArrear = document.getElementById('#inputBoxArrear')

let totalArrear = 50;
let currentArrear = document.getElementById('currentArrear');


var circleArrear = document.getElementById('round-progress-arrear');
var radiusArrear = circleArrear.r.baseVal.value;
var circumferenceArrear = radiusArrear * 2 * Math.PI;

circleArrear.style.strokeDasharray = `${circumferenceArrear} ${circumferenceArrear}`;
circleArrear.style.strokeDashoffset = `${circumferenceArrear}`;

function setProgressArrear(percentArrear) {
  const offsetArrear = circumferenceArrear - percentArrear / 126 * circumferenceArrear;
  circleArrear.style.strokeDashoffset = offsetArrear;
}

const inputBoxArrear = document.getElementById('inputBoxArrear');
setProgressArrear(inputBoxArrear.value);

inputBoxArrear.addEventListener('change', function (e) {
  if (inputBoxArrear.value < 101 && inputBoxArrear.value > -1) {
    setProgressArrear(inputBoxArrear.value);

    let percentageToAedCollected = Math.trunc(inputBoxArrear.value / 100 * totalArrear);

    const val = inputBoxArrear.value;
    const rotAmountArrear = 186 + ((val / 100) * 284);
    currentArrear.innerHTML = percentageToAedCollected;
    arrear.innerHTML = totalArrear - percentageToAedCollected;
    targetArrear.style.transform = `rotate(${rotAmountArrear}deg)`;
  }
});

// dark mode or light mode checking

var checkbox = document.getElementById("toggle"); //get the checkbox to a variable
var meterDark = document.getElementById("meter-dark");
const mapLight = document.getElementById('map-light');
const mapDark = document.getElementById('map-dark');
const meter1Dark = document.getElementById('meter1dark');
const meter1Light = document.getElementById('meter1light');
const meter2Dark = document.getElementById('meter2dark');
const meter2Light = document.getElementById('meter2light');

const smallMeter1Light = document.getElementById('smallMeter1Light');
const smallMeter1Dark = document.getElementById('smallMeter1Dark');
const smallMeter2Light = document.getElementById('smallMeter2Light');
const smallMeter2Dark = document.getElementById('smallMeter2Dark');

// Defining event listener function
function displayWindowSize() {
  // Get width and height of the window excluding scrollbars
  var windowWidth = document.documentElement.clientWidth;
  if (windowWidth <= 640) {
  }
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);
// Calling the function for the first time
displayWindowSize();
//check storage if dark mode was on or off
if (sessionStorage.darkMode == "true" || localStorage.darkMode == "true") {
  console.log("darkmode"); //if dark mode was on, run this funtion
  mapLight.style.display = "none";
  mapDark.style.display = "block";
  meter1Dark.style.display = "block";
  meter1Light.style.display = "none";
  meter2Dark.style.display = "block";
  meter2Light.style.display = "none";
  smallMeter1Light.style.display = "none";
  smallMeter2Light.style.display = "none";
  smallMeter1Dark.style.display = "block";
  smallMeter2Dark.style.display = "block";

} else if (sessionStorage.darkMode == "false" || localStorage.darkMode == "false") {
  console.log("lightmode") //else run this funtion
  mapLight.style.display = "block";
  mapDark.style.display = "none";
  meter1Dark.style.display = "none";
  meter1Light.style.display = "block";
  meter2Dark.style.display = "none";
  meter2Light.style.display = "block";
  smallMeter1Light.style.display = "block";
  smallMeter2Light.style.display = "block";
  smallMeter1Dark.style.display = "none";
  smallMeter2Dark.style.display = "none";
} else {
  console.log('Error!! getting sessionStorage')
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function () {
  //findout if the checkbox is checked or not
  if (checkbox.checked) {
    mapLight.style.display = "none";
    mapDark.style.display = "block";
    meter1Dark.style.display = "block";
    meter1Light.style.display = "none";
    meter2Dark.style.display = "block";
    meter2Light.style.display = "none";
    smallMeter1Dark.style.display = "block";
    smallMeter2Dark.style.display = "block";
    smallMeter1Light.style.display = "none";
    smallMeter2Light.style.display = "none";
    console.log("checked means dark"); //if the checkbox is checked, run this funtion
  } else {
    mapLight.style.display = "block";
    mapDark.style.display = "none";
    meter1Dark.style.display = "none";
    meter1Light.style.display = "block";
    meter2Dark.style.display = "none";
    meter2Light.style.display = "block";
    smallMeter1Dark.style.display = "none";
    smallMeter2Dark.style.display = "none";
    smallMeter1Light.style.display = "block";
    smallMeter2Light.style.display = "block";
    console.log("unchecked means light"); //else run this funtion
  }

});



// nav menu
// const mainContentArea = document.getElementById("mainContentArea");
// const navBar = document.getElementById("navBar");
// const leftMenu = document.getElementById("leftMenu");
// const expandShrink = document.querySelectorAll("expandShrink");
// const hamBtn = document.getElementById("hamBtn");
// var x = window.matchMedia("(max-width:640px)");

// if (leftMenu.style.display = 'block') {
//   hamBtn.style.display = 'none';
//   navBar.style.paddingLeft = '266px';
// }

// // Defining event listener function
// function displayWindowSize() {
//   // Get width and height of the window excluding scrollbars
//   var windowWidth = document.documentElement.clientWidth;
//   if (windowWidth <= 640) {
//     meterDark.style.display = 'none';
//   }
// }

// // Attaching the event listener function to window's resize event
// window.addEventListener("resize", displayWindowSize);
// // Calling the function for the first time
// displayWindowSize();


// function autoPadding() {
//   if (x.matches) { // If media query matches
//     mainContentArea.style.paddingLeft = '0px';
//   }
// }


// function openLeftMenu() {
//   hamBtn.style.display = "none";
//   if (x.matches) { // If media query matches
//     mainContentArea.style.paddingLeft = '0px';
//     navBar.style.paddingLeft = '0px';
//   } else {
//     leftMenu.style.display = "block";
//     navBar.style.paddingLeft = '266px';
//     mainContentArea.style.paddingLeft = '256px';
//   }

// }
// function closeLeftMenu() {
//   leftMenu.style.display = "none";
//   mainContentArea.style.paddingLeft = '0px';
//   navBar.style.paddingLeft = '10px';
//   hamBtn.style.display = "block";
// }

// dark mode or light mode checking

// var checkbox = document.getElementById("toggle"); //get the checkbox to a variable
// var meterDark = document.getElementById("meter-dark");


// //check storage if dark mode was on or off
// if (sessionStorage.getItem("darkMode") || localStorage.getItem("darkMode") || windowWidth == "true" && windowWidth >= 640) {
//   console.log("darkmode"); //if dark mode was on, run this funtion
//   meterDark.style.display = 'flex';
// } else if (sessionStorage.getItem("darkMode") || localStorage.getItem("darkMode") == "false" && windowWidth <= 640) {
//   console.log("lightmode") //else run this funtion
//   meterDark.style.display = 'none';
// } else {
//   console.log('Error!! getting sessionStorage')
// }

// //if the checkbox state is changed, run a funtion
// checkbox.addEventListener("change", function () {
//   //check if the checkbox is checked or not
//   if (checkbox.checked && windowWidth >= 640) {
//     meterDark.style.display = 'flex';
//     console.log("checked means dark"); //if the checkbox is checked, run this funtion
//   } else if(windowWidth <= 640){
//     meterDark.style.display = 'none';

//     console.log("unchecked means light"); //else run this funtion
//   }
// });
//////////////////////////////////////////////////////
