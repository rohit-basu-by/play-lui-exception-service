import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request, Response as ExpressResponse } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Data interface
 */
interface Data<T> {
    _id: string;
  }
  

/**
 * Interceptor adding a Location Header for 
 * create resource
 * 
 */
@Injectable()
export class LocationHeaderInterceptor<T> implements NestInterceptor<T, Data<T>> {

  /**
   * Interceptor core method
   * @param context Current request pipeline details
   * @param next Response stream
   */
  public intercept(context: ExecutionContext, next: CallHandler): Observable<Data<T>> {
    const request: Request = context.switchToHttp().getRequest();

    const resourceUrl: string = request.url.split('?')[0];

    return next.handle().pipe(
      map((data: Data<T>) => {
        const response: ExpressResponse = context.switchToHttp().getResponse<ExpressResponse>();

        /**
         * Set Location Header 
         * it is URL pointing to new created resource
         */
        response.setHeader('Location', `${resourceUrl}/${data._id}`);

        return data;
      }),
    );
  }

  
}