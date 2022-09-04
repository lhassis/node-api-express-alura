import express from 'express';

const app = express();

const apartamentos = [
  {
    id: 101, proprietario: "Fulano"
  },
  {
    id: 102, proprietario: "Ciclano"
  }
];

app.get('/', (req, res) => {
  res.status(200).send('Curso de node')
});

app.get('/apartamentos', (req, res) => {
  res.status(200).json(apartamentos);
});

export default app;