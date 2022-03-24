import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ThemePicker} from "./theme-picker/theme-picker.component";
import {MatMenuModule} from "@angular/material/menu";
import {StyleManager} from "../services/StyleManager.service";
import {ThemeStorage} from "../services/ThemePicker.service";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import { GlassMorphismComponent } from './glass-morphism/glass-morphism.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemePicker,
    GlassMorphismComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule
    ],
  providers: [StyleManager, ThemeStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
