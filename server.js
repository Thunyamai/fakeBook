require('dotenv').config();
const express = require("express")
const cors = require('cors');
const errorMiddlewares = require('./middlewares/error-middlewares');
const notFound = require('./middlewares/notFound');


const app = express()

// middlerware
app.use(cors())
app.use(express.json())   // midware ที่เอาไว้แกะ body ที่เป็น json

app.use('/auth' , (req, res)=>{
    // console.log(first)
    res.json('Auth')
})
app.use('/post' , ()=>{})
app.use('/comment' , ()=>{})
app.use('/like' , ()=>{})

app.use(notFound)
app.use(errorMiddlewares)

const port = process.env.PORT || 8800
app.listen(port, () => console.log(`Server on ${port}`))