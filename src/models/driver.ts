import { Model, Sequelize, DataTypes } from 'sequelize';
import { Tables } from '../constants/enums';

export interface IDriver {
    DriverId: number;
    DriverName: string;
    DriverMobile: string;
    CreatedDate: string;
    ModifiedDate: string;
}

class Driver extends Model implements IDriver {
    public DriverId: number;
    public DriverName: string;
    public DriverMobile: string;
    public CreatedDate: string;
    public ModifiedDate: string;

    public static initalise(sequelize: Sequelize) {
        this.init({
            DriverId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            DriverName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            DriverMobile: {
                type: DataTypes.INTEGER
            },
            CreatedDate: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ModifiedDate: {
                type: DataTypes.STRING
            }
        }, {
            sequelize: sequelize,
            tableName: Tables.DCS_DriverMaster
        });
    }
}

export default Driver;