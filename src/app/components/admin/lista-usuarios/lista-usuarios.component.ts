import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

    listaUsuarios: any[] = []

    constructor(private _usuarioService: UsuarioService){}

    obtenerUsuarios(){
        this._usuarioService.getUsuarios().subscribe(data => {
            console.log(data)
            this.listaUsuarios = data
        })
    }


}
