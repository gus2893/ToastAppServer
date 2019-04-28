const express = require('express')
const db = require('./db/mongoose')
const Toast = require('./models/toast')
const app = express()
const server = require('http').createServer(app)
const sio = require('socket.io')(server)
const PORT = process.env.PORT || 3000

app.use(express.json())
app.get('/', (req,res)=>{
    res.send("hello there!")
})
app.post('/new/toast', async (req, res) => {
     const toast = new Toast({
        ...req.body
    })
    io.emit('getToast', toast)


     try {
         await toast.save()
         res.status(201).send(toast)
     } catch (e) {
         res.status(400).send(e)
     }
})

app.get('/toasts', async (req, res) => {

    try {
        const toasts = await Toast.find()
        res.send(toasts)
    } catch (e) {
        res.status(500).send(e)
    }
})

server.listen(PORT, ()=>{
    console.log('listening on port', PORT)
})



io = sio.listen(server);

io.on('connection', (socket)=>{
    console.log('connected')
})

