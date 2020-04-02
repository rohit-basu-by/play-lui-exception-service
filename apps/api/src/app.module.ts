import { Module } from '@nestjs/common';
import { exceptionsProviders, DbProviderModule } from '@jda/db-provider';
import { ExceptionsModule } from './exceptions/exceptions.module';

@Module({
  imports: [DbProviderModule, ExceptionsModule],
})
export class AppModule {}
