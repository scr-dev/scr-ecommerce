import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from '../nao-encontrada/nao-encontrada.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DetalhesProdutoComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    RouterModule,
    FormsModule
  ]
})
export class ProdutosRoutingModule { }
