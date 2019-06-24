import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { CvaChildFormComponent } from './cva-child-form/cva-child-form.component';
import { GrandParentFormComponent } from './grand-parent-form/grand-parent-form.component';
import { CvaParentFormComponent } from './cva-parent-form/cva-parent-form.component';
import { CvaSimpleChildComponent } from './cva-simple-child/cva-simple-child.component';
import { CvaSimpleParentComponent } from './cva-simple-parent/cva-simple-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    CvaChildFormComponent,
    GrandParentFormComponent,
    CvaParentFormComponent,
    CvaSimpleChildComponent,
    CvaSimpleParentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
