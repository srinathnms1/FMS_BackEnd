import * as express from 'express';
import { injectable, inject } from 'inversify';
import { Request, Response, NextFunction } from 'express';

import { IDriverService } from '../services/driverService';
import TYPES from '../types';
import { IBaseController } from './baseController';
import { IDriver } from 'models/driver';

@injectable()
export class DashboardController implements IBaseController {
  private readonly _driverService: IDriverService;
  public constructor(@inject(TYPES.IDriverService) driverService: IDriverService) {
    this._driverService = driverService;
  }

  // public getAllDrivers = async (_request: Request, response: Response, next: NextFunction) => {
  //   await this._driverService.getAllDrivers()
  //     .then((drivers: IDriver[]) => {
  //       return response.json(drivers);
  //     })
  //     .catch(err => response.send(err));
  // }

  public register(app: express.Application): void {
    app.route('/getDrivers')
      .get(async (_request: Request, response: Response, next: NextFunction) => {
        const drivers = await this._driverService.getAllDrivers().catch(err => next(err));
        response.json(drivers);
      });
  }
}