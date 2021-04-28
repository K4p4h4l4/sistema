import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceService } from '../provide/http/Api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

    public params = new HttpParams();

    constructor(private api:ApiServiceService) { }

    public index():any{return this.api.get('/produto')}

    public show(params:any):any{return this.api.get('/produtos/',params);}

    public post(produto:any):any{return this.api.get('/produtos/',produto);}

    public put(produto:any, params:any):any{return this.api.get('/produtos/'+params,produto);}
}