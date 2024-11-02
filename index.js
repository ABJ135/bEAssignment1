const express = require('express')
const app = express()
const port = 3000

const book = [
    {
        id: 1 ,
        title : "main anmol",
        author : "Nimra Ahmed",
        year : 2023
    }
]
app.get('/list',(req,res)=>{
    res.send(book)
    console.log(req.query, "this is query")
    console.log(req.params, "params")
    console.log(req.headers , "headers")
    console.log(req.body, "body")
})
app.put('/update',(req,res)=>{
    res.status(201).json({"message":"This is put request"})
})
app.post('/add',(req,res)=>{
    res.status(202).json({"message":"This is post request"})
})

app.delete('/delete',(req,res)=>{   
     
    res.status(201).json({"message":"This is delete request"});
}
)

app.put('/put',(req, res) => {
    // console.log("put request")
    res.status(201).json({"message":"This is put request"})
}
)    

app.listen(port,()=>{
    console.log("Server is created")
})