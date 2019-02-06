import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ObjectivesComponent } from './components/objectives/objectives.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ObjectivesComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ObjectivesRoutingModule {}
