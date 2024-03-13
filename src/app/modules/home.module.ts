import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeMainComponent} from '../components/home/home-main/home-main.component';
import {LargeHighlightGameComponent} from '../components/home/large-highlight-game/large-highlight-game.component';
import {SmallHighlightGameComponent} from '../components/home/small-highlight-game/small-highlight-game.component';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {HighlightGameCardComponent} from '../components/home/highlight-game-card/highlight-game-card.component';
import {
  GameSliderManagementComponent
} from '../components/home/game-slider-management/game-slider-management.component';
import {GameSliderItemComponent} from '../components/home/game-slider-item/game-slider-item.component';
import {MatCardModule} from '@angular/material/card';
import {
  FreeGameCardManagementComponent
} from '../components/home/free-game-card-management/free-game-card-management.component';
import {FreeGameCardComponent} from '../components/home/free-game-card/free-game-card.component';
import {GameService} from '../services/game.service';
import {FortniteCardComponent} from '../components/home/fortnite-card/fortnite-card.component';
import {
  FortniteCardManagementComponent
} from '../components/home/fortnite-card-management/fortnite-card-management.component';
import {MatDividerModule} from '@angular/material/divider';
import {ImageComponent} from '../components/image/image/image.component';
import {
  LargeHighlightGameMobileComponent
} from '../components/home/large-highlight-game-mobile/large-highlight-game-mobile.component';
import {GameBannerActionComponent} from '../components/home/game-banner-action/game-banner-action.component';
import {
  GameBannerManagementComponent
} from '../components/home/game-banner-management/game-banner-management.component';
import {GameBannerComponent} from '../components/home/game-banner/game-banner.component';
import {WishListButtonComponent} from '../components/home/wish-list-button/wish-list-button.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ActivateWishlistDirective} from '../directives/activate-wishlist.directive';
import {PriceLabelComponent} from '../components/home/price-label/price-label.component';
import {CategoryManagementComponent} from '../components/home/category-management/category-management.component';
import {CategoryListComponent} from '../components/home/category-list/category-list.component';
import {CategoryItemComponent} from '../components/home/category-item/category-item.component';
import {TranslateModule} from "@ngx-translate/core";

const homeRoutes: Routes = [{path: '', component: HomeMainComponent}];

@NgModule({
  declarations: [
    HomeMainComponent,
    LargeHighlightGameComponent,
    SmallHighlightGameComponent,
    HighlightGameCardComponent,
    GameSliderItemComponent,
    GameSliderManagementComponent,
    FreeGameCardManagementComponent,
    FreeGameCardComponent,
    FortniteCardManagementComponent,
    FortniteCardComponent,
    LargeHighlightGameMobileComponent,
    GameBannerManagementComponent,
    GameBannerComponent,
    GameBannerActionComponent,
    CategoryManagementComponent,
    CategoryListComponent,
    CategoryItemComponent,
    WishListButtonComponent,
    ActivateWishlistDirective,
    PriceLabelComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatButtonModule,
    ImageComponent,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    RouterModule.forChild(homeRoutes),
    TranslateModule
  ],
  providers: [GameService]
})
export class HomeModule {
}
