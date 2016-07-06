(() => {
  const backgroundImage = new Image();
  backgroundImage.src = "path-to-an-image-file";
  backgroundImage.onload = () => {
    document.getElementById('background').style["background-image"] = `url(${backgroundImage.src})`;
  }
})();
