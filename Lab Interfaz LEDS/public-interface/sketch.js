const NGROK = `${window.location.hostname}`
console.log('Server IP: 127.0.0.1', NGROK)
let socket = io(NGROK, { path: '/real-time' })

const canva = document.getElementById('canva')

const imgFondo = document.getElementById('imgFondo')

const imgLuzApagada = document.getElementById('imgLuzApagada')

const imgSugerencia = document.getElementById('imgSugerencia')

const buttonOnLED1 = document.getElementById('buttonOnLED1')

const buttonOffLED1 = document.getElementById('buttonOffLED1')

const buttonOnLED2 = document.getElementById('buttonOnLED2')

const buttonOffLED2 = document.getElementById('buttonOffLED2')

buttonOnLED1.addEventListener('click',() => {
    socket.emit("LED1LightOn",  "onLED1");
})

buttonOffLED1.addEventListener('click',() => {
    socket.emit("LED1LightOff",  "offLED1");
})

buttonOnLED2.addEventListener('click',() => {
    socket.emit("LED2LightOn",  "onLED2");
})

buttonOffLED2.addEventListener('click',() => {
    socket.emit("LED2LightOff",  "offLED2");
})