import { Component, OnInit } from '@angular/core';
import { AppLayoutService } from '../app-layout.service';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {

  constructor(
    private _appLayoutService: AppLayoutService
  ) { }

  data: Object = {};

  ngOnInit() {

    this._appLayoutService._pageTitleData$.subscribe(data => {
      this.data = data;
    });
  }
}
