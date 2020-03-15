//const forecast = require('../../src/utils/forecast')
//const geocode = require('../../src/utils/geocode')

const url = 'http://localhost:3000/weather?address='

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''

    fetch(url + location).then((response) => {
        response.json().then((data) => {        
            if (data.error){
                console.log(data.error)
                messageOne.textContent = 'Error'
                messageTwo.textContent = data.error
            } else {
                console.log(data.location)
                console.log(data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast.temperature
            }
        })
    })
})