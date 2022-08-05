import { Position } from '../interfaces'
import { RenderData } from './Renderer'

class RenderObject {
  public width: number

  public height: number

  public position: Position

  public backgroundColor: string

  constructor(
    width: number,
    height: number,
    position: Position,
    backgroundColor: string
  ) {
    this.width = width
    this.height = height
    this.position = position
    this.backgroundColor = backgroundColor
  }

  /** Returns relevant informations for the renderer */
  get renderData(): RenderData {
    return {
      width: this.width,
      height: this.height,
      position: this.position,
      backgroundColor: this.backgroundColor,
    }
  }
}

export default RenderObject
