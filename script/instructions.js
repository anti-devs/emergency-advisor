'use strict';

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