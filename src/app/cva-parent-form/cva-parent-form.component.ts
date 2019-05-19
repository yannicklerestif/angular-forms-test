import { Component, forwardRef, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-cva-parent-form',
  templateUrl: './cva-parent-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CvaParentFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CvaParentFormComponent),
      multi: true
    }
  ]
})
export class CvaParentFormComponent implements OnInit, ControlValueAccessor, Validator, AfterViewChecked {
  parentForm: FormGroup;

  constructor(private changeDetect: ChangeDetectorRef) {
    this.parentForm = new FormGroup({
      child: new FormControl('')
    });
  }

  ngOnInit() { }

  ngAfterViewChecked(): void {
    console.log('after view checked: ', this.parentForm.controls.child.errors);
    // workaround: updating parent status after view is first build
    // this.parentForm.updateValueAndValidity();
  }

  public onTouched: () => void = () => { };

  registerOnChange(fn: any): void {
    this.parentForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: any): void {
    if (!val) {
      val = { child: { name: '', comment: '' }};
    }
    this.parentForm.setValue(val, { emitEvent: false });
    this.parentForm.controls.child.updateValueAndValidity();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    // feel free to make the error reporting more detailed, e.g.
    // return { lineItemName: this.headerForm.controls.lineItemName.errors, ... }
    console.log('validation called for parent form => ', this.parentForm.valid);
    console.log('child error state: ', this.parentForm.controls.child.errors);
    console.log('control', control);
    return this.parentForm.valid ? null : { parent: 'invalid' };
  }

  isLineItemNameMissing() {
    return this.parentForm.controls.lineItemName.hasError('required');
  }
}
