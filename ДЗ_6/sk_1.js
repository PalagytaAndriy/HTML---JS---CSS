let vidstsn = +prompt("Введіть відстань  -  ");


avtoo(vidstsn);

avtooo();

function avtooo() {

    console.log(avto);
    
}

function avtoo(vidstsn) {

    let shwud = 80;

    chas = vidstsn / shwud;

    if (chas > 4) {
        chas1 = chas / 4;
        chas1 = Math.trunc(chas1);
    }

    alert("Скільки разів зупинився на перепочинок = " + chas1);

    alert(" Час в дорозі = " + chas + " год");

    return alert(" Час затрачений на  ВСЮ  поіздку = " + (chas + chas1) + " год");

}

let avto = {

    vurobnuk : BMW,
    model : e_39,
    rik_vupusky : 2000,
    sered_shvud : 130,
}


