import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';
import { AppError } from '../errors/AppErrors';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError('Token missing', 401)
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(token, 'teste123') as IPayload;
        
        const userRepository = new UsersRepository();
        const user = userRepository.findById(user_id);

        if(!user){
            throw new AppError('User does not exists', 401)
        }

        next();
    } catch {
        throw new AppError('Invalid token!', 401)
    }
}