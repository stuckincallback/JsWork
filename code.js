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
	punchCantorGasket(x - size/3 , y - size/3, size/3, recursions - 1);
	punchCantorGasket(x , y - size/3, size/3, recursions - 1);
	punchCantorGasket(x , y + size/3, size/3, recursions - 1);
	punchCantorGasket(x + size/3 , y - size/3, size/3, recursions - 1);
	punchCantorGasket(x - size/3 , y, size/3, recursions - 1);
	punchCantorGasket(x + size/3 , y , size/3, recursions - 1);
	punchCantorGasket(x - size/3 , y + size/3, size/3, recursions - 1);
	punchCantorGasket(x + size/3 , y + size/3, size/3, recursions - 1);
	
}

//draw largest square first.
 two.makeRectangle(400,400,600,600);
//update on screen
two.update();
//draw remainig squares.
punchCantorGasket(400, 400, 600, 3);
//punchCantorGasket(200,200,)
//update on screen.
two.update();