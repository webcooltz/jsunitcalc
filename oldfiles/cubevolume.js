/*-----------------Cube Volume Converter-----------*/

function computeVolumeRP() {

    // Read a length, width then height number from the user
    
    var lengthOfRectangle = parseInt(document.getElementById('length').value);
    var widthOfRectangle = parseInt(document.getElementById('width').value);
    var heightOfRectangle = parseInt(document.getElementById('height').value);
   
    
    //convert one side area to the volume
    
    var vRP = lengthOfRectangle * widthOfRectangle * heightOfRectangle;
    
    // Display the volume number to the user
    
    document.getElementById('result').innerHTML = vRP;
    
}