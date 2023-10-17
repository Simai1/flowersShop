import {Model} from 'sequelize';

export default class OrderForProduct extends Model {
    static initialize(sequelize) {
        OrderForProduct.init(
            {},
            {
                sequelize,
                schema: 'public',
                modelName: 'OrderForProduct',
                tableName: 'order_for_products',
                timestamps: false,
            }
        );
    }
}
