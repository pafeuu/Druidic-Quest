JEIEvents.removeRecipes(event => {
    event.remove('ars_nouveau:imbuement_chamber')

    event.remove('minecraft:shaped', 'ars_nouveau:imbuement_chamber')

    event.remove('minecraft:shapeless', 'ars_nouveau:imbuement_chamber')
  })