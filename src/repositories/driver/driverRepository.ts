import { injectable } from 'inversify';

import Driver from '../../models/driver';
import { GenericRepository, IGenericRepository } from './genericRepository';

export interface IDriverRepository extends IGenericRepository<Driver> {
}

@injectable()
export class DriverRepository extends GenericRepository<Driver> implements IDriverRepository {
}