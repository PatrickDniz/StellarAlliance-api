const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const naveController = require('./controllers/shipsController');

const app = express();
const PORT = 8000;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE'], 
}));

app.use(bodyParser.json());

app.get('/naves', naveController.getAllNaves);
app.post('/naves', naveController.createNave);
app.delete('/naves/:id', naveController.deleteNaveById);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
