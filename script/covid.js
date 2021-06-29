"use strict";
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// tap color //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
let path = window.location.pathname;

if (path == "/html/covid.html") {
  let covid = document.getElementById("covidA");

  covid.setAttribute("style", "color:#00EAD3");
}
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
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// footer image ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
let tweets=['tweet1.jpg','tweet2.jpg','tweet3.jpg','tweet4.png','tweet5.png','tweet6.png','tweet7.png','tweet8.png','tweet9.png',
'tweet10.png','tweet11.png','tweet12.png','tweet13.png','tweet14.png','tweet15.png','tweet16.png','tweet17.png','tweet18.png']

let footerImage=document.getElementById('footerImage');

footerImage.style.width='600px';
footerImage.style.height='250px';


let num1=4;
function printImage(){
  footerImage.src=`../tweet/${tweets[num1]}`;

  num1++;
  if(num1==tweets.length) {
    num1=0;
   }
}
window.setInterval(printImage,3000);