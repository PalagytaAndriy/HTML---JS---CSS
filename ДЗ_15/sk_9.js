let ch3 = +prompt("Введідь секунди");
ch1 = ch3 * 1000;

const ch = new Date( ch1 )
hh = ( ch.getHours());
mm = ( ch.getMinutes());
ss = ( ch.getSeconds());

if ( ss < 10) ss = "0" + ss
if ( mm < 10) mm = "0" + mm
if ( hh > 3)  { tt = hh - 3 } else { tt = 0 }


alert ( tt + " : " + mm + " : " + ss )