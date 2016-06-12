
var currentTimeNode = document.querySelector('#number-format')
var currentTimeHexNode = document.querySelector('#hex-format')
var showTime = function(){
	var date = new Date()
	var hours = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()
	
	if(hours < 10){
		hours = "0" + hours
	}
	if(minutes < 10){
		minutes = "0" + minutes
	}
	if(seconds < 10){
		seconds = "0" + seconds
	}

	var currentTime = hours + ':' + minutes + ':' + seconds
	currentTimeNode.textContent = currentTime

	var showBackgroundHex = function(){
		var mainDiv = document.querySelector('html')
		var randomColor1 = Math.floor(Math.random() * 100 + 100)
		var randomColor2 = Math.floor(Math.random() * 100 + 100)
		var randomColor3 = Math.floor(Math.random() * 100 + 100)

		var color1 = '#' + randomColor1.toString(16) + randomColor2.toString(16) + randomColor3.toString(16)
		var color2 = '#' + randomColor3.toString(16) + randomColor1.toString(16) + randomColor2.toString(16)

		mainDiv.style.backgroundImage =  'repeating-radial-gradient(circle at center, '+color1+' 10px, '+color2+' 60px)'
		
		var backgroundHex = randomColor1.toString(16) + ':' + randomColor2.toString(16) + ':' + randomColor3.toString(16)
		currentTimeHexNode.textContent = backgroundHex
	}
	showBackgroundHex()
}

var clockId = setInterval(showTime,1000)

var width = 1.66
var widthReset = 0
var secondsBarNode = document.querySelector('#progress-bar')
var progressBar = function(){
	var date = new Date()
	var hours = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()
	console.log(seconds)
	if(seconds > 0){
		width = (seconds/60) * 50
		console.log(width)
	}
	else{
		width = 0
	}
	secondsBarNode.style.width = width + '%'
}
var progressId = setInterval(progressBar, 1000)
