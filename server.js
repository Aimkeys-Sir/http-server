const express = require('express')
const path = require('path')

const here = require('./controllers/app.controller')
const planetsRouter = require('./routes/planets.router')
const messagesRouter = require('./routes/message.router')


/**
 * Server
 */
const app = express()

app.set('views engine', 'hbs')
app.set('views', path.join(__dirname,'views'))

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server Listening at ${PORT}`);
})


/**
 * Middleware
 */
app.use((req, res, next) => {
    const start = Date.now()
    console.log(`${req.method} ${req.baseUrl}${req.url} ${new Date()}`)
    next()
    const timeTaken = Date.now() - start

    console.log(`\r ${timeTaken}ms`)
})

app.use('/site',express.static(path.join(__dirname,'public')))
app.use(express.json())


/**
 * Routes
 */
app.get('/', (req,res)=>{
    res.render('index.hbs',{
        title: "Heroes",
        caption: "Dr. Scarlet Ohara, Austronaut,  BioScientist"
    })
})
app.use('/places', planetsRouter)
app.use('/messages', messagesRouter)

