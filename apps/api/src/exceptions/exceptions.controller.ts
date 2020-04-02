import { Controller, Get, Post, Body, Patch, Param, Put } from '@nestjs/common';
import { ExceptionsService } from './exceptions.service';
import { CreateExceptionDto } from './dto/exception.dto';

@Controller('exceptions')
export class ExceptionsController {
    constructor(private readonly exceptionService: ExceptionsService) { }

    @Get('/')
    async getAll(): Promise<any> {
        return await this.exceptionService.findAll();
    }
    @Get('/count')
    async getCount(): Promise<any> {
        return await this.exceptionService.findAndCountAll();
    }
    @Post()
    async create(@Body() exception: CreateExceptionDto): Promise<any> {
        return await this.exceptionService.createException(exception)
    }

}
