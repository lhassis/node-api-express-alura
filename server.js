require('dotenv').config({path: __dirname + '/.env'});
const app = require('./src/app.js');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on url http://localhost:${port}`);
});