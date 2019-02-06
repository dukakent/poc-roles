import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AccessControlGuard, HasPermission } from '@poc-roles/access-control/api/nestjs';

@Controller('/feedback/api/v1')
@UseGuards(AccessControlGuard)
export class FeedbackController {
  @HasPermission('feedback-cycle:read')
  @Get('feedback-cycles')
  getFeedbackCycles() {
    return {status: 'OK'};
  }

  @HasPermission('feedback-cycle:create')
  @Post('feedback-cycles')
  postFeedbackCycle() {
    return {status: 'OK'};
  }
}
