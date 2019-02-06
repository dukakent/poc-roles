import { Module } from '@nestjs/common';

import { AccessControlModule } from '@poc-roles/access-control/api/nestjs';
import { FeedbackModule } from '@poc-roles/feedback/api/nestjs';
import { AppController } from './app.controller';

@Module({
  controllers: [
    AppController
  ],
  imports: [
    AccessControlModule,
    FeedbackModule
  ],
})
export class AppModule {}
