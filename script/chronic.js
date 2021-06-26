'use strict';

let chronicDis = document.getElementById('sec-one');
chronicDis.addEventListener('click', createChroDiv);


function ChronicDiseas(about, symptoms, tips) {
  this.about = about;
  this.symptoms = symptoms;
  this.tips = tips;
  ChronicDiseas.all.push(this);

}
ChronicDiseas.all = [];


let diseasesArray = [
  ["Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. \nMost of the food you eat is broken down into sugar (also called glucose) and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin. Insulin acts like a key to let the blood sugar into your body’s cells for use as energy.\nIf you have diabetes, your body either doesn’t make enough insulin or can’t use the insulin it makes as well as it should. When there isn’t enough insulin or cells stop responding to insulin, too much blood sugar stays in your bloodstream. Over time, that can cause serious health problems, such as heart disease, vision loss, and kidney disease. ", "An irregular or fast heartbeat/Fatigue/Pale skin/Shakiness/Anxiety/Sweating/Hunger/Irritability/Tingling or numbness of the lips, tongue or cheek ", "You should follow the role of 15 ( take 15gm sugar in a glass of water, juice and none skimmed milk  ) then after 15 min check your blood glucose if it still low less than 70 mg/dl repeat until its get more than 70mg/dl then go to see your doctor."]
];

function createChroDiv(evt) {
  
  let index = Number(evt.target.getAttribute('index'));
  let [about, symptoms, tips] = getFromArray(index);
  console.log(about, symptoms, tips);
  new ChronicDiseas(about,'\n', symptoms, '\n', tips);
}

function getFromArray(i) {
  return [diseasesArray[i][0],diseasesArray[i][1],diseasesArray[i][2]];
}