let st1 = +prompt("Введідь сторону 1 = ");
let st2 = +prompt("Введідь сторону 2 = ");

pr(st1, st2);


function pr(st_1, st_2) {

    if ( st_1 == "") {

        alert(" Площа квадрата = " + st_2 * 4);
        return;
    
    }

    if (st_2 == "") {

        alert(" Площа квадрата = " + st_1 * 4);
        return;
   
    }

    if (st_1 != "" , st_2 != "") {

        alert(" Площа прямокутника = " + (st_1 + st_2 ) * 2);
        return;
    
    }



}