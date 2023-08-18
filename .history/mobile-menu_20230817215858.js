var header = document.getElementById('header');
var mobileMenu = document.getElementById('menu-mobile');
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems)
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if(isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

for(let i = 0; i<menuItems.length ; i++) {
    var menuItem = menuItems[i];
    var isParent = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
    menuItem.onclick = function() {
        header.style.height = null;
    }
}
