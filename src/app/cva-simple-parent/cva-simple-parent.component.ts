import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cva-simple-parent',
  templateUrl: './cva-simple-parent.component.html',
})
export class CvaSimpleParentComponent implements OnInit {
  parentFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private changeDetector: ChangeDetectorRef
  ) {
    this.parentFormGroup = new FormGroup({ child: new FormControl('') });
  }

  ngOnInit() {}

  ngAfterViewChecked(): void {
    // workaround for ExpressionChangedAfterItHasBeenCheckedError
    // this.changeDetector.detectChanges();
  }

  getFormValueJson() {
    return JSON.stringify(this.parentFormGroup.value, null, 2);
  }
}
