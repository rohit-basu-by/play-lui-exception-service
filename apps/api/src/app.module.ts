import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ExceptionsModule } from './exceptions/exceptions.module';
import { MongooseModule } from '@nestjs/mongoose';
const PROD_ENV = 'production';
@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      ignoreEnvFile: process.env.NODE_ENV === PROD_ENV
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    ExceptionsModule
  ],
})
export class AppModule {}
