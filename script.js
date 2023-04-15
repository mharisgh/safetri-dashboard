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

// card stack animation


// nav menu
const mainContentArea = document.getElementById("mainContentArea");
const navBar = document.getElementById("navBar");
const leftMenu = document.getElementById("leftMenu");
const expandShrink = document.querySelectorAll("expandShrink");
const hamBtn = document.getElementById("hamBtn");
var x = window.matchMedia("(max-width:640px)");

// // Defining event listener function
// function displayWindowSize() {
//     // Get width and height of the window excluding scrollbars
//     var w = document.documentElement.clientWidth;
//     if (w <= 640 ) {
//         mainContentArea.style.paddingLeft = '0px';
//     }else{


//     }
//     console.log(w)
// }

// // Attaching the event listener function to window's resize event
// window.addEventListener("resize", displayWindowSize);
// // Calling the function for the first time
// displayWindowSize();


function autoPadding() {
    if (x.matches) { // If media query matches
        mainContentArea.style.paddingLeft = '0px';
    }
}


function openLeftMenu() {
    leftMenu.style.display = "block";
    if (x.matches) { // If media query matches
        mainContentArea.style.paddingLeft = '0px';
        navBar.style.paddingLeft = '0px';
    } else {
        navBar.style.paddingLeft = '256px';
        mainContentArea.style.paddingLeft = '256px';
    }

}
function closeLeftMenu() {
    leftMenu.style.display = "none";
    mainContentArea.style.paddingLeft = '0px';
    navBar.style.paddingLeft = '0px';
    hamBtn.style.display = "block";
}


//////////////////////////////////////////////////////



const CORSProxy = "https://cors-hld.herokuapp.com/";
let activeArticle = 0;
const totalArticle = 7;

let xDown = null;
let yDown = null;

function trimString(string, maxLength){
  if(string.length > maxLength){
    string = string.substring(0,maxLength);
    string = string.substr(0, Math.min(string.length, string.lastIndexOf(" ")));
    string += "[...]";
  }
  return string;
}

function replaceText(original, before, after){
    if(before.constructor !== Array){
      before = [before];
      after = [after];
    }
    let result = original;
    for(let i = 0; i < before.length; i++){
      result = result.split(before[i]).join(after[i]);
    }
    return result;
}

function fetchImage(url, i){
  const xhr = new XMLHttpRequest();
  xhr.open("GET", CORSProxy + url);
  xhr.onload = function(){
    const parser = new DOMParser();
    const html = parser.parseFromString(this.responseText, "text/html");
    const image = html.querySelector(".image-wrapper").firstChild.getAttribute("src").replace("7x5","420x300");

    document.querySelector("#articles li:nth-child("+(i+1)+") .card-image").style.backgroundImage = "url("+image+")";
  }
  xhr.send();
}

function fetchFeed(url){
  const xhr = new XMLHttpRequest();
  xhr.open("GET", CORSProxy + url);
  xhr.onload = function(){
    const parser = new DOMParser();
    const xml = parser.parseFromString(this.responseText, "application/xml");
    generateCards(xml, true);
  }
  xhr.onerror = function(){
    const backupHtml = document.querySelector("#backup").innerHTML;
    generateCards(backupHtml, false);
    document.querySelector(".limit-error").classList.add("show");
  }
  xhr.send();
}

function generateHtml(data){
  const html = document.querySelector("#article-template").innerHTML;
  const before = ["{{category}}","{{title}}","{{pubDate}}","{{description}}","{{url}}","{{z-index}}"];
  
  return replaceText(html, before, data);
}

function generateCards(xml, isCDATA){
  const items = xml.querySelectorAll("item");
  for(let i = 0; i < totalArticle; i++){
    const url = items[i].querySelector("link").textContent;
    let title = items[i].querySelector("title").textContent;
    title = trimString(title,65);
    let description = items[i].querySelector("description").textContent;

    if(!isCDATA)
      description = items[i].querySelector("description").innerHTML;

    let pubDate = new Date(items[i].querySelector("pubDate").textContent);
    pubDate = moment(pubDate).fromNow();

    let category = items[i].querySelector("category:last-of-type").textContent.toLowerCase();
    const html = generateHtml([category,title,pubDate,description,url,(i * -2)]);

    document.querySelector("#articles").insertAdjacentHTML("beforeend", html);
    fetchImage(url, i);
  }
  document.querySelector("#articles").style.maxHeight = "600px";
  arrangeCards();

  const cardContents = document.querySelectorAll(".card-content");
  for(let i = 0; i < cardContents.length; i++){
    cardContents[i].addEventListener("click", function(){
      this.classList.toggle("open");
      if(this.classList.contains("open")){
        document.querySelector("#articles li:nth-child("+(activeArticle+1)+") a").removeAttribute("tabindex");
      } else {
        document.querySelector("#articles li:nth-child("+(activeArticle+1)+") a").setAttribute("tabindex
