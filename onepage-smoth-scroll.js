$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            // Define the offset value
            var offset = 450; // Change this value to increase or decrease the space above the target

            $('html,body').animate({
                scrollTop: target.offset().top - offset
            }, 2000);
            return false;
        }
    }
});
