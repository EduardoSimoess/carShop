import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorCycleController';

const routes = Router();

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

export default routes;