// Otras propiedades necesarias para el modal de confirmación

import { Injectable, TemplateRef } from "@angular/core";
import { ConfirmOptions } from "./confirm-options";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class ConfirmState {
  /**
     * The last options passed ConfirmService.confirm()
     */
   options!: ConfirmOptions;

   /**
    * The last opened confirmation modal
    */
   modal!: NgbModalRef;

   /**
    * The template containing the confirmation modal component
    */
   template!: TemplateRef<any>;
}
