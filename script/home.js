'use strict';

let INPUT = document.getElementById('input');
let userImgName = document.getElementById('userName');
let userPic = document.getElementById('userPic');
userPic.style.display = 'none';

document.body.onload = checkLocal(localStorage);



let tipHeading = document.getElementById('tip-header');
let tipContent = document.getElementById('tip-content');

let tips = [
'Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day. You can improve your intake of fruits and vegetables by always including veggies in your meal; eating fresh fruit and vegetables as snacks; eating a variety of fruits and vegetables; and eating them in season. By eating healthy, you will reduce your risk of malnutrition and noncommunicable diseases (NCDs) such as diabetes, heart disease, stroke and cancer.',

"Filipinos consume twice the recommended amount of sodium, putting them at risk of high blood pressure, which in turn increases the risk of heart disease and stroke. Most people get their sodium through salt. Reduce your salt intake to 5g per day, equivalent to about one teaspoon. It’s easier to do this by limiting the amount of salt, soy sauce, fish sauce and other high-sodium condiments when preparing meals; removing salt, seasonings and condiments from your meal table; avoiding salty snacks; and choosing low-sodium products.\nOn the other hand, consuming excessive amounts of sugars increases the risk of tooth decay and unhealthy weight gain. In both adults and children, the intake of free sugars should be reduced to less than 10% of total energy intake. This is equivalent to 50g or about 12 teaspoons for an adult. WHO recommends consuming less than 5% of total energy intake for additional health benefits. You can reduce your sugar intake by limiting the consumption of sugary snacks, candies and sugar-sweetened beverages.",

"Fats consumed should be less than 30% of your total energy intake. This will help prevent unhealthy weight gain and NCDs. There are different types of fats, but unsaturated fats are preferable over saturated fats and trans-fats. WHO recommends reducing saturated fats to less than 10% of total energy intake; reducing trans-fats to less than 1% of total energy intake; and replacing both saturated fats and trans-fats to unsaturated fats.\nThe preferable unsaturated fats are found in fish, avocado and nuts, and in sunflower, soybean, canola and olive oils; saturated fats are found in fatty meat, butter, palm and coconut oil, cream, cheese, ghee and lard; and trans-fats are found in baked and fried foods, and pre-packaged snacks and foods, such as frozen pizza, cookies, biscuits, and cooking oils and spreads.",

'There is no safe level for drinking alcohol. Consuming alcohol can lead to health problems such as mental and behavioural disorders, including alcohol dependence, major NCDs such as liver cirrhosis, some cancers and heart diseases, as well as injuries resulting from violence and road clashes and collisions.',

'Smoking tobacco causes NCDs such as lung disease, heart disease and stroke. Tobacco kills not only the direct smokers but even non-smokers through second-hand exposure. Currently, there are around 15.9 million Filipino adults who smoke tobacco but 7 in 10 smokers are interested or plan to quit.\nIf you are currently a smoker, it’s not too late to quit. Once you do, you will experience immediate and long-term health benefits. If you are not a smoker, that’s great! Do not start smoking and fight for your right to breathe tobacco-smoke-free air.',

'Physical activity is defined as any bodily movement produced by skeletal muscles that requires energy expenditure. This includes exercise and activities undertaken while working, playing, carrying out household chores, travelling, and engaging in recreational pursuits. The amount of physical activity you need depends on your age group but adults aged 18-64 years should do at least 150 minutes of moderate-intensity physical activity throughout the week. Increase moderate-intensity physical activity to 300 minutes per week for additional health benefits.',

'Hypertension, or high blood pressure, is called a “silent killer”. This is because many people who have hypertension may not be aware of the problem as it may not have any symptoms. If left uncontrolled, hypertension can lead to heart, brain, kidney and other diseases. Have your blood pressure checked regularly by a health worker so you know your numbers. If your blood pressure is high, get the advice of a health worker. This is vital in the prevention and control of hypertension.',

'Getting yourself tested is an important step in knowing your health status, especially when it comes to HIV, hepatitis B, sexually-transmitted infections (STIs) and tuberculosis (TB). Left untreated, these diseases can lead to serious complications and even death. Knowing your status means you will know how to either continue preventing these diseases or, if you find out that you’re positive, get the care and treatment that you need. Go to a public or private health facility, wherever you are comfortable, to have yourself tested.',

'Vaccination is one of the most effective ways to prevent diseases. Vaccines work with your body’s natural defences to build protection against diseases like cervical cancer, cholera, diphtheria, hepatitis B, influenza, measles, mumps, pneumonia, polio, rabies, rubella, tetanus, typhoid, and yellow fever.\nIn the Philippines, free vaccines are provided to children 1 year old and below as part of the Department of Health’s routine immunization programme. If you are an adolescent or adult, you may ask your physician if to check your immunization status or if you want to have yourself vaccinated.',

'Diseases such as influenza, pneumonia and tuberculosis are transmitted through the air. When an infected person coughs or sneezes, infectious agents may be passed on to others through airborne droplets. When you feel a cough or sneeze coming on, make sure you have covered your mouth with a face mask or use a tissue then dispose it carefully. If you do not have a tissue close by when you cough or sneeze, cover your mouth as much as possible with the crook (or the inside) of your elbow.',

'Mosquitoes are one of the deadliest animals in the world. Diseases like dengue, chikungunya, malaria and lymphatic filariasis are transmitted by mosquitoes and continue to affect Filipinos. You can take simple measures to protect yourself and your loved ones against mosquito-borne diseases. If you’re traveling to an area with known mosquito-borne diseases, consult a physician for a vaccine to prevent diseases such as Japanese encephalitis and yellow fever or if you need to take antimalarial medicines. Wear light-coloured, long-sleeved shirts and pants and use insect repellent. At home, use window and door screens, use bed nets and clean your surroundings weekly to destroy mosquito breeding sites.'
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

/////////////////////////////////////////////////////////////////////////////////////////





function Form (number , name , email){
  this.number = number;
  this.name = name;
  this.email = email;
  Form.all.push(this);

}

Form.all = [];

function info (event){
  
  if (checkLocal(localStorage)) {
    return;
  } else {
    event.preventDefault();

    let number = event.target.phone.value;
    let name = event.target.name.value;
    let email = event.target.email.value;

    new Form(number , name , email);

    localStorage.setItem('click', JSON.stringify(Form.all));
    INPUT.reset();
    checkLocal(localStorage);
  }
  

}
INPUT.addEventListener('submit', info);

function getData(){
  let data = JSON.parse(localStorage.getItem(Form.all));
  for(let i = 0; i < Form.all.length; i++ ){
    new Form(data[i].number, data[i].name , data[i].email  );
  }
}
getData();






let path3=window.location.pathname;

console.log(path3)


if(path2=='/html/home.html'){
  let covid=document.getElementById('Home');
  
  covid.setAttribute('style','background:black')
}









function checkLocal(local) {
  if (local.hasOwnProperty('click')) {
    userImgName.style.display = 'initial';
    userPic.style.display = 'none';
    INPUT.style.display = 'none';
    let name = JSON.parse(localStorage.click)[0].name;
    name = name.split(' ').map(item => item.toUpperCase()).map(item => {return item[0]}).join('');
    console.log(name);
    userImgName.textContent = name;
    return true;
  } else {
    console.log('ket does not exist');
    userPic.style.display = 'initial';
    INPUT.style.display = 'initial';
    userImgName.style.display = 'none';
    return false;
  }
}

///////////////////////////////////Game
let game =document.getElementById('ask');
let images=['co2.png','co3.png','co4.png','co5.png','co6.png','co7.png','co8.png','co9.png'];
let imagesGame=document.getElementById('imagesGame');
let myImage=document.getElementById('myImage');
let formm=document.getElementById('formm');
let p = document.createElement('p');
let pagegraph=document.getElementById('pagegraph');
let counter=0;
let targrt =0;

imagesGame.setAttribute('style','display:none');
function Game(amgSrc,answerr){

  this.amgSrc=amgSrc;
  this.answerr=answerr;
  Game.all.push(this);

}
Game.all=[];
for(let i=0;i<images.length;i++)
{
  new Game (`../img/${images[i]}`,i+2);
}
function render(){
   
  imagesGame.setAttribute('style','display:inline');
  myImage.src=`../img/${images[counter]}`;
  

}

function hadler(event){
event.preventDefault();
let ans=event.target.answer.value;
if(Game.all[counter].answerr==ans)
{
  targrt++; 
  counter++;
  render(); 
}
else if(counter==7){

  removeEventListener('submit',hadler);
  imagesGame.setAttribute('style','display:none');
  
  p.textContent=`Your Resut Is ${targrt}/8`
  pagegraph.appendChild(p);

}

else{
  
  counter++;
  render();
}

}

formm.addEventListener('submit',hadler);