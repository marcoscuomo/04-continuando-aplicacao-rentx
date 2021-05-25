import { Router } from 'express';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticate);
specificationsRoutes.post('/', createSpecificationController.handle); 


export { specificationsRoutes }
