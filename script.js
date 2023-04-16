// vacancy speedometer script
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


// arrear speedometer script
const arrear = document.querySelector('#arrear')
const targetArrear = document.querySelector('#target-arrear');
const inputArrear = document.getElementById('#inputBoxArrear')
const totalStudentsArrear = 1200;
let currentStudentsArrear = document.getElementById('currentStudents');

var circjle = document.getElementById('round-progress-arrear');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 126 * circumference;
  circle.style.strokeDashoffset = offset;
}

const inputBoxArrear = document.getElementById('inputBoxArrear');
setProgress(inputBoxArrear.value);

inputBoxArrear.addEventListener('change', function (e) {
  if (inputBoxArrear.value < 101 && inputBoxArrear.value > -1) {
    setProgress(inputBoxArrear.value);

    let percentageToStudentsEnrolled = inputBoxArrear.value / 100 * totalStudents;
    const val = inputBoxArrear.value;
    const rotAmount = 186 + ((val / 100) * 284);
    // currentStudents.innerHTML = percentageToStudentsEnrolled;
    // vacancy.innerHTML = totalStudents - percentageToStudentsEnrolled;
    targetArrear.style.transform = `rotate(${rotAmount}deg)`;
  }
});


// nav menu
const mainContentArea = document.getElementById("mainContentArea");
const navBar = document.getElementById("navBar");
const leftMenu = document.getElementById("leftMenu");
const expandShrink = document.querySelectorAll("expandShrink");
const hamBtn = document.getElementById("hamBtn");
var x = window.matchMedia("(max-width:640px)");

if (leftMenu.style.display = 'block') {
  hamBtn.style.display = 'none';
  navBar.style.paddingLeft = '266px';
}

// Defining event listener function
function displayWindowSize() {
  // Get width and height of the window excluding scrollbars
  var windowWidth = document.documentElement.clientWidth;
  // if (windowWidth <= 640) {
    // meterDark.style.display = 'none';
  // }
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);
// Calling the function for the first time
displayWindowSize();


function autoPadding() {
  if (x.matches) { // If media query matches
    mainContentArea.style.paddingLeft = '0px';
  }
}


function openLeftMenu() {
  leftMenu.style.display = "block";
  hamBtn.style.display = "none";
  if (x.matches) { // If media query matches
    mainContentArea.style.paddingLeft = '0px';
    navBar.style.paddingLeft = '0px';
  } else {
    navBar.style.paddingLeft = '266px';
    mainContentArea.style.paddingLeft = '256px';
  }

}
function closeLeftMenu() {
  leftMenu.style.display = "none";
  mainContentArea.style.paddingLeft = '0px';
  navBar.style.paddingLeft = '10px';
  hamBtn.style.display = "block";
}

// dark mode or light mode checking

var checkbox = document.getElementById("toggle"); //get the checkbox to a variable
var meterDark = document.getElementById("meter-dark");


//check storage if dark mode was on or off
if (sessionStorage.getItem("darkMode") || localStorage.getItem("darkMode") || windowWidth == "true") {
  console.log("darkmode"); //if dark mode was on, run this funtion
  meterDark.style.display = 'flex';
} else if (sessionStorage.getItem("darkMode") || localStorage.getItem("darkMode") == "false") {
  console.log("lightmode") //else run this funtion
  meterDark.style.display = 'none';
} else {
  console.log('Error!! getting sessionStorage')
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function () {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    meterDark.style.display = 'flex';

    console.log("checked means dark"); //if the checkbox is checked, run this funtion
  } else {
    meterDark.style.display = 'none';

    console.log("unchecked means light"); //else run this funtion
  }
});
//////////////////////////////////////////////////////
