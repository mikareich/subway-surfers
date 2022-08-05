interface Event {
  keys: string[]
  callback: (...args: any[]) => void
}

type EventMap = Event[]

class KeyboardHandler {
  private events: Event[] = []

  /** Listen for keydown events */
  constructor() {
    window.addEventListener('keydown', (e) => this.handleEvent(e))
  }

  private handleEvent({ key }: KeyboardEvent) {
    this.events.forEach((event) => {
      if (event.keys.includes(key)) {
        event.callback()
      }
    })
  }

  /**
   * Initializes array of event listeners
   * @param eventMap All the events to listen for
   */
  initMap(eventMap: EventMap) {
    eventMap.forEach((event) => {
      this.on(event.keys, event.callback)
    })
  }

  /** Listen on array of keys */
  on(keys: Event['keys'], callback: Event['callback']) {
    this.events.push({ keys, callback })
  }
}

export default KeyboardHandler
