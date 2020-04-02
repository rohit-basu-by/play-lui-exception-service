import { Controller, Get, Post, Body, Patch, Param, Put, Query } from '@nestjs/common';
import { ExceptionsService } from './exceptions.service';
import { CreateExceptionDto } from './dto/exception.dto';
import { Exception } from './exception.interface';
const mock_tenant_id = '3544ffe9-abca-474f-b41e-79c442166d31';
@Controller('exceptions')
export class ExceptionsController {
    constructor(private readonly exceptionService: ExceptionsService) { }

     @Get('/')
     async getAll(@Query('limit') limit: string = "5"): Promise<any> {
         const parsedlimit = parseInt(limit);
         const tenantId = mock_tenant_id;
         return await this.exceptionService.findAll(parsedlimit,tenantId);
     }
    // @Get('/count')
    // async getCount(@Query('limit') limit: string = "5"): Promise<any> {
    //     const parsedlimit = parseInt(limit);
    //     const tenantId = mock_tenant_id;
    //     return await this.exceptionService.findAndCountAll(parsedlimit, tenantId);
    // }
    @Post()
    async create(@Body() exception: CreateExceptionDto): Promise<Exception> {
        return await this.exceptionService.createException(exception)
    }

}
