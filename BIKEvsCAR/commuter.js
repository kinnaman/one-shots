// Includes
// find out how to get element from rss feed
// interact with html

// Variables
var distance;
var daysPerweek = 5;
var gasPrice; // https://www.eia.gov/petroleum/gasdiesel/inclu    des/gas_diesel_rss.xml

var car = {
	type: undefined, //get html of car choice
	mpg: undefined,
	insurance: undefined,
	time: undefined,
	wearMultiplier: function(){
		switch(this.type){
			case "small sedan":
				//code block
				break;
			case "medium sedan":
				//code block
				break;
			case "large sedan":
				//code block
				break;
			case "small sedan":
				//code block
				break;
			case "suv":
				//code block
				break;
			case "minivan":
				//code block
				break;
		}
	}
};

var bicycle = {
	annualMaintenance: undefined,
	time: undefined
};

var rail = {
	time: undefined,
	fair: undefined
};

var bus = {
	time: undefined,
	fair: undefined
};

/*
 class.timeSum:
 daily
 monthly
 annual
 foundTime = rail.time + bus.time
 */

// Refresh calculations when select button is pressed

/* useful js tutorials
  https://www.w3schools.com/js/js_object_methods.asp
  */

/* Sources
 https://www.eia.gov/petroleum/gasdiesel/
 https://itstillruns.com/calculate-gallons-gas-used-7615514.htm    l
 */

