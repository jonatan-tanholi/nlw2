//dados
const proffys = 
[ 
    {
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"47996825340", 
    bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões", 
    subject:"Química",
    cost:"20", 
    wekkday:[0], 
    time_from:[], 
    time_to:[]
    },
    {
        name: "Jonatan Osmundo Tanholi", 
        avatar: "https://avatars1.githubusercontent.com/u/69334684?s=460&u=a9fe49be6c491ad8327779bd396b852a1c75256c&v=4",
        whatsapp:"47996825340", 
        bio:"Sou fera na arte de ser um namorado, faço tudo que elas gostam na cama, posso lhe ensinar!", 
        subject:"Perito No Amor",
        cost:"00", 
        wekkday:[1], 
        time_from:[], 
        time_to:[]
        }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

//funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding (req,res) {
    return res.render("index.html")
}

 function pageStudy (req,res) {
    const filters = req.query
    return res.render("study.html",{proffys, filters, subjects, weekdays })
} 

function pageGiveClasses (req,res) {
    const data =req.query

    //Object.keys cria um array[] length == 0 significa se o array for == a 0 se sim então é isEmpty VAZIO//
    //objeto.keys cria um array[] length >  0 significa se o aray foi   > a 0 sem sim então ele não é vazio
    const isNotEmpty = Object.keys(data).length > 0
    //se tiver dados adicionar
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

    //adicionar dados a lista de proffys
    proffys.push(data)
    
    return res.redirect("/study")
}
    //se não, nao adicionar e somente mostrar a pg
    return res.render("give-classes.html",{subjects, weekdays})
}

//servidor
const express = require('express')
const server = express()


//configurar nunjucks (Template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio  e config do servidor
server
//configurar arquivos estativos (css, scripts, images)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)


//criando uma função
/* function express() {
    return ""
}
//chamando uma função e executando
express() */