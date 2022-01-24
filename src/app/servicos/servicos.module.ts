import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicosListComponent } from './servicos-list/servicos-list.component';
import { ServicosRoutingModule } from './servicos-routing.module';

@NgModule({
  declarations: [ServicosListComponent],
  imports: [CommonModule, ServicosRoutingModule],
})
export class ServicosModule {}
