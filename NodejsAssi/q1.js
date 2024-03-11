const http = require('http')

const server = http.createServer((req , resp)=>{
  if(req.url=='/hello'){
    resp.end('hello student')

  }
  else{
    resp.writeHead(404)
    resp.end('use the right url')
  }
})

server.listen(3000,()=>{ // 3000 is port no
    console.log("server get started")
})