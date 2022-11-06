import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryAboutComponent } from 'src/app/brewery-about/brewery-about.component';
import { BreweryBeersComponent } from 'src/app/brewery-beers/brewery-beers.component';

const routes: Routes = [
  { path: '', redirectTo: 'beers', pathMatch: 'full' },
  { path: 'beers', component: BreweryBeersComponent },
  { path: 'about', component: BreweryAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class NuevomoduloRoutingModule {}
