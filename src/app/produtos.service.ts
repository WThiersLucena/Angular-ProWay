import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }
  
  // METODO RESPOSTAVEL POR ACESSAR PRODUTOS E TRAZER TODOS OS PRODUTOS DA LISTA
  getAll(){
    return this.produtos;
  }

  // METODO RESPONSAVEL POR ACESSAR PRODUTOS E TRAZER SOMENTE O PRODUTO ESPECIFICO PELO ID
  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}
