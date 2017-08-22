/**
 * Created by chenqiang on 2017/8/1.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <pagination
      boundaryLinks]="true"
      totalItems]="totalItems"
      [(ngModel)]="currentPage"
      previousText="&lsaquo;"
      nextText="&rsaquo;"
      firstText="&laquo;"
      lastText="&raquo;">
    </pagination>
  `
})
export class MyPaginationComponent {
  @Input()
  public totalItems = 64;
  @Output()
  public currentPage = new EventEmitter();
  public smallnumPages = 0;

  public pageChanged(event: any): void {
    this.currentPage.emit(event);
    console.log(event);
  }
}
