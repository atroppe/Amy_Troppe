window.onload = app;

function app() {
    console.log("app is working");

    var homepage = document.querySelector('.homepage');
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

    $("body").on("click", home, reset());

    function changeColor(color) {
        return function() {
            homepage.style.backgroundColor = color;
        }
    }

    function reset() {
        return function() {
            homepage.style.backgroundColor = "transparent";
        }
    }

    // function reset() {
    //     return function() {
    //         event.target.classList.add('reset');
    //     }
    // }

    // $(".contact").click(function() {
    //     $("#pop").toggleClass("popUp");
    // });

    // contact.addEventListener('click', addContactInfo());

    // function addContactInfo() {
    //     return function() {
    //         console.log("triggered addContactInfo function!!!");
    //         $('#pop').html('').removeClass('popUp')
    //         $("#pop").html(contactData(contactStuff));
    //         $("#pop").addClass("popUp");
    //     }
    // }
    // var contactStuff = {
    //     Name: "Amy Troppe",
    //     Phone: "347-512-2207",
    //     Location: "Houston, TX",
    //     Email: "cmephro@aol.com",
    // }

    // function contactData(data) {
    //     var x = "";
    //     for (var key in data) {
    //         x += "<p>" + key + ": " + data[key] + "</p>";
    //     };
    //     return x;
    // }
    // console.log(contactData(contactStuff));

    // work.addEventListener('click', addWorkInfo());

    // function addWorkInfo() {
    //     return function() {
    //         console.log("triggered addWorkInfo function!!!");
    //         $('#pop').html('').removeClass('popUp')
    //         $("#pop").addClass("popUp");

    //         var Links = [
    //             'Layout Challenge 1',
    //             'Responsive Design Challenge',
    //             'Box Model Challenge',
    //             'Hover Effects',
    //             'My first Profile',
    //             'Meet my Team',
    //             'Artsy-Craftsy',
    //             "Ruthie's Cafe"
    //         ];

    //         var ul = document.querySelector('#pop').querySelector('ul');
    //         var workLinks = Links.forEach(function(link) {
    //             var li = document.createElement('li');
    //             li.innerText = link;
    //             ul.appendChild(li);
    //         });
    //     }
    // }


}
