var squares = document.querySelectorAll('.square');
var colors = generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');
var numOfSquares = 6;


main(numOfSquares);

resetButton.addEventListener('click', function(){
	main(numOfSquares);
});

easyBtn.addEventListener('click', function(){
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	numOfSquares = 3;
	main(numOfSquares);
	for (var i = 3; i < 6; i++) {
		squares[i].style.display = "none";
	}
});

hardBtn.addEventListener('click', function(){
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numOfSquares = 6;
	for (var i = 3; i < 6; i++) {
		squares[i].style.display = "block";
	}
	main(numOfSquares);
});


function main(numOfSquares){
	// Initialization
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	resetButton.textContent = "NEW COLOR";
	message.textContent = "";
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener('click', function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				changeColorAllSquares(pickedColor);
				message.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
			
		});
	}
}

function pickColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}

function changeColorAllSquares(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// random number between 0 and 255
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
	return rgb;
}