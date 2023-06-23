import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { lbDesigns } from 'src/app/models/lbdesing';
import Swal from 'sweetalert2';
import { ProductosComponent } from '../productos/productos.component';
import { RegistroProductoService } from 'src/app/services/registro-producto.service';



@Component({
    selector: 'app-registro-productos',
    templateUrl: './registro-productos.component.html',
    styleUrls: ['./registro-productos.component.css']
})
export class RegistroProductosComponent implements OnInit {
    lbForms: FormGroup
    regexString = /^[A-Za-z]+$/
    regexAlfaNumerica = /^[A-Za-z0-9\s]+$/
    regexNumero = /^[0-9]+$/
    regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    titulo_formulario: string = 'Registro de productos'
    id: string | null

    constructor(private fb: FormBuilder, private _productoService: RegistroProductoService, private router: Router,
        private idRoute: ActivatedRoute) {
        this.lbForms = this.fb.group({
            nombre_de_producto: ['', [Validators.required, Validators.minLength(3)]],
            referencia_producto: ['', [Validators.required, Validators.pattern(this.regexAlfaNumerica), Validators.minLength(3)]],
            especificacion_producto: ['', [Validators.required, Validators.pattern(this.regexAlfaNumerica)]],
            cantidad_producto: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
            imagen_producto: ['', [Validators.required, Validators.pattern(this.regexUrl)]]

        })


        this.id = this.idRoute.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
        this.accionSolicitada()

    }

    actualizar_registrar_producto() {
       if(this.id === null){
        console.log(this.lbForms);


        this._productoService.postRegistroProducto(this.lbForms.value).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Producto registrado',
                confirmButtonColor: "#52874a"
            })
            this.router.navigate(['lista-registro-productos'])

        })
    }else {
        this._productoService.putRegistroProducto(this.id, this.lbForms.value).subscribe(data => {
            Swal.fire({
                icon: 'success',
                title: 'Producto actualizado',
                confirmButtonColor: "#52874a"
            })
            this.router.navigate(['lista-registro-productos'])
        })
    }
    }


    accionSolicitada() {
        if (this.id !== null) {
            this.titulo_formulario = "Modificar Producto"
            this._productoService.getRegistroProducto(this.id).subscribe(data => {
                this.lbForms.setValue({
                    nombre_de_producto: data.nombre_de_producto,
                    referencia_producto: data.referencia_producto,
                    especificacion_producto: data.especificacion_producto,
                    cantidad_producto: data.cantidad_producto,
                    imagen_producto: data.imagen_producto
                })
            })
        }
    }
}


