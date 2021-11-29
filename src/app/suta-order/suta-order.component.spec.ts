import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutaOrderComponent } from './suta-order.component';

describe('SutaOrderComponent', () => {
  let component: SutaOrderComponent;
  let fixture: ComponentFixture<SutaOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutaOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SutaOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
