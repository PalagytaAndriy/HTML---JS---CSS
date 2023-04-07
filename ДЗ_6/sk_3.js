let ch1 = +prompt("Введіть години - ");
let ch2 = +prompt("Введіть хвелини - ");
let ch3 = +prompt("Введіть секунди - ");

let s = +prompt("Введіть переданное количество секунд - ");
let m = +prompt("Введіть переданное количество минут - ");
let w = +prompt("Введіть переданное количество часов - ");

chas(ch1, ch2, ch3);
sek(s, m, w, ch1, ch2, ch3);



function chas(hh, mm, ss) {
    if (ss < 10) ss = "0" + ss
    if (mm < 10) mm = "0" + mm
    if (hh < 10) hh = "0" + hh


    alert("Вивод часу  - " + hh + " : " + mm + " : " + ss);
    return;

}

function sek(sss, mmm, www, ch4, ch5, ch6) {
    let pp = (((ch4 * 60) * 60) + (ch5 * 60) + ch6) * 1000;
    let pp1 = (((www * 60) * 60) + (mmm * 60) + sss) * 1000;


    qq1 = pp + pp1;

    const ch = new Date(qq1)
    hh = (ch.getHours());
    mm = (ch.getMinutes());
    ss = (ch.getSeconds());

    if (ss < 10) ss = "0" + ss
    if (mm < 10) mm = "0" + mm
    if (hh > 3) { tt = hh - 3 } else { tt = 0 }


    alert("Вивод часу після трансформаціі - " + tt + " : " + mm + " : " + ss);
    return;

}

