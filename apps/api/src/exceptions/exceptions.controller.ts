import { Controller, Get, Post, Body, Patch, Param, Put, Query } from '@nestjs/common';
import { ExceptionsService } from './exceptions.service';
import { CreateExceptionDto } from './dto/exception.dto';
import { Exception } from './exception.interface';
const mock_tenant_id = '1144ffe9-abca-474f-b41e-79c442166d31';
const defaultLimitResultSet = "5";
@Controller('exceptions')
export class ExceptionsController {
    constructor(private readonly exceptionService: ExceptionsService) { }

     @Get('/')
     async getAll(@Query('limit') limit: string = defaultLimitResultSet): Promise<Exception[]> {
         const parsedlimit = parseInt(limit);
         const tenantId = mock_tenant_id;
         return await this.exceptionService.findAll(parsedlimit,tenantId);
     }
    @Get('/count')
    async getCount(@Query('limit') limit: string = defaultLimitResultSet): Promise<any> {
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
