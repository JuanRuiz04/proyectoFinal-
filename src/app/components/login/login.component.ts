import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service'
import Swal from 'sweetalert2';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    user = {
        correo: '',
        password: ''
    }

    constructor(private _usuarioService: UsuarioService, private router: Router) { }

    ingresoUsuario() {
        this._usuarioService.postIngresoUsuario(this.user).subscribe(data => {
            sessionStorage.setItem('token', data.token)
            Swal.fire({
                icon: 'success',
                title: 'Te damos la bienvenida',
                timer: 3000,
                showConfirmButton: false
            })
            this.router.navigate(['lista-registro-productos'])
        }, err => {
            Swal.fire({
                icon: 'success',
                title: 'Datos de acceso invalidos',
                timer: 3000,
                showConfirmButton: false

            })
        })

    }
}

