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
    
    async execute({ name, description}: IRequest): Promise<void> {

        const specificaionAlreadyExist = await this.specificationsRepository.findByname(name);

        if(specificaionAlreadyExist){
            throw new Error('specification already exists')
        }

        await this.specificationsRepository.create({name, description});
    }
}

export { CreateSpecificationUseCase }