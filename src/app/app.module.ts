import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home.module';
import { HomeMainComponent } from './components/home/home-main/home-main.component';
import { HighlightGameCardComponent } from './components/home/highlight-game-card/highlight-game-card.component';
import { MainHighlightGameComponent } from './components/home/main-highlight-game/main-highlight-game.component';
import { LargeHighlightGameComponent } from './components/home/large-highlight-game/large-highlight-game.component';
import { SmallHighlightGameComponent } from './components/home/small-highlight-game/small-highlight-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    HighlightGameCardComponent,
    MainHighlightGameComponent,
    LargeHighlightGameComponent,
    SmallHighlightGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
