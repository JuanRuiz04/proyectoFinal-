import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lbDesigns } from '../models/lbdesing';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegistroProductoService {

  urlApi = 'http://Localhost:4010/api'

  constructor(private http: HttpClient) { }

  postRegistroProducto(dataProducto: lbDesigns): Observable<any> {
    return this.http.post(this.urlApi+"/productos", dataProducto)
  }

  getRegistrosProductos(): Observable<any>{
    return this.http.get(this.urlApi+"/productos")
  }

  deleteRegistroProducto(id:string): Observable<any>{
    return this.http.delete(`${this.urlApi}/productos/${id}`)
  }

  getRegistroProducto(id: string): Observable<any>{
    return this.http.get(`${this.urlApi}/${id}`)
  }

  putRegistroProducto(id:string, dataProducto:lbDesigns){
    return this.http.put(`${this.urlApi}/productos/${id}`, dataProducto )
  }

}


