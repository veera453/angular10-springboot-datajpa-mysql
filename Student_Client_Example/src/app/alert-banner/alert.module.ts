import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBannerComponent } from '../alert-banner/alert-banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AlertBannerComponent],
  exports: [AlertBannerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertModule {}
