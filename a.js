let ans= prompt('enter num ');
let ans1=parseInt(ans);

let amount=1;
if(ans<9||ans>0){
 do {
     amount=ans*amount;
     ans--;
 } while (ans>0);
    console.log(amount)
}else{
    ans= prompt('enter num ');
}