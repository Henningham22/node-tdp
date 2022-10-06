const express = require("express");

const app = express();

app.use(express.json());

app.get ('/ChelseaFC',(req,res) =>{
    res.send("ooooooooooo Thiaggooooo Silvaaaaaaaaaaaaaaaa")
});

let names = ['Aubameyang','Thiago Silva','Mendy','Mount','Havertz'];

app.get('/getAll', (req,res) => res.send(names));

app.get('/get/:id',(req,res) => res.send(names[req.params.id]));

app.get('/delete/:id', (req,res) =>{
    res.send(names.splice(req.params.id, 1));
});

app.post('/create',(req,res) => {
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

//const ChelseaFC = [];

//const bodyParser = require("body-parser");

//app.listen(4000, () => console.log("ooooooooo Thiagggooooo Sillllvvvaaaaa"));









app.get(""),(req,res)