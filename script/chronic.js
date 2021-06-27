'use strict';

let chronicDis = document.getElementById('section-one');
chronicDis.addEventListener('click', createChroDiv);
let hiddenDiv = document.getElementById('hiddenDiv');
hiddenDiv.style.opacity = '0';
let indexPlusOne = 0;
let div = document.createElement('div');
let main = document.getElementById('main');

function ChronicDiseas(about, symptoms, tips) {
  this.about = about;
  let symptomsArr = symptoms.split('/');
  this.symptoms = symptomsArr;
  this.tips = tips;
  ChronicDiseas.all.push(this);
  ChronicDiseas.lastIndex = 1000;

}
ChronicDiseas.all = [];


ChronicDiseas.prototype.render = (obj) => {  

  div = document.createElement('div');
  let nextDiv = chronicDis.children[indexPlusOne + 1];
  console.log(nextDiv);
  chronicDis.insertBefore(div, nextDiv);

  // div.style.height = '0';
  div.style.overflow = 'hidden';
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
  div.className = 'insertedDiv';
  let divHeight = div.offsetHeight;
  console.log(divHeight);
  div.style.height = '0';
  main.style.height = divHeight + 400 + 'px';
    div.animate([
    {height: `${divHeight}px`}
  
    ], {
    duration: 350,
    iterations: 1,
    fill: "forwards"
    });
}

let diseasesArray = [
  ["Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. \nMost of the food you eat is broken down into sugar (also called glucose) and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin. Insulin acts like a key to let the blood sugar into your body’s cells for use as energy.\nIf you have diabetes, your body either doesn’t make enough insulin or can’t use the insulin it makes as well as it should. When there isn’t enough insulin or cells stop responding to insulin, too much blood sugar stays in your bloodstream. Over time, that can cause serious health problems, such as heart disease, vision loss, and kidney disease. ", "An irregular or fast heartbeat/Fatigue/Pale skin/Shakiness/Anxiety/Sweating/Hunger/Irritability/Tingling or numbness of the lips, tongue or cheek ", "You should follow the role of 15 ( take 15gm sugar in a glass of water, juice and none skimmed milk  ) then after 15 min check your blood glucose if it still low less than 70 mg/dl repeat until its get more than 70mg/dl then go to see your doctor."], ["High blood pressure, also called hypertension, is blood pressure that is higher than normal. Your blood pressure changes throughout the day based on your activities. Having blood pressure measures consistently above normal may result in a diagnosis of high blood pressure (or hypertension).\nThe higher your blood pressure levels, the more risk you have for other health problems, such as heart disease, heart attack, and stroke.", 'Severe headaches./Nosebleed./Fatigue or/confusion./Vision problems./Chest pain./Difficulty breathing./Irregular heartbeat./Blood in the urine.', "Blood pressure often increases as weight increases. Being overweight also can cause disrupted breathing while you sleep (sleep apnea), which further raises your blood pressure.\nWeight loss is one of the most effective lifestyle changes for controlling blood pressure. Losing even a small amount of weight if you're overweight or obese can help reduce your blood pressure. In general, you may reduce your blood pressure by about 1 millimeter of mercury (mm Hg) with each kilogram (about 2.2 pounds) of weight you lose.\nBesides shedding pounds, you generally should also keep an eye on your waistline. Carrying too much weight around your waist can put you at greater risk of high blood pressure."], ["A buildup of fatty plaques in your arteries, or atherosclerosis (ath-ur-o-skluh-ROE-sis) can damage your blood vessels and heart. Plaque buildup causes narrowed or blocked blood vessels that can lead to a heart attack, chest pain (angina) or stroke. Coronary artery disease symptoms may be different for men and women.", "Chest pain./ chest tightness./chest pressure and chest discomfort (angina)./ Shortness of breath./Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed./Pain in the neck, jaw, throat, upper abdomen or back.", "Cardiologists are learning more every day about the importance of exercise for people who have heart disease. For many people exercise may, in fact, be the best medicine.\nBe sure to discuss exercise with your doctor, to learn what kinds of exercise might be most advantageous for people with your kind of heart disease, and how to get started with it safely. For many people, beginning with a formal cardiac rehabilitation program is the best way to get started."],
  ["Cancer is a disease caused when cells divide uncontrollably and spread into surrounding tissues. Cancer is caused by changes to DNA. Most cancer-causing DNA changes occur in sections of DNA called genes. These changes are also called genetic changes.", "Fatigue./Lump or area of thickening that can be felt under the skin./Weight changes, including unintended loss or gain./Skin changes, such as yellowing, darkening or redness of the skin, sores that won't heal, or changes to existing moles./Changes in bowel or bladder habits./Persistent cough or trouble breathing.", "You've probably heard conflicting reports about cancer prevention. Sometimes a specific cancer-prevention tip recommended in one study is advised against in another./Often, what's known about cancer prevention is still evolving. However, it's well-accepted that your chances of developing cancer are affected by the lifestyle choices you make./So if you're interested in preventing cancer, take comfort in the fact that simple lifestyle changes can make a difference. Consider cancer-prevention tips like avoiding using tobacco and having a healthy diet."], 
  ["Angina is chest pain or discomfort caused when your heart muscle doesn't get enough oxygen-rich blood. It may feel like pressure or squeezing in your chest. The discomfort also can occur in your shoulders, arms, neck, jaw, or back. Angina pain may even feel like indigestion.\nBut, angina is not a disease. It is a symptom of an underlying heart problem, usually coronary heart disease (CHD).There are many types of angina, including microvascular angina, Prinzmetal's angina, stable angina, unstable angina and variant angina.", "Chest pain and discomfort, possibly described as pressure, squeezing, burning or fullness./You may also have pain in your arms, neck, jaw, shoulder or back./Dizziness./Fatigue./Nausea./Shortness of breath./Sweating.", "It is recommended to avoid smoking, control high blood pressure, reduce your cholesterol level, be physically active, and control your blood glucos in case you have diabetes to avoid or reduce the effects or Angina."]
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
      indexPlusOne = index + 1;
      try {
        chronicDis.removeChild(div);
      } catch {
        console.log('div already removed');
      }
      chosenDisease.render(chosenDisease);
    }
  }
}

function getFromArray(i) {
  return [diseasesArray[i][0],diseasesArray[i][1],diseasesArray[i][2]];
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}