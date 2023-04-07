
let ch = +prompt("Введідь число");

chuslo(ch);


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
    } else {
        alert(" Це не совершенне число ");
    }
}