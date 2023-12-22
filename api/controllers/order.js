import Order from "../models/order.js";
import {AppErrorMissing, AppErrorNotExist} from "../utils/errors.js";
import OrderForProduct from "../models/order-for-product.js";
import Product from "../models/product.js";

export default {
    async addOrder({body: { clientId }}, res){
        if (!clientId) throw new AppErrorMissing('clientId');

        const order = await Order.create({ clientId });

        res.json({ order });
    },

    async addToOrder({ body: { orderId, productId } }, res){
        if (!orderId) throw new AppErrorMissing('orderId');
        if (!productId) throw new AppErrorMissing('productId');

        const orderForProduct = await OrderForProduct.create({ orderId, productId });

        res.json({ orderForProduct });
    },

    async getClientOrders({ params: { clientId } }, res){
        if (!clientId) throw new AppErrorMissing('clientId');

        const orders = await Order.findAll({ attributes: ['id', 'clientId', 'date', 'is_delivered'],  where: { clientId } });

        res.json({ orders });
    },

    async getOrderProducts({ params: { orderId } }, res){
        if (!orderId) throw new AppErrorMissing('orderId');

        const orderForProduct = await OrderForProduct.findAll({
            where: {
                orderId
            },
            include: {
                model: Product,
                as: 'products',
            }
        });

        res.json({ orderForProduct });
    },

    async acceptOrder({ body: { orderId } }, res){
        if (!orderId) throw new AppErrorMissing('orderId');

        const order = await Order.findOne({ where: { 'id': orderId } });
        if (!order) throw new AppErrorNotExist('order');

        order.update({ 'isDelivered': true });

        res.json({ order });
    },
}