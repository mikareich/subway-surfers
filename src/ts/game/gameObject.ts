interface position {
  x: number
  y: number
}

export default class GameObject {
  public position: position = { x: 0, y: 0 }
  public width: number = 0
  public height: number = 0

  constructor (x: number, y: number, width: number, height: number) {
    this.width = width
    this.height = height
    this.position.x = x
    this.position.y = y
  }

  update(){
    console.error("GameObject.update() is not implemented");
  }
}
