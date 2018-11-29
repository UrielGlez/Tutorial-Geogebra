document.getElementById("img6").style.display = "none";
document.getElementById("img41").style.display = "none";
document.getElementById("img32").style.display = "none";
document.getElementById("img33").style.display = "none";


$('.open-overlay').click(function() {
  $('.open-overlay').css('pointer-events', 'none');
  var overlay_navigation = $('.overlay-navigation'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    overlay_navigation.velocity('transition.slideLeftIn', {
      duration: 300,
      delay: 0,
      begin: function() {
        $('nav ul li').velocity('transition.perspectiveLeftIn', {
          stagger: 150,
          delay: 0,
          complete: function() {
            $('nav ul li a').velocity({
              opacity: [1, 0],
            }, {
              delay: 10,
              duration: 140
            });
            $('.open-overlay').css('pointer-events', 'auto');
          }
        })
      }
    })

  } else {
    $('.open-overlay').css('pointer-events', 'none');
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    $('nav ul li').velocity('transition.perspectiveRightOut', {
      stagger: 150,
      delay: 0,
      complete: function() {
        overlay_navigation.velocity('transition.fadeOut', {
          delay: 0,
          duration: 300,
          complete: function() {
            $('nav ul li a').velocity({
              opacity: [0, 1],
            }, {
              delay: 0,
              duration: 50
            });
            $('.open-overlay').css('pointer-events', 'auto');
          }
        });
      }
    })
  }
})

function Funcionmenu(seleccion){
  var div = document.getElementById('overlay');
  switch(seleccion){
    case 1: div.className = "overlay";
            document.documentElement.style.setProperty('--overlayp', '0%');
            document.getElementById("overlay").style.display = "block";
            document.getElementById("atras").style.display = "block";
            document.getElementById("barras").style.opacity = "0.0";
            document.getElementById("overlay").style.backgroundColor = "#29363B";
            document.getElementById("img1").style.display = "block";
            document.getElementById("img1").play();
            document.getElementById("titulo1").style.display = "block";
            document.getElementById("texto1").style.display = "block";
            break;
    case 2: div.className = "overlay";
            document.documentElement.style.setProperty('--overlayp', '20%');
            document.getElementById("overlay").style.display = "block";
            document.getElementById("atras").style.display = "block";
            document.getElementById("barras").style.opacity = "0.0";
            document.getElementById("overlay").style.backgroundColor = "#EA495F";
            document.getElementById("img5").style.display = "block";
            document.getElementById("img5").play();
            document.getElementById("titulo2").style.display = "block";
            document.getElementById("texto2").style.display = "block";
            break;
    case 3: div.className = "overlay";
            document.documentElement.style.setProperty('--overlayp', '40%');
            document.getElementById("overlay").style.display = "block";
            document.getElementById("atras").style.display = "block";
            document.getElementById("barras").style.opacity = "0.0";
            document.getElementById("overlay").style.backgroundColor = "#F4837D";
            document.getElementById("img3").style.display = "block";
            document.getElementById("img3").play();
            document.getElementById("img31").style.display = "block";
            document.getElementById("img32").style.display = "block";
            document.getElementById("img33").style.display = "block";
            document.getElementById("titulo3").style.display = "block";
            document.getElementById("texto3").style.display = "block";
            document.getElementById("texto3_1").style.display = "block";
            document.getElementById("texto3_2").style.display = "block";
            document.getElementById("texto3_3").style.display = "block";
            break;
    case 4: div.className = "overlay";
            document.documentElement.style.setProperty('--overlayp', '60%');
            document.getElementById("overlay").style.display = "block";
            document.getElementById("atras").style.display = "block";
            document.getElementById("barras").style.opacity = "0.0";
            document.getElementById("overlay").style.backgroundColor = "#FDCEA9";
            document.getElementById("img4").style.display = "block";
            document.getElementById("img4").play();
            document.getElementById("img41").style.display = "block";
            document.getElementById("titulo4").style.display = "block";
            document.getElementById("texto4").style.display = "block";
            document.getElementById("texto4_1").style.display = "block";
            break;
    case 5: div.className = "overlay";
            document.documentElement.style.setProperty('--overlayp', '80%');
            document.getElementById("overlay").style.display = "block";
            document.getElementById("atras").style.display = "block";
            document.getElementById("barras").style.opacity = "0.0";
            document.getElementById("overlay").style.backgroundColor = "#99B998";
            document.getElementById("img6").style.display = "block";
            document.getElementById("img6").play();
            document.getElementById("titulo5").style.display = "block";
            document.getElementById("texto5").style.display = "block";
            break;
    case 6: div.className = "animrev";
            $('div').on('animationend webkitAnimationEnd', function() {
              if (div.className=="animrev"){
                document.getElementById("overlay").style.display = "none";
              }
            });
            document.getElementById("barras").style.opacity = "1.0";
            document.getElementById("atras").style.display = "none";
            document.getElementById("img6").pause();
            document.getElementById("img4").pause();
            document.getElementById("img41").pause();
            document.getElementById("img3").pause();
            document.getElementById("img31").pause();
            document.getElementById("img32").pause();
            document.getElementById("img33").pause();
            document.getElementById("img5").pause();
            document.getElementById("img1").pause();
            document.getElementById("titulo1").style.display = "none";
            document.getElementById("titulo2").style.display = "none";
            document.getElementById("titulo3").style.display = "none";
            document.getElementById("titulo4").style.display = "none";
            document.getElementById("titulo5").style.display = "none";
            document.getElementById("texto1").style.display = "none";
            document.getElementById("texto2").style.display = "none";
            document.getElementById("texto3").style.display = "none";
            document.getElementById("texto3_2").style.display = "none";
            document.getElementById("texto3_1").style.display = "none";
            document.getElementById("texto3_3").style.display = "none";
            document.getElementById("texto4").style.display = "none";
            document.getElementById("texto4_1").style.display = "none";
            document.getElementById("texto5").style.display = "none";
            document.getElementById("img1").style.display = "none";
            document.getElementById("img3").style.display = "none";
            document.getElementById("img31").style.display = "none";
            document.getElementById("img32").style.display = "none";
            document.getElementById("img33").style.display = "none";
            document.getElementById("img4").style.display = "none";
            document.getElementById("img41").style.display = "none";
            document.getElementById("img5").style.display = "none";
            document.getElementById("img6").style.display = "none";

  }
}
