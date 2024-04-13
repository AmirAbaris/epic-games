import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageColorToneComponent } from './image-color-tone.component';

describe('ImageColorToneComponent', () => {
  let component: ImageColorToneComponent;
  let fixture: ComponentFixture<ImageColorToneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageColorToneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageColorToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
