import { ProdutoService } from '../../../core/service/produco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  public prods = [];

  constructor(private prodService:ProdutoService) { }

  ngOnInit(): void {
    this.prodService
    .index()
    .subscribe((arg:any) => {
      console.log(arg.data)
      this.prods = arg.data
    })
  }

}
