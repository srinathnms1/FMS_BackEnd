import { inject, injectable } from 'inversify';

import TYPES from '../../types';
import { DriverContext } from './DriverContext';

export interface IGenericRepository<T> {
    find(item: T): Promise<T>;
    findAll(): Promise<T[]>;
}

@injectable()
export class GenericRepository<T> implements IGenericRepository<T> {
    public readonly _driverContext: DriverContext;

    public constructor(@inject(TYPES.DriverContext) driverContext: DriverContext) {
        this._driverContext = driverContext;
    }

    public async findAll(): Promise<T[]> {
        return await this._driverContext.driverStatic.findAll();
    }

    public async find(item: T): Promise<T> {
        return await this._driverContext.driverStatic.findOne(item);
    }
}