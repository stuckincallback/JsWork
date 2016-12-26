
var LEFT = 'LEFT';
var RIGHT = 'RIGHT';
DragonCurveGenerator = {
	turn : function(heading, turn)	{
		var newHeading = new Two.Anchor(0,0);
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
			var turns = [];
			
			turns.push(LEFT);
			for(var i = 1 ; i < recursions; i++)	{
				var rturns=[];
				rturns=turns.slice().reverse();
				// TODO : Create a reverse copy of turns.
				//(Hint : use library functions)
				turns.push(LEFT);
				// TODO : Add a left turn to turns.
				// (Hint : use your brain)
				for (var i = 0 ; i < rturns.length; i++)	{
					rturns[i]==LEFT?rturns[i]=RIGHT:rturns[i]=LEFT;
				}	
				turns = turns.concat(rturns);
				// TODO : Add reflected version of turns.
			}
			return turns;
		},
		generateDragonCurve: function(width, height, recursions)	{
			var turns = this.dragonTurns(recursions);
			var head = new Two.Anchor(width/2, height/2);
			var heading = new Two.Anchor(5,0);
			
			var curve = [];
			var i = 0;
			curve.push(head);
			
			for(var j=0;j<turns.length;j++){
				heading=DragonCurveGenerator.turn(heading,turns[j]);
				curve.push(heading);
			}
			//Convert list of turns into actual paths.
			//generate new points by adding turns to the last position of head.
			
			
			return curve;
		}
	}


var elem = document.getElementById('shapes');
var params = { width: 600, height: 600 };
var two = new Two(params).appendTo(elem);
//console.log(DragonCurveGenerator.generateDragonCurve(600,600,3));
two.makeCurve(DragonCurveGenerator.generateDragonCurve(600,600,3), false);

two.update();