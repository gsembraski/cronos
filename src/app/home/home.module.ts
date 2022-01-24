import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { ServicoListComponent } from './components/servico-list/servico-list.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, ServicoListComponent, PostListComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [ServicoListComponent, PostListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
