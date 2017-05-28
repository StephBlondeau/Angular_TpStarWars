import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'barre-erreur',
  templateUrl: './barre-erreur.component.html',
  styleUrls: ['./barre-erreur.component.css']
})
export class BarreErreurComponent implements OnInit {

  @Input()
  public message: string;

  constructor() { }

  ngOnInit() {
  }

}
