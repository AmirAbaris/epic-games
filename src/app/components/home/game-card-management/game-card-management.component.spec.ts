import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardManagementComponent } from './game-card-management.component';

describe('GameCardManagementComponent', () => {
  let component: GameCardManagementComponent;
  let fixture: ComponentFixture<GameCardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCardManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameCardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
