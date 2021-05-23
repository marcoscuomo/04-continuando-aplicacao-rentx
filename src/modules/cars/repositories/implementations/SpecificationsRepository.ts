import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository{
    
    private repository: Repository<Specification>

    constructor() {
        this.repository = getRepository(Specification);
    }    

    async list(): Promise<Specification[]> {
        
        const specifications = await this.repository.find() 
        return specifications;
    }
    
    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name
        }); 

        await this.repository.save(specification);
    }
    
    async findByname(name: string): Promise<Specification> {
        
        const specification = this.repository.findOne({ name });
        
        return specification;
    }
    
}

export { SpecificationsRepository }