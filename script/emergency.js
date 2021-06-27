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
let mainContainer = document.getElementById('mainContainer');

function Emergency(name, instructions) {
  this.name = name;
  this.instructions = instructions;
  Emergency.prototype.render = () => {
    console.log(this);
  };
}


let instructionsArray = [
  ['Nosebleeds', "to lean forward slightly while sitting or standing, avoiding lying down, or tilting the head back; Because that will cause swallowing blood, and vomiting./Hold the nose soft (not bony) on both sides, avoiding pressure on only one side, even if the bleeding is on only one side./Pressing the nose for at least five minutes for children, and 10 to 15 minutes for adults, without decompressing the nose; To discover whether the bleeding has stopped, until after the specified time has passed./Cold compresses or an ice pack can be placed on the nose, as it helps the blood vessels constrict."],
  ['Road Accidents', "start with the most affected injured, keep calm and cooperate with others, do not give food or drink to the injured do not move the injured except in necessary cases./Open the patient's airways by tilting the head back and lifting the lower jaw./Check the mouth to make sure that there is no obstruction that may cause the breathing to stop./The airway to the lungs must also be opened, to ensure that fresh air reaches the body during the process of natural or artificial respiration./Call 911."],
  ['Fractures', "Stop bleeding by applying light pressure to the wound with a sterile bandage or clean cloth, until the bleeding stops./Fix the affected area, If the paramedic is trained, immobilization of the affected area can be done with splints, arm slings, or  planks. In the event that the person is not qualified to perform this procedure, he should not move the victim, and not try to realign the bone or push the protruding bone./Treat the victim from shock by reassuring him, placing him in a comfortable position, encouraging him to calm down and relaxing, and covering him with a blanket to warm him./If the casualty faints, feels faint, or cannot breathe properly, he should lie on the floor with his head slightly lower than the torso, or raise his legs above  chest level if possible./Caution is advised not to raise the affected limb if it causes severe pain."],
  ['Burns',"Cool the burn to help soothe the pain./Place the burned area under moderately cold running tap water for 10 to 15 minutes to ease the pain./Remove accessories (such as: rings, watches, or belts), if any, or remove shoes or any clothing gently and quickly, before the area swells./Cover the burn area with a damp pad or cool clean cloth to reduce the risk of infection./Take a pain reliever if needed to relieve the pain./Seek help right away if the burn is severe and extends over large areas, or if you notice signs of infection such as increased pain, redness, and swelling."], 
  ['Fainting', "Position the person on his or her back. If there are no injuries and the person is breathing, raise the person's legs above heart level — about 12 inches (30 centimeters) — if possible. Loosen belts, collars or other constrictive clothing./To reduce the chance of fainting again, don't get the person up too quickly. If the person doesn't regain consciousness within one minute, call 911 or your local emergency number./Check for breathing. If the person isn't breathing, begin CPR. Call 911 or your local emergency number. Continue CPR until help arrives or the person begins to breathe./If the person was injured in a fall associated with a faint, treat bumps, bruises or cuts appropriately. Control bleeding with direct pressure."],
  ['CPR', "Put the person on his or her back on a firm surface./Kneel next to the person's neck and shoulders./Place the lower palm (heel) of your hand over the center of the person's chest, between the nipples./Place your other hand on top of the first hand. Keep your elbows straight and position your shoulders directly above your hands./Push straight down on (compress) the chest at least 2 inches (5 centimeters) but no more than 2.4 inches (6 centimeters). Use your entire body weight (not just your arms) when doing compressions./Push hard at a rate of 100 to 120 compressions a minute. The American Heart Association suggests performing compressions to the beat of the song 'Stayin\' Alive' Allow the chest to spring back (recoil) after each push./If you haven't been trained in CPR, continue chest compressions until there are signs of movement or until emergency medical personnel take over. If you have been trained in CPR, go on to opening the airway and rescue breathing./After opening the airway (using the head-tilt, chin-lift maneuver), pinch the nostrils shut for mouth-to-mouth breathing and cover the person's mouth with yours, making a seal./Prepare to give two rescue breaths. Give the first rescue breath — lasting one second — and watch to see if the chest rises./If the chest rises, give a second breath./If the chest doesn't rise, repeat the head-tilt, chin-lift maneuver and then give a second breath. Thirty chest compressions followed by two rescue breaths is considered one cycle. Be careful not to provide too many breaths or to breathe with too much force./Resume chest compressions to restore blood flow./As soon as an automated external defibrillator (AED) is available, apply it and follow the prompts. Give one shock, then resume chest compressions for two more minutes before giving a second shock."],
  ['Heat stroke', "Immediately move the person away from a hot place, remove excess clothing, and try to cool him down by any means possible."],
  ['Seizure', "Stay with the person until the seizure ends and he or she is fully awake. After it ends, help the person sit in a safe place. Once they are alert and able to communicate, tell them what happened in very simple terms./Comfort the person and speak calmly./Check to see if the person is wearing a medical bracelet or other emergency information./Keep yourself and other people calm./Offer to call a taxi or another person to make sure the person gets home safely."]
];

// console.log(instructionsArray.length);
mainContainer.addEventListener('click', checkChoice);

function checkChoice(e) {
  // console.log(e.target.parentNode.children[1]);
  let instructions;
  let name = e.target.parentNode.children[1].textContent; //
  for (let i = 0; i < instructionsArray.length; i++) {
    if (instructionsArray[i].includes(name)){
      // console.log(i);
      instructions = instructionsArray[i][1].split('/');
    }
  }
  let emergency = new Emergency(name, instructions);
  // console.log(emergency);
  localStorage.clear();
  change_page(emergency);
  emergency.render();
}

function change_page(obj) {
  console.log(obj);
  localStorage.setItem('obj', JSON.stringify(obj));
  window.location.href = '../html/instructions.html';
}

