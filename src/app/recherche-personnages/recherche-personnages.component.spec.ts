import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePersonnagesComponent } from './recherche-personnages.component';

describe('RecherchePersonnagesComponent', () => {
  let component: RecherchePersonnagesComponent;
  let fixture: ComponentFixture<RecherchePersonnagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchePersonnagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePersonnagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
