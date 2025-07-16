ServerEvents.recipes(event=>{
    const mixer = event.recipes.create.mixing

    mixer("4x forbidden_arcanus:deorum_ingot",["4x wizards_reborn:arcane_gold_ingot","kubejs:lightning_essence"]).heated()

    mixer("enigmaticlegacy:earth_heart",["64x ars_nouveau:earth_essence","4x heart_of_the_sea","4x quark:diamond_heart","4x kubejs:advanced_alchemical_dust"]).heated()
})