// globals jQuery, document
(function ($, undefined) {
    "use strict";

    var $document = $(document);
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

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
