import { inject, injectable } from "tsyringe";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from '../../../../errors/AppErrors';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ){}

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new AppError('Email or password incorrect');
        }

        const passwordMatch = compare(password, user.password);

        if(!passwordMatch){
            throw new AppError('Email or password incorrect');
        }

        const token = sign({}, 'teste123', {
            subject: user.id,
            expiresIn: '1d'
        });

        const tokenReturn: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        }

        return tokenReturn;

    }
}

export { AuthenticateUserUseCase };