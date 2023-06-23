import { Component, OnInit } from '@angular/core';
import { lbDesigns } from 'src/app/models/lbdesing';
import { RegistroProductoService } from 'src/app/services/registro-producto.service';


@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    listaProductos: lbDesigns[] = [];

    constructor(private productoServicio:RegistroProductoService) {}

    ngOnInit(): void {
        this.obtenerRegistroDeProductos()
    }

    obtenerRegistroDeProductos(){
        this.productoServicio.getRegistrosProductos().subscribe( data => {
            this.listaProductos = data
        })
    }

    }





