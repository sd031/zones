var scripts = [
  '/packages/zones/assets/zone.js',
  '/packages/zones/assets/tracer.js'
];

var html = "";
scripts.forEach(function(script) {
  html+= '<script src="' + script + '" type="text/javascript"></script>';
});

Package['inject-initial'].Inject.rawHead("zones", html);
