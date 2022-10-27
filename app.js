'use strict';

let count = 0;
let min = 10;
let second = 0;
let intervalId;



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
    document.getElementById("second").innerHTML = second;
}

function updateTime(){
    updateMin();
    updateSec();
}