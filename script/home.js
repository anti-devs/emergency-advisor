"use strict";

let path3 = window.location.pathname; // claimed to have the effect of changing the background color of the navigation element

// console.log(path3);

if (path3 == "/index.html") {
  let covid = document.getElementById("Home");

  covid.setAttribute("style", "color:#00EAD3");
}
///////////////////////////////////////////////////////// check log in status 
// try {
//   let getFromLocal = JSON.parse(localStorage.user);
//   console.log('user exists');
// } catch {
//   console.log('no user');
//   localStorage.setItem('user', JSON.stringify( ['Hamza', '078979879', 'hamzawi@gmail']));

// }

let hero = document.getElementById("hero");
let INPUT = document.getElementById("input");
let userImgName = document.getElementById("userName");
let userPic = document.getElementById("userPic");
userPic.style.display = "none";
let logOut = document.getElementById("logOut");
let indexOfLogger;
// document.body.onload = checkLocal(localStorage);

if (!localStorage.logInStatus) {
  updateVisualsLogout();
} else {
  let currInd = Number(localStorage.index);
  console.log(currInd);
  try {
    updateVisualsLogIn(JSON.parse(localStorage.click)[currInd].name);
  } catch {
    updateVisualsLogout(); // means that the defualt behavior is to logged out if no name exists based on the last login
  }
}
// default behavior is log out until someone logs in

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Tips /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tipHeading = document.getElementById("tip-header");
let tipContent = document.getElementById("tip-content");

let tips = [
  "Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day. You can improve your intake of fruits and vegetables by always including veggies in your meal; eating fresh fruit and vegetables as snacks; eating a variety of fruits and vegetables; and eating them in season. By eating healthy, you will reduce your risk of malnutrition and noncommunicable diseases (NCDs) such as diabetes, heart disease, stroke and cancer.",

  "Filipinos consume twice the recommended amount of sodium, putting them at risk of high blood pressure, which in turn increases the risk of heart disease and stroke. Most people get their sodium through salt. Reduce your salt intake to 5g per day, equivalent to about one teaspoon. It’s easier to do this by limiting the amount of salt, soy sauce, fish sauce and other high-sodium condiments when preparing meals; removing salt, seasonings and condiments from your meal table; avoiding salty snacks; and choosing low-sodium products.\nOn the other hand, consuming excessive amounts of sugars increases the risk of tooth decay and unhealthy weight gain. In both adults and children, the intake of free sugars should be reduced to less than 10% of total energy intake. This is equivalent to 50g or about 12 teaspoons for an adult. WHO recommends consuming less than 5% of total energy intake for additional health benefits. You can reduce your sugar intake by limiting the consumption of sugary snacks, candies and sugar-sweetened beverages.",

  "Fats consumed should be less than 30% of your total energy intake. This will help prevent unhealthy weight gain and NCDs. There are different types of fats, but unsaturated fats are preferable over saturated fats and trans-fats. WHO recommends reducing saturated fats to less than 10% of total energy intake; reducing trans-fats to less than 1% of total energy intake; and replacing both saturated fats and trans-fats to unsaturated fats.\nThe preferable unsaturated fats are found in fish, avocado and nuts, and in sunflower, soybean, canola and olive oils; saturated fats are found in fatty meat, butter, palm and coconut oil, cream, cheese, ghee and lard; and trans-fats are found in baked and fried foods, and pre-packaged snacks and foods, such as frozen pizza, cookies, biscuits, and cooking oils and spreads.",

  "There is no safe level for drinking alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders, including alcohol dependence, major NCDs such as liver cirrhosis, some cancers and heart diseases, as well as injuries resulting from violence and road clashes and collisions.",

  "Smoking tobacco causes NCDs such as lung disease, heart disease and stroke. Tobacco kills not only the direct smokers but even non-smokers through second-hand exposure. Currently, there are around 15.9 million Filipino adults who smoke tobacco but 7 in 10 smokers are interested or plan to quit.\nIf you are currently a smoker, it’s not too late to quit. Once you do, you will experience immediate and long-term health benefits. If you are not a smoker, that’s great! Do not start smoking and fight for your right to breathe tobacco-smoke-free air.",

  "Physical activity is defined as any bodily movement produced by skeletal muscles that requires energy expenditure. This includes exercise and activities undertaken while working, playing, carrying out household chores, travelling, and engaging in recreational pursuits. The amount of physical activity you need depends on your age group but adults aged 18-64 years should do at least 150 minutes of moderate-intensity physical activity throughout the week. Increase moderate-intensity physical activity to 300 minutes per week for additional health benefits.",

  "Hypertension, or high blood pressure, is called a “silent killer”. This is because many people who have hypertension may not be aware of the problem as it may not have any symptoms. If left uncontrolled, hypertension can lead to heart, brain, kidney and other diseases. Have your blood pressure checked regularly by a health worker so you know your numbers. If your blood pressure is high, get the advice of a health worker. This is vital in the prevention and control of hypertension.",

  "Getting yourself tested is an important step in knowing your health status, especially when it comes to HIV, hepatitis B, sexually-transmitted infections (STIs) and tuberculosis (TB). Left untreated, these diseases can lead to serious complications and even death. Knowing your status means you will know how to either continue preventing these diseases or, if you find out that you’re positive, get the care and treatment that you need. Go to a public or private health facility, wherever you are comfortable, to have yourself tested.",

  "Vaccination is one of the most effective ways to prevent diseases. Vaccines work with your body’s natural defences to build protection against diseases like cervical cancer, cholera, diphtheria, hepatitis B, influenza, measles, mumps, pneumonia, polio, rabies, rubella, tetanus, typhoid, and yellow fever.\nIn the Philippines, free vaccines are provided to children 1 year old and below as part of the Department of Health’s routine immunization programme. If you are an adolescent or adult, you may ask your physician if to check your immunization status or if you want to have yourself vaccinated.",

  "Diseases such as influenza, pneumonia and tuberculosis are transmitted through the air. When an infected person coughs or sneezes, infectious agents may be passed on to others through airborne droplets. When you feel a cough or sneeze coming on, make sure you have covered your mouth with a face mask or use a tissue then dispose it carefully. If you do not have a tissue close by when you cough or sneeze, cover your mouth as much as possible with the crook (or the inside) of your elbow.",

  "Mosquitoes are one of the deadliest animals in the world. Diseases like dengue, chikungunya, malaria and lymphatic filariasis are transmitted by mosquitoes and continue to affect Filipinos. You can take simple measures to protect yourself and your loved ones against mosquito-borne diseases. If you’re traveling to an area with known mosquito-borne diseases, consult a physician for a vaccine to prevent diseases such as Japanese encephalitis and yellow fever or if you need to take antimalarial medicines. Wear light-coloured, long-sleeved shirts and pants and use insect repellent. At home, use window and door screens, use bed nets and clean your surroundings weekly to destroy mosquito breeding sites.",
];

