import { NgModule } from '@angular/core';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { ObjectivesRoutingModule } from './objectives-routing.module';

@NgModule({
  declarations: [
    ObjectivesComponent
  ],
  imports: [
    ObjectivesRoutingModule
  ]
})
export class ObjectivesModule {}
