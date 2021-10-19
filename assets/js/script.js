// Stuff to think about to start the project

//openweathermap.org/api to get current weather information
//have to sign up to get an api key
//need one api smack to get the current weather
//need another api smack to get forecast
//do current weather to get lat and long
//then use latitude and logitude to use the one call api to get more info
// fire off same chunk of code for the search or if they click the saved smacks of cities below

function mainWeather() {

    //jQuery fetch
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=portland&appid=14a17e4b1eca2f426f4a1fdcd85e2f0f',
    }).then(function (data) {
        var lat = data.coord.lat
        var lon = data.coord.lon
    })
}

mainWeather()

function getOneCall() {

    //var url = new one call api url with lat lon added
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/onecall?lat=45.52&lon=-122.67&exclude=minutely,hourly,alerts&units=imperial&appid=14a17e4b1eca2f426f4a1fdcd85e2f0f',
    }).then(function (data) {
        console.log('data 2????', data)

        var today = data.current
        var week = data.daily

        console.log('today weather??', today)
        console.log('weekly weather??', week)

        var temp = data.current.temp
        var wind = data.current.wind_speed
        var humidity = data.current.humidity
        var uvi = data.current.uvi
        var daily = data.daily[0] //make array??

        $('#cityTemp').append(temp + '\xB0' + 'F')
        $('#cityWind').append(wind + ' MPH')
        $('#cityHumid').append(humidity + ' %')
        $('#cityUvi').append(uvi)
    })
}

getOneCall()

// function displayData() {

//     //display on page
//     //1, 2, 3 punch

// }