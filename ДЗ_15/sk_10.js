let h1 = +prompt("Введідь години першої дати ");
let h2 = +prompt("Введідь хвелини першої дати");
let h3 = +prompt("Введідь секунди першої дати");

let a1 = +prompt("Введідь години другої дати");
let a2 = +prompt("Введідь хвелини другої дати");
let a3 = +prompt("Введідь секунди другої дати");


Da(h1, h2, h3, a1, a2, a3);




function Da(hh1, hh2, hh3, h1, h2, h3) {

    const a_hh3 = hh3 * 1000;
    const a_hh2 = (hh2 * 60) * 1000;
    const a_hh1 = ((hh1 * 60) * 60) * 1000;



    const b_hh3 = h3 * 1000;
    const b_hh2 = (h2 * 60) * 1000;
    const b_hh1 = ((h1 * 60) * 60) * 1000;


    const c_hh1 = a_hh1 - b_hh1;
    const c_hh2 = a_hh2 - b_hh2;
    const c_hh3 = a_hh3 - b_hh3;

    const x_hh1 = new Date( c_hh1 )
    const x_hh2 = new Date( c_hh2 )
    const x_hh3 = new Date( c_hh3 )




    hh = (x_hh1.getHours());
    mm = (x_hh2.getMinutes());
    ss = (x_hh3.getSeconds());



    if (ss < 10) ss = "0" + ss;
    if (mm < 10) mm = "0" + mm;
    if (hh > 3) { tt = hh - 3 } else { tt = 0 };


    return alert(tt + " : " + mm + " : " + ss);
}

