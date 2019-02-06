import { Module } from '@nestjs/common';
import { FeedbackController } from './controllers/v1/feedback.controller';
import { Policy } from '@poc-roles/access-control/api/nestjs';

const policies = [
  new Policy('Can create Feedback Cycle', [
    'feedback-cycle:create'
  ])
];

@Module({
 controllers: [
   FeedbackController
 ]
})
export class FeedbackModule {
}
