$(function() {

  document.addEventListener('init', function(event) {
      var page = event.target;
      
      console.log(page.id);

      if (page.id === 'Home') {
          $('#back').hide();
          page.querySelector('#starwar').onclick = function() {
              document.querySelector('#myNavigator').pushPage('views/starwar.html');
            
          };
          page.querySelector('#pirate').onclick = function() {
              document.querySelector('#myNavigator').pushPage('views/pirate.html');
          };
          page.querySelector('#avatar').onclick = function() {
              document.querySelector('#myNavigator').pushPage('views/avatar.html');
          };
      } else if (page.id === 'starwar' || page.id === 'pirate' || page.id === 'avatar') {
          
          $('#back').show();
          document.querySelector('ons-back-button').onclick = function(event) {
              document.querySelector('#myNavigator').popPage();
              $('#back').hide();
          };
      }
      
        
      

  });
})