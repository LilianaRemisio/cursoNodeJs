const express = require('express');
const { findByIdAndDelete } = require('../models/frutas');
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

//Ruta pagina crear frutas
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

//Editar frutas
router.post('/editar/:id', async (req, res)=>{
    const id = req.params.id
    const body = req.body
    try {
        const frutasDB = await frutas.findByIdAndUpdate(id, body, {useFindAndModify: false})
        console.log(frutasDB)
        res.redirect("/frutas")    
    } catch (error) {
       console.log(error)    
    }
})

//Detalle de la fruta

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

//eliminar frutas
router.delete("/:id", async (req, res) =>{
    const id = req.params.id
    try {
        const frutasDB = await frutas.findByIdAndDelete({_id: id});

        if(frutasDB){
            console.log("eliminado bien bien")
            res.json({
                estado: true,
                mensaje: "Eliminado"
            })
        }else{
            console.log("eliminado bien bien")
            res.json({
                estado: false,
                mensaje: "Error"
            })
        }
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;