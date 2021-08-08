const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmdvY25ndXllbjIwMTEiLCJhIjoiY2tzMGo2ZnMxMG50MTJ3cGpmNzEwcjZ5YiJ9.cn1vY2LW8TOsL64ZxbOOzA&limit=1'
    request({url, json: true},(error,{body} = {}) => {
        if(error) {
            callback('Unable to connection to Mapbox service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode