(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery


var x = 0,
    container = $('.container'),
    items = container.find('li'),
    containerHeight = 0,
    numberVisible = 8,
    intervalSec = 2000;

if(!container.find('li:first').hasClass("first")){
  container.find('li:first').addClass("first");
}

items.each(function(){
  if(x < numberVisible){
    containerHeight = containerHeight + $(this).outerHeight();
    x++;
  }
});

container.css({ height: containerHeight, overflow: "hidden" });
  
function vertCycle() {
  var firstItem = container.find('li.first').html();
    
  container.append('<li>'+firstItem+'</li>');
  firstItem = '';
  container.find('li.first').animate({ marginTop: "-50px" }, 600, function(){  $(this).remove(); container.find('li:first').addClass("first"); });
}

if(intervalSec < 700){
  intervalSec = 700;
}

var init = setInterval("vertCycle()",intervalSec);

container.hover(function(){
  clearInterval(init);
}, function(){
  init = setInterval("vertCycle()",intervalSec);
});