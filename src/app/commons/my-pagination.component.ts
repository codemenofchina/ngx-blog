/**
 * Created by chenqiang on 2017/8/1.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <pagination
      [boundaryLinks]="true"
      [totalItems]="totalItems"
      [(ngModel)]="currentPage"
      previousText="&lsaquo;"
      nextText="&rsaquo;"
      firstText="&laquo;"
      lastText="&raquo;"
      (pageChanged)="pageChanged($event)">
    </pagination>
  `
})
export class MyPaginationComponent {
  @Input()
  totalItems = 0;
  currentPage: number;

  @Output()
  page = new EventEmitter();

  public pageChanged(event) {
    this.page.emit(event.page);
  }
}
