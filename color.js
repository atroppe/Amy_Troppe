window.onload = app;

function app() {
    console.log("app is working");

    //$('.cameleon').css("backgroundColor", '#3544A4');
    // $('.lineOne').fadeOut(750, function() {
    //     $(this).html('vision').fadeIn(750);
    // });

    var cameleon = document.querySelector('.cameleon');
    var github = document.querySelector('.github');
    var home = document.querySelector('.home');
    var about = document.querySelector('.about');
    var work = document.querySelector('.work');
    var resume = document.querySelector('.resume');
    var contact = document.querySelector('.contact');
    var logo = document.querySelector('.logo');
    // var popUp = document.querySelector('.popUp');
    // var reset = document.querySelector('.reset');

    home.addEventListener('mouseover', changeColor('#BECF2C'));
    home.addEventListener('mouseover', function() {
        $('.lineOne').fadeOut(750, function() {
            $(this).html('engineer').fadeIn(750);
        });
    });
    about.addEventListener('mouseover', changeColor('#922179'));
    about.addEventListener('mouseover', function() {
        $('.lineOne').fadeOut(750, function() {
            $(this).html('improve').fadeIn(750);
        });
    });
    github.addEventListener('mouseover', changeColor('#1C1241'));
    github.addEventListener('mouseover', function() {
        $('.lineOne').fadeOut(750, function() {
            $(this).html('code').fadeIn(750);
        });
    });
    work.addEventListener('mouseover', changeColor('#3544A4'));
    work.addEventListener('mouseover', function() {
        $('.lineOne').fadeOut(750, function() {
            $(this).html('create').fadeIn(750);
        });
    });
    resume.addEventListener('mouseover', changeColor('#E0125E'));
    resume.addEventListener('mouseover', function() {
        $('.lineOne').fadeOut(750, function() {
            $(this).html('grow').fadeIn(750);
        });
    });
    contact.addEventListener('mouseover', changeColor('#FD9B32'));
    contact.addEventListener('mouseover', function() {
        $('.lineOne').fadeOut(750, function() {
            $(this).html('forward').fadeIn(750);
        });
    });
    logo.addEventListener('mouseover', reset());
    logo.addEventListener('mouseout', function() {
        $('.cameleon').css("backgroundColor", '#3544A4');
    });


    function changeColor(color) {
        return function() {
            cameleon.style.backgroundColor = color;
        }
    }

    function reset() {
        return function() {
            cameleon.style.backgroundColor = "rgba(53,68,164,0.8)";
            $('.lineOne').fadeOut(750, function() {
                $(this).html('design').fadeIn(750);
            });
        }
    }


}
