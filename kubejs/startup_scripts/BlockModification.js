BlockEvents.modification(event => {
    event.modify('minecraft:spawner', block => {
      block.destroySpeed = 20.0
    })
  })