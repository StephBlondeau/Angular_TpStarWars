import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BarreErreurComponent } from './barre-erreur.component';

describe('BarreErreurComponent', () => {
  let component: BarreErreurComponent;
  let fixture: ComponentFixture<BarreErreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreErreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
