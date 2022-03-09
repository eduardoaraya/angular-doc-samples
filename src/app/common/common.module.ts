import { NgModule } from '@angular/core';
import { CommonModule as CommonModuleNg } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModuleNg, RouterModule],
  exports: [HeaderComponent, LayoutComponent],
})
export class CommonModule {}
