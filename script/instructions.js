'use strict';


/////////////////////////////////////////////////////////
let userImgName = document.getElementById('userName');
let userPic = document.getElementById('userPic');
userPic.style.display = 'none';
let logOut = document.getElementById('logOut');
let indexOfLogger;

if (!localStorage.logInStatus) {
  updateVisualsLogout();
} else {
  let currInd = Number(localStorage.index);
  console.log(currInd);
  try {
    updateVisualsLogIn(JSON.parse(localStorage.click)[currInd].name);
  } catch {
    updateVisualsLogout();
  }
}
function updateVisualsLogIn(name) { // just show and hide stuff based on if the user signs up
  if (name) {
    console.log(name);
  } else {
    updateVisualsLogout();
    return;
  }
  name = name.split(' ').map(item => item.toUpperCase()).map(item => {return item[0]}).join('');
  userImgName.textContent = name;
  logOut.style.display = 'initial';
  userImgName.style.display = 'initial';
  userPic.style.display = 'none';
} ////////////////////////////////////////
function updateVisualsLogout() { // just show and hide stuff based on if the user logs out 
  logOut.style.display = 'none';
  userImgName.style.display = 'none';
  userPic.style.display = 'initial';
  localStorage.setItem('logInStatus', false);
} ////////////////////////////////////////

function logout() { // when you click log out
  updateVisualsLogout();
} ////////////////////////////////////////

function checkUser() { // check on login
  let userPhone = document.getElementById('userPhone').value;
  let userName = document.getElementById('userNmae').value;
  let userEmail = document.getElementById('userImael').value;

  let numofUsers = JSON.parse(localStorage.click).length;

  for (let i = 0; i < numofUsers; i++) {
    let {number, name, email} = JSON.parse(localStorage.click)[i];
    if (number == userPhone && name.toLowerCase() == userName.toLowerCase() && userEmail.toLowerCase() == email.toLowerCase()) {
        console.log('login succesfull !');
        updateVisualsLogIn(name);
        INPUT.reset();
        localStorage.setItem('logInStatus', true);
        localStorage.setItem('index', i);
        break;
    } else {
      INPUT.reset();
      alert('User does not exist, please check again.');
      localStorage.setItem('logInStatus', false);
    }
  }
} ////////////////////////////////////////
////////////////////////////////////////////////////////

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

// console.log(path)