import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE } from './utils/constants';
import { Exception } from './models/exceptions';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mssql',
        dialectOptions: { options: { encrypt: true } },
        host: 'salesldedbserver.database.windows.net',
        username: 'adminuser',
        password: 'password@123',
        database: 'luminate',
        logQueryParameters: true
      });

      /**
       * Add Models Here
       * ===============
       * You can add the models to 
       * Sequelize later on.
       */
      sequelize.addModels([Exception]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
