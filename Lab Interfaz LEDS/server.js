import { express, Server, cors, SerialPort, ReadlineParser } from './dependencies.js'

const SERVER_IP = '127.0.0.1';

const app = express()
const PORT = 5050

app.use('/interface', express.static('public-interface'))
app.use(express.json())

const protocolConfiguration = {
    path: '/dev/cu.usbmodem142101',
    baudRate: 9600
}

const port = new SerialPort(protocolConfiguration)

const parser = port.pipe(new ReadlineParser)
parser.on('data', (arduinoData)=>{
    console.log(arduinoData);
})

const httpServer = app.listen(PORT, () => {
    console.log(`Server is running, host http://${SERVER_IP}:${PORT}/`)
    console.table({
        'Client Endpoint': `http://localhost:${PORT}/interface/`
    })
})

const io = new Server(httpServer, { path: '/real-time' })

io.on('connection', (socket) => {
    console.log(socket.id)


    socket.on("LED1LightOn", message1 => {
        port.write(message1)
        console.log(message1)
    })
    socket.on("LED1LightOff", message2 => {
        port.write(message2)
        console.log(message2)
    })

    socket.on("LED2LightOn", message3 => {
        port.write(message3)
        console.log(message3)
    })
    socket.on("LED2LightOff", message4 => {
        port.write(message4)
        console.log(message4)
    })
    
    socket.on('disconnect', () => {
        console.log('Client disconnected: ' + socket.id)
    })
})