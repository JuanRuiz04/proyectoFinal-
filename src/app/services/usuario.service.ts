import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    urlApi: string = 'http://localhost:4010/api'
    tokenUsuario:string|null = ''

  constructor(private http:HttpClient) {
    this.tokenUsuario = (sessionStorage.getItem('token') !== null) ? sessionStorage.getItem('token') : null
  }

  postIngresoUsuario(dataLogin:object): Observable<any>{
    return this.http.post(`${this.urlApi}/ingreso`, dataLogin)
  }

  estaLogueado(){
    return (sessionStorage.getItem("token")) ? true : false;
  }
  getUsuarios(): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Beater ${this.tokenUsuario} `)
    return this.http.get(`${this.urlApi}/usuarios`, {headers:headers})
  }
}
