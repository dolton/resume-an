import { Component, OnInit } from '@angular/core';
import { AppLayoutService } from 'src/app/app-layout/app-layout.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(
    private _appLayoutService: AppLayoutService
  ) { }

  ngOnInit() {
    
    let data = new Object();
    data['title'] = 'Dig Deeper';
    data['text'] = 'or download my resume';

    this._appLayoutService.emitTitleData(data);
  }

  ngOnDestroy(): void {
    this._appLayoutService.unsubscribeTitleData();
  }
}
