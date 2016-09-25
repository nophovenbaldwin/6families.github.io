var linePath;

function onMouseDown(event) {
	linePath = new Path();
	linePath.strokeColor = 'black';
}

function onMouseDrag(event) {
	linePath.add(event.point);
}

function onMouseUp(event) {
	var myCircle = new Path.Circle({
		center: event.point,
		radius: 10
	});
	myCircle.strokeColor = 'black';
	myCircle.fillColor = 'white';
}