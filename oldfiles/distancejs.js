/*-----------------Temperature Converter---------------*/


function inchToCm() {
    // Read a Fahrenheit temperature from the user.
    var text = document.getElementById('inchInputBox').value;

    // Convert what the user typed from text into a number.
    var inch = parseFloat(text);

    // Convert the Fahrenheit temperature into Celsius.
    var centimeter = inch * 2.54;

    // Display the Celsius temperature to the user.
    document.getElementById('centimeterDiv').innerHTML = centimeter;
}


function feetToMeters() {
    // Read a Fahrenheit temperature from the user.
    var text = document.getElementById('feetInputBox').value;

    // Convert what the user typed from text into a number.
    var feet = parseFloat(text);

    // Convert the Fahrenheit temperature into Celsius.
    var meters = feet / 3.28;

    // Display the Celsius temperature to the user.
    document.getElementById('metersDiv').innerHTML = meters;
}


function milesToKm() {
    // Read a Fahrenheit temperature from the user.
    var text = document.getElementById('milesInputBox').value;

    // Convert what the user typed from text into a number.
    var miles = parseFloat(text);

    // Convert the Fahrenheit temperature into Celsius.
    var kilometers = miles * 1.60934;

    // Display the Celsius temperature to the user.
    document.getElementById('kmDiv').innerHTML = kilometers;
}