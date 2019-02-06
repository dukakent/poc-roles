import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {
    console.log('app controller');
  }

  @Get('check')
  getData(): string {
    return 'CHECK SUCCESS';
  }
}
