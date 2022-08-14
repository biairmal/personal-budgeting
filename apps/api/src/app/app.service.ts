import { Injectable } from '@nestjs/common';
import { Message } from '@personal-budgeting/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
