'use strict';

let tipHeading = document.getElementById('tip-header');
let tipContent = document.getElementById('tip-content');

let tips = [
'Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day. You can improve your intake of fruits and vegetables by always including veggies in your meal; eating fresh fruit and vegetables as snacks; eating a variety of fruits and vegetables; and eating them in season. ',

"Fats consumed should be less than 30% of your total energy intake. This will help prevent unhealthy weight gain and NCDs. There are different types of fats, but unsaturated fats are preferable over saturated fats and trans-fats. WHO recommends reducing saturated fats to less than 10% of total energy intake; reducing trans-fats to less than 1% of total energy intake; and replacing both saturated fats and trans-fats to unsaturated fats.",

'There is no safe level for drinking alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders, including alcohol dependence, major NCDs such as liver cirrhosis, some cancers and heart diseases, as well as injuries resulting from violence and road clashes and collisions.',

'Smoking tobacco causes NCDs such as lung disease, heart disease and stroke. Tobacco kills not only the direct smokers but even non-smokers through second-hand exposure. Currently, there are around 15.9 million Filipino adults who smoke tobacco but 7 in 10 smokers are interested or plan to quit.\nIf you are currently a smoker, it’s not too late to quit. Once you do, you will experience immediate and long-term health benefits. If you are not a smoker, that’s great! Do not start smoking and fight for your right to breathe tobacco-smoke-free air.',

'Physical activity is defined as any bodily movement produced by skeletal muscles that requires energy expenditure. This includes exercise and activities undertaken while working, playing, carrying out household chores, travelling, and engaging in recreational pursuits. The amount of physical activity you need depends on your age group but adults aged 18-64 years should do at least 150 minutes of moderate-intensity physical activity throughout the week. Increase moderate-intensity physical activity to 300 minutes per week for additional health benefits.',

'Hypertension, or high blood pressure, is called a “silent killer”. This is because many people who have hypertension may not be aware of the problem as it may not have any symptoms. If left uncontrolled, hypertension can lead to heart, brain, kidney and other diseases. Have your blood pressure checked regularly by a health worker so you know your numbers. If your blood pressure is high, get the advice of a health worker. This is vital in the prevention and control of hypertension.',

'Getting yourself tested is an important step in knowing your health status, especially when it comes to HIV, hepatitis B, sexually-transmitted infections (STIs) and tuberculosis (TB). Left untreated, these diseases can lead to serious complications and even death. Knowing your status means you will know how to either continue preventing these diseases or, if you find out that you’re positive, get the care and treatment that you need. Go to a public or private health facility, wherever you are comfortable, to have yourself tested.',

'Vaccination is one of the most effective ways to prevent diseases. Vaccines work with your body’s natural defences to build protection against diseases like cervical cancer, cholera, diphtheria, hepatitis B, influenza, measles, mumps, pneumonia, polio, rabies, rubella, tetanus, typhoid, and yellow fever.\nIn the Philippines, free vaccines are provided to children 1 year old and below as part of the Department of Health’s routine immunization programme.',

'Diseases such as influenza, pneumonia and tuberculosis are transmitted through the air. When an infected person coughs or sneezes, infectious agents may be passed on to others through airborne droplets. When you feel a cough or sneeze coming on, make sure you have covered your mouth with a face mask or use a tissue then dispose it carefully. If you do not have a tissue close by when you cough or sneeze, cover your mouth as much as possible with the crook (or the inside) of your elbow.',

'Mosquitoes are one of the deadliest animals in the world. Diseases like dengue, chikungunya, malaria and lymphatic filariasis are transmitted by mosquitoes and continue to affect Filipinos. You can take simple measures to protect yourself and your loved ones against mosquito-borne diseases. If you’re traveling to an area with known mosquito-borne diseases, consult a physician for a vaccine to prevent diseases such as Japanese encephalitis and yellow fever or if you need to take antimalarial medicines.'
];

