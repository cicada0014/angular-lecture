import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './section/stopwatch/buttons/buttons.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';
import { RouterModule, Router } from '@angular/router';
import { PageToggleService } from './share/page-toggle.service';


@NgModule({
   declarations: [
      AppComponent,

   ],


   imports: [



      BrowserModule,


      AppRoutingModule,


      LayoutModule,
      SectionModule


   ],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
