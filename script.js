/*window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var contentSections = document.querySelectorAll('section');
    var currentSectionId = '';
  
    // Find the current section based on scroll position
    for (var i = 0; i < contentSections.length; i++) {
      var rect = contentSections[i].getBoundingClientRect();
      if (rect.top <= 70 && rect.bottom >= 70) { // 70 is the height of the fixed navbar
        currentSectionId = contentSections[i].id;
      }
    }
  
    // Change navbar background color based on current section
    if (currentSectionId === 'home') {
      navbar.style.backgroundColor = 'transparent';
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });*/
  