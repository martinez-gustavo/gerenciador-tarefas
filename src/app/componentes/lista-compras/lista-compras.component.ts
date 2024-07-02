import { Component, OnInit } from '@angular/core';
import {Compra} from "../../app-core/model/compra";

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {

  public compras: Compra[] = [];

  i = 0;

  constructor() { }

  novaCompra(): void {
    var c = document.getElementById("#adicionarCompra").textContent
    var compra = new Compra(c, this.i++)
    this.compras.push(compra);
  }

  ngOnInit(): void {
    listarCompras()


  }



}
