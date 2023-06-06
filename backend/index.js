const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express();
app.use(cors())
const port = 5000;

app.use(express.json()) // to use req.body we have to use this
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port , ()=>{
    console.log(`TakemyNote app listening at http://localhost:${port}`)
})