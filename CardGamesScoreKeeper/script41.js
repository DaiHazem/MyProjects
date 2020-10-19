window.onload=init;
var playerlist=[];
var playerelement;
var playerArray;
function init(){
  //var doReset=document.querySelector('#reset');
  addPlayers();
}

function addPlayers(){
 var players=document.querySelector('#players');
 players.addEventListener('change',function(){
var table=document.createElement("table");
var resultstable=document.querySelector('#resultstable');
resultstable.innerHTML='';
var div=document.querySelector("#div");
div.innerHTML='';
val=document.querySelector('#players').value;

noOfPlayers=Number(val);

playerlist=createplayers(noOfPlayers);

var firstRow=table.insertRow();
var secondRow=table.insertRow();
var thirdRow=table.insertRow();

playerlist.forEach(function(el){
var playercell=firstRow.insertCell();
playercell.innerHTML=el.playernum; 
var scorecell=secondRow.insertCell();
scorecell.innerHTML="<span id='shownscore'>"+el.score+"</span>";
var scoreinput=thirdRow.insertCell();
scoreinput.innerHTML="<input type='number' value=0 id='add'><button id='addbutton'>Add to the Score</button>";
});

resultstable.append(table);

if(noOfPlayers>7){
    table.classList.add("table");
    var tbody=document.querySelector('tbody');
    tbody.classList.add('tbody');
}

 
 
 addScores();
});
}

function createplayers(n){
     playerArray=[];
    for(i=0;i<n;i++){
         playerelement={playernum:"Player "+i,
        score:0
    }
        playerArray.push(playerelement);
    }
    //console.log(playerArray);
return playerArray;
}

function addScores(){
    //console.log(playerelement);
  var addbutton=document.querySelectorAll("#addbutton");
 for(var i=0;i<addbutton.length;i++){
     addbutton[i].index=i;
 addbutton[i].addEventListener('click',function(e){
  // console.log(e.target.index);
   //console.log(playerArray);
    var indexToAdd=e.target.index;
    var shownscore=document.querySelectorAll('#shownscore');
    var addValue=document.querySelectorAll("#add");
    var oldScore=playerArray[indexToAdd].score;
    var newScore=Number(oldScore)+Number(addValue[indexToAdd].value);
    playerArray[indexToAdd].score=newScore;
    shownscore[indexToAdd].innerHTML=newScore;
    addValue[indexToAdd].value=0;
    var finalScore=document.querySelector('#finalscore');
    var winner=document.getElementById('winner');
   //var loser=document.getElementById('loser');
    if(newScore>=Number(finalScore.textContent)){
     var div=document.querySelector("#div");
     div.classList.add('resultsdiv');
    var trow=document.querySelector('tr');
    
    if(winner.checked){
       var showStatus='WINNER';
     trow.children[indexToAdd].style.backgroundColor='rgb(255, 208, 0)';
    }else{ var showStatus="LOSER";
    trow.children[indexToAdd].style.backgroundColor='rgb(80, 224, 80)';
 }
  div.innerHTML=playerArray[indexToAdd].playernum+" is the "+showStatus;
     
}
});
}
 }

 function targetScore(){
    var score=document.getElementById('score');
    var finalScore=document.querySelector('#finalscore');
    finalScore.innerHTML=score.value;
 }
  
 function scoreIndication(){
 var winner=document.getElementById('winner');
 var loser=document.getElementById('loser');
 var finalScore=document.querySelector('#finalscore');
    if(winner.checked){
        finalScore.style.color='rgb(255, 208, 0)';
    }else if(loser.checked){
      finalScore.style.color='rgb(80, 224, 80)';
    }
}

function goToReset(){
    var div=document.querySelector("#div");
    div.innerHTML='';
    var resultstable=document.querySelector("#resultstable");
    resultstable.innerHTML='';
    var score=document.querySelector('#score');
    var finalScore=document.querySelector('#finalscore');
    score.value='';
    finalScore.innerHTML=0;
    finalScore.style.color="black";
    var players=document.querySelector('#players');
    players.value=1;
    var radio=document.querySelector('input:checked');
    if(radio){
        radio.checked=false;
    }
}
 


     
