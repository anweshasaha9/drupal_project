(function (Drupal, drupalSettings) {
    Drupal.behaviors.welcomeMessage = {
      attach: function (context, settings) {
        if (!context.querySelector('#welcome-message')) {
          const message = drupalSettings.welcomeMessage;
  
          if (message) {
            const welcomeDiv = document.createElement('div');
            welcomeDiv.id = 'welcome-message';
            welcomeDiv.textContent = message;
            document.body.insertBefore(welcomeDiv, document.body.firstChild);
          }
        }
      },
    };
  })(Drupal, drupalSettings);
  