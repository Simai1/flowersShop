import express from 'express';
import corsMiddleware from './middlewares/cors.js';
import authRoute from "./routes/auth.js";

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(corsMiddleware);

app.use('/auth', authRoute);
app.listen(3000, () => console.log(`Listen on :${3000}`));