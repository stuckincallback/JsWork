var elem = document.getElementById('shapes');	//find where to draw
var params = { width: 800, height: 800 };		//set size of drawing board
var two = new Two(params).appendTo(elem);		//initialize drawer

//Our recursive drawing function
function punchCantorGasket(x, y, size, recursions)	{
	if(recursions == 0)	{
		return;
	}
	
	//Draw center square
	two.makeRectangle(x, y, size/3, size/3);
	//Draw 8 other squares using recursion.
	
}

//draw largest square first.
//var square = two.makeRectangle(400,400, 300, 300);
var triangle = two.makePolygon(400,400, 300, 3);
//update on screen
two.update();
//draw remainig squares.
//punchCantorGasket(400, 400, 300, 4);
//update on screen.
//two.update();