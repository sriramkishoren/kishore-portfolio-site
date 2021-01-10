import { Injectable } from '@nestjs/common';
import { Message } from '@kishore-portfolio-site/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
