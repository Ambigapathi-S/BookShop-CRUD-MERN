import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoutes.js";

const app = express();

app.use(express.json());
// app.use(cors());

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to MERN Stack")
})

app.use("/books", booksRoute);
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`App is listening to port : ${PORT}`)
        });
    }).catch((error) => {
        console.error(error);
    }
    );