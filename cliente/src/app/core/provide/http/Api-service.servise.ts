import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pathToFileURL } from 'node:url';

@Injectable({
    providedIn: 'root'
})

export class AppServiceService {
    constructor(private http: HttpClient){}

    public get(path:string, httpParam:HttpParams = new HttpParams()):any{
        return this.http.get(environment.app_url+pathToFileURL,{params:httpParam});
    }

    public post(path:string, body: Object = {}):any{
        return this.http.post(environment.app_url+path,body);
    }

    public put(path:string, body: Object = {}):any{
        return this.http.put(environment.app_url+path,body);
    }

    public delete(path:string):any{
        return this.http.delete(environment.app_url+path);
    }
}