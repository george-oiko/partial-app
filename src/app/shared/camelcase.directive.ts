import { Directive } from '@angular/core';

@Directive({
  selector: '[appCamelcase]',
  standalone: true
})
export class CamelcaseDirective {

  constructor() { }

}
