import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGeneralComponent } from './cat-general.component';

describe('CatGeneralComponent', () => {
  let component: CatGeneralComponent;
  let fixture: ComponentFixture<CatGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
