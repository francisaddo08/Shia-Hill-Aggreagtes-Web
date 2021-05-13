import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhacemSuperRapidComponent } from './ghacem-super-rapid.component';

describe('GhacemSuperRapidComponent', () => {
  let component: GhacemSuperRapidComponent;
  let fixture: ComponentFixture<GhacemSuperRapidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhacemSuperRapidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhacemSuperRapidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
