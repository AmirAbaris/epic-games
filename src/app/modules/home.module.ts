import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivateWishlistDirective } from '../components/home/directives/activate-wishlist.directive';
import { PriceLabelComponent } from '../components/home/price-label/price-label.component';
import { CategoryManagementComponent } from '../components/home/category-management/category-management.component';
import { CategoryListComponent } from '../components/home/category-list/category-list.component';
import { CategoryItemComponent } from '../components/home/category-item/category-item.component';
import { TranslateModule } from "@ngx-translate/core";
import { FreeGameItemComponent } from "../components/home/free-game-item/free-game-item.component";
import { FreeGameListComponent } from '../components/home/free-game-list/free-game-list.component';
import { HighlightPreviewItemComponent } from '../components/home/highlight-preview-item/highlight-preview-item.component';
import { HomeCardGameComponent } from '../components/home/home-card-game/home-card-game.component';
import { HomeCardActionComponent } from '../components/home/home-card-action/home-card-action.component';
import { CardListComponent } from '../components/home/card-list/card-list.component';
import { IsHomeCardActionPipe } from '../components/home/pipes/is-home-card-action.pipe';
import { HighlightSmallItemComponent } from '../components/home/highlight-small-item/highlight-small-item.component';
import { PreviewWishListButtonComponent } from '../components/home/preview-wish-list-button/preview-wish-list-button.component';
import { HighlightMainComponent } from '../components/home/highlight-main/highlight-main.component';
import { IsInWishlistPipe } from '../components/home/pipes/is-in-wishlist.pipe';
import { GameRepository } from '../repositories/game.repository';
import { GameService } from '../services/game.service';
import { WishListIconComponent } from '../components/home/wish-list-icon/wish-list-icon.component';
import { ScaleOnActivateDirective } from '../components/home/directives/scale-on-activate.directive';
import { UserService } from '../services/user.service';
import { HighlightMainSkeletonComponent } from '../components/home/highlight-main-skeleton/highlight-main-skeleton.component';
import { GameSliderItemSkeletonComponent } from '../components/home/game-slider-item-skeleton/game-slider-item-skeleton.component';
import { CardListSkeletonComponent } from '../components/home/card-list-skeleton/card-list-skeleton.component';
import { FreeItemSkeletonComponent } from '../components/home/free-item-skeleton/free-item-skeleton.component';
import { CategoryManagementSkeletonComponent } from '../components/home/category-management-skeleton/category-management-skeleton.component';
import { TextHoverIndicatorDirective } from '../directives/text-hover-indicator.directive';

const homeRoutes: Routes = [{ path: '', component: HomeMainComponent }];

@NgModule({
  declarations: [
    HomeMainComponent,
    GameSliderItemComponent,
    GameSliderManagementComponent,
    CategoryManagementComponent,
    CategoryListComponent,
    CategoryItemComponent,
    WishListIconComponent,
    FreeGameItemComponent,
    HomeCardComponent,
    FreeGameListComponent,
    HighlightPreviewItemComponent,
    HomeCardGameComponent,
    HomeCardActionComponent,
    PriceLabelComponent,
    CardListComponent,
    IsHomeCardActionPipe,
    ActivateWishlistDirective,
    HighlightSmallItemComponent,
    PreviewWishListButtonComponent,
    HighlightMainComponent,
    HighlightMainSkeletonComponent,
    GameSliderItemSkeletonComponent,
    CardListSkeletonComponent,
    FreeItemSkeletonComponent,
    CategoryManagementSkeletonComponent,
    ScaleOnActivateDirective,
    ActivateWishlistDirective,
    TextHoverIndicatorDirective,
    IsInWishlistPipe
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
  ],
  providers: [GameRepository, GameService, UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {
}
