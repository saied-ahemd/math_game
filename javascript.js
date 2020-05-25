var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;
var wrongAnswer;
//if we click start/reset
document.getElementById("start").onclick = function() {
    //if we playing
    if(playing == true){
        location.reload();
        
    }else{
        
        
        //if ew are not playing 
     
        //change mode to play mode
        playing=true;
           //set the c=score to 0
         score=0;
        document.getElementById("scorevalue").innerHTML =score ;
        //show count down box 
        timeRemaining=60;
        document.getElementById("timeremaingvalue").innerHTML=timeRemaining;
        //start countdown
        satrtCountDown();
        show("timeremaing");
        //change the start to reset
        document.getElementById("start").innerHTML="Restart";
        
        //hide game over 
         hide("gameOver");
        //generat QA
        generatQA();
        
        
        
    }
    
}
//click the answer box
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing==true){
        //check if it's correct answer
        if(this.innerHTML==correctAnswer){
            //correct answer
            //increase the score by one
            score++;
            //and show it on the screen
            document.getElementById("scorevalue").innerHTML=score;
            //hide wrong box show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
                
            },1000);
            generatQA();
            
        }else{
            hide("correct");
            show("wrong");
            //hide the wrong answer after one second
            setTimeout(function(){
                hide("wrong");
                
            },1000)
            
        }
    }
}}
   

//functions
//start countdown
function satrtCountDown(){
    action=setInterval(function(){
        
        //decrese tine by one
        timeRemaining-=1; 
        //show it every second
        document.getElementById("timeremaingvalue").innerHTML=timeRemaining;
        
        if(timeRemaining==0){
            //if become 0 stop it
            stopCount();
            //show game over
            show("gameOver");
            //show score
            document.getElementById("gameOver").innerHTML="<p>game over!</p><p>your score is "+score+".</p>"
            //hid time remaining
            hide("timeremaing");
            //hide correct box
            hide("correct");
            //hide wrong box
            hide("wrong");
            //make the play mode to false
            playing=false;
           document.getElementById("start").innerHTML="Start Game";
          
        }
        
    },1000)
}
//stop count
function stopCount(){
    clearInterval(action);
}
//hide the element by id
function hide(id){
    document.getElementById(id).style.display="none";
}
//show the element by id
function show(id){
    document.getElementById(id).style.display="block";
}
//generat qustion and answer
function generatQA(){
    var x= 1+Math.round(9*Math.random());
    var y= 1+Math.round(9*Math.random());
    correctAnswer=x*y;
    document.getElementById("qustion").innerHTML= x +"x"+y;
    
    var correctp=1+Math.round(3*Math.random());
    //fill box withe correct answer
    document.getElementById("box"+correctp).innerHTML=correctAnswer;
    var answers=[correctAnswer];
    //fill wrong answer
    for(i=1;i<5;i++){
        if(i !=correctp){
            do{
                wrongAnswer= (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
                
            }while(answers.indexOf(wrongAnswer)>-1);
                
            
            document.getElementById("box"+i).innerHTML=wrongAnswer;
            
            answers.push(wrongAnswer);
            
        }
    }
    
    
}
