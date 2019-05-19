import { Component, forwardRef, OnInit } from '@angular/core';
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
import { ReturnStatement } from '@angular/compiler';
@Component({
  selector: 'app-cva-child-form',
  templateUrl: './cva-child-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CvaChildFormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CvaChildFormComponent),
      multi: true
    }
  ]
})
export class CvaChildFormComponent implements OnInit, ControlValueAccessor, Validator {
  childForm: FormGroup;

  constructor() {
    this.childForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() { }

  public onTouched: () => void = () => { };

  registerOnChange(fn: any): void {
    this.childForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: any): void {
    if (!val) {
      return;
    }
    this.childForm.setValue(val, { emitEvent: false });
  }

  validate(control: AbstractControl): ValidationErrors | null {
    // feel free to make the error reporting more detailed, e.g.
    // return { lineItemName: this.headerForm.controls.lineItemName.errors, ... }
    console.log('validation called for child => ', this.childForm.valid);
    return this.childForm.valid ? null : { child: 'invalid' };
  }

  isLineItemNameMissing() {
    return this.childForm.controls.lineItemName.hasError('required');
  }
}
