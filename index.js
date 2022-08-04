
const img1= document.querySelector(".img1");
const img2= document.querySelector(".img2");

   //1st Dice
         
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1= "dice"+randomNumber1+".png";

img1.setAttribute("src", randomDiceImage1);

// 2nd Dice

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2= "dice"+randomNumber2+".png";

img2.setAttribute("src", randomDiceImage2);


//upload result

const result= document.querySelector(".result");      
 
if(randomNumber1>randomNumber2){

result.innerHTML="Player1 Wins";

}
else if(randomNumber1<randomNumber2){

result.innerHTML="Player2 Wins";

}
else if(randomNumber1===randomNumber2){

result.innerHTML="You draw, Play again";
}

const tollsButton= document.querySelector(".tollsButton");

tollsButton.addEventListener("click", ()=>{

location.reload();

})











