import express from 'express';
import corsMiddleware from './middlewares/cors.js';
import dbUtils from './utils/db.js';
import testUtils from './utils/test_data.js'

import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";

const app = express();

(async function initDb() {
    try {
        await dbUtils.initializeDbModels();
        await testUtils.create_flowers();
        await testUtils.createTestUser();
        await testUtils.createTestUser2();
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
app.use('/product', productRoute);
app.listen(3000, () => console.log(`Listen on :${3000}`));