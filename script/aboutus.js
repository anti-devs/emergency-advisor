"use strict";

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