let tipTitle = [
  'Eat a healthy diet', 'Consume less salt and sugar', 'Reduce intake of harmful fats', 'Avoid harmful use of alcohol', 'Don’t smoke', 'Be active', 'Check your blood pressure regularly', 'Get tested', 'Get vaccinated', 'Cover your mouth when coughing or sneezing', 'Prevent mosquito bites'
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


///////////////////////////////////////////////////////////////////
/*window.addEventListener('click', removeDiv);

let main = document.getElementById('main');
let urgentCons = document.getElementById('urgent');
urgentCons.addEventListener('click',popUpDiv);
let compStyles = window.getComputedStyle(urgentCons);

let newDiv =document.createElement('form');

function popUpDiv(e) {
  // console.log(urgentCons.offsetTop);
  let winWidth = window.innerWidth;
  
  let toLeft = (winWidth - 1170)/2;
  
  let top = urgentCons.offsetTop;
  let left = urgentCons.offsetLeft;
  let width = urgentCons.offsetWidth;
  let height = urgentCons.offsetHeight;
  let limitLeft = left - toLeft;
  console.log(winWidth);
  // console.log('hey');
  
  let fieldset = document.createElement('fieldset');
  newDiv.appendChild(fieldset);
  let select = document.createElement('select');
  select.style.width = '100%';
  select.style.margin = 'auto';
  fieldset.appendChild(select);
  for (let i = 0; i < 7; i++) {
    let option = document.createElement('option');
    option.textContent = 'new option';
    select.appendChild(option);
  }
  let textArea = document.createElement('textarea');
  textArea.style.width = '100%';
  textArea.style.height = '100px';
  textArea.style.marginTop = '5rem';
  fieldset.appendChild(textArea);
  let secondSection = document.getElementById('second-section');

  // newDiv.style.border = 'solid red 3px';
  newDiv.style.margin = 'auto';

  newDiv.style.position = 'absolute';
  newDiv.style.overflow = 'hidden';
  newDiv.style.top = top + 'px';
  newDiv.style.left = left + 'px';
  newDiv.style.width = width + 'px';
  newDiv.style.height = 'fit-content';

//   let id = setInterval(animate, 0.1);

//   let counter = 10;
//   function animate() {
//     if (newDiv.offsetTop == 300 && newDiv.offsetLeft== 300) {
//       clearInterval(id);
//       return;
//   }

//   newDiv.style.top = counter + 'px';
//   newDiv.style.left = counter + 'px';
//   newDiv.style.width = counter + 'px';
//   counter++;
// }
  // newDiv.addEventListener('animationstart', animateY);
  // main.style.filter = 'blur(5px)';
//  newDiv.style.width = '100%';
//  newDiv.style.height = '100%';
  main.style.zIndex = '0';
  newDiv.style.zIndex = '99';
  main.style.opacity = '30%';
  newDiv.style.background = '#CDF0EA';
 newDiv.style.borderRadius = '25px';
  let dimenstion = urgentCons.getComputedStyle;
  console.log(dimenstion);
  newDiv.animate([
  {transform: 'matrix( 2, 0, 0, 2,-300, 200)'}

  ], {
  duration: 300,
  iterations: 1,
  fill: "forwards"
  });
  urgentCons.removeEventListener('click',popUpDiv );


  document.body.insertBefore(newDiv, main);
  // newDiv.style.top = "-300px";
  // newDiv.style.left = "200px";
}

function removeDiv(e) {
  console.log(e.target);
  
  try {
    if (e.target.id != 'urgent') {
      document.body.removeChild(newDiv);
      main.style.opacity = '100%';
      newDiv =document.createElement('form');
      urgentCons.addEventListener('click',popUpDiv);
    } } catch (error){
      console.log('element is removed');
      newDiv =document.createElement('form');
      urgentCons.addEventListener('click',popUpDiv);
    } 
  }
  



// function animateY(e) {
//   console.log('animation going');
//   newDiv.animate([
//     {transform: `translateY(${limitLeft + 'px'})`  }
//     // {transform: `translateY(${limitLeft + 'px'})`  }
//   ], {
//   duration: 1000,
//   iterations: 1,
//   fill: "forwards"
//   });
// }
*/
let inbut = document.getElementById('inbut');

function Form (number , name , email){
  this.number = number;
  this.name = name;
  this.email = email;
  Form.all.push(this);

}

Form.all = [];

function info (event){
  event.preventDefault();

  let number = event.target.phone.value;
  let name = event.target.name.value;
  let email = event.target.email.value;

  new Form(number , name , email);

  localStorage.setItem('click', JSON.stringify(Form.all));
  inbut.reset();

}

inbut.addEventListener('submit', info);

function getData(){
  let data = JSON.parse(localStorage.getItem(Form.all));
  for(let i = 0; i < Form.all.length; i++ ){
    new Form(data[i].number, data[i].name , data[i].email  );
  }
}
getData();

