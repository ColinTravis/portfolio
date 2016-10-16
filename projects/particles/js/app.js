var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#08afc6',
  background: '#000000',
  interactive: false,
  speed: 'medium',
  density: 'heavy'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);
