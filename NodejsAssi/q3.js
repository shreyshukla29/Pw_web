const http = require('http')

const server = http.createServer((req , resp)=>{
  if(req.url=='/'){
    resp.end('Hello, World!')

  }
  else{
    resp.writeHead(404)
    resp.end('Page not found')
  }
})

server.listen(4000,()=>{ // 3000 is port no
    console.log("server get started")
})