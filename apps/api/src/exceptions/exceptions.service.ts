import { Injectable, Inject } from '@nestjs/common';
import { Exception } from '@jda/db-provider';
import { plainToClass } from 'class-transformer';
import { CreateExceptionDto } from './dto/exception.dto';
import sequelize = require('sequelize');

@Injectable()
export class ExceptionsService {

    constructor(
        @Inject('EXCEPTIONS_REPOSITORY') private readonly exceptionsRepository: typeof Exception) { }

    async findAll(limit: number,tenatId:any): Promise<Exception[]> {
        return this.exceptionsRepository.findAll<Exception>({
            where: {
              TENANT_ID: tenatId,
              DELETED_BY: ""
            },
            order: sequelize.literal("CREATED_DATE DESC"),
            limit: limit
          });
    }
    async findAndCountAll(limit: number,tenatId:any): Promise<any> {
        return await this.exceptionsRepository.findAndCountAll({
            where: {
              TENANT_ID: tenatId,
              DELETED_BY: ""
            },
            order: sequelize.literal("CREATED_DATE DESC"),
            limit: limit
          }

        );
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
