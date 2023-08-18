var header = document.getElementById('header');
var mobileMenu = document.getElementById('menu-mobile');
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === 46;
    if(isClose) {
        header.style.height = 'auto';
    }
}
// menu-mobile