(function ($) {
  'use strict';

  /** Document ready handler **/
  $(function () {

    $('[data-toggle="collapse-width"]').on('click', function () {
      var $collapsedElement = $($(this).attr("data-target"));

      if (!$collapsedElement.hasClass("collapsed-width")) {
        $collapsedElement.attr('style', 'overflow-x: hidden!important; width: 0');
        $collapsedElement.addClass("collapsed-width");
      }
      else {
        $collapsedElement.width($($collapsedElement.children()).width());
        $collapsedElement.removeClass("collapsed-width");
        setTimeout(function() {
          $collapsedElement.css('overflowX', 'visible');
        }, 500 );
      }
    });

    $('[data-toggle="slide-right"]').on('click', function () {
      var $slidedElement = $($(this).attr("data-target"));

      if (!$slidedElement.hasClass("slided")) {
        $slidedElement.css("right", "0");
        $slidedElement.addClass("slided");
      }
      else {
        $slidedElement.css("right", "");
        $slidedElement.removeClass("slided");
      }
    });

    if (window.toastr !== undefined) {
      toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
      };
      toastr["info"]("Non-blocking notifications available!", "Info");
    }

  });


})(jQuery);