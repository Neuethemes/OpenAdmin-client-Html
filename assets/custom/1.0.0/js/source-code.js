(function ($) {
  'use strict';

  var $sourceCodeHtml = null;

  $(window).on('load', function () {
    $.get(window.location.href, function (data) {
      $sourceCodeHtml = $('<div></div>');
      $sourceCodeHtml.html(data);
    });
  });

  /** Document ready handler **/
  $(function () {

    var $sourceCodeModal = $(
        '<div class="modal fade" id="sourceCodeModal" tabindex="-1" role="dialog" aria-hidden="true">'+
          '<div class="modal-dialog modal-lg">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<h4 class="modal-title" id="myLargeModalLabel">Source code</h4>'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                  '<span aria-hidden="true">×</span>'+
                '</button>'+
              '</div>'+
              '<div class="modal-body"><pre><code></code></pre></div>'+
            '</div>'+
          '</div>'+
        '</div>');

    var serviceIcons = '<div class="service-icons"></div>';
    var sourceCodeButton = '<button data-toggle="modal" class="btn btn-icon-sm rounded-circle btn-transparent" data-target="#sourceCodeModal"><i class="fa fa-code" aria-hidden="true"></i></button>';

    $('.widget').each(function(key, elem) {
      if (!$(elem).find('header .service-icons').length) {
        $(elem).find('header').append(serviceIcons);
      }
      $(elem).find('header .service-icons').append(sourceCodeButton);
    });

    $('body').append($sourceCodeModal);

    $('#sourceCodeModal').on('show.bs.modal', function (event) {
      var $button = $(event.relatedTarget);
      var widgetId = $button.parents('.widget').attr('id');
      var sourceCode = $sourceCodeHtml.find('#' + widgetId).html();

      sourceCode = sourceCode.replace(/^\n+/,'');

      var s = sourceCode.match(/^\s+/);
      var re = new RegExp(s, 'g');

      sourceCode = sourceCode.replace(re,'').trim();

      var $code = $(this).find('.modal-body code');
      $code.text(sourceCode);
      hljs.highlightBlock($code[0]);
    });

  });

})(jQuery);