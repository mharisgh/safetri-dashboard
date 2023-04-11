// const currentStudents = document.querySelector('#currentStudents')
const vacancy = document.querySelector('#vacancy')
const target = document.querySelector('#target');
const input = document.getElementById('#inputBox')
const totalStudents = 1200;
const currentStudents = 600;

// input.addEventListener('change', function () {

    // let indicatorPercentage = +this.value / totalStudents * 100;

    // vacancy of students available to join
    // const remaining = Math.abs(currentStudents.value - totalStudents);
    // vacancy.innerHTML = remaining;

    // const val = indicatorPercentage;
    // const val = inputBox.value;

    
    // const rotAmount = 186 + ((val / 100) * 284);
    // output.value = rotAmount;
    // target.style.transform = 'rotate(' + rotAmount + 'deg)';
// })

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
    const val = inputBox.value;
    const rotAmount = 186 + ((val / 100) * 284);
    target.style.transform = 'rotate(' + rotAmount + 'deg)';

    }
})
