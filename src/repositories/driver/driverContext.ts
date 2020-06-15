import { injectable } from 'inversify';

import { DbContext } from '../../core/base/dbContext';
import Driver from '../../models/driver';
import { ModelStatic } from '../../types';
import DbContextOptions from 'config/config';

@injectable()
export class DriverContext extends DbContext {
    public driverStatic: ModelStatic<Driver> = Driver;

    public constructor() {
        super();
        this.initialiseModel();
    }

    public initialiseModel() {
        Driver.initalise(this.sequelize);
    }
}