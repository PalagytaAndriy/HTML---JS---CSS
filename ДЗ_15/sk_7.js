let ch1 = +prompt("Введідь годни");
let ch2 = +prompt("Введідь хвелини");
let ch3 = +prompt("Введідь секунди");

chas(ch1, ch2, ch3);



function chas(ch4, ch5, ch6) {

    if (ch4 < 10) ch4 = "0" + ch4;
    if (ch5 < 10) ch5 = "0" + ch5;
    if (ch6 < 10) ch6 = "0" + ch6;


    if (ch4 == "", ch5 == "", ch6 == "") {
        alert("00" + " : " + "00" + " : " + "00");
        return;

    }



    if (ch4 == "") {
        alert("00" + " : " + ch5 + " : " + ch6);
        return;

    }

    if (ch5 == "") {
        alert(ch4 + " : " + "00" + " : " + ch6);
        return;
    }

    if (ch6 == "") {

        alert(ch4 + " : " + ch5 + " : " + "00");
        return;
    }

    if (ch4 !== "", ch5 !== "", ch6 !== "") {

        alert(ch4 + " : " + ch5 + " : " + ch6);
        return;

    }


}
