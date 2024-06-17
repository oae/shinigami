import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response, response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Gets the request log
    console.log(`req:`, {
      request: {
        method: req.method,
        path: req.path,
        originalUrl: req.originalUrl,
        headers: req.headers,
        body: req.body,
        ip: req.ip,
      },
      response: {
        status: res.statusCode,
      },
    });
    // Ends middleware function execution, hence allowing to move on
    if (next) {
      next();
    }
  }
}
