import express from 'express';
import { data } from './data.js';

const app = express();

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ messages: 'product not found' })
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
    // console.log(data)
});

app.get('/', (req, res) => {
    res.send('server is ready');
});

const PORT = process.env.port || 5000
app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
});