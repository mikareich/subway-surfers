import { FPS } from './constants'
import Renderer, { RenderObject } from './Renderer'

const gameScreen = <HTMLCanvasElement>document.getElementById('gameScreen')

const renderer = new Renderer(gameScreen)

let lastTimestamp = 0
function gameLoop(currentTimestamp: number) {
  const deltaTime = currentTimestamp - lastTimestamp

  if (deltaTime > 1000 / FPS) {
    console.log('hey')
    lastTimestamp = currentTimestamp
    renderer.renderAll()
  }
  requestAnimationFrame(gameLoop)
}
requestAnimationFrame(gameLoop)
