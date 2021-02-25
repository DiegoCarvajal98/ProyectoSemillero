(function () {
  var $container = jQuery('#fancybox-login .tx-felogin-pi1');
  var $form = $container.find('form[data-login]');

  $form.on('submit', function () {
    var $user=jQuery(this).find('[name="user"]');
    $container.addClass('ajax-loading');

    jQuery.post($form.attr('action'), $form.serialize(), function (data) {
      var $newContainer = jQuery(data);

      $container.replaceWith(data);

      var $error = $newContainer.find('.error');

      if ($error.length == 0) {
        var $redirectElement = $container.find('[data-tdf-redirect-url]');

        if($redirectElement.length > 0 && $redirectElement.attr('data-tdf-redirect-url'))
        {
          window.location.href = $redirectElement.attr('data-tdf-redirect-url');
        }
        else
        {
          window.location.reload();
        }

      }
    });

    return false;
  });

  jQuery('[data-login-back] a').on('click', function(e) {
    e.preventDefault();

    jQuery('.header__controls .trigger__user').trigger('click');
  });
})();