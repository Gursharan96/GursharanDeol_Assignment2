/*
Author: Gursharan Deol
Description: This file is to provide user interface.
*/
function checkAnswers(){

//put all the question sets into this array
var allQuestions = new Array(document.myForm.q1,
                            document.myForm.q2,
                            document.myForm.q3,
                            document.myForm.q4,
                            document.myForm.q5,
                            document.myForm.q6,
                            document.myForm.q7,
							document.myForm.q8,
							document.myForm.q9,
							document.myForm.q10);
                            
 var totalScore = 0; //initialize to 0

 //go through each question
 for (var i in allQuestions) {
  var temp = allQuestions[i];

  //go through each radio button in the current question set
  for (var j = 0; j < temp.length; j++) {

    //if the correct one is chosen then add 1 to total score
    if (temp[j].value == "correct" && temp[j].checked == true) {
      totalScore++;
    }
  }
 }
 alert (totalScore + ' Correct Answer(s) out of 10');
 
}
function help(){
alert('Try to score maximum by selecting correct option');
}

function color(){
var qs = document.form1.qs.value;
if(qs==="red"){
document.getElementById("content").style.color = "red";
}
else if(qs==="black"){
document.getElementById("content").style.color = "black";
}
else if(qs==="green"){
document.getElementById("content").style.color = "green";
}
else if(qs==="blue"){
document.getElementById("content").style.color = "blue";
}
else if(qs==="yellow"){
document.getElementById("content").style.color = "yellow";
}
}

function backgroundcolor(){
var bcolor = document.form1.background.value;
if(bcolor==="AntiqueWhite "){
document.getElementById("content").style.background = "AntiqueWhite ";
}
else if(bcolor==="DarkKhaki "){
document.getElementById("content").style.background = "DarkKhaki ";
}
else if(bcolor==="LightGray"){
document.getElementById("content").style.background = "#D3D3D3";
}
else if(bcolor==="Moccasin"){
document.getElementById("content").style.background = "#FFE4B5";
}
else if(bcolor==="MistyRose"){
document.getElementById("content").style.background = "#FFE4E1";
}
}

function hcolor(){
var headingcolor = document.form1.hc.value;
if(headingcolor==="green"){
for(var i=1; i<11; i++){
document.getElementById(i).style.color = "green";
}
}
else if(headingcolor==="black"){
for(var i=1; i<11; i++){
document.getElementById(i).style.color = "black";
}
}

else if(headingcolor==="blue"){
for(var i=1; i<11; i++){
document.getElementById(i).style.color = "blue";
}
}
else if(headingcolor==="indigo"){
for(var i=1; i<11; i++){
document.getElementById(i).style.color = "indigo";
}
}
else if(headingcolor==="Chocolate"){
for(var i=1; i<11; i++){
document.getElementById(i).style.color = "#D2691E";
}
}
}
 
