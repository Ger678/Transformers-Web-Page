import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BannerComponent } from './Components/banner/banner.component';
import { QuoteComponent } from './Components/quote/quote.component';
import { AboutComponent } from './Components/about/about.component';
import { FeaturesComponent } from './Components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    QuoteComponent,
    AboutComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
