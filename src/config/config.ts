import { Options, Dialect } from 'sequelize';

const { DB_CONNECTION_HOST, DB_PORT, DB_DIALECT } = process.env;

abstract class DbContextOptions {
    public options: Options = {
        dialect: DB_DIALECT as Dialect,
        port: Number(DB_PORT),
        host: DB_CONNECTION_HOST,
        define: {
            freezeTableName: true,
            timestamps: false
        }
    } as Options;
}

export default DbContextOptions;