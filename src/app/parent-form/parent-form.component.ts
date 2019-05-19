import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ControlContainer, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
})
export class ParentFormComponent implements OnInit {
  parentFormGroup: FormGroup;

  constructor(private parent: FormGroupDirective) { };

  ngOnInit() {
    this.parent.form.addControl(
      'child', new FormControl({name: '', comment: ''})
    );
  }

}
