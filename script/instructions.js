'use strict';
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// scrolling //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
let up = document.getElementById("up");
window.addEventListener("scroll", scrolling);
let scrollVal;
function scrolling() {
  scrollVal = window.scrollY;
  //  console.log(scrollVal);
  if (window.scrollY > 100) {
    up.style.opacity = "1";
  } else {
    up.style.opacity = "0";
  }
}

function goUp() {
  let val = scrollVal;
  console.log(val);
  let animation = setInterval(() => {
    window.scrollTo(0, val);
    val -= 30;
    console.log(val);
    if (val <= 0) {
      clearInterval(animation);
    }
  }, 1);
}
///////////////////////////////////////////////////////////////////////////////////
let receivedObj = JSON.parse(localStorage.obj);
// console.log(receivedObj);
let instructionsContainer = document.getElementById('instructions');
instructionsContainer.style.height = 'fit-content';
let ol = document.createElement('ol');
ol.style.display= 'flex';
ol.style.flexDirection= 'column';
ol.style.gap= '2rem';
ol.style.listStyleType = 'Greek';
ol.style.padding = '2rem';


instructionsContainer.appendChild(ol);

  for (let i = 0; i < receivedObj.instructions.length; i++) {
    let li = document.createElement('li');
    li.textContent = receivedObj.instructions[i];
    ol.appendChild(li);
    if (receivedObj.instructions.length == 1) {
      ol.style.listStyleType = 'none';
    }
  }
let path=window.location.pathname;

/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// footer image ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
let tweets=['tweet1.jpg','tweet2.jpg','tweet3.jpg','tweet4.png','tweet5.png','tweet6.png','tweet7.png','tweet8.png','tweet9.png',
'tweet10.png','tweet11.png','tweet12.png','tweet13.png','tweet14.png','tweet15.png','tweet16.png','tweet17.png','tweet18.png']

let footerImage=document.getElementById('footerImage');

footerImage.style.width='350px';
footerImage.style.height='150px';
footerImage.style.marginRight = "8rem"

let num1=6;
function printImage(){
  footerImage.src=`../tweet/${tweets[num1]}`;
  num1++;
  if(num1==tweets.length) {
    num1=0;
   }
}
window.setInterval(printImage,3000);
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// User profile ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
let userData = [];
let status = {logged: false, index: 0};
let userPic = document.getElementById('userPic');
let nameHolder = document.getElementById('userName');


try { 
  userData = JSON.parse(localStorage.userData);
} catch {
  console.log('no user exists');
}

try { 
  status = JSON.parse(localStorage.status);
  updatelogIn(JSON.parse(localStorage.status).index);
} catch {
  status.logged = false;
  status.index = 1000; // index is out of range since no user is currently logged in
  updateLogOut();
}

function Status(log, ind){
  this.logged= log;
  this.index = ind;
}

function updateLogOut() {

  userPic.style.display = 'initial';
  nameHolder.style.display = 'none';
  updateStatus(false, 1000);
}

function updatelogIn(index) {

  userPic.style.display = 'none';
  nameHolder.style.display = 'initial';

  let name = JSON.parse(localStorage.userData)[index].name;
  name = name.split(" ").map((item) => item.toUpperCase()).map((item) => {
       return item[0];
      }).join("");
  nameHolder.textContent = name;
  updateStatus(true, index);

  // need to reload the page for once or check again for the flow
}

function updateStatus(log, ind) {

  localStorage.setItem('status',JSON.stringify(new Status(log, ind)));
}