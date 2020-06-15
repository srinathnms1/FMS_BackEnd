import { Model, BuildOptions } from 'sequelize';

export type ModelStatic<T> = typeof Model & (new(values?: object, options?: BuildOptions) => T);

export const TYPES = {
    IGenericRepository: Symbol('IGenericRepository'),
    IDriverRepository: Symbol('IDriverRepository'),
    IDriverService: Symbol('IDriverService'),
    DriverContext: Symbol('DriverContext'),
    IBaseController: Symbol('IBaseController'),
};

export default TYPES;
