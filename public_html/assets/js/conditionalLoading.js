$(document).ready(function () {
    $('.container').append('<div class="small"><h2>StandardJS</h2><p>Wird immer angezeigt</p></div>');
    if (document.documentElement.clientWidth > 600) {
        $('.container').append('<div class="large"><h2>Komplexes JS</h2><p>Für große Displays</p></div>');
    }
    $('.container').append('<div class="responsive"><h2></h2><p>/p></div>');
    $(window).resize(function () {
        if (window.matchMedia('(max-width:600px)').matches) {
            $('.responsive').css({
                background:'fuchsia'
            });
            $('.responsive h2').text('Kleiner als 600px');
            $('.responsive p').text('Smartphones');
        }
        if (window.matchMedia('(min-width:600px)and (max-width:900px)').matches) {
            $('.responsive').css({
                background:'gold'
            });
            $('.responsive h2').text('Größer als 600px, kleiner als 900px');
            $('.responsive p').text('Tablets');
        }
        if (window.matchMedia('(min-width:900px)').matches) {
            $('.responsive').css({
                background:'lightgray'
            });
            $('.responsive h2').text('Größer als 900px');
            $('.responsive p').text('PC und größer');
        }
        if (window.matchMedia('(orientation:portrait)').matches) {
            $('h1').text('');
            $('h1').append('Conditional Loading - Hochformat');
        }
        if (window.matchMedia('(orientation:landscape)').matches) {
            $('h1').text('');
            $('h1').append('Conditional Loading - Querformat');
        }
    });
});




