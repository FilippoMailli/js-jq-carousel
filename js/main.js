$(document).ready(function() {

    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);

    function nextSlide() {
        if($('.images img.active').hasClass('last') ) {
            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            //Pallini

            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active');
            var prossimaImg= $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            //Pallini

            var pallinoAttivo = $('.slider-nav i.active');
            var prossimoPallino= $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimoPallino.addClass('active');

        }
    }

    function prevSlide() {
        if($('.images img.active').hasClass('first') ) {
            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            //pallino

            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');

        } else {
            var imagAttiva = $('.images img.active');
            var prevImg = $('.images img.active').prev();

            imagAttiva.removeClass('active');
            prevImg.addClass('active');

            //pallino

            var pallinoAttivo = $('.slider-nav i.active');
            var prevPallino = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            prevPallino.addClass('active');
        }
    }

});