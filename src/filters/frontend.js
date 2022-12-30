 /* eslint-env jquery */
jQuery(window).load(function(){
    

    jQuery(".slider" ).each(function() {
        const columnCount = jQuery(this).find('.wp-block-post-template').attr('class').match(/columns-([^d+])/);
        let test = 1;

        if( columnCount !== null && columnCount.length > 0 ) {
            test = +columnCount[1];
        }

        jQuery(this).find('> ul').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: test,
            slidesToScroll: test
        });
    });
});
