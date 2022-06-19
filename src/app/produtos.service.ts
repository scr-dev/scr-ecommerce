import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;



  constructor() { }

  getAll() {
    return this.produtos;
  };

  getOne(produtoId: number) {

    return this.produtos.find(produto => produto.id === produtoId);

    /* -------------- OUTRA MANEIRA DE USAR O MÉTODO FIND() ------------------  
    let produtoEncontrado = produtos.find(function(product: {
      id: number;
      descricao: string;
      preco: number;
      quatidadeEstoque: number;
      descricaoPreco: string;
      imagem: string;
      desconto?: number;
    }): IProduto | undefined | void | number{
        if (product.id == produtoId) {
            return product.id
        }       
    })*/

    
    
  }

  
}




