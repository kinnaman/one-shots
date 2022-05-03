/* Program: commuter
 * Author:  Morgan Kinnaman
 * License: GPL-3.0
 * About:   This program calculates commuting costs.
____ ____ _  _ _  _ _  _ ___ ____ ____ 
|    |  | |\/| |\/| |  |  |  |___ |__/ 
|___ |__| |  | |  | |__|  |  |___ |  \ 
____ ____ _  _ ___  _  _ ___ ____ ____ 
|    |  | |\/| |__] |  |  |  |___ |__/ 
|___ |__| |  | |    |__|  |  |___ |  \ 

*/

// element ids set as variables 
var distance      = document.getElementById("distance");
var carType       = document.getElementById("carType");
var mpg           = document.getElementById("mpg");
var gas           = document.getElementsByName("gasPrice"); // https://www.eia.gov/petroleum/gasdiesel/includes/gas_diesel_rss.xml
var insurance     = document.getElementById("insurance");
var time          = document.getElementById("time");
var output        = document.getElementById("output");
var commuteStyle  = document.getElementById("commuteStyle");
var workDays      = document.getElementById("workDays");

function results() {
   //output.innerHTML = "some text"+ distanceId.value;
   //console.log(car.mpg);
   console.log(distance.value);
   console.log(carType.value);
   console.log(carWear(carType.value));
}

function carDailyCost(distance, workDays, gas, mpg, wear, insurance) {
   var gasCost = distance / mpg;
   var dailyPrice = insurance/(4*workDays) + distance/mpg + distance*gas/mpg;
   return dailyPrice;
}

// Tires, maintenance, repair, per mile according to AAA in cents
var wearSmallSedan   = 14.01;
var wearMediumSedan  = 16.97;
var wearLargeSedan   = 19.58;
var wearSmallSUV     = 16.77;
var wearMediumSUV    = 20.03;
var wearPickup       = 22.21;
var wearHybrid       = 12.58;
var wearElectric     = 10.23;

function carWear(CARTYPE){
   switch(CARTYPE){
      case "small sedan":  return wearSmallSedan;  
      case "medium sedan": return wearMediumSedan;    
      case "large sedan":  return wearLargeSedan;  
      case "small suv":    return wearSmallSUV; 
      case "medium suv":   return wearMediumSUV;   
      case "pickup":       return wearPickup;   
      case "hybrid":       return wearHybrid;      
      case "electric":     return wearElectric;       
   };
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

