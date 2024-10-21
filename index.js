const express = require('express');
const path = require('path');
const app = express(); 

const port = 5000;

const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/home.html`)
})


app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`); // rodando na porta 5000

});