import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {




  @Output() clickEvent = new EventEmitter();



  constructor(
    public pageToggleService: PageToggleService

  ) {



  }

  executeButton(command) {
    this.pageToggleService.plusCount();
    this.clickEvent.emit(command);

  }

  ngOnInit() {
  }

}
