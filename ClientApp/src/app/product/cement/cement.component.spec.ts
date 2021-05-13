import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CementComponent } from './cement.component';

describe('CementComponent', () => {
  let component: CementComponent;
  let fixture: ComponentFixture<CementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
