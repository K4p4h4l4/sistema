import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCreateComponent } from './componentes/protudos/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './componentes/protudos/produto-delete/produto-delete.component';
import { ProdutoListComponent } from './componentes/protudos/produto-list/produto-list.component';
import { ProdutoShowComponent } from './componentes/protudos/produto-show/produto-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos/list', pathMatch: 'full' },

  { path: 'produtos/list', component: ProdutoListComponent},

  { path: 'produtos/create', component: ProdutoCreateComponent},

  { path: 'produtos/show/:params', component: ProdutoShowComponent},

  { path: 'produtos/delete/:params', component: ProdutoDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
