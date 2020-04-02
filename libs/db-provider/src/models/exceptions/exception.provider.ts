import { Exception } from "./exception.entity";

export const exceptionsProviders = [
  {
    provide: 'EXCEPTIONS_REPOSITORY',
    useValue: Exception,
  },
];