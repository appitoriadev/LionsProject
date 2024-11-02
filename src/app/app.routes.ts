import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GuardadosComponent } from './guardados/guardados.component';
import { HomelayoutComponent } from './layouts/homelayout/homelayout.component';
import { AuthLayoutComponent } from './layouts/authlayout/authlayout.component';
import { LibrosComponent } from './libros/libros.component';
import { IndiceLibrosComponent } from './indice-libros/indice-libros.component';
import { VerpdfComponent } from './verpdf/verpdf.component';

export const routes: Routes = [
    // {
    //     path: 'auth',
    //     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    // },
    {
        path: '',
        component: HomelayoutComponent,
        children: [
            { path: '', component: MainComponent },
            { path: 'libros', component: LibrosComponent },
            { path: 'perfil', component: PerfilComponent },
            { path: 'guardados', component: GuardadosComponent },
            { path: 'indice-libros', component: IndiceLibrosComponent },
            { path: 'verpdf', component: VerpdfComponent },
        ],
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'registro', component: RegistroComponent },
        ],
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }

];
