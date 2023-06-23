import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    contactoForm: FormGroup;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regexText = /^[a-zA-Z0-9]+$/;
    regexNumero = /^[0-9]+$/;

    constructor (private fb: FormBuilder) {
        this.contactoForm = this.fb.group({
            nombre:['', [Validators.required, Validators.minLength(3)]],
            correo:['', [Validators.required,Validators.pattern(this.regexCorreo)]],
            telefono:['', Validators.pattern(this.regexNumero)],
            mensaje:[''],
        });

    }
    crear_data_contacto(){
        console.log(this.contactoForm)
    }
    }


