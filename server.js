//import express
const express = require('express');

//create const wiith express function
const app = express();

//create port for server
const port = 3020;

//import postRouter
const postsRouter = require('./routes/posts');

//import middleware for server error
const handleServerError = require('./middlewares/handleServerError');

//import middleware for client error
const notFoundError = require('./middlewares/notFoundError');

//body parsing
app.use(express.json());

//to use images inside public
app.use(express.static('public'));

//import all posts routes inside routes folder
app.use('/api/posts', postsRouter);

//home get
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Our Bakery</h1>')
});

//middleware for server error
app.use(handleServerError);

//middleware for client error
app.use(notFoundError);

//listening server
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
});