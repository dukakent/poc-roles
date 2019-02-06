import { NgModule } from '@angular/core';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
