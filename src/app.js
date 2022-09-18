const express = require('express');
const db = require('./config/dbConnect.js');

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.on('open', () => {
  console.log('Conexão com sucesso');
})

const app = express();
app.use(express.json());

const apartamentos = [
  {
    id: 1, numero: 101, fracaoIdeal: 0.127
  },
  {
    id: 2, numero: 102, fracaoIdeal: 0.133
  }
];

app.get('/', (req, res) => {
  res.status(200).send('Curso de node')
});

app.get('/apartamentos', (req, res) => {
  res.status(200).json(apartamentos);
});

app.post('/apartamentos', (req, res) => {
  apartamentos.push(req.body);
  res.status(201).send('Apartamento cadastrado com sucesso');
});

app.put('/apartamentos/:id', (req, res) => {
  const indice = buscaIndiceApartamento(req.params.id);
  if (indice) {
    apartamentos[indice].fracaoIdeal = req.body.fracaoIdeal;
  }
  res.json(apartamentos);
});

app.delete('/apartamentos/:id', (req, res) => {
  const indice = buscaIndiceApartamento(req.params.id);
  console.log({indice})
  if (indice > 0) {
    apartamentos.splice(indice, 1);
  }
  res.json(apartamentos);
})

function buscaIndiceApartamento(id) {
  return apartamentos.findIndex((ap) => ap.id.toString() === id);
}
// app.delete('/apartamentos/:id')

module.exports = app;