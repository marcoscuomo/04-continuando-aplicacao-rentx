import { Router } from 'express';
import multer from 'multer';

/*Retirado  para a utilização do Tsyringe*/
// import createCategoryController  from '../modules/cars/useCases/createCategory';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp'
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

/*Retirado  para a utilização do Tsyringe*/
// categoriesRoutes.post('/', (request, response) => {    
//     return createCategoryController().handle(request, response);
// });

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', importCategoryController.handle);

export { categoriesRoutes };