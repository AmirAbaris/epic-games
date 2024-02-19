import { LargeHighlightGameModel } from "./large-highlight-game.model";
import { SmallHighlightGameModel } from "./small-highlight-game.model";

export interface HighlightGamesModel {
    largeHighlightGames: LargeHighlightGameModel[];
    smallHighlightGames: SmallHighlightGameModel[];
}