import { Component, OnInit } from '@angular/core';
import { RegistroProductoService } from "src/app/services/registro-producto.service";
import { lbDesigns } from "src/app/models/lbdesing";
import Swal from 'sweetalert2'




@Component({
    selector: 'app-lista-registro-productos',
    templateUrl: './lista-registro-productos.component.html',
    styleUrls: ['./lista-registro-productos.component.css']
})
export class ListaRegistroProductosComponent implements OnInit {

    listaProductos: lbDesigns[] = [];

    constructor(private productoServicio: RegistroProductoService) { }


    ngOnInit(): void {
        this.obtenerRegistroDeProductos()

    }

    obtenerRegistroDeProductos() {
        this.productoServicio.getRegistrosProductos().subscribe(data => {
            this.listaProductos = data
        })
    }

    eliminarProducto(id: any) {
        Swal.fire({
            title: 'Esta seguro que desea eliminar este producto?',
            text: "Esta acción no se podrá deshacer!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar !',
            cancelButtonText: 'Cancelar'

        }).then((result) => {
            if (result.isConfirmed) {
                this.productoServicio.deleteRegistroProducto(id).subscribe(data => {

                    Swal.fire(
                        'Eliminado!',
                        'El producto ha sido eliminado.',
                        'success'
                    )
                    this.obtenerRegistroDeProductos()
                })
            }
        })
    }

}

