import {FormGroup} from '@angular/forms';

export class BaseFormComponent {
  protected isInvalidContro(form:FormGroup, controlName:string):boolean {
    return form.controls[controlName].invalid && form.controls[controlName].touched;
  }

  private errorMesagForControl(controlName:string, errorKey:string){
    switch (errorKey) {
      case 'required':
        return `the field ${controlName} is required`;
      default:
        return `The field ${controlName} is invalid.`
    }
  }

  protected errorMessageForControl(form:FormGroup, controlName:string){
    const control = form.controls[controlName];
    let errorMessages = '';
    let errors = control.errors;
    if (!errors) return errorMessages;
    Object.keys(errors).forEach((errorKey)=>errorMessages +=this.errorMesagForControl(controlName,errorKey));
    return errorMessages;
  }
}
