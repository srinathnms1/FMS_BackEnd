import 'reflect-metadata';

import { AsyncContainerModule, interfaces } from 'inversify';
import TYPES from './types';
import { GenericRepository, IGenericRepository } from './repositories/driver/genericRepository';
import { DriverRepository, IDriverRepository } from './repositories/driver/DriverRepository';
import { IDriverService, DriverService } from './services/driverService';
import { IBaseController } from './controllers/baseController';
import { DashboardController } from './controllers/dashboardController';
import { DriverContext } from './repositories/driver/DriverContext';

export const bindings = new AsyncContainerModule(async (bind) => {
    bind<DriverContext>(TYPES.DriverContext).to(DriverContext).inSingletonScope();
    // bind<interfaces.Provider<DriverContext>>('Provider<DriverContext>')
    // .toProvider<DriverContext>((context) => {
    //     return () => {
    //         return new Promise<DriverContext>((resolve, reject) => {
    //             const dbContext = context.container.get<DriverContext>('DriverContext');
    //             dbContext.InitAndDefineModel();
    //         });
    //     };
    // });
    bind<IBaseController>(TYPES.IBaseController).to(DashboardController);
    bind<IGenericRepository<any>>(TYPES.IGenericRepository).to(GenericRepository);
    bind<IDriverRepository>(TYPES.IDriverRepository).to(DriverRepository).inSingletonScope();
    bind<IDriverService>(TYPES.IDriverService).to(DriverService).inSingletonScope();
});
