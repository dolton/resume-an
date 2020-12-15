import { Component, OnInit } from '@angular/core';
import { AppLayoutService } from 'src/app/app-layout/app-layout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _appLayoutService: AppLayoutService
  ) { }

  ngOnInit() {
    
    let data = new Object();
    data['title'] = 'I\'m Dolton.';
    data['text'] = 'A web developer.';

    this._appLayoutService.emitTitleData(data);
  }

  ngOnDestroy(): void {
    this._appLayoutService.unsubscribeTitleData();
  }
}
