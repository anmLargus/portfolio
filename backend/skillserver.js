const express = require('express');
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
const {readFile, writeFile} = require('fs').promises;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let skills = [];

app.get('/', (req, res) => {
    res.send('Servidor de prueba');
});
app.get('/skills', async (req, res) => {
    await open();
    res.json(skills);
});
app.get('/skills/:id', (req, res) => {
    res.send(`${req.params.id}`);
});
app.put('/skills/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    const index = skills.findIndex(skill => skill.id === id);
    skills[index].completed = !skills[index].completed;
    await save();
    res.json(skills[index]);
});
app.delete('/skills/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    skills = skills.filter(skill => skill.id !== id);
    await save();
    res.json(skills);
});

app.post('/skills', async (req, res) => {
    const id = uuidv4();
    req.body['id'] = id;
    await open();
    skills.unshift(req.body);
    
    await save();
    res.json(req.body);
});

async function save(){
    const res = await writeFile('skillData.json', JSON.stringify(skills), 'utf-8'); // CAMBIAR EL NOMBRE DEL ARCHIVO X EL ARCHIVO JSON QUE SEA
}

async function open(){
    const res = await readFile('skillData.json', 'utf-8'); // CAMBIAR EL NOMBRE DEL ARCHIVO X EL ARCHIVO JSON QUE SEA
    skills = JSON.parse(res);
    console.log('open',skills);
}




app.listen(3003, () => {
    console.log('servidor projects iniciado...');
});
