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
// const vacancy = document.querySelector('#vacancy')
// const target = document.querySelector('#target');
// const input = document.getElementById('#inputBox')
// const totalStudents = 1200;
// let currentStudents = document.getElementById('currentStudents');

// var circle = document.getElementById('round-progress');
// var radius = circle.r.baseVal.value;
// var circumference = radius * 2 * Math.PI;

// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = `${circumference}`;

// function setProgress(percent) {
//     const offset = circumference - percent / 126 * circumference;
//     circle.style.strokeDashoffset = offset;
// }

// const inputBox = document.getElementById('inputBox');
// setProgress(inputBox.value);

// inputBox.addEventListener('change', function (e) {
//     if (inputBox.value < 101 && inputBox.value > -1) {
//         setProgress(inputBox.value);

//     let percentageToStudentsEnrolled = inputBox.value /  100 * totalStudents;
//     const val = inputBox.value;
//     const rotAmount = 186 + ((val / 100) * 284);
//     currentStudents.innerHTML = percentageToStudentsEnrolled;
//     vacancy.innerHTML = totalStudents - percentageToStudentsEnrolled;
//     target.style.transform = `rotate(${rotAmount}deg)`;

//     }
// });



let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
toggler.addEventListener("click", function(e) {
e.preventDefault();

let tabName = this.getAttribute("href");

let tabContents = document.querySelector("#tab-contents");

for (let i = 0; i < tabContents.children.length; i++) {

tabTogglers[i].parentElement.classList.remove("border-blue-400", "border-b",  "-mb-px", "opacity-100");  tabContents.children[i].classList.remove("hidden");
if ("#" + tabContents.children[i].id === tabName) {
continue;
}
tabContents.children[i].classList.add("hidden");

}
e.target.parentElement.classList.add("border-blue-400", "border-b-4", "-mb-px", "opacity-100");
});
});

document.getElementById("default-tab").click();
