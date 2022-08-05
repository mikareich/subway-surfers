import Renderer, { RenderObject } from "./Renderer";

const gameScreen = <HTMLCanvasElement>document.getElementById("gameScreen");

const renderer = new Renderer(gameScreen);

const objectA = new RenderObject(100, 100, { x: 100, y: 100 }, "red");
renderer.renderObjects.push(objectA);

renderer.renderAll();
