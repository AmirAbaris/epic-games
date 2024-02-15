import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteCardComponent } from './fortnite-card.component';

describe('FortniteCardComponent', () => {
  let component: FortniteCardComponent;
  let fixture: ComponentFixture<FortniteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FortniteCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortniteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
