
jQuery(document).ready(function ($) {

    /*-----------------------------------------------------------------------------------*/
    /* Template Options */
    /*-----------------------------------------------------------------------------------*/


    TOptions = {

        // variables
    
        selector_slider     : document.getElementById("sequence"),  // header slider javascript selector
       

   



      


        /*-----------------------------------------------------------------------------------*/
        /* Main Slider Section Options
         * Source: http://sequencejs.com/documentation/#options */
        /*-----------------------------------------------------------------------------------*/
        main_slider_section: function () {

            // Launch Sequence on the element, and with the options we specified above
            sequence(this.selector_slider, {
                keyNavigation                 : true,   // Keyboard options enable the user to navigate to steps using specific keyboard buttons.
                animateCanvas                 : false,  // Whether Sequence.js should automatically control the canvas animation when a step is navigated to.
                phaseThreshold                : false,  // Whether there should be a delay between the current step animating out and the next step animating in.
                fadeStepWhenSkipped           : true,   // If a step is skipped before it finishes animating, cause it to fade out over a specific period of time
                reverseWhenNavigatingBackwards: true,   // Whether animations should be reversed when a user navigates backwards by clicking a previous button/swiping/pressing the left key.
                autoPlay                      : false,   // Automatically navigate
                swipeNavigation               : true,   // Whether to allow the user to navigate between steps by swiping left and right on touch enabled devices.
                swipeEvents                   : {       // The public Sequence.js method that should occur when the user swipes in a particular direction.
                    left : function (sequence) {

                        // When the user swipes left, the Sequence.js event self.prev() is initiated.
                        sequence.prev();
                    },
                    right: function (sequence) {

                        // When the user swipes right, the Sequence.js event self.next() is initiated.
                        sequence.next();
                    }
                }
            });


        },
};
    
    

    /*-----------------------------------------------------------------------------------*/
    /* Call functions */
    /*-----------------------------------------------------------------------------------*/
    TOptions.main_slider_section();
});