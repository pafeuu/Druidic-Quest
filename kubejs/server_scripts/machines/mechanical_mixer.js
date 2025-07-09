ServerEvents.recipes(event=>{
    const mixer = event.recipes.create.mixing

    mixer("4x forbidden_arcanus:deorum_ingot",["4x wizards_reborn:arcane_gold_ingot","kubejs:lightning_essence"]).heated()
})