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
        "#forge:ingots/gold",
        "#forge:ingots/gold",
        "red_wool",
        "wizards_reborn:arcane_wood_planks",
        "red_wool",
        "wizards_reborn:arcane_wood_planks"],
        "birch_sapling").id("wizards_reborn:shaped/arcane_workbench")
   
   event.recipes.naturesaura.tree_ritual("ars_nouveau:starbuncle_charm",
        ["ars_nouveau:starbuncle_shards",
        "woodenhopper:wooden_hopper",
        "immersiveengineering:conveyor_basic",
        "immersiveengineering:conveyor_basic",
        "#forge:ingots/gold",
        "#forge:ingots/gold",
        "#forge:ingots/gold",
        "#forge:ingots/gold"],
        "ars_nouveau:green_archwood_sapling").id("ars_nouveau:starbuncle_charm")
})