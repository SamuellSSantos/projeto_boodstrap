$(document).ready(function() {
    // Ao passar o mouse sobre um item de menu, ocultar os outros dropdowns
    $('.nav-item.dropdown').hover(function() {
        // Oculta todos os submenus
        $('.dropdown-menu').removeClass('show');
        // Mostra o submenu do item atualmente em foco
        $(this).find('.dropdown-menu').addClass('show');
    }, function() {
        // Oculta o submenu quando o mouse sai
        $(this).find('.dropdown-menu').removeClass('show');
    });
});