import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', (request, response) => {

    
    const specifications = specificationsRepository.list();

    return response.json(specifications);
});

export { specificationsRoutes }
