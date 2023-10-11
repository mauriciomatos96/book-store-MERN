import express from 'express'
import { PORT, MONGODBURL } from './config.js';
import mongoose, { mongo } from 'mongoose';
import booksRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Hello World MERN")
});

//middleware for cors
app.use(cors())
// app.use(cors(
//     {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//         ,
//     }
// ))

//middleware for books
app.use('/books', booksRoutes);

mongoose.connect(MONGODBURL)
    .then(() => {
        console.log("connected to the database")
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    }).catch((err) => {
        console.log(err)
    });