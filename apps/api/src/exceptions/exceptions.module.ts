import { Module } from '@nestjs/common';
import { ExceptionsController } from './exceptions.controller';
import { ExceptionsService } from './exceptions.service';
import { DbProviderModule } from '@jda/db-provider';
import { MongooseModule } from '@nestjs/mongoose';
import { ExceptionSchema } from '@jda/db-provider/models/exceptions/exception.schema';
 
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Exception', schema: ExceptionSchema }])],  
  controllers: [ExceptionsController],
  providers: [ExceptionsService]
})
export class ExceptionsModule {}
