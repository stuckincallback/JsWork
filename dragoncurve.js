
var LEFT = 'LEFT';
var RIGHT = 'RIGHT';
DragonCurveGenerator = {
	turn : function(heading, turn)	{
		var newHeading = Two.Anchor(0,0);
		switch(turn)	{
			case 'LEFT':
				newHeading.x = -heading.x;
				newHeading.y = heading.x;
				break;
			case 'RIGHT':
				newHeading.x = heading.y;
				newHeading.y = -heading.x;
			}
			
			return newHeading;
		},
		dragonTurns : function(recursions)	{
			turns = [];
			turns.push(LEFT);
			for(var i = 0 ; i < recursions; i++)	{
				// TODO : Create a reverse copy of turns.
				//(Hint : use library functions)
				
				// TODO : Add a left turn to turns.
				// (Hint : use your brain)
				
				// TODO : Add reflected version of turns.
			}
			return turns;
		},
		generateDragonCurve: function(width, height, recursions)	{
			turns = dragonTurns(recursions);
			head = Two.Anchor(width/2, height/2);
			heading = Two.Anchor(5,0);
			
			curve = [];
			var i = 0;
			curve.push(head);
			
			//Convert list of turns into actual paths.
			//generate new points by adding turns to the last position of head.
			
			
			return curve;
		}
	}
};

var elem = document.getElementById('shapes');
var params = { width: 600, height: 600 };
var two = new Two(params).appendTo(elem);

two.makeCurve(DragonCurveGenerator.generateDragonCurve(600,600,3), false);

two.update();