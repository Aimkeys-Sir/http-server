const express = require('express')

const app = express()

const PORT = 3000

const planets = [
    {
        id: 0,
        planet_name: 'Keppler-442b',
        host_name: 'Keppler-442'
    },
    {
        id: 1,
        planet_name: 'Centauri b',
        host_name: 'alpha-centauri'
    }
]

app.listen(PORT, () => {
    console.log(`Server Listening at ${PORT}`);
})


app.use((req, res, next) => {
    const start = Date.now()
    console.log(`${req.method} ${req.url} ${new Date()}`)
    next()
    const timeTaken = Date.now() - start

    console.log(`\r ${timeTaken}ms`)
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Here we are!")
})

app.get("/messages", (req, res) => {
    res.send('<h3>To infinity and beyond</h3>')
})

app.get("/places", (req, res) => {
    res.json(planets)
})

app.get('/places/:id', (req, res) => {
    const placeId = +req.params.id
    const planet = planets[placeId]
    if (planet) {
        res.json(planet)
    } else {
        res.status(404).json({
            error: "planet does not exist!"
        })
    }
})

app.post('/places', (req, res) => {
    if (!req.body.planet_name) {
        res.status(422)
            .json({ error: 'Planet name must exist' })
    } else {
        const newPlanet = {
            id: planets.length,
            ...req.body
        }
        planets.push(newPlanet)

        res.json(newPlanet)
    }

})