const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');
var cors = require('cors')

app.use(cors())
app.use(express.json());

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});

app.use(async (err, req, res, next) => {
    res.status(err.status || 500)
    res.json({ message: err.message });
});
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended : true,
// })
// );
app.use(express.json());
app.get('/',(request, response) => {
    response.json({Info: 'WEBAPI'})
});

app.listen(port, () => {
    console.log(`Приложение запущено на порту - ${port}`);
});

app.get('/orders', db.getOrders);
app.get('/orders/:id', db.getOrdersById);
app.post('/orders', db.postOrders);
app.put('/orders/:id', db.putOrders);
app.delete('/orders/:id', db.deleteOrders);