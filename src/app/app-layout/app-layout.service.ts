import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLayoutService {

  constructor() { }

  private _pageTitleData: BehaviorSubject<any> = new BehaviorSubject(null);
  public _pageTitleData$ = this._pageTitleData.asObservable();

  emitTitleData(data: Object) {
    this._pageTitleData.next(data);
  }

  unsubscribeTitleData() {
    this._pageTitleData.next('');
  }
}
