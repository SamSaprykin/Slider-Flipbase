exports.onInitialClientRender = () => {
  require("typeface-arvo");
  require("typeface-cabin");
};

exports.onRouteUpdate = () => {
  window.locations = window.locations || [document.referrer]
  window.locations.push(window.location.href)
  window.previousPath = window.locations[locations.length - 2]
}