import { DataTypes, Model, Sequelize } from "sequelize";

export default class Order extends Model {
    static initialize(sequelize) {
        Order.init(
            {
                id: { type: DataTypes.INTEGER, primaryKey: true },
                date: { type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.fn('now') },
                isDelivered: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'Order',
                tableName: 'orders',
                paranoid: true,
            }
        );
    }
}

