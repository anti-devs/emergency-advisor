"use strict";

let path = window.location.pathname;

console.log(path);

if (path == "/html/covid.html") {
  let covid = document.getElementById("covidA");

  covid.setAttribute("style", "color:#00EAD3");
}
/////////////////////////////////////////////////////////
let userImgName = document.getElementById("userName");
let userPic = document.getElementById("userPic");
userPic.style.display = "none";
let logOut = document.getElementById("logOut");
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
function updateVisualsLogIn(name) {
  // just show and hide stuff based on if the user signs up
  if (name) {
    console.log(name);
  } else {
    updateVisualsLogout();
    return;
  }
  name = name
    .split(" ")
    .map((item) => item.toUpperCase())
    .map((item) => {
      return item[0];
    })
    .join("");
  userImgName.textContent = name;
  logOut.style.display = "initial";
  userImgName.style.display = "initial";
  userPic.style.display = "none";
} ////////////////////////////////////////
function updateVisualsLogout() {
  // just show and hide stuff based on if the user logs out
  logOut.style.display = "none";
  userImgName.style.display = "none";
  userPic.style.display = "initial";
  localStorage.setItem("logInStatus", false);
} ////////////////////////////////////////

function logout() {
  // when you click log out
  updateVisualsLogout();
} ////////////////////////////////////////

function checkUser() {
  // check on login
  let userPhone = document.getElementById("userPhone").value;
  let userName = document.getElementById("userNmae").value;
  let userEmail = document.getElementById("userImael").value;

  let numofUsers = JSON.parse(localStorage.click).length;

  for (let i = 0; i < numofUsers; i++) {
    let { number, name, email } = JSON.parse(localStorage.click)[i];
    if (
      number == userPhone &&
      name.toLowerCase() == userName.toLowerCase() &&
      userEmail.toLowerCase() == email.toLowerCase()
    ) {
      console.log("login succesfull !");
      updateVisualsLogIn(name);
      INPUT.reset();
      localStorage.setItem("logInStatus", true);
      localStorage.setItem("index", i);
      break;
    } else {
      INPUT.reset();
      alert("User does not exist, please check again.");
      localStorage.setItem("logInStatus", false);
    }
  }
} ////////////////////////////////////////
////////////////////////////////////////////////////////

///// foooter image
let tweets=['tweet1.jpg','tweet2.jpg','tweet3.jpg','tweet4.png','tweet5.png','tweet6.png','tweet7.png','tweet8.png','tweet9.png',
'tweet10.png','tweet11.png','tweet12.png','tweet13.png','tweet14.png','tweet15.png','tweet16.png','tweet17.png','tweet18.png']

let footerImage=document.getElementById('footerImage');

footerImage.style.width='600px';
footerImage.style.height='250px';
footerImage.style.margin='0 100px 0 0';


let num1=4;
function printImage(){
  footerImage.src=`../tweet/${tweets[num1]}`;

  
  num1++;
  if(num1==tweets.length) {
    num1=0;
   }
 
}


window.setInterval(printImage,3000);