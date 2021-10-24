let city = $('#searchBox')


// smack weather api to retrieve the lat and lon of users searched city, then commit city name to local storage
$('#searchBtn').on('click', function () {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city.val() + '&appid=14a17e4b1eca2f426f4a1fdcd85e2f0f'
    }).then(function (data) {
        console.log('data??', data)
        let name = data.name
        let icon = data.weather[0].icon
        let lat = data.coord.lat
        let lon = data.coord.lon
        getOneCall(name, icon, lat, lon)
    })

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

//displays daily weather information on the viewport
function displayDaily(city, weatherIcon, temp, wind, humidity, uvi) {

    $('#dailyWeather').empty()


    let cityName = $('<div>')
    let date = moment().format('MMM Do YYYY')
    $(cityName).attr('id', 'cityName')
    $(cityName).html(city + ' | ' + date)
    $('#dailyWeather').append(cityName)
    $('#dailyIcon').attr('src', 'https://openweathermap.org/img/wn/' + weatherIcon + '.png')

    $('#cityTemp').html('Temp: ' + temp + '\xB0' + 'F')
    $('#cityWind').html('Wind: ' + wind + ' MPH')
    $('#cityHumid').html('Humidity: ' + humidity + ' %')
    $('#cityUvi').html('UV Index: ' + uvi)
}

//displys weekly weather information on the viewport
function displayWeekly(data) {

    $('.empty').empty()

    let weeklyTemp1 = data.daily[0].temp.day
    let weeklyWind1 = data.daily[0].wind_speed
    let weeklyHumidity1 = data.daily[0].humidity
    let weeklyIcon1 = data.daily[0].weather[0].icon

    let day1Date = moment().add(1, 'days').format('MMM Do YYYY')
    let day1Temp = 'Temp: ' + weeklyTemp1 + '\xB0' + 'F'
    let day1Wind = 'Wind: ' + weeklyWind1 + ' MPH'
    let day1Humidity = 'Humidity: ' + weeklyHumidity1 + '%'
    
    $('#day1Date').text(day1Date)
    $('#day1Temp').text(day1Temp)
    $('#day1Wind').text(day1Wind)
    $('#day1Humidity').text(day1Humidity)
    $('#weeklyIcon1').attr("src", "https://openweathermap.org/img/wn/" + weeklyIcon1 + ".png")
    $('#weeklyIcon1').attr("alt", data.daily[0].weather[0].description)

    let weeklyTemp2 = data.daily[1].temp.day
    let weeklyWind2 = data.daily[1].wind_speed
    let weeklyHumidity2 = data.daily[1].humidity
    let weeklyIcon2 = data.daily[1].weather[0].icon

    let day2Date = moment().add(2, 'days').format('MMM Do YYYY')
    let day2Temp = 'Temp: ' + weeklyTemp2 + '\xB0' + 'F'
    let day2Wind = 'Wind: ' + weeklyWind2 + ' MPH'
    let day2Humidity = 'Humidity: ' + weeklyHumidity2 + '%'
    $('#day2Date').append(day2Date)
    $('#day2Temp').append(day2Temp)
    $('#day2Wind').append(day2Wind)
    $('#day2Humidity').append(day2Humidity)
    $('#weeklyIcon2').attr("src", "https://openweathermap.org/img/wn/" + weeklyIcon2 + ".png")
    $('#weeklyIcon2').attr("alt", data.daily[1].weather[0].description)

    let weeklyTemp3 = data.daily[2].temp.day
    let weeklyWind3 = data.daily[2].wind_speed
    let weeklyHumidity3 = data.daily[2].humidity
    let weeklyIcon3 = data.daily[2].weather[0].icon

    let day3Date = moment().add(3, 'days').format('MMM Do YYYY')
    let day3Temp = 'Temp: ' + weeklyTemp3 + '\xB0' + 'F'
    let day3Wind = 'Wind: ' + weeklyWind3 + ' MPH'
    let day3Humidity = 'Humidity: ' + weeklyHumidity3 + '%'
    $('#day3Date').append(day3Date)
    $('#day3Temp').append(day3Temp)
    $('#day3Wind').append(day3Wind)
    $('#day3Humidity').append(day3Humidity)
    $('#weeklyIcon3').attr("src", "https://openweathermap.org/img/wn/" + weeklyIcon3 + ".png")
    $('#weeklyIcon3').attr("alt", data.daily[2].weather[0].description)

    let weeklyTemp4 = data.daily[3].temp.day
    let weeklyWind4 = data.daily[3].wind_speed
    let weeklyHumidity4 = data.daily[3].humidity
    let weeklyIcon4 = data.daily[3].weather[0].icon

    let day4Date = moment().add(4, 'days').format('MMM Do YYYY')
    let day4Temp = 'Temp: ' + weeklyTemp4 + '\xB0' + 'F'
    let day4Wind = 'Wind: ' + weeklyWind4 + ' MPH'
    let day4Humidity = 'Humidity: ' + weeklyHumidity4 + '%'
    $('#day4Date').append(day4Date)
    $('#day4Temp').append(day4Temp)
    $('#day4Wind').append(day4Wind)
    $('#day4Humidity').append(day4Humidity)
    $('#weeklyIcon4').attr("src", "https://openweathermap.org/img/wn/" + weeklyIcon4 + ".png")
    $('#weeklyIcon4').attr("alt", data.daily[3].weather[0].description)

    let weeklyTemp5 = data.daily[4].temp.day
    let weeklyWind5 = data.daily[4].wind_speed
    let weeklyHumidity5 = data.daily[4].humidity
    let weeklyIcon5 = data.daily[4].weather[0].icon

    let day5Date = moment().add(5, 'days').format('MMM Do YYYY')
    let day5Temp = 'Temp: ' + weeklyTemp5 + '\xB0' + 'F'
    let day5Wind = 'Wind: ' + weeklyWind5 + ' MPH'
    let day5Humidity = 'Humidity: ' + weeklyHumidity5 + '%'
    $('#day5Date').append(day5Date)
    $('#day5Temp').append(day5Temp)
    $('#day5Wind').append(day5Wind)
    $('#day5Humidity').append(day5Humidity)
    $('#weeklyIcon5').attr("src", "https://openweathermap.org/img/wn/" + weeklyIcon5 + ".png")
    $('#weeklyIcon5').attr("alt", data.daily[4].weather[0].description)

    storage()
}

//stores searched cities to local storage and then adds them to the viewport
function storage() {

    let cityArray = JSON.parse(localStorage.getItem('cities')) || []
    cityArray.push(city.val())
    localStorage.setItem('cities', (JSON.stringify(cityArray)))

    for (let i = 0; i < cityArray.length; i++) {

        var savedCity = $('<p>')
        savedCity.html(cityArray[i])
        $('#savedCities').append(savedCity)
    }
}