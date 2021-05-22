import { CategoryRepository } from '../../repositories/implementations/CategoriesRepository'
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

console.log('arquivo category');
export default(): CreateCategoryController => {    
    // const categoriesRepository = CategoryRepository.getInstance();
    const categoriesRepository = new CategoryRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    const createCategoryController = new CreateCategoryController(createCategoryUseCase);

    // export { createCategoryController }

    return createCategoryController;
}

