const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=59cd67d54458f3750eaed7837266ba65&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json: true},(error,{body} = {}) => {
        //console.log(url)
        if(error) {
            callback('Unable to connection to Weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const weather_descriptions = body.current.weather_descriptions
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const humidity = body.current.humidity
            callback(undefined, weather_descriptions + '. It is currently ' + temperature + ' degrees out. Feels like ' + feelslike + ' degrees. The humidity is ' + humidity)
        }
    })
}

module.exports = forecast