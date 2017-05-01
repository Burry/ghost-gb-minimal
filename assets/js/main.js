// globals jQuery, document
(function ($, undefined) {
    "use strict";

    var $document = $(document);
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // truncate post excerpts
    $('.post-excerpt p').each(function(index, element) {
        $clamp(element, {clamp: 3});
    });

    // add :hover style to all links
    // $("a").click(function() {
    //     return true;
    // });

    $document.ready(function () {
        // iOS adjustments
        if( userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
            // hide loading bar
            $(".pace").hide();
        }

        var $postContent = $(".post-content");
        $postContent.fitVids();
    });

})(jQuery);
