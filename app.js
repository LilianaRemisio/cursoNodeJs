const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.eqffc.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority`

//conexion ala BD
const mongoose = require('mongoose');
mongoose.connect(uri, 
    {useNewUrlParser: true, useUnifiedTopology: true}
  ).then(() => console.log("Conectado Correctamente"))
  .catch(e => console.log(e));


app.set("view engine", 'ejs') //declaramos el motor de plantillas
app.set('views', __dirname+'/views') //le decimos donde se encuentra la carpeta

app.use(express.static(__dirname + "/public"));

app.use('/', require('./router/Web'));
app.use('/frutas', require('./router/frutas'));

app.use((req, res, next) => {
    // cuando es una ruta desconocida 
    res.status(404).render("404",{titulo: "404"});
  });

app.listen(port, ()=>{
    //damos la respuesta en la consola
    console.log("http://localhost:"+port)
})