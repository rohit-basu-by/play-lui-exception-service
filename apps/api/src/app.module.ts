import { Module } from '@nestjs/common';
import { ExceptionsModule } from './exceptions/exceptions.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://plat-mongo:aEhcXTUcZC4Nv3A9crmVOeuw1F5HTKig4Oinv6BFlvjgpCIjs1OiYGWJ0D56hvrubNIiIF1fy5adoEZZIU6r6Q%3D%3D@plat-mongo.mongo.cosmos.azure.com:10255/?ssl=true&appName=@plat-mongo@'), ExceptionsModule],
})
export class AppModule {}
