import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'poc-roles-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {
  feedbackResult = '';

  constructor(private readonly http: HttpClient) {
  }


  getFeedback() {
    this.feedbackResult = 'loading...';

    this.http.get('http://localhost:3333/feedback/api/v1/feedback-cycles')
      .subscribe(res => {
        this.feedbackResult = JSON.stringify(res);
      }, err => {
        console.error(err);
        this.feedbackResult = 'error!';
      })
  }
}
