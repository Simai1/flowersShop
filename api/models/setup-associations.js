import { models } from "./index.js";
const { Client, Order, OrderForProduct, Product } = models;

export default function () {
    Order.belongsToMany(Product, {
        through: OrderForProduct,
        foreignKey: { name: 'orderId', allowNull: false },
        as: 'products',
    });
    Product.belongsToMany(Order, {
        through: OrderForProduct,
        foreignKey: { name: 'productId', allowNull: false },
        as: 'orders',
    });

    Client.hasMany(Order, {foreignKey: { name: 'clientId', allowNull: true }, as: 'orders' });
    Order.belongsTo(Client,  { foreignKey: { name: 'clientId', allowNull: true }, as: 'clients' });

    OrderForProduct.belongsTo(Order, { foreignKey: { name: 'orderId', allowNull: false }, as: 'orders' });
    Order.hasMany(OrderForProduct, { foreignKey: { name: 'orderId', allowNull: false }, as: 'orderForProducts' });

    OrderForProduct.belongsTo(Product, { foreignKey: { name: 'productId', allowNull: false }, as: 'products' });
    Product.hasMany(OrderForProduct, { foreignKey: { name: 'productId', allowNull: false }, as: 'orderForProducts' });
}