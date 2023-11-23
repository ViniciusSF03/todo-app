const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars',exphbs.engine())
app.set('viwe engine', 'handlebars')

app.get('/', (requisicao, resposta) => {
    resposta.send("Ola, Mundo")
})

app.listen(3000,() =>{
    console.log("Servidor rodando na porta 3000!!!")
})