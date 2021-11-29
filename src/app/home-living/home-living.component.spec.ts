import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLivingComponent } from './home-living.component';

describe('HomeLivingComponent', () => {
  let component: HomeLivingComponent;
  let fixture: ComponentFixture<HomeLivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
