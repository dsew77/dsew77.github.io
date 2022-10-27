'use strict';

let count = 0;
let intervalId;
function increaseCount(){
    count += 1;
    document.getElementById("count_num").innerHTML = count;
    console.log('clicked')
}

function resetCount(){
    count = 0
    document.getElementById("count_num").innerHTML = count;

}

function increaseCount2(){
    intervalId = setInterval(increaseCount(),1000);
}