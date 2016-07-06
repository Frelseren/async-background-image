(function() {
  "use strict";
  var backgroundImage = new Image();
  backgroundImage.src = "path-to-an-image-file";
  backgroundImage.onload = function () {
    document.getElementById('background').style["background-image"] = "url(" + backgroundImage.src + ")";
  }
})();
