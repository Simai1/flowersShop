import { models, sequelize } from '../models/index.js';
import setupAssociations from "../models/setup-associations.js";
import Client from "../models/client.js";

async function initializeDbModels() {
    for (const model of Object.values(models)) if (typeof model.initialize === 'function') model.initialize(sequelize);
    setupAssociations();
    for (const model of Object.values(models)) await model.sync({ alter: true });
    console.log('models initialized');
}

async function createTestUser() {
    const user = await Client.findOne({ where: { login: 'gasg@mail.com' } });
    if (user) return;
    await Client.create({
        login: 'gasg@mail.com',
        password: '1234',
        cash: 1000
    });
}

async function createTestUser2() {
    const user = await Client.findOne({ where: { login: 'test1@mail.com' } });
    if (user) return;
    await Client.create({
        login: 'test1@mail.com',
        password: '1234',
        cash: 100
    });
}

export default {
    initializeDbModels,
    createTestUser,
    createTestUser2
};