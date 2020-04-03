import { ExceptionCountResponseDto } from './dto/exception.count.dto';
import { Controller, Get, Post, Body, Patch, Param, Put, Query, UseInterceptors } from '@nestjs/common';
import { ExceptionsService } from './exceptions.service';
import { CreateExceptionDto } from './dto/exception.dto';
import { Exception } from './exception.interface';
import { PaginateResult } from 'mongoose';

const mock_tenant_id = '1144ffe9-abca-474f-b41e-79c442166d31';
const defaultLimitResultSet = "5";
const defaultPageNo = "1";
@Controller('exceptions')
export class ExceptionsController {
    constructor(private readonly exceptionService: ExceptionsService) { }

     @Get('/')
     async getAll(@Query('pageNo') pageNo:string = defaultPageNo,@Query('limit') limit: string = defaultLimitResultSet): Promise<{ totalDocs: number; resource: PaginateResult<Exception> }> {
         const parsedlimit = parseInt(limit);
         const parsedPageNo = parseInt(pageNo);
         const tenantId = mock_tenant_id;
         const data: PaginateResult<Exception> = await this.exceptionService.findAll(parsedPageNo,parsedlimit,tenantId);
         return { totalDocs: data.total, resource: data };
     }
    @Get('/count')
    async getCount(@Query('limit') limit: string = defaultLimitResultSet): Promise<ExceptionCountResponseDto> {
        const parsedlimit = parseInt(limit);
        const tenantId = mock_tenant_id;
        const count = await this.exceptionService.findAndCountAll(parsedlimit, tenantId);
        return {
            count
        }
    }
    @Post()
    async create(@Body() exception: CreateExceptionDto): Promise<Exception> {
        return await this.exceptionService.createException(exception)
    }

}
