const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
    res.render("frutas", { Frutas:
        [{
            id:'12des',
            nombre: 'Manzana',
            color: 'Roja'
        },
        {
            id:'12desw',
            nombre: 'Uva',
            color: 'Verde'
        }]
    })
})

module.exports = router;