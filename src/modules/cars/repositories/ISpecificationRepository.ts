import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {    
    list(): Promise<Specification[]>;
    create({name, description}: ICreateSpecificationDTO): Promise<void>;
    findByname(name: string): Promise<Specification>;
}

export { ISpecificationRepository, ICreateSpecificationDTO }