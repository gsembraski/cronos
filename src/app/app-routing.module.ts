import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'sobre-nos',
    loadChildren: () =>
      import('./sobre-nos/sobre-nos.module').then((m) => m.SobreNosModule),
  },
  {
    path: 'servico',
    loadChildren: () =>
      import('./servicos/servicos.module').then((m) => m.ServicosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
