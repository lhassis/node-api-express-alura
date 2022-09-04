const http = require('http');
const port = 3000;

const rotas = {
  '/': 'Curso de Node',
  '/apartamentos': 'Entrei na pag de apartamentos',
  '/despesas': 'Listagem de despesas',
  '/proprietarios': 'Proprietarios dos apartamentos'
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end(rotas[req.url]);  
});

server.listen(port, () => {
  console.log(`Server listening on url http://localhost:${port}`);
});