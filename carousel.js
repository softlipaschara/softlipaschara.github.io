$(document).ready(function(){

    console.log("jquery loaded!");


    $(".slider").slick({

        // normal options...
        infinite: true,
        arrows:true,
        dots: false,
        //prevArrow: '<button type="button" class="slick-prev">Previous</button>',

        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: false
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });


});