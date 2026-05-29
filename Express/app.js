const express = require('express');

const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.status(200).send('Hello World! Aryan');
});

app.get("/about", (req, res) => {
    res.send("This is the about page of my first express app")
});

app.post("/about", (req, res) => {
    res.send("This is the post request page of my first express app")
});

app.get("/this",(req, res) => {
    res.status(404).send("This page is not found on the server")
});


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})