import { GAME_WIDTH, GAME_HEIGHT } from '../constants'
import { Position } from '../interfaces'
import RenderObject from './RenderObject'

export interface RenderData {
  width: number
  height: number
  position: Position
  backgroundColor: string
}

class Renderer {
  /**
   * Render a single object to the game screen
   * @param renderData Render information for the object to be rendered
   * @param context The context to render the object to
   */
  static render(renderData: RenderData, context: CanvasRenderingContext2D) {
    const { width, height, position, backgroundColor } = renderData
    const { x, y } = position

    context.fillStyle = backgroundColor
    context.fillRect(x, y, width, height)
  }

  public readonly gameScreen: HTMLCanvasElement

  public readonly context: CanvasRenderingContext2D

  public readonly renderObjects: RenderObject[] = []

  constructor(gameScreen: HTMLCanvasElement) {
    this.gameScreen = gameScreen
    this.context = gameScreen.getContext('2d')!

    // udpate the game screen size
    this.gameScreen.width = GAME_WIDTH
    this.gameScreen.height = GAME_HEIGHT
  }

  renderAll() {
    this.renderObjects.forEach((renderObject) => {
      Renderer.render(renderObject.renderData, this.context)
    })
  }
}

export default Renderer
