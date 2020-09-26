import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';
import { WelcomComponent } from './welcom/welcom.component';

const routes: Routes = [
  { path: '', component: WelcomComponent },
  { path: 'traning', component: TrainingComponent },
  { path: 'logIn', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
