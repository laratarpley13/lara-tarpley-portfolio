function hideNavMenu() {
    $('.bars-icon').click(event => {
        $('.nav-links').toggleClass('hidden')
    });
}

$(hideNavMenu);