window.addEventListener("load", (event) => {
    alert($('a-scene')[0].clientWidth);
    $('.logo-img').css('left', $('a-scene')[0].clientWidth - 50);
});
