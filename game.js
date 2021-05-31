player__1 = localStorage.getItem("player_1");
player__2 = localStorage.getItem("player_2");

player1_score = 0 ; 
player2_score = 0 ; 

document.getElementById("player11").innerHTML = player__1 + ":";
document.getElementById("player22").innerHTML = player__2 + ":";

document.getElementById("player11_score").innerHTML = player1_score ;
document.getElementById("player22_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question turn" + player__1 ;
document.getElementById("player_answer").innerHTML = "Answer turn" + player__1 ;

function sent1()
 { get_word = document.getElementById("word").value; 
 word = get_word.toLowerCase(); 
 console.log("word in lowerCase = " + word); 
 charAt1 = word.charAt(1); 
 console.log(charAt1); 
 lenght_divide_2 = Math.floor(word.length/2); 
 charAt2 = word.charAt(lenght_divide_2); 
 console.log(charAt2); 
 lenght_minus_1 = word.length - 1;
  charAt3 = word.charAt(lenght_minus_1);
   console.log(charAt3);
    remove_charAt1 = word.replace(charAt1, "_"); 
    remove_charAt2 = remove_charAt1.replace(charAt2, "_"); 
    remove_charAt3 = remove_charAt2.replace(charAt3, "_"); 
console.log(remove_charAt3);}