const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res)=>{
    res.send("Hola mundo")
})

app.get("/about", (req, res) => {
  res.send("Este es el acerca de ...");
});

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})
