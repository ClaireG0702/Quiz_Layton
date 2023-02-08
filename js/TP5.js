var time = document.querySelector(".time");

var timer = setInterval(function () {
	if (time.innerText == "10") { 
        time.innerText = "9";
	} else 
	if (time.innerText == "9") {
		time.innerText = "8";
	} else 
	if (time.innerText == "8") {
		time.innerText = "7";
	} else 
	if (time.innerText == "7") {
		time.innerText = "6";
	} else 
	if (time.innerText == "6") {
		time.innerText = "5";
	} else 
	if (time.innerText == "5") {
		time.innerText = "4";
	} else 
	if (time.innerText == "4") {
		time.innerText = "3";
	} else 
	if (time.innerText == "3") {
		time.innerText = "2";
	} else 
	if (time.innerText == "2") {
		time.innerText = "1";
	} else 
	if (time.innerText == "1") {
		time.innerText = "0";
	} else 
	if (time.innerText == "0") {
		alert("Temps écoulé !");
	}
}, 1000);

var changetimer = setTimeout(function() {
	document.getElementById("p5").style.color = "red"; 
}, 7000);

setTimeout(function() {
	clearInterval(timer);
}, 11000);


/*var page;

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}*/

//console.log(getRandomInt(4));

/*function nbpage() {
	if (getRandomInt(4) == "0") {
		page = window.location.href = 'TP5q1.html';
	}
	if (getRandomInt(4) == "1") {
		page = window.location.href = 'TP5q2.html';
	}
	if (getRandomInt(4) == "2") {
		page = window.location.href = 'TP5q3.html';
	}
	if (getRandomInt(4) == "3") {
		page = window.location.href = 'TP5q4.html';
	}
}*/

var score = sessionStorage.getItem('data')

function count(x) {
	if (x == 0) {
    	score += 0;
    	document.getElementById("faux1").style.backgroundColor = "#5499C7";
    	document.images["pic1"].src="img/layton choix.png";
    	setTimeout(function() {
    		alert("Mauvaise réponse !");
    	}, 2000);
	} else 
	if (x == 1) {
   		score += 0;
   		document.getElementById("faux2").style.backgroundColor = "#5499C7";
   		document.images["pic2"].src="img/layton choix.png";
    	setTimeout(function() {
    		alert("Mauvaise réponse !");
   		}, 2000);
	} else 
	if (x == 2) {
    	score += 0;
    	document.getElementById("faux3").style.backgroundColor = "#5499C7";
    	document.images["pic3"].src="img/layton choix.png";
    	setTimeout(function() {
    		alert("Mauvaise réponse !");
    	}, 2000);
	} else 
	if (x == 5) {
		score += 1;
		document.getElementById("vrai").style.backgroundColor = "#5499C7";
		document.images["pic5"].src="img/layton choix.png";
		setTimeout(function() {
    		alert("Bonne réponse !");
    	}, 2000);
	}
	console.log(score);
	clearInterval(timer);
	clearTimeout(changetimer);
	document.images["pic10"].src="img/png.png";
	save()
	
}
 
function save() {
	sessionStorage.setItem('data', (score))
} 




function firstpage() {
	window.location.href = 'TP5q1.html';
}
function secondpage() {
	setTimeout(function() {
		window.location.href = 'TP5q2.html';
	}, 3000);
}
function thirdpage() {
	setTimeout(function(){
		window.location.href = 'TP5q3.html';
	}, 3000);
}
function fourthpage() {
	setTimeout(function() {
		window.location.href = 'TP5q4.html';
	}, 3000);
}
function finalpage() {
	setTimeout(function() {
		window.location.href = 'TP5resultat.html';
	}, 3000);
}


var finalscore = document.querySelector(".note"); 
	if(score == '0000') {
		finalscore.innerText = "0/20";
		document.images["pic"].src="img/scoreNul.png";
	} else 
	if(score == '0001' || score == '0010' || score == '0100' || score == '1000') {
		finalscore.innerText = "5/20";
		document.images["pic"].src="img/scoreNul.png";
	} else 
	if(score == '0011' || score == '0101' || score == '0110' || score == '1001' || score == '1010' || score == '1100') {
		finalscore.innerText = "10/20";
		document.images["pic"].src="img/scoreMoyen.png";
	} else 
	if(score == '0111' || score == '1011' || score == '1101' || score == '1110') {
		finalscore.innerText = "15/20";
		document.images["pic"].src="img/scoreBien.png";
	} else 
	if(score == '1111') {
		finalscore.innerText = "20/20";
		document.images["pic"].src="img/scoreBien.png";
	}