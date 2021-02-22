const express = require('express');
const router = express.Router();

router.get("/",(req, res) =>{
    res.render("index",{titulo: "Hola desde la magia de EJS"})
})
router.get("/servicios",(req, res) =>{
    res.render("servicios",{titulo: "Hola desde la magia de EJS en la pagina Servicios"})
})

module.exports = router;