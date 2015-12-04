$(document).ready(function() {

	(function() { 
		// Make an instance of two and place it on the page.
		var elem = $('#1 .visual-aid')[0];
		var params = { width: 200, height: 200 };
		var two = new Two(params).appendTo(elem);

		var xaxis = two.makeLine(0,100,200,100);
		xaxis.linewidth = 5;
		xaxis.stroke = "rgba(0, 0, 0, 0.7)";

		var yaxis = two.makeLine(100,0,100,200);
		yaxis.linewidth = 5;
		yaxis.stroke = "rgba(0, 0, 0, 0.7)";

		var circle = two.makeCircle(100, 100, 50);
		circle.stroke = "rgba(230,26,141,1)"; // Accepts all valid css color
		circle.fill = "rgba(0,156,149,0.0)";
		circle.strokeopacity=0.9
		circle.linewidth = 5;

		var radius = two.makeLine(100,100,130,60);
		radius.linewidth=3;
		radius.stroke="rgba(33,186,69,1)";

		var radiustext = new Two.Text('r', 123,80, {size: 22, style: "italic"});
		two.add(radiustext);

		// Don't forget to tell two to render everything
		// to the screen
		two.update();
	})();

	(function() { 
		// Make an instance of two and place it on the page.
		var elem = $('#2 .visual-aid')[0];
		var params = { width: 200, height: 200 };
		var two = new Two(params).appendTo(elem);

		var xaxis = two.makeLine(0,100,200,100);
		xaxis.linewidth = 5;
		xaxis.stroke = "rgba(0, 0, 0, 0.7)";

		var yaxis = two.makeLine(100,0,100,200);
		yaxis.linewidth = 5;
		yaxis.stroke = "rgba(0, 0, 0, 0.7)";

		var circle = two.makeCircle(135, 65, 50);
		circle.stroke = "rgba(230,26,141,1)"; // Accepts all valid css color
		circle.fill = "rgba(0,156,149,0.0)";
		circle.strokeopacity=0.9
		circle.linewidth = 5;

		var radius = two.makeLine(135,65,165,25);
		radius.linewidth=3;
		radius.stroke="rgba(33,186,69,1)";

		var center = two.makeCircle(135,65, 5);
		center.fill = "rgba(0,0,0,1.0)";
		center.linewidth = 1;

		var radiustext = new Two.Text('r', 155,50, {size: 22, style: "italic"});
		two.add(radiustext);

		var centertext = new Two.Text('(h,k)', 135,80, {size: 15, style: "italic"});
		two.add(centertext);

		// Don't forget to tell two to render everything
		// to the screen
		two.update();
	})();

	(function() { 
		// Make an instance of two and place it on the page.
		var elem = $('#3 .visual-aid')[0];
		var params = { width: 200, height: 200 };
		var two = new Two(params).appendTo(elem);

		var xaxis = two.makeLine(0,100,200,100);
		xaxis.linewidth = 5;
		xaxis.stroke = "rgba(0, 0, 0, 0.7)";

		var yaxis = two.makeLine(100,0,100,200);
		yaxis.linewidth = 5;
		yaxis.stroke = "rgba(0, 0, 0, 0.7)";

		var circle = two.makeCircle(100, 75, 50);
		circle.stroke = "rgba(230,26,141,1)"; // Accepts all valid css color
		circle.fill = "rgba(0,156,149,0.0)";
		circle.strokeopacity=0.9
		circle.linewidth = 5;

		var radius = two.makeLine(100,75,130,35);
		radius.linewidth=3;
		radius.stroke="rgba(33,186,69,1)";

		var center = two.makeCircle(100,75, 5);
		center.fill = "rgba(0,0,0,1.0)";
		center.linewidth = 1;

		var radiustext = new Two.Text('r', 125,55, {size: 22, style: "italic"});
		two.add(radiustext);

		var centertext = new Two.Text('(0,4)', 123,75, {size: 15, style: "italic"});
		two.add(centertext);

		// Don't forget to tell two to render everything
		// to the screen
		two.update();
	})();

	(function() { 
		// Make an instance of two and place it on the page.
		var elem = $('#4 .visual-aid')[0];
		var params = { width: 200, height: 200 };
		var two = new Two(params).appendTo(elem);

		var xaxis = two.makeLine(0,100,200,100);
		xaxis.linewidth = 5;
		xaxis.stroke = "rgba(0, 0, 0, 0.7)";

		var yaxis = two.makeLine(100,0,100,200);
		yaxis.linewidth = 5;
		yaxis.stroke = "rgba(0, 0, 0, 0.7)";

		var circle = two.makeCircle(100, 75, 50);
		circle.stroke = "rgba(230,26,141,0.2)"; // Accepts all valid css color
		circle.fill = "rgba(0,156,149,0.0)";
		circle.strokeopacity=0.2
		circle.linewidth = 5;

		var radius = two.makeLine(100,75,130,35);
		radius.linewidth=3;
		radius.stroke="rgba(33,186,69,1)";

		var xarm = two.makeLine(100,75,130,75);
		xarm.linewidth=3;
		xarm.stroke="rgba(242,98,2, 1)";

		var yarm = two.makeLine(130,75,130,35);
		yarm.linewidth=3;
		yarm.stroke="rgba(151,91,51, 1)";

		var center = two.makeCircle(100,75, 5);
		center.fill = "rgba(0,0,0,1.0)";
		center.linewidth = 1;

		var endpoint = two.makeCircle(130,35, 5);
		endpoint.fill = "rgba(0,0,0,1.0)";
		endpoint.linewidth = 1;

		var radiustext = new Two.Text('r', 110,45, {size: 15, style: "italic"});
		two.add(radiustext);

		var centertext = new Two.Text('(0,4)', 75,75, {size: 15, style: "italic"});
		two.add(centertext);

		var endpointtext = new Two.Text('(4/3,5)', 160,35, {size: 15, style: "italic"});
		two.add(endpointtext);

		// Don't forget to tell two to render everything
		// to the screen
		two.update();
	})();

	(function() { 
		// Make an instance of two and place it on the page.
		var elem = $('#6 .visual-aid')[0];
		var params = { width: 180, height: 130 };
		var two = new Two(params).appendTo(elem);

		var radius = two.makeLine(70,105,130,35);
		radius.linewidth=3;
		radius.stroke="rgba(33,186,69,1)";

		var xarm = two.makeLine(70,105,130,105);
		xarm.linewidth=3;
		xarm.stroke="rgba(242,98,2, 1)";

		var yarm = two.makeLine(130,105,130,35);
		yarm.linewidth=3;
		yarm.stroke="rgba(151,91,51, 1)";

		var center = two.makeCircle(70,105, 5);
		center.fill = "rgba(0,0,0,1.0)";
		center.linewidth = 1;

		var endpoint = two.makeCircle(130,35, 5);
		endpoint.fill = "rgba(0,0,0,1.0)";
		endpoint.linewidth = 1;

		var radiustext = new Two.Text('r', 90,60, {size: 15, style: "italic"});
		two.add(radiustext);

		var atext = new Two.Text('a', 105,115, {size: 15, style: "italic"});
		two.add(atext);

		var btext = new Two.Text('b', 140,80, {size: 15, style: "italic"});
		two.add(btext);

		var centertext = new Two.Text('(0,4)', 45,105, {size: 15, style: "italic"});
		two.add(centertext);

		var endpointtext = new Two.Text('(4/3,5)', 160,35, {size: 15, style: "italic"});
		two.add(endpointtext);

		// Don't forget to tell two to render everything
		// to the screen
		two.update();
	})();

	$('button.green').click(function(){
		var visible = $('.solution').not(".hidden");

		visible.transition({
			animation : 'fade right',
			duration  : 600,
			onComplete : function() {
				visible.next('.solution').transition({
					animation : 'fade left',
					duration  : 600,
				});
				if (visible.next('.solution').next('.solution').length == 0) {
					$('button.green').addClass("disabled");
				}
			}
		});

		$('button.red').removeClass("disabled");
	});

	$('button.red').click(function(){
		var visible = $('.solution').not(".hidden");

		visible.transition({
			animation : 'fade left',
			duration  : 600,
			onComplete : function() {
				visible.prev('.solution').transition({
					animation : 'fade right',
					duration  : 600,
				});
				if (visible.prev('.solution').prev('.solution').length == 0) {
					$('button.red').addClass("disabled");
				}
			}
		});

		$('button.green').removeClass("disabled");
	});

	$('.show-answer-btn').click(function(){
		var visible = $('.solution').not(".hidden").find('.answer-text');

		visible.transition({
			animation : 'fade down',
			duration  : 600,
			onComplete : function() {
			}
		});

	});

});
