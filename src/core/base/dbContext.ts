import { Sequelize, Options, Dialect } from 'sequelize';
import { injectable } from 'inversify';

import HttpException from '../../exceptions/httpException';

@injectable()
export abstract class DbContext {
    public sequelize: Sequelize;

    public constructor() {
        const { DB_CONNECTION_HOST, DB_PORT, DB_USER_NAME, DB_PASSWORD, DB, DB_DIALECT } = process.env;

        const options = {
            dialect: DB_DIALECT as Dialect,
            port: Number(DB_PORT),
            host: DB_CONNECTION_HOST,
            define: {
                freezeTableName: true,
                timestamps: false
            }
        } as Options;

        this.sequelize = new Sequelize(DB, DB_USER_NAME, DB_PASSWORD, options);

        this.sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch((err: Error) => {
                console.log(`Error ${err}`);
                return new HttpException(500, err.message);
            });
    }

    public abstract initialiseModel(): void;
}

export default DbContext;