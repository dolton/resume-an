import { Component, OnInit } from '@angular/core';
import { AppLayoutService } from 'src/app/app-layout/app-layout.service';
import AOS from 'aos';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    private _appLayoutService: AppLayoutService
  ) { }

  ngOnInit() {

    let data = new Object();
    data['title'] = 'Fancy saying hi';
    data['text'] = 'just go ahead and connect.';

    this._appLayoutService.emitTitleData(data);

    AOS.init();
  }

  ngOnDestroy(): void {
    this._appLayoutService.unsubscribeTitleData();
  }
}
