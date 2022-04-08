const express = require('express');
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
const {readFile, writeFile} = require('fs').promises;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let projs = [];

app.get('/', (req, res) => {
    res.send('Servidor de prueba');
});
app.get('/projs', async (req, res) => {
    await open();
    res.json(projs);
});
app.get('/projs/:id', (req, res) => {
    res.send(`${req.params.id}`);
});
app.put('/projs/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    const index = projs.findIndex(proj => proj.id === id);
    projs[index].completed = !projs[index].completed;
    await save();
    res.json(projs[index]);
});
app.delete('/projs/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    projs = projs.filter(proj => proj.id !== id);
    await save();
    res.json(projs);
});

app.post('/projs', async (req, res) => {
    const id = uuidv4();
    req.body['id'] = id;
    await open();
    projs.unshift(req.body);
    
    await save();
    res.json(req.body);
});

async function save(){
    const res = await writeFile('projData.json', JSON.stringify(projs), 'utf-8'); // CAMBIAR EL NOMBRE DEL ARCHIVO X EL ARCHIVO JSON QUE SEA
}

async function open(){
    const res = await readFile('projData.json', 'utf-8'); // CAMBIAR EL NOMBRE DEL ARCHIVO X EL ARCHIVO JSON QUE SEA
    projs = JSON.parse(res);
    console.log('open',projs);
}




app.listen(3002, () => {
    console.log('servidor projects iniciado...');
});
