const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT || '3000', 10)
const dev = false
// dev = false
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    }).listen(port)

    console.log(
        `> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV
        }`
    )

    const io = require("socket.io")
    const IO = new io.Server(server);

    const jsdom = require("jsdom")
    const { JSDOM } = jsdom

    const generator = require("project-name-generator")

    JSDOM.fromFile(__dirname + "/server/star-collector/index.html", {
        runScripts: "dangerously",
        resources: "usable",
        pretendToBeVisual: true
    }).then((dom) => {
        dom.window.io = IO
        dom.window.nameGenerator = generator
    }).catch((error) => {
        console.log(error.message)
    })

    JSDOM.fromFile(__dirname + "/server/football/index.html", {
        runScripts: "dangerously",
        resources: "usable",
        pretendToBeVisual: true
    }).then((dom) => {
        dom.window.io = IO
        dom.window.nameGenerator = generator
    }).catch((error) => {
        console.log(error.message)
    })
})

// const io = require("socket.io")
// const IO = new io.Server(server);

// const jsdom = require("jsdom")
// const { JSDOM } = jsdom

// const generator = require("project-name-generator")

// JSDOM.fromFile(__dirname + "/server/star-collector/index.html",{
//     runScripts:"dangerously",
//     resources:"usable",
//     pretendToBeVisual:true
// }).then((dom)=>{
//     dom.window.io = IO
//     dom.window.nameGenerator = generator
// }).catch((error)=>{
//     console.log(error.message)
// })

// JSDOM.fromFile(__dirname + "/server/football/index.html",{
//     runScripts:"dangerously",
//     resources:"usable",
//     pretendToBeVisual:true
// }).then((dom)=>{
//     dom.window.io = IO
//     dom.window.nameGenerator = generator
// }).catch((error)=>{
//     console.log(error.message)
// })