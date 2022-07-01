import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinajeComponent } from './linaje.component';

describe('LinajeComponent', () => {
  let component: LinajeComponent;
  let fixture: ComponentFixture<LinajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
