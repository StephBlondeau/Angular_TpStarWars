import{ Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import{ Observable } from 'rxjs/Observable';
import { Recherche } from "app/model/recherche";
import { Film } from "../model/film";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FilmsService{

  private titreRecherche: String = "";
  private page: number = 0;

  constructor(private http: Http){}

  getDetailFilm(url: string):Promise<Recherche>{
    return new Promise((resolve, reject) => {
      this.http.get(url)
      .toPromise()
      .then((response) => {
        let resultat = response.json();
        if (resultat) {
          resolve(resultat);
        } else {
          reject("Bad response");
        }
      });
    });
  }

}
