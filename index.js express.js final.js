const express = require("express");

const app = express();

app.use(express.json());

app.get ('/ChelseaFC',(req,res) =>{
    res.send("ooooooooooo Thiaggooooo Silvaaaaaaaaaaaaaaaa")
});

let names = ['Aubameyang','Thiago Silva','Mendy','Mount','Havertz'];

app.get('/getAll', (req,res) => res.send(names));

app.get('/get/:id',(req,res) => res.send(names[req.params.id]));

app.post('/createChelseaFC',(req,res) => {
    const name = req.body.name;
    names.push(ChelseaFC);
    res.status(201).send(`${ChelseaFC} added successfully`);
});

app.post ('/replace/:index',(req,res) =>{
    const name = req.query.name;
    const index = req.params.index;
    const old =names[index];
    names[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});

app.patch("/updateChelseaFC/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY:", req.query);

    res.send();
})

app.delete("/removeChelseaFC/:id", (req, res) => {
    console.log("ID:", req.params.id);
    res.send();
});

const server = app.listen(4000, () => console.log(`Server successfully started on port ${server.address().port}`));


//const ChelseaFC = [];

//const bodyParser = require("body-parser");






app.get(""),(req,res)