let tipTitle = [
  "Eat a healthy diet",
  "Consume less salt and sugar",
  "Reduce intake of harmful fats",
  "Avoid harmful use of alcohol",
  "Don’t smoke",
  "Be active",
  "Check your blood pressure regularly",
  "Get tested",
  "Get vaccinated",
  "Cover your mouth when coughing or sneezing",
  "Prevent mosquito bites",
];

updateTips();

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function updateTips() {
  let rand = getRandomIntInclusive(0, tips.length - 1);
  let heading = tipTitle[rand];
  let content = tips[rand];
  tipHeading.textContent = heading;
  tipContent.textContent = content;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// User profile ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

INPUT.addEventListener("submit", info);
logOut.addEventListener("click", logout);

function Form(number, name, email) {
  this.number = number;
  this.name = name;
  this.email = email;
  Form.all.push(this);
}

Form.all = [];

function info(event) {
  // sign up function

  event.preventDefault();

  // check localStorage
  if (!localStorage.click) {
    // check if localStorage is already empty
    localStorage.setItem("index", undefined);
    // if empty, you can execute the rest of statements and create an account
    let number = event.target.phone.value;
    let name = event.target.name.value;
    let email = event.target.email.value;

    new Form(number, name, email);

    localStorage.setItem("click", JSON.stringify(Form.all));
    INPUT.reset();
    localStorage.setItem("logInStatus", true);
    localStorage.setItem("index", 0);
    updateVisualsLogIn(name);
    indexOfLogger = 0;
  } else {
    let numberNew = event.target.phone.value;
    let nameNew = event.target.name.value;
    let emailNew = event.target.email.value;

    INPUT.reset();

    let numofUsers = JSON.parse(localStorage.click).length;

    for (let i = 0; i < numofUsers; i++) {
      let email = JSON.parse(localStorage.click)[i].email;
      if (emailNew.toLowerCase() == email.toLowerCase()) {
        alert("account already exists");
        localStorage.setItem("logInStatus", false);
        break;
      } else {
        new Form(numberNew, nameNew, emailNew);
        localStorage.setItem("click", JSON.stringify(Form.all));
        updateVisualsLogIn(nameNew);
        localStorage.setItem("logInStatus", true);
        localStorage.setItem("index", numofUsers);
      }
    }
  }
}

//////////////////////////////////////////
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

function getData() {
  //////////////
  let data = JSON.parse(localStorage.getItem(Form.all));
  for (let i = 0; i < Form.all.length; i++) {
    new Form(data[i].number, data[i].name, data[i].email);
  }
}

getData(); /////////////

////////////////////////////////////////////////////// Animation
let anim;
window.addEventListener("scroll", checkScroll);
function checkScroll() {
  // console.log(window.scrollY);
  anim = setInterval(() => {
    hero.style.height = 600 - window.scrollY + "px";
    if (hero.offsetHeight) {
      clearInterval(anim);
      return;
    }
  }, 1);
}
/////////////////////////////////////////////////////

getData();

function checkLocal(local) {
  if (local.hasOwnProperty("click")) {
    userImgName.style.display = "initial";
    userPic.style.display = "none";
    INPUT.style.display = "none";
    let name = JSON.parse(localStorage.click)[0].name;
    name = name
      .split(" ")
      .map((item) => item.toUpperCase())
      .map((item) => {
        return item[0];
      })
      .join("");
    console.log(name);
    userImgName.textContent = name;
    return true;
  } else {
    console.log("ket does not exist");
    userPic.style.display = "initial";
    INPUT.style.display = "initial";
    userImgName.style.display = "none";
    return false;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Game /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let num;
let game = document.getElementById("ask"); // accesssing the icon to start the game once clicked
let images = [
  ["img1.jpg",1],
  ["co2.png",2],
  ["co3.png",3],
  ["co4.png",4],
  ["co5.png",5],
  ["co6.png",6],
  ["img3.jpg",7],
  ["co8.png",8],
  ["co9.png",9]]; // an array holding the images names
let newImages = randomize(images); // getting a randomized array of images

let imagesGame = document.getElementById("imagesGame"); // div containing the whole game
let myImage = document.getElementById("myImage"); // image holder
let formm = document.getElementById("formm"); // form with two inputs
let p = document.createElement("p"); // just the title "game"
let pagegraph = document.getElementById("pagegraph"); // a random paragraph!
let counter = 0; // counter
let score = 0; // target
let numbers = document.getElementById("numbers");
let next = document.getElementById("next");
numbers.addEventListener("click", getNumber);
let insidegame = document.getElementById("insidegame");
let imgAndForm = document.getElementById("imgAndForm");
let newDiv = document.getElementById("newDiv");
let divbtnAnsewr = document.getElementById('divbtnAnsewr');
imagesGame.style.display = "none";

function gameStart() {
  game.style.display = 'none';
  imagesGame.style.display = 'block';
  myImage.src = `./img/${newImages[counter][0]}`;
}

function returnNum() {
  return num;
}

function getNumber(e) {
  num = Number(e.target.textContent);
  if (num == newImages[counter][1]) {
    counter++;
    score++;
  } else {
    counter++;
  }
  if (counter == 9) {
    
    insidegame.appendChild(newDiv);
    newDiv.textContent = `Game is over, and your score is ${score} out of 9.`;
    newDiv.style.color = 'white';
    newDiv.style.fontSize = '2rem';
    newDiv.style.textAlign = 'center';
    newDiv.style.display = 'initial';
    game.style.display = 'initial';
    counter = 0;
    numbers.removeEventListener("click", getNumber);
    return;
  }
  gameStart(); // get selected number
}

// randomize(images);
function randomize(arr) {
  // suppose we have an array and we want to have a copy that is randomized
  let randArr = [];
  while (randArr.length != 9) {
    let rand = getRandomIntInclusive(0, 8);
     if (!randArr.includes(rand)) {
       randArr.push(rand);
     } else {
       continue;
     }
  }
  let imgCopy = arr.slice(0);
  for (let i = 0; i < imgCopy.length; i++) {
    imgCopy[i] = arr[randArr[i]];
  }
  return imgCopy;
}

function removeGame() {
  imagesGame.style.display = "none";
  counter = 0;
  location.reload();
}


///// foooter image
let tweets=['tweet1.jpg','tweet2.jpg','tweet3.jpg','tweet4.png','tweet5.png','tweet6.png','tweet7.png','tweet8.png','tweet9.png',
'tweet10.png','tweet11.png','tweet12.png','tweet13.png','tweet14.png','tweet15.png','tweet16.png','tweet17.png','tweet18.png']

let footerImage=document.getElementById('footerImage');

footerImage.style.width='600px';
footerImage.style.height='250px';
footerImage.style.margin='0 100px 0 0';

let num1= 0;
function printImage(){
  footerImage.src=`../tweet/${tweets[num1]}`;
  num1++;
  if(num1 == tweets.length) {
    num1 = 0;
   }
}
window.setInterval(printImage,3000);



