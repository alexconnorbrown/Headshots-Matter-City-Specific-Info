function showCityInfo() {
    var city = document.getElementById('cityDropdown').value;
    var cityInfoDiv = document.getElementById('cityInfo');
    var cityNameHeader = document.getElementById('cityName');
    
    cityNameHeader.innerText = city; // This will change the header to the name of the city chosen

    // You will need to add the actual content for each city here
    cityInfoDiv.innerHTML = "<h2>Information for " + city + "</h2><p>Details will go here...</p>";
}
