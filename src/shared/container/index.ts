import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoryRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';

container.registerSingleton<ICategoryRepository>(
    'CategoryRepository',
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    'SpecificationsRepository',
    SpecificationsRepository
);