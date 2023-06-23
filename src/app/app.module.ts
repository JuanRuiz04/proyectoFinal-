import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroProductosComponent } from './components/registro-productos/registro-productos.component';
import { ListaRegistroProductosComponent } from './components/lista-registro-productos/lista-registro-productos.component';
import {HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ErrorPagina404Component } from './components/error-pagina404/error-pagina404.component';
import { ListaUsuariosComponent } from './components/admin/lista-usuarios/lista-usuarios.component';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    ProductosComponent,
    RegistroProductosComponent,
    ListaRegistroProductosComponent,
    AboutUsComponent,
    ErrorPagina404Component,
    ListaUsuariosComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
