const express = require("express")
const {getRestaurants,getOneRestaurant, addRestaurant,getOrders, orderMeal} = require("../controller/restaurants.ctrl.js")

const restaurantsRouter = express.Router()

restaurantsRouter.get("/all",getRestaurants)
restaurantsRouter.get("/all/:id",getOneRestaurant)
restaurantsRouter.post("/add",addRestaurant)
restaurantsRouter.get("/orders",getOrders)
restaurantsRouter.post("/orders/add",orderMeal)

module.exports = restaurantsRouter