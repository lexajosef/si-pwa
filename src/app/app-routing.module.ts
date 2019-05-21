import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';

// Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', canActivate: [ LoggedGuard ], component: LoginComponent },
  { path: 'home', canActivate: [ AuthGuard ], component: HomeComponent },
  { path: '**', redirectTo: 'home' } // another routes redirect to home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
