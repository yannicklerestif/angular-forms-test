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
  parentForm: FormGroup;

  constructor(private fb: FormBuilder, private grandParent: FormGroupDirective) { };

  ngOnInit() {
    this.parentForm = new FormGroup({ child: new FormControl('')});
    this.grandParent.form.addControl( 'parent' , this.parentForm );
    console.log(this.grandParent);
  }

}
