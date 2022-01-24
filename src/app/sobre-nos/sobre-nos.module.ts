import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SobreNosRoutingModule } from './sobre-nos-routing.module';
import { SobreNosComponent } from './sobre-nos.component';

@NgModule({
  declarations: [SobreNosComponent],
  imports: [CommonModule, SobreNosRoutingModule],
})
export class SobreNosModule {}
