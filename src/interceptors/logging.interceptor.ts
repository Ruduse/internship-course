import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable, tap } from 'rxjs';
  
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const request = context.switchToHttp().getRequest();
      const { method, url, body } = request;
      console.log(`➡️ [Request] ${method} ${url}`, body);
  
      const now = Date.now();
      return next.handle().pipe(
        tap((response) => {
          const duration = Date.now() - now;
          console.log(`⬅️ [Response] ${method} ${url} - ${duration}ms`, response);
        }),
      );
    }
  }
  