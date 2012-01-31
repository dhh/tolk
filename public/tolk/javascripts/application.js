(function(){
  $$('td textarea').each(function(element) {
    element.setStyle({height: element.up('td').measure('height')+'px'});
  }); 
})();
