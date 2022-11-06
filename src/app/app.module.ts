import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FormsModule } from '@angular/forms';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';
import { CartComponent } from './cart/cart.component';
import { NuevomoduloRoutingModule } from './modules/nuevomodulo/nuevomodulo-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BreweryBeersComponent,
    BreweryAboutComponent,
    CartComponent,
  ],
  imports: [BrowserModule, FormsModule, NuevomoduloRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
