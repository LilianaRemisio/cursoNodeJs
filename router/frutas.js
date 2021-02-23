const express = require('express');
const router = express.Router();

const frutas = require("../models/frutas"); //traemos el modelo mascotas

router.get("/", async (req, res) => {
    try{
        const arrayFrutasDB = await frutas.find();
        res.render("frutas", { Frutas: arrayFrutasDB
        })
    } catch(error){
        console.log(error)
    }
})

module.exports = router;