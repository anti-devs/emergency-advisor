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