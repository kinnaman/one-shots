/* Program:	commuter
 * Author:	Morgan Kinnaman
 * License:	GPL-3.0
 * About:	This program calculates commuting costs.
 */

// element ids set as variables 
var distanceId		= document.getElementById("distance");
var carTypeId 		= document.getElementById("carType");
var mpgId 			= document.getElementById("mpg");
var gasId			= document.getElementsByName("gasPrice"); // https://www.eia.gov/petroleum/gasdiesel/includes/gas_diesel_rss.xml
var insuranceId	= document.getElementById("insurance");
var timeId			= document.getElementById("time");
var output 			= document.getElementById("output");

function results() {
	carTypeId 		= document.getElementById("carType");
	//output.innerHTML = "some text"+ distanceId.value;
	//console.log(car.mpg);
	console.log(distanceId.value);
	console.log(car.type);
}

// Tires, maintenance, repair, per mile according to AAA in cents
var wearSmallSedan 	= 14.01;
var wearMediumSedan 	= 16.97;
var wearLargeSedan 	= 19.58;
var wearSmallSUV 		= 16.77;
var wearMediumSUV 	= 20.03;
var wearPickup 		= 22.21;
var wearHybrid 		= 12.58;
var wearElectric 		= 10.23;

var car = {
	type: 		carTypeId.value,
	//mpg: 			mpgId.value,
	//insurance: 	insuranceId.value,
	//time: 		timeId.value,
	/*maintenance: function(){
		switch(car.type){
			case "small sedan": 	return wearSmallSedan;	
			case "medium sedan": return wearMediumSedan; 	
			case "large sedan": 	return wearLargeSedan;	
			case "small suv": 	return wearSmallSUV;	
			case "medium suv":	return wearMediumSUV; 	
			case "pickup": 		return wearPickup;	
			case "hybrid":			return wearHybrid;		
			case "electric":     return wearElectric; 		
		}
	}*/
};


/*
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
*/

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
  https://stackoverflow.com/questions/23982774/turn-html-form-input-into-javascript-variable
  */

/* Sources
 https://www.eia.gov/petroleum/gasdiesel/
 https://itstillruns.com/calculate-gallons-gas-used-7615514.htm    l
 */

