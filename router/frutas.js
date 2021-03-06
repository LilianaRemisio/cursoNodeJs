const express = require('express');
const router = express.Router();

const frutas = require("../models/frutas"); //traemos el modelo mascotas

//Leer Frutas
router.get("/", async (req, res) => {
    try{
        const arrayFrutasDB = await frutas.find();
        res.render("frutas", { 
            Frutas: arrayFrutasDB, 
            titulo: "Frutas"
        })
    } catch(error){
        console.log(error)
    }
})

router.get("/crear",(req, res) =>{
    res.render("crear",{titulo: "Crear Frutas"})
})

//Agregar frutas
router.post('/', async (req, res)=>{
    const body = req.body
    try {
        const FrutasDB = new frutas(body);
        await FrutasDB.save();
        res.redirect("/frutas")
    } catch (error) {
       console.log(error)     
    }
})


router.get('/:id', async(req, res) =>{
    const id = req.params.id
    try {
        const frutaDB = await frutas.findOne({_id: id})   
        res.render('detalle',{
            fruta: frutaDB,
            error: false,
            titulo: "Detalle Frutas"
        })
    } catch (error) {
        console.log(error)
        res.render('detalle',{
            error: true,
            mensaje: "La fruta no fue encontrada",
            titulo: "Error"
        })
    }
})
module.exports = router;