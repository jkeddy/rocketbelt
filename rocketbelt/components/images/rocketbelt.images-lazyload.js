(function () {
  var ctrl = new ScrollMagic.Controller();

  $(document).ready(function () {
    $('.lazyload-wrapper').each(function () {
      var wrapper = this,
            small = wrapper.querySelector('.lazyload-small');

      var img = new Image();
      img.src = small.src;
      img.onload = function () {
        small.classList.add('loaded');
      };
    });

    $('.lazyload-wrapper .lazyload-small').each(function () {
      var currentImage = this;
      new ScrollMagic.Scene(
        {
          triggerElement: currentImage,
          offset: (-document.documentElement.clientHeight / 2)
        })
        .on('enter', function () {
          var wrapper = this.triggerElement().parentElement;
          var imgLarge = new Image();

          imgLarge.src = wrapper.dataset.srcLg;
          imgLarge.onload = function () {
            imgLarge.classList.add('loaded');
          };

          wrapper.appendChild(imgLarge);
        })
        .addTo(ctrl);
    });
  });
})();
