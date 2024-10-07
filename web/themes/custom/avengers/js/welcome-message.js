(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.welcomeMessage = {
    attach: function (context, settings) {
      if (settings.welcomeMessage) {
        var message = $('<div class="welcome-message"></div>').text(settings.welcomeMessage);

        message.css({
          'background-color': '#f0f8ff',
          'color': '#333',
          'padding': '10px',
          'text-align': 'center',
          'font-size': '16px',
          'border': '1px solid #ccc',
          'margin-bottom': '20px',
          'border-radius': '5px',
        });

        $('body').prepend(message);
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
