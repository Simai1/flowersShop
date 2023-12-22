import {AppErrorAlreadyExists, AppErrorInvalid, AppErrorMissing, AppErrorNotExist} from "../utils/errors.js";
import Product from "../models/product.js";
import {Op} from "sequelize";

export default {
    async create({body: {name, descr, price, img}}, res) {
        if (!name) throw new AppErrorMissing('name');
        if (!descr) throw new AppErrorMissing('descr');
        if (!price) throw new AppErrorMissing('price');
        if (!img) throw new AppErrorMissing('img');

        const checkProduct = await Product.findOne({where: {name: name}});
        if (checkProduct) throw new AppErrorAlreadyExists('Product');

        const product = await Product.create({
            name: name,
            description: descr,
            price: price,
            img_url: img
        })

        res.json({ product });
    },

    async get({ body: { sort }}, res) {
        if (sort && sort !== 'ASC' && sort !== 'DESC') throw new AppErrorInvalid('sort');
        if (!sort){
            const products = await Product.findAll({attributes: ['id', 'name', 'description', 'price', 'img_url']});
            res.json({ products });
        } else {
            const products = await Product.findAll({
                    order: [
                        ['price', sort],
                    ],
                    attributes: ['id', 'name', 'description', 'price', 'img_url']
                });
            res.json({ products });
        }
    },

    async get3Products(req, res){
        const products = await Product.findAll({limit: 3, attributes: ['id', 'name', 'description', 'price', 'img_url']});
        res.json({ products });
    },

    async updatePrice({body: {name, price}}, res) {
        if (!name) throw new AppErrorMissing('name');
        if (!price) throw new AppErrorMissing('price');

        const product = await Product.findOne({ where: { name: name } });
        if (!product) throw new AppErrorNotExist('product');

        await product.update({ price });

        res.json({product});
    },

    async delete({body: {name}}, res) {
        if (!name) throw new AppErrorMissing('name');
        const product = await Product.findOne({where: {name: name}});
        (await product).destroy();
        res.json({status: 'OK'});
    },

    async getByFilter({ params: { name } }, res){
        if (!name) throw new AppErrorMissing('name');

        const products = await Product.findAll({ where: { name : { [Op.like]: `${name}%` } } });

        res.json({ products });
    },
}