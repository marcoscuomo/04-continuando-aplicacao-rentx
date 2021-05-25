import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoryRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';

container.registerSingleton<ICategoryRepository>(
    'CategoryRepository',
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    'SpecificationsRepository',
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
);