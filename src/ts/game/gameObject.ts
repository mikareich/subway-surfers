import { Position } from '../interfaces'

export default class GameObject {
  public width: number = 0
  public height: number = 0
  public position: Position = { x: 0, y: 0 }

  constructor (x: number, y: number, width: number, height: number) {
    this.width = width
    this.height = height
    this.position.x = x
    this.position.y = y
  }

  update () {
    console.error('GameObject.update() is not implemented')
  }
}
