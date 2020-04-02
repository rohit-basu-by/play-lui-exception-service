import { Injectable, Inject } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateExceptionDto } from './dto/exception.dto';
import sequelize = require('sequelize');
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exception } from './exception.interface';

@Injectable()
export class ExceptionsService {

    constructor(@InjectModel('Exception') private exceptionModel: Model<Exception>) { }

    async findAll(limit: number, tenantId: string): Promise<Exception[]> {
        return this.exceptionModel.find({TENANT_ID:tenantId},{},{ limit: limit}).exec();
    }
    // async findAndCountAll(limit: number,tenatId:any): Promise<any> {
    //     return await this.exceptionsRepository.findAndCountAll({
    //         where: {
    //           TENANT_ID: tenatId,
    //           DELETED_BY: ""
    //         },
    //         order: sequelize.literal("CREATED_DATE DESC"),
    //         limit: limit
    //       }

    //     );
    // }

    async createException(exception: CreateExceptionDto): Promise<Exception> {
        exception.READ_BY = "";
        exception.DELETED_BY = "";
        const createdException = new this.exceptionModel(exception);
        return createdException.save();
    }

    // async updateException(exception: CreateExceptionDto): Promise<any> {
    //     return await this.exceptionsRepository.update(exception, {
    //         where: { ID: "c3d74f59-8a39-438b-b96e-66fca47de8ae" },
    //         returning: true
    //     })
    // }
}
