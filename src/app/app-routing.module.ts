import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { ChartsComponent } from "./charts/charts.component";
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
      path: 'login',
      component : LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    { path: 'users',
      loadChildren: usersModule,
      canActivate: [AuthGuard]
    },
    { path: 'account',
      loadChildren: accountModule
    },
    {
        path: 'charts',
        component: ChartsComponent,
        canActivate: [AuthGuard]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
