import { Sequelize } from "sequelize";
import Client from "./client.js";
import Order from "./order.js";
import OrderForProduct from "./order-for-product.js";
import Product from "./product.js";
import "dotenv/config"

const { DB_USER, DB_PWD, DB_HOST, DB_PORT } = process.env;

export const models = {
  Client,
  Order,
  Product,
  OrderForProduct,
};
export const sequelize = new Sequelize(process.env.NODE_ENV, DB_USER, DB_PWD, {
  host: DB_HOST,
  port: DB_PORT,
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