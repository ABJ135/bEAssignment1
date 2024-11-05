const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

const book = [
    {
        id: 1 ,
        title : "main anmol",
        author : "Nimra Ahmed",
        year : 2023
    },

    {
        id: 2,
        title : "second book",
        author : "Raman",
        year : 2022
    },

    {
        id: 3,
        title : "third book",
        author : "Ravi",
        year : 2024
    }
 ,
]

// This is get request
app.get('/read',(req,res)=>{
    res.status(200).json({array: book})
})

// This is put request
app.put('/put/:id',(req,res)=>{
    const v = req.params.id;
    console.log(v)
    res.status(201).json(book[v])
})

//This is post request
app.post('/post',(req,res)=>{
    const data = req.body;
    book.push(data)
    res.status(202).json({updated_array : book})
})


//THis is delete request
app.delete('/delete/:id',(req,res)=>{   
    const v = req.params.id;
    book.splice(v, 1);

    res.status(201).json(book);
}
)


   

app.listen(port,()=>{
    console.log("Server is created")
})