import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardActionComponent } from './home-card-action.component';

describe('HomeCardActionComponent', () => {
  let component: HomeCardActionComponent;
  let fixture: ComponentFixture<HomeCardActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
