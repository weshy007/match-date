var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku ", "Yaw", "Kofi", "Kwame"];
var akanFemaleNames = ["Akosua", "Adwoa", " Abenaa", "Akua", "  Yaa", "Afua"];
var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function akan() {

    var dd = parseInt(document.getElementById("day").value);
    var mm = parseInt(document.getElementById("month").value);
    var cc = parseInt(document.getElementById("century").value);
    var yy = parseInt(document.getElementById("year").value);
    
    var gender = document.getElementById("gender").value;
    var d = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7


    if (mm <= 0 || mm > 12) {
        alert("Please enter a valid month")

    } 
    
    else if (dd < 1 || dd > 31) {
        alert("Please enter a valid date")

    } 
    
    else if (gender === "Male") {
        alert("You were born on a " + dayOfTheWeek[dd] + " and your Ghanian AKAN Name is " + akanMaleNames[dd])

    } 
    
    else if (gender === "Female") {
        alert("You were born on a " + dayOfTheWeek[dd] + " and your Ghanian AKAN Name is " + akanFemaleNames[dd])

    }

}