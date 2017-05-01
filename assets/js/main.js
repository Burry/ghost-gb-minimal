/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    $document.ready(function () {
        // iOS adjustments
        if( userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
            // hide loading bar
            $(".pace").hide();
            // add :hover style to all links
            $("a").click(function() {
                void(0);
            });
        }

        var postExcerpts = $(".post-excerpt p");

        $clamp(postExcerpts, {clamp: 3});

        var $postContent = $(".post-content");
        $postContent.fitVids();
    });

})(jQuery);
