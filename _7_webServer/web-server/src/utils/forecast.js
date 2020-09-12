const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=5581fe424a60423859d2acac8cf51abd&query=' + latitude + ',' + longitude

  request({url, json: true}, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location!', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0])
    }
  })
}

module.exports = forecast