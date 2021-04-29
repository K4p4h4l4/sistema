import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { ProdutoListComponent } from './componentes/protudos/produto-list/produto-list.component';
import { ProdutoCreateComponent } from './componentes/protudos/produto-create/produto-create.component';
import { ProdutoShowComponent } from './componentes/protudos/produto-show/produto-show.component';
import { ProdutoDeleteComponent } from './componentes/protudos/produto-delete/produto-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutoListComponent,
    ProdutoCreateComponent,
    ProdutoShowComponent,
    ProdutoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
