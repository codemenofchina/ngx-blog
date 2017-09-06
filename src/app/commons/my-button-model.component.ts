/**
 * Created by chenqiang on 2017/9/6.
 */
import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-button-modal-component',
  template: `
    <button type="button" class="btn btn-primary" (click)="openModal(template)">modal</button>

    <ng-template #template>
      <div class="modal-header">
        <h4 class="modal-title pull-left">Modal</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="isConfirm(false)">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        This is a modal.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="isConfirm(true)">Close</button>
      </div>
    </ng-template>
  `
})
export class ButtonModelComponent {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public isConfirm(flag: boolean){
    console.log(flag);
    this.modalRef.hide();
  }

}
