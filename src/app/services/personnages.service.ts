import{ Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import{ Observable } from 'rxjs/Observable';
import { Recherche } from "app/model/recherche";
import { Film } from "../model/film";
import { Personnage } from "../model/personnage";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonnagesService{

  private titreRecherche: String = "";
  private page: number = 0;

  constructor(private http: Http){}

  getAllCaracters(url: string, page: number):Promise<Recherche> {
    return new Promise((resolve, reject) => {
      // Non ajout du numéro de page s'il s'agit de la premiere
      if(page !== 1){
        url += page
      }
      this.http.get(url)
      .toPromise()
      .then((response) => {
        console.log(response);
        let resultat = response.json();
        if (resultat && resultat["results"]) {
          let recherche = new Recherche();
          recherche.personnages = resultat["results"];
          recherche.pages       = Math.ceil(Number(resultat["count"]) / 10);
          recherche.page        = page;
          recherche.urlPage     = "http://swapi.co/api/people/?page=" //""+ (page)  //resultat["next"];
          resolve(recherche);
        } else {
          reject("Bad response");
        }
      });
    });
  }

  rechercherHistorique(): Promise<Recherche> {
     if (this.titreRecherche === "") {
        return Promise.reject("Pas de recherche historique");
      } else {
        return this.rechercherPersonnages(this.titreRecherche, this.page);
      }
  }

  rechercherPersonnages(titre: String, page: number): Promise<Recherche> {
    this.titreRecherche = titre;
    this.page           = page;
    return new Promise((resolve, reject) => {
      //this.http.get("https://swapi.co/api/people/?search=" + titre)
      this.http.get("http://swapi.co/api/people/?page="+ page + "&search=" + titre)
      .toPromise()
      .then((response) => {
        let resultat = response.json();
        if (resultat && resultat["results"]) {
          let recherche = new Recherche();
          recherche.personnages = resultat["results"];
          //recherche.personnages.films = resultat["resultat"]["films"]
          recherche.pages       = Math.ceil(Number(resultat["count"]) / 10);
          recherche.page        = page;
          resolve(recherche);
        } else {
          reject("Bad response");
        }
      });
    });
  }

  detailsPersonnage(url: string): Promise<Personnage> {
    return new Promise((resolve, reject) => {
      this.http.get(url)
      .toPromise()
      .then((response) => {
        let resultat = response.json();
        if (resultat && !resultat.Error) {
          resolve(resultat);
        } else {
          reject("Bad response");
        }
      });
    });
  }

}
