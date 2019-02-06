import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AccessControlMiddleware implements NestMiddleware {
  constructor() {
    console.log('middle constructor');
  }

  resolve(...args: any[]): MiddlewareFunction {
    console.log(111);
    return (req, res, next) => {
      console.log('Request...');
      next();
    };
  }
}
