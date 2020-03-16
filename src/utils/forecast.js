const request = require('request');

const url = 'https://api.darksky.net/forecast/0e91e0f396575697f8447fb85065a543/';//37.8267,-122.4233?units=si';

const forecast = (lat, lon, callback) => {
    const finalURL = url + lat + "," + lon + "?units=si";
    request ({url: finalURL, json: true}, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather service", undefined);
        } else if (body.error) {
            callback("location not found", undefined);
        }else {
            callback(undefined, {
                temperature: body.currently.temperature,
                probability: body.currently.precipProbability,
                summary: body.daily.data[0].summary,
                temp_high: body.daily.data[0].temperatureHigh,
                temp_low: body.daily.data[0].temperatureLow
            })
        }
    })
}

module.exports = forecast;