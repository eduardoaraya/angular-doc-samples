import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent, ContentComponent],
  exports: [InputComponent, ButtonComponent, ContentComponent],
  imports: [CommonModule],
})
export class SharedModule {}
