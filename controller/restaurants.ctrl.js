const uuid = require("uuid")
const {readFile,writeFile} = require("../fs_api/fs")

let restaurants = readFile("restaurants.json")
let orders = readFile("orders.json")

const getRestaurants = (req, res) =>{
    res.send(JSON.stringify(restaurants))
}
const getOneRestaurant = (req, res) =>{
    let {id} = req.params
    let restaurant = restaurants.find(res => res.id === id)
    res.send(JSON.stringify(restaurant))
}
const addRestaurant = (req, res) =>{
    let {name , branches , time} = req.body

    restaurants.push({
        id:uuid.v4(),
        name,
        branches: branches.split(","),
        time,
    })

    writeFile("restaurants.json", restaurants)
    
    res.send(JSON.stringify("restaurant added"))
}

const getOrders = (req, res) => {
  res.send(JSON.stringify(orders));
};
const orderMeal = (req, res) =>{
    let {name ,phone, restaurant, branch , order } = req.body

    orders.push({
        id:uuid.v4(),
        name,
        phone,
        restaurant,
        branch,
        order,
        time : [new Date().getDate(),"/", new Date().getMonth()+1,"/", new Date().getFullYear(),",", new Date().getHours(),":",new Date().getMinutes()].join(""),
    })

    writeFile("orders.json", orders)
    
    res.send(JSON.stringify("order added"))
}

module.exports = {getRestaurants,getOneRestaurant, addRestaurant,getOrders, orderMeal}