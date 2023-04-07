let ch1 = +prompt("Введіть чисельник першого дробу -  ");
let zz1 = +prompt("Введіть займенник першого дробу - ");
let ch2 = +prompt("Введіть чисельник другого дробу -  ");
let zz2 = +prompt("Введіть займенник другого дробу - ");

let d = prompt("Введіть дію для виконання - ");


if (d == '+') sum(ch1, zz1, ch2, zz2);

if (d == '-') riz(ch1, zz1, ch2, zz2);

if (d == '*') mn(ch1, zz1, ch2, zz2);

if (d == '/') dl(ch1, zz1, ch2, zz2);






function sum(ch11, zz11, ch22, zz22) {

     let zz1_1 = zz1;

     ch11 = ch11 * zz22;
     zz11 = zz11 * zz22;

     ch22 = ch22 * zz1_1;
     zz22 = zz22 * zz1_1;

     alert(" Сумма дробів = " + (ch11 + ch22) + " | " + zz22);

     scor((ch11 + ch22), zz22);
}

function riz(ch111, zz111, ch222, zz222) {

     let zz1_1 = zz1;

     ch111 = ch111 * zz222;
     zz111 = zz111 * zz222;

     ch222 = ch222 * zz1_1;
     zz222 = zz222 * zz1_1;

     alert(" Різниця дробів = " + (ch111 - ch222) + " | " + zz222);
     scor((ch111 - ch222), zz222);

}

function mn(ch1111, zz1111, ch2222, zz2222) {


     alert("Множення дробу = " + (ch1111 * ch2222) + " | " + (zz2222 * zz1111));
     scor((ch1111 * ch2222), (zz2222 * zz1111));

}

function dl(ch11111, zz11111, ch22222, zz22222) {


     alert(" Ділення дробу = " + (ch11111 * zz22222) + " | " + (zz11111 * ch22222));
     scor((ch11111 * zz22222), (zz11111 * ch22222));
}


function scor(z1, z2) {

     for (let i = 2; i < (z1 * z2); i++)

          if (z1 % i === 0 && z2 % i === 0) alert(" дроби мають общий дільник --- " + i)



}