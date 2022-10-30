let menu = document.querySelector('#drop-down');
// if(menu.style.width == 'auto'){
//     menu.style.display = 'flex';
// } else{
//     menu.style.display = 'none';
// }

function hamburgerMenu(){
    let menu = document.querySelector('#drop-down');
    if (menu.style.display == 'flex'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
