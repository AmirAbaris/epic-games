import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from '../components/home/home-main/home-main.component';
import { LargeHighlightGameComponent } from '../components/home/large-highlight-game/large-highlight-game.component';
import { SmallHighlightGameComponent } from '../components/home/small-highlight-game/small-highlight-game.component';
import { RouterModule, Routes } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HighlightGameCardComponent } from '../components/home/highlight-game-card/highlight-game-card.component';
import { GameCardManagementComponent } from '../components/home/game-card-management/game-card-management.component';
import { GameCardComponent } from '../components/home/game-card/game-card.component';
import { MatCardModule } from '@angular/material/card';
import { FreeGameCardManagementComponent } from '../components/home/free-game-card-management/free-game-card-management.component';
import { FreeGameCardComponent } from '../components/home/free-game-card/free-game-card.component';
import { GameService } from '../services/game.service';
import { FortniteCardComponent } from '../components/home/fortnite-card/fortnite-card.component';
import { FortniteCardManagementComponent } from '../components/home/fortnite-card-management/fortnite-card-management.component';
import { GameItemListComponent } from '../components/home/game-item-list/game-item-list.component';
import { GameListManagementComponent } from '../components/home/game-list-management/game-list-management.component';
import { GameListComponent } from '../components/home/game-list/game-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { ImageComponent } from '../components/image/image/image.component';
import { LargeHighlightGameMobileComponent } from '../components/home/large-highlight-game-mobile/large-highlight-game-mobile.component';
import { GameBannerActionComponent } from '../components/home/game-banner-action/game-banner-action.component';
import { GameBannerManagementComponent } from '../components/home/game-banner-management/game-banner-management.component';
import { GameBannerComponent } from '../components/home/game-banner/game-banner.component';

const homeRoutes: Routes = [
  { path: '', component: HomeMainComponent }
];

@NgModule({
  declarations: [
    HomeMainComponent,
    LargeHighlightGameComponent,
    SmallHighlightGameComponent,
    HighlightGameCardComponent,
    GameCardComponent,
    GameCardManagementComponent,
    FreeGameCardManagementComponent,
    FreeGameCardComponent,
    FortniteCardManagementComponent,
    FortniteCardComponent,
    GameListManagementComponent,
    GameListComponent,
    GameItemListComponent,
    LargeHighlightGameMobileComponent,
    GameBannerManagementComponent,
    GameBannerComponent,
    GameBannerActionComponent
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
    RouterModule.forChild(homeRoutes)
  ],
  providers: [GameService]
})
export class HomeModule { }
