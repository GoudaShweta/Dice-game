/*var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6 +1;
randomNumber1 = Math.floor(randomNumber1);*/

var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;		//1 - 5

var randomImage = "dice" + randomNumber1 + ".png"; 			//concatenation, dice1.png - dice6.png	

var randomImageSource = "images/" + randomImage;			//images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;				//1 - 5

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";	//images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomNumber2 > randomNumber1){
	document.querySelector("h1").innerHTML = "Player2 wins";
}
else{
	document.querySelector("h1").innerHTML = "Draw!";
}