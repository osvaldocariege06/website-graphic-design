
// Select Elements


// window.sr = ScrollReveal()

// sr.reveal('.animate-top', {
//     origin: 'top',
//     duration: 1000,
//     distance: '20rem',
//     delay: 600
// })



$(document).ready(function(){
    $('#hero .owl-carousel').owlCarousel({
        dots: true,
        nav: false,
        loop: true,
        responsive: {
            0:{
                items: 1
            },
            400: {
                items: 2
            },
            700: {
                items: 3
            }, 
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
})

window.sr = ScrollReveal();

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
})
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
})
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
})
sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
})