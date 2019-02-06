import { NgModule } from '@angular/core';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackRoutingModule } from './feedback-routing.module';

@NgModule({
  imports: [
    FeedbackRoutingModule
  ],
  declarations: [
    FeedbackComponent
  ]
})
export class FeedbackModule {}
