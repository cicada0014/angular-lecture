import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule, Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent,
    TestComponent,

  ],
  exports: [
    StopwatchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
  ]
})
export class StopwatchModule { }
