playername= localStorage.getItem("player_name")
console.log(playername);
// random value generated
  var y = Math.floor(Math.random()* 10 + 1);
  guess = 1;
// counting the number of guesses
// made for correct Guess
function submit() {
    var x = document.getElementById("guessField").value;
if (x == y)
{
    alert("CONGRATULATION!!!"+playername+"  YOU GUESSED IT RIGHT IN"
            + guess + " GUESS ");
    guess = 1;
}
else if(x > y)
{
    guess++;
    alert("OOPS SOORY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SOORY!! TRY A GREATER NUMBER");
}
}
  
function playAgain(){
    Math.floor(Math.random()* 10 + 1);
} 
