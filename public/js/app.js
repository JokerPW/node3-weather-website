const url = '/weather?address='

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')

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
                messageThree.textContent = 'Rain probability: ' + data.forecast.probability
                messageFour.textContent = 'Day\'s high and low: ' + data.forecast.temp_high + '\/' + data.forecast.temp_low
                messageFive.textContent = data.forecast.summary
            }
        })
    })
})