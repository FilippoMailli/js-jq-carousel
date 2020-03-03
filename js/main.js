$(document).ready(function() {

    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);
    $('.play').click(playbtn);
    $('.stop').click(stopbtn);

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

    var secondi = 10;
    var clock;

    function playbtn() {
        $('.stop').removeClass('acceso');
        $('.play').addClass('acceso');
            clock = setInterval(function() {
                nextSlide();
                secondi--;
                if(secondi == 0) {
                    clearInterval(clock);
                    $('.play').removeClass('acceso');
                    $('.stop').addClass('acceso');
                }
            }, 1000)
    }

    function stopbtn() {
        $('.play').removeClass('acceso');
        $('.stop').addClass('acceso');
        clearInterval(clock);
        secondi = 10;
    }

    $('.images').mouseenter(function() {
        $('.play').removeClass('acceso');
        $('.stop').addClass('acceso');
        clearInterval(clock);
        secondi = 10;
    });

    $('.images').mouseleave(function() {
        playbtn();
    });


//Altro metodo, posso usare questa funzione ogni volta che ne ho bisogno al posto della variabile secondi

//stopTimer();

    function stopTimer() {
        var stop = setTimeout(function(){
            clearInterval(clock);
        }, 5000);
    }

    $(".slider-nav i").click(function() {
        $(".slider-nav i").removeClass('active');
        $(this).addClass('active');

        var posizione = $(this).index();
        $('.images img.active').removeClass('active');
        $('.images img').eq(posizione).addClass('active');
        stopbtn();
    });

});
