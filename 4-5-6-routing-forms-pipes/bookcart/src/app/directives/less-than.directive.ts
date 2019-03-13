import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[lessThan]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LessThanDirective,
    multi: true
  }]
})
export class LessThanDirective {
  @Input('lessThan') n: number;
  
  validate(control: AbstractControl) {
    console.log(control.value, this.n);
    if(+control.value > +this.n) {
      return {lessThan: `not less than ${this.n}`};
    } 
    return null;
  }

}
