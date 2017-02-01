// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


//$(function() {
//    $('a.page-scroll').bind('click', function(event) {
//        var $anchor = $(this);
//        $('html, body').stop().animate({
//            scrollTop: $($anchor.attr('href')).offset().top
//        }, 1500);
//        event.preventDefault();
//    });
//});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

const hamburgerIcon = document.querySelector('#nav-ham');

function toggleNavIcon(){
    if(hamburgerIcon.classList.contains('fa-bars') == true){
        hamburgerIcon.style.fontSize = '10px';
        setTimeout(function(){
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
            hamburgerIcon.style.fontSize = '30px';
        }, 200)
    } else if(hamburgerIcon.classList.contains('fa-times')){
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
}


hamburgerIcon.addEventListener('click', toggleNavIcon);

$('.navbar a[href*="#"]').click( function (e){
    e.preventDefault();
    $(document).off('scroll');
    
    $target = $(this.hash);
    $('html, body').stop().animate({
       'scrollTop': $target.offset().top 
    }, 500);  
});

//$('.navbar a[href*=#]:not([href=#])').click( function(e) {
// e.preventDefault;
//if (location.pathname.replace(/^\//,'') ===
//    this.pathname.replace(/^\//,'') &&
//    location.hostname === (this.hash);
//    var target = $(this.hash);
//    target = target.length ? target : $('[name=]' + this.hash.slice(1) + ']');
//    if (target.length) {
//        $('html,body').animate({
//            scrollTop: target.offset().top-50
//        }, 500);
//        return false;
//        }
//    }
// });
