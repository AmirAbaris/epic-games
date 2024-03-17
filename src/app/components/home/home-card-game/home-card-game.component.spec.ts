import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardGameComponent } from './home-card-game.component';

describe('HomeCardGameComponent', () => {
  let component: HomeCardGameComponent;
  let fixture: ComponentFixture<HomeCardGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
