import { Personnage } from "app/model/personnage";
import { Film } from "app/model/film";

export class Recherche {
    personnages: Personnage[];
    films: Film[];
    pages: number;
    page: number;
    urlPage: string;
}
