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

//--------------------------------------------------
// Create a function to generate arrays for tips and totals
  // take an array as an argument

function tips_totals_calc(bills){
    let tips = bills.map(calcTip);       // Generate a tip array using the MAP method
    let totals = [];                     // Initiate an empty array for totals

    for (let i=0; i < bills.length; i++){    // Loop through the bills array and add it to the respective tip 
        let total = bills[i] + tips[i];      // to calculate the total cost
        totals.push(total);                  // add that total value to the totals array
    }
    return [tips, totals];            // return an array containing an array for tips and an array for totals
}

// Test case 1
let bills_1 = [275, 40, 430];
let [tips1, totals1] = tips_totals_calc(bills_1)

console.log("----------------------------------------")
console.log("Data set 1")
console.log(`The bills are ${bills_1.join(', ')}.`);
console.log(`The tips are ${tips1.join(', ')}.`);
console.log(`The totals are ${totals1.join(', ')}.`);

// Test case 2
let bills_2 = [125, 555, 44];
let [tips2, totals2] = tips_totals_calc(bills_2)

console.log("----------------------------------------")
console.log("Data set 2 ")
console.log(`The bills are ${bills_2.join(', ')}.`);
console.log(`The tips are ${tips2.join(', ')}.`);
console.log(`The totals are ${totals2.join(', ')}.`);

