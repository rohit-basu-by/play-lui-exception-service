import { Module } from '@nestjs/common';

import { exceptionsProviders } from './models/exceptions';

@Module({
  providers: [...exceptionsProviders],
  exports: [...exceptionsProviders],

})
export class DbProviderModule {}
