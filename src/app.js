import express from 'express';

const app = express();

const apartamentos = [
  {
    id: 101, fracaoIdeal: 0.127
  },
  {
    id: 102, fracaoIdeal: 0.133
  }
];

app.get('/', (req, res) => {
  res.status(200).send('Curso de node')
});

app.get('/apartamentos', (req, res) => {
  res.status(200).json(apartamentos);
});

export default app;