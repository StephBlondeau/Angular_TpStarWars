import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreHeaderComponent } from './barre-header.component';

describe('BarreHeaderComponent', () => {
  let component: BarreHeaderComponent;
  let fixture: ComponentFixture<BarreHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
