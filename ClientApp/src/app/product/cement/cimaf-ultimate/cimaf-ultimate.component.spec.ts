import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimafUltimateComponent } from './cimaf-ultimate.component';

describe('CimafUltimateComponent', () => {
  let component: CimafUltimateComponent;
  let fixture: ComponentFixture<CimafUltimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimafUltimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimafUltimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
