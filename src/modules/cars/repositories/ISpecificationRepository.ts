import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {    
    list(): Specification[];
    create({name, description}: ICreateSpecificationDTO): void;
    findByname(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO }