import { LargeHighlightGameModel } from "./large-highlight-game.model";
import { SmallHighlightGameModel } from "./small-highlight-game.model";

export interface HighlightGameModels {
    largeHighlightGames: LargeHighlightGameModel[];
    smallHighlightGames: SmallHighlightGameModel[];
}