import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsLibComponent } from './components-lib.component';



@NgModule({
  declarations: [ComponentsLibComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ComponentsLibComponent]
})
export class ComponentsLibModule { }
