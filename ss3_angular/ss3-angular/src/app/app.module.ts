import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { BoostrapAngularComponent } from './boostrap-angular/boostrap-angular.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { NewsComponent } from './news/news.component';
import { LikeComponent } from './news/like/like.component';
import { NavBarComponent } from './news/nav-bar/nav-bar.component';
import { FooterComponent } from './news/footer/footer.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { FormComponent } from './form/form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    BoostrapAngularComponent,
    CalculatorComponent,
    ColorPickerComponent,
    NewsComponent,
    LikeComponent,
    NavBarComponent,
    FooterComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    FormComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
