import { Sequelize } from "sequelize";
import Client from "./client.js";
import Order from "./order.js";
import OrderForProduct from "./order-for-product.js";
import Product from "./product.js";
import "dotenv/config"


export const models = {
  Client,
  Order,
  Product,
  OrderForProduct,
};
export const sequelize = new Sequelize('flowers', 'postgres', '1323', {
    
  host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    // dialectOptions: { multipleStatements: true },
    define: {
        // charset: 'utf8mb4',
        // collate: 'utf8mb4_unicode_ci',
        timestamps: true,
        underscored: true,
    },
    logging: false,
});
