$( document ).ready(function() {

        //do something

        //  $(".btn-round").click({animateIn: "closeButton", animateOut: "plusButton"}, animate_function);
        $(".btn-square").click({animateIn: "circleShape", animateOut: "squareShape"}, animate_function);


        function animate_function(event){
            var info = $(this);
            var sectionDIv  = info.closest('.sectionDiv');
            sectionDIv.toggleClass('bg_red');
            sectionDIv.find(".innerText").toggle();
            sectionDIv.closest('.row').find('.rightshowDiv').toggle();
            sectionDIv.closest('.row').find('.blackBox').toggle();
            if( $(this).hasClass(event.data.animateIn) ) {

                $(this).removeClass(event.data.animateIn).addClass(event.data.animateOut);
            }
            else if( $(this).hasClass(event.data.animateOut) ) {


                $(this).removeClass(event.data.animateOut).addClass(event.data.animateIn);

            }
            else {


                $(this).addClass('animated ' + event.data.animateIn);
            }
        }

});