// script.js

function bunk() {
    // Get the input values
    var number1 = parseFloat(document.getElementById("credits").value);

    // Check if the input values are valid numbers
    if (isNaN(number1) || number1>30) 
        {
        document.getElementById("result").textContent = "Please enter the valid Credits ";
        return;
        }

    // Perform the addition
    
    var bunk1 = (3.24*number1);
    var total = parseInt(16.2*number1)
    var bunk = parseInt(bunk1);
    // Display the result
    document.getElementById("result").textContent = "You can BUNK upto " + bunk+ " classes, Out of "+total+" classes";
    
}

