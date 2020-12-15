import { Component, OnInit } from '@angular/core';
import { AppLayoutService } from 'src/app/app-layout/app-layout.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
    private _appLayoutService: AppLayoutService
  ) { }

  ngOnInit() {

    let data = new Object();
    data['title'] = 'Keep Reading';
    data['text'] = 'because it helps.';

    this._appLayoutService.emitTitleData(data);
  }

  ngOnDestroy(): void {
    this._appLayoutService.unsubscribeTitleData();
  }
}
