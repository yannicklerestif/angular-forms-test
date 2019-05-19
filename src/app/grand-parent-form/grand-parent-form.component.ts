import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grand-parent-form',
  templateUrl: './grand-parent-form.component.html',
})
export class GrandParentFormComponent implements OnInit, AfterViewChecked {
  
  grandParentFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder, private changeDetector: ChangeDetectorRef) {
    let fg = new FormGroup({});
    // use for CVA parent
    fg = new FormGroup({ parent: new FormControl('')});
    this.grandParentFormGroup = fg;
  };
  
  ngOnInit() {
  }
  
  ngAfterViewChecked(): void {
    // workaround for ExpressionChangedAfterItHasBeenCheckedError
    // this.changeDetector.detectChanges();
  }

  getFormValueJson() {
    return JSON.stringify(this.grandParentFormGroup.value, null, 2);
  }

}
