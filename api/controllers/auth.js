import Client from "../models/client.js";
import {AppErrorAlreadyExists, AppErrorInvalid, AppErrorMissing} from "../utils/errors.js";

export default {
    async register({body: {login, password}}, res){
        if (!login) throw new AppErrorMissing("login");
        if (!password) throw new AppErrorMissing("password");

        if (login <= 3 || login >= 15 || !/^\S+@\S+\.\S+$/.test(login)) throw new AppErrorInvalid("login");
        if (password <= 3 || login >= 15 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) ||
            !/[1-9]/.test(password)) throw new AppErrorInvalid("password");

        const CheckUser = await Client.findOne({ where: { login: login } });
        if (CheckUser) throw new AppErrorAlreadyExists("client");

        const user = await Client.create({
            login,
            password,
            cash: 0
        });

        res.json({ user });
    },

    async login({ body: { login, password } }, res){
        if (!login) throw new AppErrorMissing("login");
        if (!password) throw new AppErrorMissing("password");

        const CheckUser = await Client.findOne({ where: { login: login } });
        if (!CheckUser || !CheckUser.validatePassword(password)) throw new AppErrorInvalid("login or password");

        res.json({ user });
    }
}