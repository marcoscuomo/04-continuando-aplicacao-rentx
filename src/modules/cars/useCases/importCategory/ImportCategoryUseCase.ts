import { inject, injectable } from 'tsyringe';
import fs from 'fs';
import csvParse from 'csv-parse';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}


@injectable()
class ImportCategoryUseCase {

    constructor(
        @inject('SpecificationsRepository')
        private categoryRepository: ICategoryRepository
    ){}

    loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            const parseFile = csvParse();
            
            stream.pipe(parseFile);

            parseFile.on('data', async(line) => {
                
                //['name', 'description']
                const [name, description] = line;

                categories.push({
                    name, 
                    description
                });
            }).on('end', () => {
                fs.promises.unlink(file.path);                
                resolve(categories)
            }).on('error', (err) => {
                reject(err);
            })

            // return categories;
        });
    }
    
    
    async execute(file: Express.Multer.File): Promise<void> {
        
        const categories = await this.loadCategory(file);
        
        categories.map( async (category) => {
            const { name, description} = category;

            const existsCategory = await this.categoryRepository.findByName(name);

            if(!existsCategory){
                await this.categoryRepository.create({
                    name, 
                    description
                });
            }
        });
    }
}

export { ImportCategoryUseCase }