var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#fff',
  background: '#000000',
  interactive: true,
  speed: 'medium',
  density: 'medium'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);
