import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeMainComponent } from '../components/home/home-main/home-main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {
  GameSliderManagementComponent
} from '../components/home/game-slider-management/game-slider-management.component';
import { GameSliderItemComponent } from '../components/home/game-slider-item/game-slider-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { HomeCardComponent } from '../components/home/home-card/home-card.component';
import { WishListButtonComponent } from '../components/home/wish-list-button/wish-list-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivateWishlistDirective } from '../directives/activate-wishlist.directive';
import { PriceLabelComponent } from '../components/home/price-label/price-label.component';
import { CategoryManagementComponent } from '../components/home/category-management/category-management.component';
import { CategoryListComponent } from '../components/home/category-list/category-list.component';
import { CategoryItemComponent } from '../components/home/category-item/category-item.component';
import { TranslateModule } from "@ngx-translate/core";
import { FreeGameItemComponent } from "../components/home/free-game-item/free-game-item.component";
import { FreeGameListComponent } from '../components/home/free-game-list/free-game-list.component';
import { HomeCardGameComponent } from '../components/home/home-card-game/home-card-game.component';
import { HomeCardActionComponent } from '../components/home/home-card-action/home-card-action.component';
import { HighlightSmallItemComponent } from '../components/home/highlight-small-item/highlight-small-item.component';
import { ScaleOnActivateDirective } from '../directives/scale-on-activate.directive';

const homeRoutes: Routes = [{ path: '', component: HomeMainComponent }];

@NgModule({
  declarations: [
    HomeMainComponent,
    GameSliderItemComponent,
    GameSliderManagementComponent,
    CategoryManagementComponent,
    CategoryListComponent,
    CategoryItemComponent,
    WishListButtonComponent,
    FreeGameItemComponent,
    HomeCardComponent,
    FreeGameListComponent,
    HomeCardGameComponent,
    HomeCardActionComponent,
    PriceLabelComponent,
    HighlightSmallItemComponent,
    ActivateWishlistDirective,
    ScaleOnActivateDirective
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    RouterModule.forChild(homeRoutes),
    TranslateModule
  ]
})
export class HomeModule {
}
