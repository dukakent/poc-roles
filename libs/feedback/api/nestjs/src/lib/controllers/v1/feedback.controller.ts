import { Controller, Get } from '@nestjs/common';

@Controller('/feedback/api/v1')
export class FeedbackController {

  @Get('feedback-cycles')
  getFeedbackCycles() {
    return 'OK';
  }
}
