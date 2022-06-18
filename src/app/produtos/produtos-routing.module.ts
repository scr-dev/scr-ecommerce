import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from '../nao-encontrada/nao-encontrada.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: "produtos/**", component: NaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
