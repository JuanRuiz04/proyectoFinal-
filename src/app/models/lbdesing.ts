
export class lbDesigns {
    _id?:string
    nombre_de_producto: string
    referencia_producto: string
    especificacion_producto: string
    cantidad_producto: number
    imagen_producto: string


    constructor(nombre_de_producto: string, referencia_producto: string, especificacion_producto: string, cantidad_producto: number, imagen_producto: string){
    this.nombre_de_producto = nombre_de_producto;
    this.referencia_producto = referencia_producto;
    this.especificacion_producto = especificacion_producto
    this.imagen_producto = imagen_producto;
    this.cantidad_producto = cantidad_producto
    }
}
