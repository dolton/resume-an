import { Component, OnInit } from '@angular/core';
import { AppLayoutService } from 'src/app/app-layout/app-layout.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private _appLayoutService: AppLayoutService
  ) { }

  ngOnInit() {
    
    let data = new Object();
    data['title'] = 'Discover who I am';
    data['text'] = 'besides being a developer.';

    this._appLayoutService.emitTitleData(data);
  }

  ngOnDestroy(): void {
    this._appLayoutService.unsubscribeTitleData();
  }

}
