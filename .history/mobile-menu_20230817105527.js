var header = document.getElementById('header');
var mobileMenu = document.getElementById('menu-mobile');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === 46;
    if(isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = '46px';
    }
}
// menu-mobile