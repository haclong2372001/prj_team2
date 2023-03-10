var head = setInterval(bodyHead,1000);
var head2 = setInterval(bodyHead2, 80);
var head3 = setInterval(bodyHead3, 300);
let count1 = 0;
let count2 = 0;
let count3 = 0;

function bodyHead() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 3) {
        clearInterval(head);
    }
}
function bodyHead2() {
    count2++
    document.querySelector("#number2").innerHTML = count2
    if(count2 ==86){
        clearInterval(head2);
    }
}
function bodyHead3() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if(count3 == 15){
        clearInterval(head3);
    }
}
