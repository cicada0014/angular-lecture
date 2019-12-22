


import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';
import * as  moment from 'moment';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [
    // PageToggleService
  ],
})
export class StopwatchComponent implements OnInit {

  present = 'welcome';

  routingCount
  commandText



  constructor(
    private router: Router,
    public pageToggleService: PageToggleService,
  ) {


  }


  // lifeCycleTest() {
  //   this.present = moment().format('YYYY-MM-DD hh:mm:ss');
  // }



  ngAfterContentInit() {
    console.log('ng after content init')
  }
  ngAfterContentChecked() {
    console.log('ng after content checked')
  }
  ngAfterViewInit() {
    console.log('ng after view  init')
  }
  ngAfterViewChecked() {
    console.log('ng after view  checked')
  }






  goClock() {

    this.pageToggleService.goPage('/clock')

  }


  startTime($event) {
    this.present = $event;
  }


  ngOnInit() {
  }

}
