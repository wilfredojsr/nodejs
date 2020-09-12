const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

geocode(address, (error, {latitude, longitude, location}) => {
  if (error) {
    return console.log(error)
  }

  forecast(latitude, longitude, (error, data) => {

  })
})