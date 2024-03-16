import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeGameItemComponent } from './free-game-item.component';

describe('FreeGameItemComponent', () => {
  let component: FreeGameItemComponent;
  let fixture: ComponentFixture<FreeGameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeGameItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeGameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
