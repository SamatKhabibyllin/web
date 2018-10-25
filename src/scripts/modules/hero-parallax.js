var parallax = (function () {
  var bg = document.querySelector('.hero-bg');
  var user = document.querySelector('.user');
  var sectionText = document.querySelector('.svg-title-hero');

  return {
    move: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformStriing = 'translate3d(0,'+ strafe +',0)';
      
      var style = block.style;

      style.tramsform = transformStriing;
      style.webkitTramsform = transformStriing;
    },

    init: function(wScroll) {
      this.move(bg, wScroll, 45);
      this.move(user, wScroll, 20);
      this.move(sectionText, wScroll, 3);
    }
  }
 

}());


window.onscroll = function () {
  var wScroll = window.pageYOffset;
  
  parallax.init(wScroll);
  
}