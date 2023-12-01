import express from 'express';
import corsMiddleware from './middlewares/cors.js';
import dbUtils from './utils/db.js';

import authRoute from "./routes/auth.js";

const app = express();

(async function initDb() {
    try {
        await dbUtils.initializeDbModels();
    } catch (e) {
        console.log(e);
        console.log('COULD NOT CONNECT TO THE DB, retrying in 5 seconds');
        setTimeout(initDb, 5000);
    }

})();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(corsMiddleware);

app.use('/auth', authRoute);
app.listen(3000, () => console.log(`Listen on :${3000}`));