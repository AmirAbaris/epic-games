import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeGameListComponent } from './free-game-list.component';

describe('FreeGameListComponent', () => {
  let component: FreeGameListComponent;
  let fixture: ComponentFixture<FreeGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeGameListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
