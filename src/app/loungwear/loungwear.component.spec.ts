import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungwearComponent } from './loungwear.component';

describe('LoungwearComponent', () => {
  let component: LoungwearComponent;
  let fixture: ComponentFixture<LoungwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoungwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoungwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
