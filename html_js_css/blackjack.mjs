let messageel=document.getElementById("message-el");
console.log(messageel);
// let sumel = document.getElementById("sum-el");
// let sumel=document.querySelector("#sum-el");
let sumel=document.querySelector(".sum-el");
// let cardsel=document.getElementsByClassName(cardsel);
let cardsel=document.querySelector(".cards-el");
let player={
    name:"Nikhil",
    chips:145
};
let playerel=document.querySelector("#player-el")
 //playerel.textContent="Name:"+player.name+" $"+player.chips;

let isalive=false;
let message="";
let cards=[];
let hasblackjaked=false;
let sum;

  //playerel.textContent="Name:"+player.name+" $"+00;
function rendergame(){
     cardsel.textContent="Cards:"
     for(let i=0; i<cards.length; i++){
         cardsel.textContent+=cards[i]+" ";
     }
    sumel.textContent="Sum:"+sum;
    if(sum<=20){
        message="do you want to draw a new card!";
    }
    else if(sum===21){
        message="you have got blackjack,hurrrrrrah!!!";
        hasblackjaked=true;
        playerel.textContent="Name:"+player.name+" $"+player.chips;

        
    }
    else{
        message="you are out of game";
            isalive=false;
          


    }
messageel.textContent=message;
}
function newcard(){
    if(isalive==true&&hasblackjaked==false)
  { let card=getrandomcard();
    cards.push(card);
    sum+=card;
    rendergame();}
}
function getrandomcard(){
  let tp= Math.floor (Math.random()*13)+1;
  if(tp===1){
      return 11;
  }
  else if(tp>10){
return 10;
  }
else{
    return tp;
}
}
function startgame(){
 playerel.textContent="Name:"+player.name+" $"+00;
    hasblackjaked=false;
isalive=true;
let firstcard=getrandomcard();
let secondcard=getrandomcard(); 
cards=[firstcard, secondcard];
sum=firstcard+secondcard;
rendergame();
  
}