import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import { ICategoryRepository, ICreateCategoryDTO } from '../ICategoriesRepository';


class CategoryRepository implements ICategoryRepository {

    private repository: Repository<Category>;

    // private categories: Category[];

    // private static INSTANCE: CategoryRepository;

    constructor() {
        this.repository = getRepository(Category);
    }

    // public static getInstance(): CategoryRepository {
    //     if(!CategoryRepository.INSTANCE){
    //         CategoryRepository.INSTANCE = new CategoryRepository();
    //     }

    //     return CategoryRepository.INSTANCE;
    // }

    async create({description, name}: ICreateCategoryDTO): Promise<void>{
        // const category = new Category();    
        // Object.assign(category, {
        //     name,
        //     description,
        //     created_at: new Date()
        // });

        const category = this.repository.create({
            description,
            name
        });
        
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        // const category = this.categories.find(category => category.name === name);
        // return category;

        const category = await this.repository.findOne(name);
        return category;
    }
}

export { CategoryRepository }