import { WelcomComponent } from './welcom/welcom.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    PastTrainingsComponent,
    WelcomComponent,
    NavHeaderComponent,
    NewTrainingComponent,
    StopTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent, CurrentTrainingComponent],
})
export class AppModule {}
