const express = require('express')

const {postPlace,getPlace,getPlaces} = require('../controllers/planets.controller')

const planetsRouter = express.Router()

planetsRouter.get("/", getPlaces)
planetsRouter.get('/:id', getPlace)
planetsRouter.post('/', postPlace)

module.exports = planetsRouter