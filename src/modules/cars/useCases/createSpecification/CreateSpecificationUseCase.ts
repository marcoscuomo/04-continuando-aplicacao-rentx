import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string,
    description: string
}

@injectable()
class CreateSpecificationUseCase {
    
    constructor(
        @inject('SpecificationsRepository')
        private specificationsRepository: ISpecificationRepository
    ){}
    
    execute({ name, description}: IRequest): void {

        const specificaionAlreadyExist = this.specificationsRepository.findByname(name);

        if(specificaionAlreadyExist){
            throw new Error('specification already exists')
        }

        this.specificationsRepository.create({name, description});
    }
}

export { CreateSpecificationUseCase }