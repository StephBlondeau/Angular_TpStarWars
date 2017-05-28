import { Component, OnInit } from '@angular/core';
import { PersonnagesService } from 'app/services/personnages.service';
import { Personnage } from 'app/model/personnage';

@Component({
  selector: 'recherche-personnages',
  templateUrl: './recherche-personnages.component.html',
  styleUrls: ['./recherche-personnages.component.css']
})

export class RecherchePersonnagesComponent implements OnInit {

  public recherche: String = "";
  public isRechercheOnce = false;
  public listePersonnages: Personnage[] = [];
  public urlPage : string = "";
  public error: String = "";

  public pageCourante : number = 1;
  public pages : number = 0;

  constructor(private personnagesService : PersonnagesService) { }

  ngOnInit() {
    this.urlPage = "https://swapi.co/api/people";
    this.personnagesService.getAllCaracters(this.urlPage, this.pageCourante)
    .then((recherche) => {
      this.pageCourante     = recherche.page;
      this.urlPage          = recherche.urlPage;
      this.pages            = recherche.pages;
      this.listePersonnages = recherche.personnages;
    })
    .catch((error) => {
      this.error = "Aucun personnage trouvé.";
    })

    this.personnagesService.rechercherHistorique()
    .then((recherche) => {
      this.pageCourante     = recherche.page;
      this.urlPage          = recherche.urlPage;
      this.pages            = recherche.pages;
      this.listePersonnages = recherche.personnages;
    })
    .catch((error) => {
      console.log("Pas d'historique");
    })
  }

  rechercher() {
    this.error = "";
    if (this.recherche.length < 3) {
      this.error = "Veuillez saisir un nom de plus de 3 caractéres.";
    } else {
      this.isRechercheOnce = true;
      this.listePersonnages = [];
      this.personnagesService.rechercherPersonnages(this.recherche, 1)
        .then((recherche) => {
          this.pageCourante     = recherche.page;
          this.pages            = recherche.pages;
          this.urlPage          = recherche.urlPage;
          this.listePersonnages = recherche.personnages;
        })
        .catch((err) => {
          this.error = err;
        });
    }
  }

  // Permet de changer la pagination
  changerPage(numberPage: number) {
    this.personnagesService.getAllCaracters(this.urlPage, numberPage)
        .then((recherche) => {
          this.pageCourante     = recherche.page;
          this.pages            = recherche.pages;
          this.urlPage          = recherche.urlPage;
          this.listePersonnages = recherche.personnages;
        })
        .catch((err) => {
          this.error = err;
        });
  }
}
