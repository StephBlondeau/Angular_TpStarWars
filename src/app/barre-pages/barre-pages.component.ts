import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'barre-pages',
  templateUrl: './barre-pages.component.html',
  styleUrls: ['./barre-pages.component.css']
})
export class BarrePagesComponent implements OnInit {
  @Input() page: number = 0;
  @Input() total: number = 0;
  @Input() urlPage: string = "";
  @Output() pageChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pagePrecedente() {
    this.pageChanged.emit(this.page - 1);
  }

  pageSuivante() {
    this.pageChanged.emit(this.page + 1);
  }

}
