import { Injectable, Inject } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateExceptionDto } from './dto/exception.dto';
import sequelize = require('sequelize');
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateOptions, PaginateResult } from 'mongoose';
import { Exception } from './exception.interface';

@Injectable()
export class ExceptionsService {
    private readonly paginationResponseLabel = {
        totalDocs: 'total',
        docs: 'data'
      };
    constructor(@InjectModel('Exception') private exceptionModel: PaginateModel<Exception>) { }
    
    async findAll(pageNo:number,limit: number, tenantId: string): Promise<PaginateResult<Exception>> {
        const options  = {
            page: pageNo,
            limit: limit,
            sort: {_id: -1},
            customLabels: this.paginationResponseLabel
          };

        // return this.exceptionModel.find(
        //     {
        //         TENANT_ID: tenantId,
        //         DELETED_BY: ""
        //     }
        // ).limit(limit).sort({_id: -1}).exec();
        return await this.exceptionModel.paginate({
            TENANT_ID: tenantId,
            DELETED_BY: "",
        
        },options)
    }
    async findAndCountAll(limit: number,tenantId:string): Promise<number> {
        return await this.exceptionModel.countDocuments({
            TENANT_ID: tenantId,
            DELETED_BY: ""
        }
        ).limit(limit).sort({_id: -1}).exec();
    }

    async createException(exception: CreateExceptionDto): Promise<string> {
        exception.READ_BY = "";
        exception.DELETED_BY = "";
        const createdException = new this.exceptionModel(exception);
        const { _id } = await createdException.save();
        return _id;
    }

    // async updateException(exception: CreateExceptionDto): Promise<any> {
    //     return await this.exceptionsRepository.update(exception, {
    //         where: { ID: "c3d74f59-8a39-438b-b96e-66fca47de8ae" },
    //         returning: true
    //     })
    // }
}
