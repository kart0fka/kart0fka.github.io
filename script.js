
window.onload = () => {
    document.getElementById('loading').remove();
}


document.getElementById('menu-burger').onclick = () => {
    var menu = document.getElementById('menu-burger');
    if ( menu.getAttribute("class") == "toggled" ){
        document.getElementById('menu').setAttribute("class", "");
        menu.setAttribute("class", "");
    }
    else{
        document.getElementById('menu').setAttribute("class", "opened");
        menu.setAttribute("class", "toggled");
    }
}

var menu_buttons = document.getElementsByClassName('menu-button');
for ( var i = 0; i < menu_buttons.length; ++i ){
    let button = menu_buttons[i];
    if ( button.hash != "" ){
        button.onclick = (e) => {
            e.preventDefault();
            document.getElementById('menu-burger').onclick();
            const id = button.hash;
            let target = document.getElementById(id.slice(1));

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }
    }
}