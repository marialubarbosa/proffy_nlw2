//dados
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9865896352",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0] , 
        time_from: [720], 
        time_to: [1220],
    },

    {
        name: "Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "9865896352",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0] , 
        time_from: [720], 
        time_to: [1220],
    },

    {
        name: "Maria Luísa", 
        avatar: "https://avatars2.githubusercontent.com/u/66148213?s=460&u=501462ad57bf5de7e1e7a76195a58b5ca4fba270&v=4",
        whatsapp: "9865896352",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0] , 
        time_from: [720], 
        time_to: [1220],
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
    "Portguês",
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

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays}) 
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    
    return res.render("give-classes.html", {subjects, weekdays})
}

//servidor
const express = require('express')
const server =express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//Configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start servidor
.listen(5500)

