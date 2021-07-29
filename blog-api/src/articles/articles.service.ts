import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  getHello(): string {
    return 'Hello World!';
  }
}
