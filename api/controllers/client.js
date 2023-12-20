import {AppErrorInvalid, AppErrorMissing, AppErrorNotExist} from "../utils/errors.js";
import Client from "../models/client.js";

export default {
    async depCash({ body: { clientID, cash } }, res){
        if (!clientID) throw new AppErrorMissing('clientID');
        if (!cash) throw new AppErrorMissing('cash');
        if (cash <= 0) throw new AppErrorInvalid('cash')

        const client = await Client.findOne({
            attributes: ['id', 'login', 'password', 'cash'],
            where: { id: clientID }
        });
        if (!client) throw new AppErrorNotExist('client');

        cash = String(Number(cash) + Number(client.cash));
        client.update({ cash });

        res.json({ ...client.dataValues, password: undefined  });
    },

    async getByID({ params: { clientID } }, res){
        if (!clientID) throw new AppErrorMissing('clientID');

        const client = await Client.findOne({
            attributes: ['id', 'login', 'cash'],
            where: { id: clientID }
        });
        if (!client) throw new AppErrorNotExist('client');

        res.json({ client });
    },

    async get(req, res){
        const clients = await Client.findAll();
        res.json({ clients });
    }
}