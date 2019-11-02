var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$(".targetNumber").text(targetNumber);



var Crystal1 = Math.floor(Math.random() * 11) + 1;
var Crystal2 = Math.floor(Math.random() * 11) + 1;
var Crystal3 = Math.floor(Math.random() * 11) + 1;
var Crystal4 = Math.floor(Math.random() * 11) + 1;
console.log("crystal number", Crystal1, Crystal2, Crystal3, Crystal4)


$(".wins").html(winCounter);
$(".losses").html(lossCounter);

var counter = 0;
$(".curScore").text(counter);

function restartGame() {

targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);
Cry1 = Math.floor(Math.random() * 11) + 1;
Cry2 = Math.floor(Math.random() * 11) + 1;
Cry3 = Math.floor(Math.random() * 11) + 1;
Cry4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$(".curScore").text(counter);

}

function win() {

	alert("You win!");
	winCounter ++;
	$(".wins").text(winCounter);
	restartGame();
}

function lose() {

	alert("You lose!");
	lossCounter ++;
	$(".losses").text(lossCounter);
	restartGame();
}

$('#Crystal1').on ('click', function(){
    counter = counter + Crystal1;
    
    $('.curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Crystal2').on ('click', function(){
    counter = counter + Crystal2;
    
    $('.curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Crystal3').on ('click', function(){
    counter = counter + Crystal3;
    
    $('.curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Crystal4').on ('click', function(){
    counter = counter + Crystal4;
    
    $('.curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  
