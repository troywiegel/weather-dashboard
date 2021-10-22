let city = $('#searchBox')


// smack weather api to retrieve the lat and lon of users searched city, then commit city name to local storage
$('#searchBtn').on('click', function () {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city.val() + '&appid=14a17e4b1eca2f426f4a1fdcd85e2f0f'
    }).then(function (data) {
        let name = data.name
        let icon = data.weather[0].icon
        let lat = data.coord.lat
        let lon = data.coord.lon
        getOneCall(name, icon, lat, lon)
    })
    let cityArray = JSON.parse(localStorage.getItem('cities')) || []
    cityArray.push(city.val())
    localStorage.setItem('cities', (JSON.stringify(cityArray)))

})

// second function that takes info from users search and smacks another api with it
function getOneCall(name, icon, lat, lon) {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&units=imperial&appid=14a17e4b1eca2f426f4a1fdcd85e2f0f'
    }).then(function (data) {

        let city = name
        let weatherIcon = icon
        let temp = data.current.temp
        let wind = data.current.wind_speed
        let humidity = data.current.humidity
        let uvi = data.current.uvi
        displayDaily(city, weatherIcon, temp, wind, humidity, uvi)
        displayWeekly(data)

    })
}

//displays weather information to the page
function displayDaily(city, weatherIcon, temp, wind, humidity, uvi) {

    //add to style/border the li content?

    $('#dailyWeather').empty()

    let cityName = $('<div>')
    $(cityName).attr('id', 'cityName')
    // let cityImage = $('<img>')
    // $(cityImage).attr('src', ('https://openweathermap.org/img/w/' + weatherIcon + '.png'))
    $(cityName).html(city)
    $('#dailyWeather').append(cityName)

    let cityTemp = $('<li>')
    $(cityTemp).html('Temp: ' + temp + '\xB0' + 'F')
    $('#dailyWeather').append(cityTemp)

    let cityWind = $('<li>')
    $(cityWind).html('Wind: ' + wind + ' MPH')
    $('#dailyWeather').append(cityWind)

    let cityHumid = $('<li>')
    $(cityHumid).html('Humidity: ' + humidity + ' %')
    $(dailyWeather).append(cityHumid)

    let cityUvi = $('<li>')
    $(cityUvi).html('UV Index: ' + uvi)
    $('#dailyWeather').append(cityUvi)

}

function displayWeekly(data) {

    $('.empty').empty()

    // let forecast = [

    //     {
    //         // date: ,
    //         // image: ,
    //         temp: data.daily[0].temp.day,
    //         wind: data.daily[0].wind_speed,
    //         humidity: data.daily[0].humidity

    //     },
    //     {
    //         // date: ,
    //         // image: ,
    //         temp: data.daily[1].temp.day,
    //         wind: data.daily[1].wind_speed,
    //         humidity: data.daily[1].humidity

    //     },
    //     {
    //         // date: ,
    //         // image: ,
    //         temp: data.daily[2].temp.day,
    //         wind: data.daily[2].wind_speed,
    //         humidity: data.daily[2].humidity

    //     },
    //     {
    //         // date: ,
    //         // image: ,
    //         temp: data.daily[3].temp.day,
    //         wind: data.daily[3].wind_speed,
    //         humidity: data.daily[3].humidity

    //     },
    //     {
    //         // date: ,
    //         // image: ,
    //         temp: data.daily[4].temp.day,
    //         wind: data.daily[4].wind_speed,
    //         humidity: data.daily[4].humidity

    //     },
    // ]

    // for (let i = 0; i < forecast.length; i++) {

    //     let weeklyForecast = $('<div>')
    //     $(weeklyForecast).html(forecast[i])
    //     $('#weeklyWeather').append(weeklyForecast)

    // }
    let weeklyTemp1 = data.daily[0].temp.day
    let weeklyWind1 = data.daily[0].wind_speed
    let weeklyHumidity1 = data.daily[0].humidity

    let day1Temp = ('<li>' + 'Temp: ' + weeklyTemp1 + '\xB0' + 'F' + '<li>')
    let day1Wind = ('<li>' + 'Wind: ' + weeklyWind1 + ' MPH' + '<li>')
    let day1Humidity = ('<li>' + 'Humidity: ' + weeklyHumidity1 + '%' + '<li>')
    $('#day1').append(day1Temp)
    $('#day1').append(day1Wind)
    $('#day1').append(day1Humidity)

    let weeklyTemp2 = data.daily[1].temp.day
    let weeklyWind2 = data.daily[1].wind_speed
    let weeklyHumidity2 = data.daily[1].humidity

    let day2Temp = ('<li>' + 'Temp: ' + weeklyTemp2 + '\xB0' + 'F' + '<li>')
    let day2Wind = ('<li>' + 'Wind: ' + weeklyWind2 + ' MPH' + '<li>')
    let day2Humidity = ('<li>' + 'Humidity: ' + weeklyHumidity2 + '%' + '<li>')
    $('#day2').append(day2Temp)
    $('#day2').append(day2Wind)
    $('#day2').append(day2Humidity)

    let weeklyTemp3 = data.daily[2].temp.day
    let weeklyWind3 = data.daily[2].wind_speed
    let weeklyHumidity3 = data.daily[2].humidity

    let day3Temp = ('<li>' + 'Temp: ' + weeklyTemp3 + '\xB0' + 'F' + '<li>')
    let day3Wind = ('<li>' + 'Wind: ' + weeklyWind3 + ' MPH' + '<li>')
    let day3Humidity = ('<li>' + 'Humidity: ' + weeklyHumidity3 + '%' + '<li>')
    $('#day3').append(day3Temp)
    $('#day3').append(day3Wind)
    $('#day3').append(day3Humidity)

    let weeklyTemp4 = data.daily[3].temp.day
    let weeklyWind4 = data.daily[3].wind_speed
    let weeklyHumidity4 = data.daily[3].humidity

    let day4Temp = ('<li>' + 'Temp: ' + weeklyTemp4 + '\xB0' + 'F' + '<li>')
    let day4Wind = ('<li>' + 'Wind: ' + weeklyWind4 + ' MPH' + '<li>')
    let day4Humidity = ('<li>' + 'Humidity: ' + weeklyHumidity4 + '%' + '<li>')
    $('#day4').append(day4Temp)
    $('#day4').append(day4Wind)
    $('#day4').append(day4Humidity)

    let weeklyTemp5 = data.daily[4].temp.day
    let weeklyWind5 = data.daily[4].wind_speed
    let weeklyHumidity5 = data.daily[4].humidity

    let day5Temp = ('<li>' + 'Temp: ' + weeklyTemp5 + '\xB0' + 'F' + '<li>')
    let day5Wind = ('<li>' + 'Wind: ' + weeklyWind5 + ' MPH' + '<li>')
    let day5Humidity = ('<li>' + 'Humidity: ' + weeklyHumidity5 + '%' + '<li>')
    $('#day5').append(day5Temp)
    $('#day5').append(day5Wind)
    $('#day5').append(day5Humidity)

}

//need to store searches to local storage to be pulled on click later
//maybe do keyname info as the city (text input from user) and that can be
//pulled into search on click?