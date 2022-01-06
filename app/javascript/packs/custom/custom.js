
//Initialize canvas 
function readyFn(jQuery) {
  console.log("Hello World!");
};

function onResize(event) {
  path.position = view.center;
}


var CanvasSetup = () => {
  var tool1, tool2;
  paper.setup('myCanvas');

  var path;
  function onMouseDown(event) {
    path = new Path();
    path.strokeColor = 'red';
    path.add(event.point);
  }

  tool1 = new Tool();
  tool1.onMouseDown = onMouseDown;

  tool1.onMouseDrag = function(event) {
    path.add(event.point);
  }
  
  tool2 = new Tool();
  tool2.minDistance = 20;
  tool2.onMouseDown = onMouseDown;

  tool2.onMouseDrag = function(event) {
    path.arcTo(event.point);
  }
}


$(document).on('turbolinks:load', function() {
  readyFn();
});


$(function() {
  paper.install(window);
  CanvasSetup();
})
