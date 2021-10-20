// Stuff to think about to start the project

//openweathermap.org/api to get current weather information
//have to sign up to get an api key
//need one api smack to get the current weather
//need another api smack to get forecast
//do current weather to get lat and long
//then use latitude and logitude to use the one call api to get more info
// fire off same chunk of code for the search or if they click the saved smacks of cities below

let city = $('#searchBox')

// on click function that starts when user clicks the search button
$('#searchBtn').on('click', function () {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city.val() + '&appid=14a17e4b1eca2f426f4a1fdcd85e2f0f'
    }).then(function (data) {
        let name = data.name
        let lat = data.coord.lat
        let lon = data.coord.lon
        getOneCall(name,lat,lon)
    })
})

// second function that takes info from users search and smacks another api with it
function getOneCall(name,lat,lon) {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&units=imperial&appid=14a17e4b1eca2f426f4a1fdcd85e2f0f'
    }).then(function (data) {

        let city = name
        let temp = data.current.temp
        let wind = data.current.wind_speed
        let humidity = data.current.humidity
        let uvi = data.current.uvi
        displayData(city,temp,wind,humidity,uvi)
       
    })
}

//displays weather information to the page
function displayData(city,temp,wind,humidity,uvi) {

    $('#cityName').append(city)    
    $('#cityTemp').append(temp + '\xB0' + 'F')
    $('#cityWind').append(wind + ' MPH')
    $('#cityHumid').append(humidity + ' %')
    $('#cityUvi').append(uvi)

}