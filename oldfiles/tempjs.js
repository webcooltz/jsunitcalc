/*-----------------Temperature Converter---------------*/

/* Input: a temperature in Fahrenheit
 * Processing: convert the temperature from Fahrenheit to Celsius
 * Output: the temperature converted to Celsius
 */
function fahrToCels() {
    // Read a Fahrenheit temperature from the user.
    var text = document.getElementById('fahrenInputBox').value;

    // Convert what the user typed from text into a number.
    var f = parseFloat(text);

    // Convert the Fahrenheit temperature into Celsius.
    var c = 5 / 9 * (f - 32);

    // Display the Celsius temperature to the user.
    document.getElementById('celsiusDiv').innerHTML = c;
}


/* Input: a temperature in Celsius
 * Processing: convert the temperature from Celsius to Fahrenheit
 * Output: the temperature converted to Fahrenheit
 */
function celsToFahr() {
    // Read a Fahrenheit temperature from the user.
    var text = document.getElementById('celsiusInputBox').value;

    // Convert what the user typed from text into a number.
    var c = parseFloat(text);

    // Convert the Fahrenheit temperature into Celsius.
    var f = c * 1.8 + 32;

    // Display the Celsius temperature to the user.
    document.getElementById('fahrDiv').innerHTML = f;
}

/* Input: a temperature in Fahrenheit
 * Processing: convert the temperature from Fahrenheit to Celsius
 * Output: the temperature converted to Celsius
 */
function fahrToKelv() {
    // Read a Fahrenheit temperature from the user.
    var text = document.getElementById('fahrInputBox').value;

    // Convert what the user typed from text into a number.
    var f = parseFloat(text);

    // Convert the Fahrenheit temperature into Celsius.
    var k = ((5/9) * (f - 32)) + 273;

    // Display the Celsius temperature to the user.
    document.getElementById('kelvinDiv').innerHTML = k;
}

/* Input: a temperature in Fahrenheit
 * Processing: convert the temperature from Fahrenheit to Celsius
 * Output: the temperature converted to Celsius
 */
function celsToKelv() {
    // Read a Fahrenheit temperature from the user.
    var text = document.getElementById('celsInputBox').value;

    // Convert what the user typed from text into a number.
    var c = parseFloat(text);

    // Convert the Fahrenheit temperature into Celsius.
    var k = c + 273.15;

    // Display the Celsius temperature to the user.
    document.getElementById('kelvinDiv2').innerHTML = k;
}