// Hoang Nguyen
// U12840485
//-------------------

// Initiate a bill value 
let bill = 275;

// Declare the tip variable
let tip;

// Determine the tip amount
if (bill >= 50 && bill <= 300){
    tip = 0.15*bill;
} else{
    tip = 0.20*bill;
}
console.log(tip);


