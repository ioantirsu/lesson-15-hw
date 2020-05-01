/*

for (let i = 2; i <= 10; ++i) {
    {
        console.log(i++);
    }
}
*/
/*
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
*/


/*
let i = 0;
while (i < 3) { alert(`number, ${i}!`); i++; }
*/

/*

function fact(x) {
    for (i = 1)
}

let fac = 1; let num = 8; for (i = 1; i <= num; i++) { fac *= i; }

*/

/*
let x = 1;
let num = 5;
for (i = 1; i <= num; i++) { x *= i; } console.log(x)


*/

/*

let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
        alert('2,3');
    case 3:
        alert('2,3');
        break;
    default:
        alert("I don't know such number");

}
*/


let browser = prompt('Browser?');
if (browser == 'Edge') {
    alert("You've got the Edge");
} else if ((browser == 'Chrome') || (browser == 'Safari') || (browser == 'FireFox') || (browser == "Opera")) {
    alert(' Okay we support these browsers too ');
} else {
    alert(' We hope that this page looks ok!');
}

