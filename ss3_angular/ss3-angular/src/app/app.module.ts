import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { BoostrapAngularComponent } from './boostrap-angular/boostrap-angular.component';
import {FormsModule} from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { NewsComponent } from './news/news.component';
import { LikeComponent } from './news/like/like.component';
import { NavBarComponent } from './news/nav-bar/nav-bar.component';
import { FooterComponent } from './news/footer/footer.component';
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
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
