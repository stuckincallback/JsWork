var elem=document.getElementById('shapes');
var params={width:800,Height:800};
var two=new Two(params).appendTo(elem);

function printTriangle(x1,y1,x2,y2,x3,y3,size,recurssion){
	if(recurssion==0)
		{return;}
	two.makePath(Math.abs((x2-x1)/2),
				Math.abs((y2-y1)/2),
				Math.abs((x3-x1)/2),
				Math.abs((y3-y1)/2),
				Math.abs((x3-x2)/2),
				Math.abs((y3-y2)/2),
				false);
	printTriangle(x1,
					y1,
					Math.abs((x3-x1)/2),
					Math.abs((y3-y1)/2),
					Math.abs((x2-x1)/2),
					Math.abs((y2-y1)/2),
				size/2, recurssion - 1);
	printTriangle(x2,
					y2,
					Math.abs((x3-x2)/2),
					Math.abs((y3-y2)/2),
					Math.abs((x2-x1)/2),
					Math.abs((y2-y1)/2),
				size/2, recurssion - 1);
	printTriangle(x3,
					y3,
					Math.abs((x3-x1)/2),
					Math.abs((y3-y1)/2),
					Math.abs((x3-x2)/2),
					Math.abs((y3-y2)/2),
				size/2, recurssion - 1);
				
}
two.makePath(0,0,0,200,200,0,false);
//update on screen
printTriangle(0,0,0,200,200,0,200,2);
two.update();
//two.makePath();