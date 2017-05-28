import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrePagesComponent } from './barre-pages.component';

describe('BarrePagesComponent', () => {
  let component: BarrePagesComponent;
  let fixture: ComponentFixture<BarrePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
