export class Contacto {
    nombre: string
    correo: string
    telefono: number
    mensaje: string

    constructor(nombre: string, correo: string, telefono: number, mensaje: string){
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.mensaje = mensaje;
    }

}
