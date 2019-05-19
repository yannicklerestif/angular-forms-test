import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grand-parent-form',
  templateUrl: './grand-parent-form.component.html',
})
export class GrandParentFormComponent implements OnInit {

  grandParentFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.grandParentFormGroup = new FormGroup({
      parent: new FormControl({ child: { name: '', comment: '' } })
    });
  };

  ngOnInit() {
  }

  getFormValueJson() {
    return JSON.stringify(this.grandParentFormGroup.value, null, 2);
  }

}
