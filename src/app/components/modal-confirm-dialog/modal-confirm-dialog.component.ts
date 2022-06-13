import { Component, OnInit } from '@angular/core';
import { ConfirmOptions } from 'src/app/class/confirm-options';
import { ConfirmState } from 'src/app/class/confirm-state';

@Component({
  selector: 'app-modal-confirm-dialog',
  templateUrl: './modal-confirm-dialog.component.html',
  styleUrls: ['./modal-confirm-dialog.component.scss']
})
export class ModalConfirmDialogComponent implements OnInit {

  options!: ConfirmOptions;

  constructor( private state: ConfirmState ) { this.options = state.options }

  ngOnInit(): void {
  }

  yes() {
    this.state.modal.close('confirmed');
  }

  no() {
      this.state.modal.dismiss('not confirmed');
  }

}
