'use strict';

<<<<<<< HEAD
let chronicDis = document.getElementById('section-one');
=======
let chronicDis = document.getElementById('sec-one');
>>>>>>> 3eec25fd0b5aba301c457973d43ca4b3a50d2a5f
chronicDis.addEventListener('click', createChroDiv);


function ChronicDiseas(about, symptoms, tips) {
  this.about = about;
<<<<<<< HEAD
  let symptomsArr = symptoms.split('/');
  this.symptoms = symptomsArr;
  this.tips = tips;
  ChronicDiseas.all.push(this);
  ChronicDiseas.lastIndex = 1000;
=======
  this.symptoms = symptoms;
  this.tips = tips;
  ChronicDiseas.all.push(this);
>>>>>>> 3eec25fd0b5aba301c457973d43ca4b3a50d2a5f

}
ChronicDiseas.all = [];


<<<<<<< HEAD
ChronicDiseas.prototype.render = (obj) => {  

  let div = document.getElementById('container');
  removeAllChildNodes(div);
  let aboutContainer = document.createElement('p');
  let symptomsList = document.createElement('ul');
  let tipsContainer = document.createElement('p');
  let headings = ['About', 'Symptoms', 'Tips'];
  let headingCont = document.createElement('h2');

  for(let i = 0; i < headings.length; i++) {
    switch(i) {
      case 0:
        let heading1 = document.createElement('h2');
        heading1.textContent = headings[i];
        aboutContainer.textContent = obj.about;
        div.append(heading1, aboutContainer);
        break;
      case 1:
        let heading2 = document.createElement('h2');
        heading2.textContent = headings[i];
        div.append(heading2, symptomsList);
        for (let i = 0; i < obj.symptoms.length; i++) {
          let li = document.createElement('li');
          symptomsList.appendChild(li);
          li.textContent = obj.symptoms[i];
        }
        break; 
      case 2:
        let heading3 = document.createElement('h2');
        heading3.textContent = headings[i];
        aboutContainer.textContent = obj.about;
        div.append(heading3, tipsContainer);
        tipsContainer.textContent = obj.tips;
        break;
    }

  }
  
  
  
}

let diseasesArray = [
  ["Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. \nMost of the food you eat is broken down into sugar (also called glucose) and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin. Insulin acts like a key to let the blood sugar into your body’s cells for use as energy.\nIf you have diabetes, your body either doesn’t make enough insulin or can’t use the insulin it makes as well as it should. When there isn’t enough insulin or cells stop responding to insulin, too much blood sugar stays in your bloodstream. Over time, that can cause serious health problems, such as heart disease, vision loss, and kidney disease. ", "An irregular or fast heartbeat/Fatigue/Pale skin/Shakiness/Anxiety/Sweating/Hunger/Irritability/Tingling or numbness of the lips, tongue or cheek ", "You should follow the role of 15 ( take 15gm sugar in a glass of water, juice and none skimmed milk  ) then after 15 min check your blood glucose if it still low less than 70 mg/dl repeat until its get more than 70mg/dl then go to see your doctor."], ['a', 'b/vc/u/r/w', 'd'], ['ss', 's/r/re/t/er/rw/r/we/r/e', 'tips']
];

function createChroDiv(evt) {

  let index = Number(evt.target.getAttribute('index')); 
  if (index <= 4) {
    if (index == ChronicDiseas.lastIndex) {
      return;
    } else {
      let [about, symptoms, tips] = getFromArray(index);
      let chosenDisease = new ChronicDiseas(about, symptoms,  tips);
      ChronicDiseas.lastIndex = index;
      chosenDisease.render(chosenDisease);
    }
  }

=======
let diseasesArray = [
  ["Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. \nMost of the food you eat is broken down into sugar (also called glucose) and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin. Insulin acts like a key to let the blood sugar into your body’s cells for use as energy.\nIf you have diabetes, your body either doesn’t make enough insulin or can’t use the insulin it makes as well as it should. When there isn’t enough insulin or cells stop responding to insulin, too much blood sugar stays in your bloodstream. Over time, that can cause serious health problems, such as heart disease, vision loss, and kidney disease. ", "An irregular or fast heartbeat/Fatigue/Pale skin/Shakiness/Anxiety/Sweating/Hunger/Irritability/Tingling or numbness of the lips, tongue or cheek ", "You should follow the role of 15 ( take 15gm sugar in a glass of water, juice and none skimmed milk  ) then after 15 min check your blood glucose if it still low less than 70 mg/dl repeat until its get more than 70mg/dl then go to see your doctor."]
];

function createChroDiv(evt) {
  
  let index = Number(evt.target.getAttribute('index'));
  let [about, symptoms, tips] = getFromArray(index);
  console.log(about, symptoms, tips);
  new ChronicDiseas(about,'\n', symptoms, '\n', tips);
>>>>>>> 3eec25fd0b5aba301c457973d43ca4b3a50d2a5f
}

function getFromArray(i) {
  return [diseasesArray[i][0],diseasesArray[i][1],diseasesArray[i][2]];
<<<<<<< HEAD
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
=======
>>>>>>> 3eec25fd0b5aba301c457973d43ca4b3a50d2a5f
}