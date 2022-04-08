// Servidor local sencillo ad hoc para un proyecto

const express = require('express');
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
const {readFile, writeFile} = require('fs').promises;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let edus = [];

app.get('/', (req, res) => {
    res.send('Servidor de prueba');
});
app.get('/edus', async (req, res) => {
    await open();
    res.json(edus);
});
app.get('/edus/:id', (req, res) => {
    res.send(`${req.params.id}`);
});
app.put('/edus/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    const index = edus.findIndex(job => edus.id === id);
    edus[index].completed = !edus[index].completed;
    await save();
    res.json(edus[index]);
});
app.delete('/edus/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    edus = edus.filter(edu => edu.id !== id);
    await save();
    res.json(edus);
});

app.post('/edus', async (req, res) => {
    const id = uuidv4();
    req.body['id'] = id;
    await open();
    edus.unshift(req.body);
    
    await save();
    res.json(req.body);
});

async function save(){
    const res = await writeFile('data.json', JSON.stringify(edus), 'utf-8'); // CAMBIAR EL NOMBRE DEL ARCHIVO X EL ARCHIVO JSON QUE SEA
}

async function open(){
    const res = await readFile('data.json', 'utf-8'); // CAMBIAR EL NOMBRE DEL ARCHIVO X EL ARCHIVO JSON QUE SEA
    edus = JSON.parse(res);
    console.log('open',edus);
}




app.listen(3000, () => {
    console.log('servidor iniciado...');
});
