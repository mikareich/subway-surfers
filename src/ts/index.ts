import { GAME_WIDTH } from "./constants";

const gameScreen = <HTMLCanvasElement>document.getElementById("gameScreen");
gameScreen.width = GAME_WIDTH;
gameScreen.height = GAME_HEIGHT;

export {};
