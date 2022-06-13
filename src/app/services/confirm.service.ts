import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmOptions } from '../class/confirm-options';
import { ConfirmState } from '../class/confirm-state';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(
    protected modalService: NgbModal,
    protected state: ConfirmState
  ) { }

  /** 
  * Opens a confirmation modal
  * @param options the options for the modal (title and message)
  * @returns {Promise<any>} a promise that is fulfilled when the user chooses to confirm, and rejected when
  * the user chooses not to confirm, or closes the modal
  */
  confirm(options: ConfirmOptions): Promise<any> {
    this.state.options = options;
    this.state.modal = this.modalService.open(this.state.template);
    return this.state.modal.result;
  }

}
