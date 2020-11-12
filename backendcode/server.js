import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js'

dotenv.config();
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    () => {
        console.log('database is connected')
    }
);

app.get('/', (req, res) => {
    res.send('server is ready');
});


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})


const PORT = process.env.port || 5000
app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
});