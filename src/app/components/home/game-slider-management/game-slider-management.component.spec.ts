import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameSliderManagementComponent} from './game-slider-management.component';

describe('GameCardManagementComponent', () => {
    let component: GameSliderManagementComponent;
    let fixture: ComponentFixture<GameSliderManagementComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GameSliderManagementComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(GameSliderManagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
