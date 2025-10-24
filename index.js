//variables for timer
let minutes = 12;
let secondes = minutes * 60;
let cycle = 0;
let idInterval;

let minDisplay = 12;
let secDisplay = 0;

let minElt = document.getElementById("min");
let secElt = document.getElementById("sec");
let qOne = document.getElementById("q1");
let qTwo = document.getElementById("q2");
let qThree = document.getElementById("q3");
let qFour = document.getElementById("q4");

let timerPlay = document.getElementById("timer__play");
let timerPause = document.getElementById("timer__pause");

//variables for score
let scoreEltHome = document.getElementById("score__el__A");
let scoreEltGuest = document.getElementById("score__el__B");
let scoreHome = 0;
let scoreGuest = 0;

//variables for stats
let foulEltHome = document.getElementById("home__foul__value");
let ftEltHome = document.getElementById("home__ft__value");
let reboundEltHome = document.getElementById("home__rebound__value");
let foulEltGuest = document.getElementById("guest__foul__value");
let ftEltGuest = document.getElementById("guest__ft__value");
let reboundEltGuest = document.getElementById("guest__rebound__value");
let foulHome =0;
let ftHome = 0;
let reboundHome = 0;
let foulGuest =0;
let ftGuest = 0;
let reboundGuest = 0;

//functions for score
function addAOne() {
	scoreHome += 1;
	scoreEltHome.textContent = scoreHome;
	bestTeam();
}

function addATwo() {
	scoreHome += 2;
	scoreEltHome.textContent = scoreHome;
	bestTeam();
}

function addAThree() {
	scoreHome += 3;
	scoreEltHome.textContent = scoreHome;
	bestTeam();
}

function addBOne() {
	scoreGuest += 1;
	scoreEltGuest.textContent = scoreGuest;
	bestTeam();
}

function addBTwo() {
	scoreGuest += 2;
	scoreEltGuest.textContent = scoreGuest;
	bestTeam();
}

function addBThree() {
	scoreGuest += 3;
	scoreEltGuest.textContent = scoreGuest;
	bestTeam();
}

function addAfoul() {
	foulHome += 1;
	foulEltHome.textContent = foulHome;
}

function addAFt() {
	ftHome += 1;
	ftEltHome.textContent = ftHome;
}

function addARebound() {
	reboundHome += 1;
	reboundEltHome.textContent = reboundHome;
}

function addBfoul() {
	foulGuest += 1;
	foulEltGuest.textContent = foulGuest;
}

function addBFt() {
	ftGuest += 1;
	ftEltGuest.textContent = ftGuest;
}

function addBRebound() {
	reboundGuest += 1;
	reboundEltGuest.textContent = reboundGuest;
}

function decrementTimer() {
	timerPlay.style.display = 'none';
	timerPause.style.display = 'block';
		idInterval = setInterval(()=>{
		secondes--;
		
		minDisplay = Math.floor(secondes / 60);
		secDisplay = secondes % 60;
		
		minElt.textContent = minDisplay;
		secElt.textContent = secDisplay;
		
		if(secondes <= 0) {
			clearInterval(idInterval);
			secondes = minutes * 60;
			cycle +=1;
			
			if (cycle == 0) {
				qOne.style.backgroundColor = 'transparent';
				qTwo.style.backgroundColor = 'transparent';
				qThree.style.backgroundColor = 'transparent';
				qFour.style.backgroundColor = 'transparent';
			} else if(cycle == 1) {
				qOne.style.backgroundColor = '#660c04';
			} else if (cycle == 2) {
				qTwo.style.backgroundColor = '#660c04';
			} else if (cycle == 3) {
				qThree.style.backgroundColor = '#660c04';
			} else if (cycle ==4) {
				qFour.style.backgroundColor = '#660c04';
			}
		}	
	}, 
	1000
	);
}

function timePause() {
	timerPlay.style.display = 'block';
	timerPause.style.display = 'none';
	clearInterval(idInterval);
}

function timerReset() {
	timerPlay.style.display = 'block';
	timerPause.style.display = 'none';
	clearInterval(idInterval);
	cycle = 0;
	minutes = 12;
	secondes = minutes * 60;
	minDisplay = Math.floor(secondes / 60);
	secDisplay = secondes % 60;
		
	minElt.textContent = minDisplay;
	secElt.textContent = secDisplay;
}

function bestTeam() {
	if(scoreHome > scoreGuest) {
		scoreEltHome.style.color = 'wheat';
		scoreEltGuest.style.color = 'red';
	} else if (scoreGuest > scoreHome) {
		scoreEltHome.style.color = 'red';
		scoreEltGuest.style.color = 'wheat';
	} else {
		scoreEltHome.style.color = 'red';
		scoreEltGuest.style.color = 'red';
	}
}