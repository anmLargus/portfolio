const express = require('express');
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
const {readFile, writeFile} = require('fs').promises;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let jobs = [];

app.get('/', (req, res) => {
    res.send('Servidor de prueba');
});
app.get('/jobs', async (req, res) => {
    await open();
    res.json(jobs);
});
app.get('/jobs/:id', (req, res) => {
    res.send(`${req.params.id}`);
});
app.put('/jobs/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    const index = jobs.findIndex(job => job.id === id);
    jobs[index].completed = !jobs[index].completed;
    await save();
    res.json(jobs[index]);
});
app.delete('/jobs/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    jobs = jobs.filter(job => job.id !== id);
    await save();
    res.json(jobs);
});

app.post('/jobs', async (req, res) => {
    const id = uuidv4();
    req.body['id'] = id;
    await open();
    jobs.unshift(req.body);
    
    await save();
    res.json(req.body);
});

async function save(){
    const res = await writeFile('jobData.json', JSON.stringify(jobs), 'utf-8'); // CAMBIAR EL NOMBRE DEL ARCHIVO X EL ARCHIVO JSON QUE SEA
}

async function open(){
    const res = await readFile('jobData.json', 'utf-8'); // CAMBIAR EL NOMBRE DEL ARCHIVO X EL ARCHIVO JSON QUE SEA
    jobs = JSON.parse(res);
    console.log('open',jobs);
}




app.listen(3001, () => {
    console.log('servidor jobs iniciado...');
});
