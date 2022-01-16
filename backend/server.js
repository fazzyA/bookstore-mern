const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes.js');


const app = express();

app.use(cors())
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 5000;

// app.get('/books/', (req,res) =>{
//     res.json().status(200)
// })


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`,)
})
app.use('/books', bookRoutes)