import { Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { LibrosListaComponent } from './libros-module/libros-lista/libros-lista.component';

export const routes: Routes = [
    { path: '', component: MainComponentComponent },
    { path: 'libros', component: LibrosListaComponent }
];
