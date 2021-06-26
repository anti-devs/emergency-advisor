'use strict';
let receivedObj = JSON.parse(localStorage.obj);
console.log(receivedObj);
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