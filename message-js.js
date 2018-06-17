// start mutating when the document is fully loaded
$(function () {

    // add a timer to check every 0.1 seconds if there has been
    //   a message element added
    var intervalTime = 100;
    var destroyTime = 4000;
    var a = setInterval(function () {

        // check if there is an element that has data-message,
        //   but not data-loaded-message
        // cycle through those elements
        $( "[data-message]:not([data-loaded-message])" ).each(function () {

            var c = $( this );

            // check if message container already exists
            if ($( "[data-message-container]" ).length == 0) {
                $( "body" ).append( "<div data-message-container></div>" );
            }

            // clone the element into the message container
            var d = $( this ).clone();
            // first, add loaded message attribute to new element
            //   so it doesn't get detected again
            // also remove the normal message attribute
            d.attr( "data-loaded-message", "" );
            d.removeAttr( "data-message" );
            // don't show the element at first
            d.css( "display", "none" );
            // append to container
            d.appendTo( "[data-message-container]" );
            // fade in animation for element
            d.fadeIn( 200 );

            // destroy the original element
            c.remove();

            // set a timeout to destroy the element after a given time
            var b = setTimeout(function () {

                // let the element fade out
                d.fadeOut( 1000, function () {
                    // remove after animation
                    d.remove();
                });

            }, destroyTime);

        });

    }, intervalTime);

});
