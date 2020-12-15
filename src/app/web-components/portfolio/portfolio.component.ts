import { Component, OnInit } from '@angular/core';
import { AppLayoutService } from 'src/app/app-layout/app-layout.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(
    private _appLayoutService: AppLayoutService
  ) { }

  ngOnInit() {
    
    let data = new Object();
    data['title'] = 'See what I do';
    data['text'] = 'while developing';

    this._appLayoutService.emitTitleData(data);
  }

  ngOnDestroy(): void {
    this._appLayoutService.unsubscribeTitleData();
  }

}
