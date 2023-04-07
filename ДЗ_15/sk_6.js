let ch1 = +prompt("Введідь мінімальне число");
let ch2 = +prompt("Введідь максимальне число");

for (let i = 1; i < ch2 - 1; i++) {
    chuslo(i);
    ch2 = ch2 - 1;

 }   





function chuslo(ch) {
    let sum = 0;
    let rem;
    for (let i = 1; i < ch - 1; i++) {
        rem = ch % i;
        if (rem === 0) {
            sum += i;
        }
    }

    if (sum === ch) {
        alert(ch + " - совершенне число");
    } 
}