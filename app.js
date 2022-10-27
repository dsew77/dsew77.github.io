'use strict';

let count = 0;
function increaseCount(){
    count += 1;
    document.getElementById("count_num").innerHTML = count;
    console.log('clicked')
}

function resetCount(){
    count = 0
    document.getElementById("count_num").innerHTML = count;
    
}