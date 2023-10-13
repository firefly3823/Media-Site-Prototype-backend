//import json-server
const jsonServer = require('json-server')

//create json server using jsonServer.create

const mediaPlayerServer = jsonServer.create()

//set up the path for db.json file

const router = jsonServer.router("db.json")

//returns middleware used by JSON server

const middleware = jsonServer.defaults()

//setup port for server app
const port = 4000 || process.env.PORT

//use middle ware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//server listen for request
mediaPlayerServer.listen(port,()=> {
    console.log(`Media player servers started at port : ${port}, and waiting for request `)
})