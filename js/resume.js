(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

// contact form js
// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   e.
//   e.target.elements.name.value = '';
//   e.target.elements.email.value = '';
//   e.target.elements.message.value = '';
//   e.target.submitButton.value = 'Message sent!';
// });

document.getElementById('contact-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  const form = event.target;
  const statusDiv = document.getElementById('status');
  const submitButton = form.querySelector('button[type="submit"]');

  // Disable the submit button
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  // Collect form data
  const formData = new FormData(form);

  try {
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/xnnaaygb', {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      });

      if (response.ok) {
          // Success
          statusDiv.textContent = 'Thank you for your message!';
          form.reset();
      } else {
          // Error
          const errorData = await response.json();
          statusDiv.textContent = `Oops! There was a problem: ${errorData.error || 'Unknown error'}`;
      }
  } catch (error) {
      statusDiv.textContent = `Oops! There was a problem: ${error.message}`;
  } finally {
      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.textContent = 'Send';
  }
});

