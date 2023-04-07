let st = +prompt("Введідь степінь числа");


function ch(ww) {
    if (ww == 1 ) return 1;
    return ww * ch(ww-1);
    
};
var sum = 0;

sum = ch(st);


alert('Факторіал числа  = ' + sum);