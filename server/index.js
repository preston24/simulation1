const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const bin_controller = require('./controllers/bin_controller');
const shelf_controller = require('./controllers/shelf_controller');
const item_controller = require('./controllers/item_controller');


const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

//bins endpoints
app.get('/api/bins', bin_controller.getAll);
app.get('/api/bins/:id', bin_controller.getOne);
app.put('/api/bins/:id', bin_controller.update);
app.post('/api/bins/:id', bin_controller.create);
app.delete('/api/bins/:id', bin_controller.delete);

//shelves endpoint
app.get('/api/shelves/', shelf_controller.getAll);

//items endpoints
app.get('/api/items', item_controller.getAll);
app.get('/api/items/:id', item_controller.getOne);
app.put('/api/items/:id', item_controller.update);
app.post('/api/items/:id', item_controller.create);
app.delete('/api/items/:id', item_controller.delete);


const port = process.env.PORT || 3024;

app.listen(port, () => {
  console.log('listening on port', port)
})