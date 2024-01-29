const express = require("express")
const app = new express()
const port = 3000


app.get('/', function (req, res){
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, function (){
    console.log(`Rodando na porta ${port}`)
}) 