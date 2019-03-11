import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from './authorization/authorization.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthenticationComponent} from './authentication/authentication.component';

const routes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
      { path: 'authorization', component: AuthorizationComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  }
  // { path: 'authorization', component: AuthorizationComponent },
  // { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
