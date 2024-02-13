import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from '../components/home/home-main/home-main.component';
import { LargeHighlightGameComponent } from '../components/home/large-highlight-game/large-highlight-game.component';
import { SmallHighlightGameComponent } from '../components/home/small-highlight-game/small-highlight-game.component';
import { RouterModule, Routes } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { MockGameService } from '../services/mock-game.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HighlightGameCardComponent } from '../components/home/highlight-game-card/highlight-game-card.component';
import { GameCardManagementComponent } from '../components/home/game-card-management/game-card-management.component';
import { GameCardComponent } from '../components/home/game-card/game-card.component';
import { MatCardModule } from '@angular/material/card';
import { FreeGameCardManagementComponent } from '../components/home/free-game-card-management/free-game-card-management.component';
import { FreeGameCardComponent } from '../components/home/free-game-card/free-game-card.component';

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
    FreeGameCardComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild(homeRoutes)
  ],
  providers: [MockGameService]
})
export class HomeModule { }
