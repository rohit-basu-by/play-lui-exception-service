import { Injectable, Inject } from '@nestjs/common';
import { Exception } from '@jda/db-provider';
import { plainToClass } from 'class-transformer';
import { CreateExceptionDto } from './dto/exception.dto';

@Injectable()
export class ExceptionsService {

    constructor(
        @Inject('EXCEPTIONS_REPOSITORY') private readonly exceptionsRepository: typeof Exception) { }

    async findAll(): Promise<Exception[]> {
        return this.exceptionsRepository.findAll<Exception>();
    }
    async findAndCountAll(): Promise<any> {
        return await this.exceptionsRepository.findAndCountAll();
    }

    async createException(exception: CreateExceptionDto): Promise<any> {
        exception.READ_BY = "";
        exception.DELETED_BY = "";
        return await this.exceptionsRepository.create(exception)
    }

    async updateException(exception: CreateExceptionDto): Promise<any> {
        return await this.exceptionsRepository.update(exception, {
            where: { ID: "c3d74f59-8a39-438b-b96e-66fca47de8ae" },
            returning: true
        })
    }
}
