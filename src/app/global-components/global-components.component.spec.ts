import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalComponentsComponent } from './global-components.component';

describe('GlobalComponentsComponent', () => {
  let component: GlobalComponentsComponent;
  let fixture: ComponentFixture<GlobalComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
