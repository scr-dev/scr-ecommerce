import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho() {
    this.itens =(JSON.parse(localStorage.getItem('carrinho') || "[]"))
    return this.itens; //foi colocado (|| "") para que a tipagem nao fique retornando erro de type    

  }

  adcionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); // JSON.strigify() converte de um obj para uma string
    
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId); // percorre e filtra os prodututos de acordo com id recebido por parametro
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); // sobrescrevendo carinho após remocao de itens
  }
  
  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}


