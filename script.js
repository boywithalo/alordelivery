let menubutton = document.querySelector('.menu');
let header = document.querySelector('.header');

menubutton.addEventListener('click', menutoggle);

function menutoggle() {
    header.classList.toggle('opened');
}



window.addEventListener('load', function() {
    let preloader = document.getElementById('preloader');
    
    // Add a 2-second delay after the page has fully loaded
    setTimeout(function() {
        preloader.classList.add('fade-out'); // Add the fade-out class after delay
        
        // Remove the preloader after the fade-out transition
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 1000); // 1-second match with the CSS transition duration
        
    }, 2000); // 2-second delay before starting the fade-out
});


function start(){
    let startdiv = document.querySelector('.dr')
    startdiv.classList.add('.floatup')
}
