ServerEvents.recipes(event=>{
    event.custom(
        {
            "type": "wizards_reborn:arcanum_dust_transmutation",
            "from": {
                "tag": "wizards_reborn:arcane_wood_sapling_ingredient"
            },
            "to": {
                "item": "minecraft:grass_block"
            }
        }
    ).id("wizards_reborn:arcanum_dust_transmutation/arcane_wood_sapling")

    event.custom(
        {
            "type": "wizards_reborn:arcanum_dust_transmutation",
            "from": {
                "item": "minecraft:nether_gold_ore"
            },
            "to": {
                "item": "minecraft:nether_gold_ore"
            }
        }
    ).id("wizards_reborn:arcanum_dust_transmutation/nether_arcane_gold_ore")

    event.custom(
        {
            "type": "wizards_reborn:arcanum_dust_transmutation",
            "from": {
                "item": "minecraft:deepslate_gold_ore"
            },
            "to": {
                "item": "minecraft:deepslate_gold_ore"
            }
        }
    ).id("wizards_reborn:arcanum_dust_transmutation/deepslate_arcane_gold_ore")

    event.custom(
        {
            "type": "wizards_reborn:arcanum_dust_transmutation",
            "from": {
                "item": "minecraft:gold_ore"
            },
            "to": {
                "item": "minecraft:gold_ore"
            }
        }
    ).id("wizards_reborn:arcanum_dust_transmutation/arcane_gold_ore")

    event.smelting("wizards_reborn:arcane_gold_ore","#forge:ores/arcane_gold").id("wizards_reborn:smelting/arcane_gold_ingot")
    event.blasting("wizards_reborn:arcane_gold_ore","#forge:ores/arcane_gold").id("wizards_reborn:blasting/arcane_gold_ingot")

    event.smelting("wizards_reborn:raw_arcane_gold","wizards_reborn:arcane_gold_ore").id("wizards_reborn:smelting/arcane_gold_ingot_from_raw")
    event.blasting("wizards_reborn:raw_arcane_gold","wizards_reborn:arcane_gold_ore").id("wizards_reborn:blasting/arcane_gold_ingot_from_raw")

    event.recipes.ars_nouveau.enchanting_apparatus("ars_nouveau:dominion_wand","kubejs:recipe_changed","kubejs:recipe_changed").id("ars_nouveau:dominion_wand")
    
})