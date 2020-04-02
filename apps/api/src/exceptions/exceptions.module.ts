import { Module } from '@nestjs/common';
import { ExceptionsController } from './exceptions.controller';
import { ExceptionsService } from './exceptions.service';
import { DbProviderModule } from '@jda/db-provider';
 
@Module({
  imports: [DbProviderModule],  
  controllers: [ExceptionsController],
  providers: [ExceptionsService]
})
export class ExceptionsModule {}
