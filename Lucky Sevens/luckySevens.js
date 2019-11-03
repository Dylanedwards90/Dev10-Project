// Function to roll dice and get a random number between 1 and 6
function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}
// Creation of a function that will play the game when a starting bet is made
function play(){
	var startingBet = Number(document.forms["luckySevens"]["bet"].value); //starting bet is the amount the user inputs
	var money = startingBet; //money is equal to users input in startingBet
	var Die1;
	var Die2;
	var diceSum;
	var maxWinnings = 0;
	var rolls = 0;
	var rollsAtMax = 0;

	if(money<=0){
		alert("Starting bet needs to be greater than $0");
	}//money can NOT be 0 or a negative number
	else{
		//Creation of a loop that will keep rolling dice until money is $0
		while(money > 0){
			Die1 = rollDice();
			Die2 = rollDice();
			diceSum = Die1 + Die2;
			rolls++;
			// If dice roll is not equal to 7, the player loses (-$1).
			if(diceSum != 7){
				money--; //decreases money by 1
				console.log("lost");
			}
			// If dice roll is 7, the player wins (+$4).
			else{
				money += 4;
				if(money > maxWinnings){
					maxWinnings += (money-maxWinnings);
					rollsAtMax = rolls;
				}// The amount of rolls to get to maxWinnings or Highest Amount Won
				console.log("win");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again?";
	document.getElementById("start").innerText = startingBet;
	document.getElementById("rollsNum").innerText = rolls;
	document.getElementById("max").innerText = maxWinnings;
	document.getElementById("rollsAtMax").innerText = rollsAtMax;
	return false;
}