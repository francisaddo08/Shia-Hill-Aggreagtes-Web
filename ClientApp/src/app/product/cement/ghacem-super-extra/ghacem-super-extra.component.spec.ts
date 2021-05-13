import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhacemSuperExtraComponent } from './ghacem-super-extra.component';

describe('GhacemSuperExtraComponent', () => {
  let component: GhacemSuperExtraComponent;
  let fixture: ComponentFixture<GhacemSuperExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhacemSuperExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhacemSuperExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
