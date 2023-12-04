import { DataTypes, Model} from "sequelize";
import bcrypt from 'bcrypt';

export default class Client extends Model {
    static initialize(sequelize) {
        Client.init(
            {
                login: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: 'login',
                    validate: { isEmail: { msg: 'Must be a valid email address' } },
                },
                password: { type: DataTypes.STRING, allowNull: false },
                cash: { type: DataTypes.REAL, allowNull: true },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'Client',
                tableName: 'clients',
                paranoid: true,
            }
        );

        function beforeCU(user){
            user.set('password', bcrypt.hashSync(user.password, bcrypt.genSaltSync()));
        }

        Client.beforeCreate(beforeCU);
        Client.beforeUpdate(beforeCU);
    }

    validatePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

