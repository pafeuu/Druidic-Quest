ServerEvents.recipes(event=>{

    /*Ingredients order
            1
         5     7
      3           4
         6     8
            2
    */
    event.recipes.naturesaura.tree_ritual("wizards_reborn:arcane_workbench",
        ["crafting_table",
        "wizards_reborn:arcane_wood_planks",
        "naturesaura:gold_leaf",
        "naturesaura:gold_leaf",
        "red_wool",
        "wizards_reborn:arcane_wood_planks",
        "red_wool",
        "wizards_reborn:arcane_wood_planks"],
        "birch_sapling").id("wizards_reborn:shaped/arcane_workbench")
   
   
   event.recipes.ars_nouveau.enchanting_apparatus(['kubejs:recipe_changed'],'kubejs:recipe_changed',"ars_nouveau:starbuncle_charm").id("ars_nouveau:starbuncle_charm")

   event.recipes.naturesaura.tree_ritual("ars_nouveau:starbuncle_charm",
        ["ars_nouveau:starbuncle_shards",
        "woodenhopper:wooden_hopper",
        "immersiveengineering:conveyor_basic",
        "immersiveengineering:conveyor_basic",
        "#forge:ingots/gold",
        "#forge:ingots/gold",
        "#forge:ingots/gold",
        "#forge:ingots/gold"],
        "ars_nouveau:green_archwood_sapling")
   
   
   event.recipes.ars_nouveau.enchanting_apparatus(['kubejs:recipe_changed'],'kubejs:recipe_changed',"ars_nouveau:whirlisprig_charm").id("ars_nouveau:whirlisprig_charm")
   
   event.recipes.naturesaura.tree_ritual("ars_nouveau:whirlisprig_charm",
        ["ars_nouveau:whirlisprig_shards",
        "enigmaticlegacy:infinimeal",
        "kubejs:life_essence",
        "kubejs:life_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence"],
        "ars_nouveau:green_archwood_sapling")

   event.recipes.ars_nouveau.enchanting_apparatus(['kubejs:recipe_changed'],'kubejs:recipe_changed',"ars_nouveau:drygmy_charm").id("ars_nouveau:drygmy_charm")

   event.recipes.naturesaura.tree_ritual("ars_nouveau:drygmy_charm",
        ["ars_nouveau:drygmy_shard",
        "golden_sword",
        "golden_sword",
        "golden_sword",
        "kubejs:death_essence",
        "kubejs:death_essence",
        "kubejs:death_essence",
        "kubejs:death_essence"],
        "ars_nouveau:green_archwood_sapling")
     
   event.recipes.ars_nouveau.enchanting_apparatus(['kubejs:recipe_changed'],'kubejs:recipe_changed',"ars_nouveau:wixie_charm").id("ars_nouveau:wixie_charm")
   event.recipes.naturesaura.tree_ritual("ars_nouveau:wixie_charm",
        ["ars_nouveau:wixie_shards",
        "naturesaura:auto_crafter",
        "woodenhopper:wooden_hopper",
        "woodenhopper:wooden_hopper",
        "kubejs:infused_amethyst",
        "minecraft:amethyst_shard",
        "kubejs:infused_amethyst",
        "minecraft:amethyst_shard"],
        "ars_nouveau:purple_archwood_sapling")

     event.remove({output:"ars_nouveau:enchanting_apparatus"})
     event.recipes.naturesaura.tree_ritual("ars_nouveau:enchanting_apparatus",
          ["quark:diamond_heart",
          "#forge:plates/diamond",
          "#forge:gears/gold",
          "#forge:gears/gold",
          "#forge:ingots/source_alloy",
          "#forge:ingots/source_alloy",
          "#forge:ingots/source_alloy",
          "#forge:ingots/source_alloy"],
          "ars_nouveau:blue_archwood_sapling"
     )
})