import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PersonnagesService } from "app/services/personnages.service";
import { FilmsService } from "app/services/films.service";
import { Personnage } from "app/model/personnage";
import { Film } from "app/model/film";

@Component({
  selector: 'detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponent implements OnInit {

  private sub: any;
  private url: string = "";
  public viewDetail:number = -1;
  public personnage: Personnage =  new Personnage();
  public listeUrl: String[] = [];
  public listeFilms: Object[] = [];

  constructor(private route: ActivatedRoute, private personnageService: PersonnagesService, public filmsService : FilmsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = params["id"];
      this.personnageService.detailsPersonnage(this.url)
      .then((response) => {
        this.personnage = response;
        this.listeUrl = this.personnage.films
        for(var i=0; i< this.listeUrl.length;i++) {

          this.filmsService.getDetailFilm(this.listeUrl[i].toString())
          .then((response) => {
             this.listeFilms.push(response);
           })
           .catch((error) => {
             console.log(error);
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
    });
  }

  viewDetailFilm(index: number){
    this.viewDetail = index
  }



}
