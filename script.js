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

    let percentageToStudentsEnrolled = inputBox.value /  100 * totalStudents;
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

    let percentageToStudentsEnrolled = inputBoxArrear.value /  100 * totalStudents;
    const val = inputBoxArrear.value;
    const rotAmount = 186 + ((val / 100) * 284);
    // currentStudents.innerHTML = percentageToStudentsEnrolled;
    // vacancy.innerHTML = totalStudents - percentageToStudentsEnrolled;
    targetArrear.style.transform = `rotate(${rotAmount}deg)`;
    }
});




