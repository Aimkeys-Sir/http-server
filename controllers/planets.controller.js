const {planets} = require('../models/planets.model')

function getPlaces(req, res){
    res.json(planets)
}

function getPlace(req, res){
    const placeId = +req.params.id
    const planet = planets[placeId]
    if (planet) {
        res.json(planet)
    } else {
        res.status(404).json({
            error: "planet does not exist!"
        })
    }
}

function postPlace(req, res){
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

}

module.exports = {
    getPlace,
    getPlaces,
    postPlace
}