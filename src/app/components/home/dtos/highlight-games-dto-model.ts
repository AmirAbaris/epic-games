import { LargeHighlightGameModel } from "../models/large-highlight-game.model";
import { SmallHighlightGameModel } from "../models/small-highlight-game.model";

export interface HighlightGamesDto {
    largeHighlightGames: LargeHighlightGameModel[];
    smallHighlightGames: SmallHighlightGameModel[];
    hasFeaturedGame: boolean;

}