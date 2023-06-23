import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroProductosComponent } from './components/registro-productos/registro-productos.component';
import { ListaRegistroProductosComponent } from './components/lista-registro-productos/lista-registro-productos.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { autenticacionGuard } from './guards/autenticacion.guard';
import { ListaUsuariosComponent } from './components/admin/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
    { path: '', component:HomeComponent},
    { path: 'contact', component:ContactComponent},
    { path: 'login', component:LoginComponent},
    { path: 'home', component:HomeComponent},
    { path: 'productos', component:ProductosComponent},
    { path: 'registro', component:RegistroProductosComponent},
    { path: 'registro/:id', component:RegistroProductosComponent},
    { path: 'lista-registro-productos',  component:ListaRegistroProductosComponent},
    { path: 'about-us', component:AboutUsComponent},
    { path: 'ingreso', component:LoginComponent },
    { path: 'admin/usuarios', canMatch: [autenticacionGuard], component:ListaUsuariosComponent},
    { path: 'editar-producto/:id', component:ListaRegistroProductosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
