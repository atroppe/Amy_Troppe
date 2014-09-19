window.onload = app;

function app() {
    console.log("app is working");

    $('.cameleon').css("backgroundColor", '#3544A4');
    

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

    home.addEventListener('mouseover', changeColor('#E0125E'));
    about.addEventListener('mouseover', changeColor('#922179'));
    github.addEventListener('mouseover', changeColor('#1C1241'));
    work.addEventListener('mouseover', changeColor('#3544A4'));
    resume.addEventListener('mouseover', changeColor('#BECF2C'));
    contact.addEventListener('mouseover', changeColor('#FD9B32'));
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
            cameleon.style.backgroundColor = "transparent";
        }
    }


}
