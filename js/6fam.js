var circleFour = new Path.Circle({
        center: new Point(250, 50),
        radius: 30,
        fillColor: 'red'
    });

var raster = new Raster('six');

// Move the raster to the center of the view
raster.position = view.center;

// Scale the raster by 50%
raster.scale(0.025);

var circleOne = new Path.Circle(new Point(100, 70), 60);
circleOne.fillColor = 'black';

var circleTwo = new Path.Circle(new Point(200, 70), 50);
circleTwo.fillColor = 'green';

var circleThree = new Path.Circle(new Point(0,0), 40);
circleThree.fillColor = "black";

var destination = Point.random() * view.size;

function onFrame(event) {
    var vector = destination - circleTwo.position;

    circleTwo.position += vector / 30;
    if (vector.length < 5) {
        destination = Point.random() * view.size;
    }

    raster.rotate(event.delta * 120);
}

function onMouseUp(event) {
    circleOne.fillColor = {
            hue: Math.random() * 360,
            saturation: 1,
            brightness: 1
     };
}

tool.onMouseMove = function(event) {
    // Whenever the user moves the mouse, move the path
    // to that position:
    circleThree.position = event.point;
}

tool.onKeyDown = function(event) {
    if (event.key == 'space') {
        // Scale the path by 110%:
        circleFour.scale(1.1);

        // Prevent the key event from bubbling
        return false;
    }
}