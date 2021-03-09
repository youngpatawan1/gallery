function readyFn(jQuery) {
  console.log("Hello World!");
  paper.install(window);
};
$(document).on('turbolinks:load', readyFn);



function onResize(event) {
  path.position = view.center;
}

window.onload = function() {
  paper.setup('myCanvas')
  var tool = new Tool();
  var path;

  // Define a mousedown and mousedrag handler
  tool.onMouseDown = function(event) {
    path = new Path();
    path.strokeColor = 'black';
    path.add(event.point);
  }

  tool.onMouseDrag = function(event) {
    path.add(event.point);
  }
}
