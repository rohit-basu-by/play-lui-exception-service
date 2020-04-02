import { Module } from '@nestjs/common';
import { databaseProviders } from './db-provider';
import { exceptionsProviders } from './models/exceptions';

@Module({
  providers: [...databaseProviders,...exceptionsProviders],
  exports: [...databaseProviders,...exceptionsProviders],

})
export class DbProviderModule {}
