'use strict';

let count = 0;
let min = 15;
let second = 0;
let intervalId;
let intervalId2;
let second_text;

function increaseCount(){
    count += 1;
    document.getElementById("count_num").innerHTML = count;
    console.log('clicked')
    document.getElementById("blank_text").innerHTML = 'increaseCount';
}

function resetCount(){
    count = 0
    document.getElementById("count_num").innerHTML = count;

}

function increaseCount2(){
    intervalId = setInterval(function(){
        count += 1
        document.getElementById("count_num").innerHTML = count;
    },1000);
    document.getElementById("blank_text").innerHTML = 'increaseCount2.0';
}

function updateMin(){
    document.getElementById("min").innerHTML = min;
}

function updateSec(){
    if (second < 10){
        document.getElementById("second").innerHTML = " " + second;
    } else{
    document.getElementById("second").innerHTML = second;
    }
}

function updateTime(){
    intervalId2 = setInterval(function(){
        if(min == 0 && second == 0){
            documentent.getElementById('current').innerHTML = 'Ran'
            clearInterval(intervalId2)
        } else if (second > 0){
            second -= 1
        } else {
            second = 59
            min -= 1
        }

        
        if (second < 10){
            second_text = "0" + second
        }

        
        updateMin();
        updateSec();


    },1000);
    
    
}


function stopTime(){
    clearInterval(intervalId2)
}