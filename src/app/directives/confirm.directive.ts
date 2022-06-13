// Directive para el modal de confirmación
import { Directive, TemplateRef } from '@angular/core';
import { ConfirmState } from '../class/confirm-state';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  constructor( confirmTemplate: TemplateRef<any>, state: ConfirmState ) {
    state.template = confirmTemplate;
   }

}
