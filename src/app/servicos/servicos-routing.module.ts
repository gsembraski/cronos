import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicosListComponent } from './servicos-list/servicos-list.component';

const routes: Routes = [{ path: '', component: ServicosListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosRoutingModule {}
