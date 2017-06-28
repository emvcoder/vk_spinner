var doc = document;

function Preloader(delay) {
  this.delay = delay;
  return this;
};

Preloader.prototype.init = function() {
  doc.querySelector(".spinner").style.background = "transparent";
  doc.querySelector(".fidget_spinner").style.background = "transparent";
  setTimeout(() => { doc.querySelector(".spinner").style.display = "none" }, this.delay)
  return this;
};

Preloader.prototype.show = function() {
  doc.querySelector(".spinner").style.display = "block"
  doc.querySelector(".spinner").style.background = "rgba(255, 255, 255, .93)";
  doc.querySelector(".fidget_spinner").style = "";
  return this;
}
