/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    $document.ready(function () {
        // hide loading bar for MobileSafari
        if( userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
            $(".pace").hide();
        }

        var $postContent = $(".post-content");
        $postContent.fitVids();
    });

})(jQuery);
