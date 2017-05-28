import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarreErreurComponent } from './barre-erreur/barre-erreur.component';
import { BarreHeaderComponent } from './barre-header/barre-header.component';
import { BarrePagesComponent } from './barre-pages/barre-pages.component';
import { DetailComponent } from './detail-component/detail-component.component';
import { RecherchePersonnagesComponent } from './recherche-personnages/recherche-personnages.component';
import { PersonnagesService } from './services/personnages.service';
import { FilmsService } from './services/films.service';
import { RouterModule, Routes } from '@angular/router';

// Création des Routes pour la navigation url
const approutes : Routes = [
  {path : "accueil", component: RecherchePersonnagesComponent},
  {path : "details/:id", component: DetailComponent},
  {path : "**", redirectTo : "/accueil", pathMatch : 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    BarreErreurComponent,
    BarreHeaderComponent,
    BarrePagesComponent,
    DetailComponent,
    RecherchePersonnagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [PersonnagesService, FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
