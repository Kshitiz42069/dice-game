var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomimage1 = "./images/dice"+randomnumber1+".png";
var randomimage2 = "./images/dice"+randomnumber2+".png";

document.querySelector(".img1").setAttribute("src",randomimage1);
document.querySelector(".img2").setAttribute("src",randomimage2);

var message;

if(randomnumber1>randomnumber2){
    message = "🚩 Player 1 wins";
}
else if(randomnumber1<randomnumber2){
    message = "Player 2 wins 🚩";
}
else{
    message = "🚩Draw!🚩";
}

document.querySelector("h1").innerHTML= message;