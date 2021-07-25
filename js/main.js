/* Start Why Us Section Changes  */

// var theHeader = document.getElementById("quest").getElementsByTagName('h3');
// var theParagraph = document.getElementById("quest").getElementsByTagName('p');


// for (var i = 0; i < theHeader.length; i++) {
//     theHeader[i].onclick = function() {
//         for (var i = 0; i < theParagraph.length; i++) {
//             this.style.display = 'block'
//         }
//     }
// }


$(document).ready(function() {

    'use strict';

    $('#quest h3').click (function() {

        $(this).next().css('display', 'block')

        $('#quest h3').click (function() {

            $(this).next().css('display', 'none')

        });

    });


    $('.quest').on('click', function() {
        $('.quest span').toggleClass('show')
    })

    // Trigger Bx Slider
    $('.testimonials-slider').bxSlider();

});