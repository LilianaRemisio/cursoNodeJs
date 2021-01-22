const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", 'ejs') //declaramos el motor de plantillas
app.set('views', __dirname+'/views') //le decimos donde se encuentra la carpeta

app.use(express.static(__dirname + "/public"));

app.get("/",(req, res) =>{
    res.render("index",{titulo: "Hola desde la magia de EJS"})
})
app.get("/servicios",(req, res) =>{
    res.render("index",{titulo: "Hola desde la magia de EJS en la pagina Servicios"})
})
app.use((req, res, next) => {
    // cuando es una ruta desconocida 
    res.status(404).render("404",{titulo: "404"});
  });

app.listen(port, ()=>{
    //damos la respuesta en la consola
    console.log("http://localhost:"+port)
})