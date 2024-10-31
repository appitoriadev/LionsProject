import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { RegistroComponent } from './registro/registro.component';
import { LibrosComponent } from './libros/libros.component';
import { IndiceLibrosComponent } from './indice-libros/indice-libros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VerpdfComponent } from './verpdf/verpdf.component';

export const routes: Routes = [
    {
        path: '', component: HomelayoutComponent, children: [
            { path: 'main', component: MainComponent },
            { path: 'libros', component: LibrosComponent },
            { path: 'indice-libros', component: IndiceLibrosComponent },
            { path: 'perfil', component: PerfilComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'recuperar', component: RecuperarComponent },
    { path: 'verpdf', component: VerpdfComponent },
];
