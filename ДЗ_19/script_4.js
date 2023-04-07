let i = -1;
function traffic() {

    i++;
    let arr = ['red' , 'yellow' , 'green'],
    light = document.querySelectorAll('.light');
    if (light[i-1]) light[i-1].style.backgroundColor = '';
    if (i == arr.length) i = 0;
    light[i].style.backgroundColor = arr[i];
}