import { GameObject } from '../interfaces'

function CollisionDetector(
  gameObject1: GameObject,
  gameObject2: GameObject
): boolean {
  return (
    gameObject1.position.x < gameObject2.position.x + gameObject2.width &&
    gameObject1.position.x + gameObject1.width > gameObject2.position.x &&
    gameObject1.position.y < gameObject2.position.y + gameObject2.height &&
    gameObject1.position.y + gameObject1.height > gameObject2.position.y
  )
}

export default CollisionDetector
