import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimafClassicComponent } from './cimaf-classic.component';

describe('CimafClassicComponent', () => {
  let component: CimafClassicComponent;
  let fixture: ComponentFixture<CimafClassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimafClassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimafClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
