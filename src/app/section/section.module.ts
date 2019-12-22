import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDisplayComponent } from './stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './stopwatch/buttons/buttons.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes, Router } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';
import { PageToggleService } from '../share/page-toggle.service';
import { TestComponent } from './stopwatch/test/test.component';


const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }

]


@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
  ],

  exports: [
    SectionComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  ]
})
export class SectionModule { }
