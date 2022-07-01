import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMaestrosComponent } from './cat-maestros.component';

describe('CatMaestrosComponent', () => {
  let component: CatMaestrosComponent;
  let fixture: ComponentFixture<CatMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
