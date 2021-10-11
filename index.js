const express = require("express");
const PORT = 8080;
let moment = require("moment");
let hora = moment().format("HH")
let app = express()
let visitCounter =0

app.get("/", (req, res)=>{
    res.send("Hola")
})

app.get("/visitas", (req, res)=>{
    visitCounter++
   res.send(`Tu pedido fue ${req.query.name} y esta página lleva ${visitCounter} visitas`)
})

app.get("/fyh", (req, res)=>{
    res.send("Honduras!")
})

app.listen(PORT, ()=>{
    console.log(`Estamos en el servidor http://localhost:${PORT}`)
})