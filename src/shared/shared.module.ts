import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDropdownComponent } from './components/app-dropdown/app-dropdown.component';

@NgModule({
  declarations: [AppDropdownComponent],
  imports: [CommonModule],
  exports: [AppDropdownComponent],
})
export class SharedModule {}
