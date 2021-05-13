import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangoteComponent } from './dangote.component';

describe('DangoteComponent', () => {
  let component: DangoteComponent;
  let fixture: ComponentFixture<DangoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
