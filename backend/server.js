const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes.js');

dotenv.config();
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000;

// app.get('/books/', (req,res) =>{
//     res.json().status(200)
// })


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`,)
})
app.use('/books', bookRoutes)