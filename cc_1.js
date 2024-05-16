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

// Calculate the total cost
let total = bill + tip;

// Display message
console.log(`The bill was \$${bill}, the tip was \$${tip}, and the total value \$${total}.`);

//-------------------------------------------------
// Create a function to calculate tip
function calcTip(bill){
    if (bill >= 50 && bill <= 300){
        return 0.15*bill;
    } else{
        return 0.20*bill;
    }
}

console.log(`The bill was \$100, the tip was \$${calcTip(100)}, and the total value \$${100 + calcTip(100)}.`);




