import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from '../components/home/home-main/home-main.component';
import { LargeHighlightGameComponent } from '../components/home/large-highlight-game/large-highlight-game.component';
import { SmallHighlightGameComponent } from '../components/home/small-highlight-game/small-highlight-game.component';
import { RouterModule, Routes } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

const homeRoutes: Routes = [
  { path: '', component: HomeMainComponent }
];

@NgModule({
  declarations: [
    HomeMainComponent,
    LargeHighlightGameComponent,
    SmallHighlightGameComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
