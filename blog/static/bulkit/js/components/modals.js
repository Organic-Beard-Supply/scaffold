/*! modals.js | OM  */

/* ==========================================================================
Modals implementation
========================================================================== */

$(document).ready(function($){
    
    "use strict";
    
    //main variable
    var modalID;

    //Triggering a modal
    $('.modal-trigger').on("click", function(){
        modalID = $(this).attr('data-modal');
        let $modal = $('#' + modalID);

        $modal.toggleClass('is-active');
        $modal.find('.modal-background').toggleClass('scaleInCircle');
        $modal.find('.modal-content').toggleClass('scaleIn');
        $modal.find('.modal-close').toggleClass('is-hidden');

        //Prevent sticky fixed nav and backtotop from overlapping modal
        $('#scrollnav, #backtotop').toggleClass('is-hidden');
        //Prevent body from scrolling when scrolling inside modal
        setTimeout(function(){
            if ($('.dashboard-wrapper').length) {
                $('body').addClass('is-fixed');
            }
        }, 700);

        //Autofocus on first input
        $modal.find('.modal-content').find('input:first').focus();
    });

    //Closing a modal
    $('.modal-close, .modal-dismiss').on("click", function() {
        let $modal = $('#' + modalID);
        $modal.find('.modal-background').toggleClass('scaleInCircle');
        $modal.find('.modal-content').toggleClass('scaleIn');
        $modal.find('.modal-close').toggleClass('is-hidden');

        //Restore native body scroll
        if ($('.dashboard-wrapper').length) {
            $('body').removeClass('is-fixed');
        }
        setTimeout(function(){
            $('.modal.is-active').removeClass('is-active');
            //Restore sticky nav and backktotop
            $('#scrollnav, #backtotop').toggleClass('is-hidden');

        }, 500);
    })

    //Modal user select toggle
    $('.modal-card-body .card-select i').on("click", function(){
        $(this).toggleClass('is-active');
        $(this).closest('.flex-card').toggleClass('is-active');
        $('.save-btn').removeClass('is-disabled');
    })

    //Modal image gallery with slick carousel
    $('.modal-trigger.gallery-trigger').on("click", function(){
        //Prevents carousel from initiating on a non loaded image
        setTimeout(function(){
            $('.slick-gallery').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                autoplay: true,
                infinite: false
            });
        }, 100);
    })
    
})