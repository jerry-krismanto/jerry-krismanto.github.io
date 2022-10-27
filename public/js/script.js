function hamburgerMenu(){
    let menu = document.querySelector('#drop-down');
    if (menu.style.display == 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}
