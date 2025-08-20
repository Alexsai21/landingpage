$(document).ready(function () {

    // Start Back to Top Button

    $('.btn-backtotops').hide();
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if (getscrolltop >= 410) {
            $('.btn-backtotops').fadeIn(500);
        } else {
            $('.btn-backtotops').fadeOut(500);
        }
    });



    // End Back to Top Button

    //Start navbar 
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrollTop);

        if (getscrolltop >= 200) {
            $('.navbar').addClass("navmenus");
        } else {
            $('.navbar').removeClass("navmenus");
        }
    });


    $('.navbuttons').click(function () {
        $(this).toggleClass("crossxs");
    });

    //End navbar

    // Start Property Section 

    $('.propertylists').click(function () {
        // $(this).addClass("activeitems");

        $(this).addClass("activeitems").siblings().removeClass('activeitems');

        // const filtervalue = $(this).attr('data-filter');
        const filtervalue = $(this).data('filter');
        // console.log(filtervalue)

        if (filtervalue === "all") {
            $('.filters').show('slide', 500);
        } else {
            // ===> Method 1
            //  $('.filters').hide();
            //  $('.filters').filter('.' + filtervalue).show();


            // ===> Method 2
            $('.filters').not('.' + filtervalue).hide('slide', 500);
            $('.filters').filter('.' + filtervalue).show('slide', 500);
        }

    });

    // End Property Section 

    // Start Adv Section 

    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        ///  console.log(getscrolltop);

        if (getscrolltop >= 1300) {
            $('.advimages').addClass("fromlefts");
            $('.advtexts').addClass("fromrights");
        } else {
            $('.advimages').removeClass("fromlefts");
            $('.advtexts').removeClass('fromrights');
        }
    });


    // End Adv Section 

    // Start Footer Section

    const getyear = document.getElementById('getyear');
    const getfullyear = new Date().getFullYear();
    getyear.textContent = getfullyear;






    // End Footer Section

});