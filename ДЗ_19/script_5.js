function select(element){
    const list = document.getElementsByTagName('li');
    for (i = 0; i<list.length; i++){
        list[i].classList.remove('selected')
    }
    element.classList.add('selected');
}