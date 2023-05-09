import { Directive } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
  standalone: true
})
export class CapitalizeDirective {

  constructor() { }

}
