ItemEvents.tooltip( tooltip => {
 
  tooltip.add(['enigmaticlegacy:thicc_scroll', 'irons_spellbooks:common_ink','ars_nouveau:potion_flask','explorerscompass:explorerscompass','enigmaticlegacy:cosmic_cake','enigmaticlegacy:mending_mixture'],
    Text.green('Available through villager trading'))

  tooltip.add(['kubejs:roadrunner_totem',"kubejs:tiger_totem","kubejs:frog_totem","kubejs:penguing_totem","kubejs:wooden_crucifix","kubejs:metal_crucifix","kubejs:bejeweled_crucifix"],Text.gray("Works only in the offhand"))

  tooltip.add(["solonion:lunchbag","solonion:lunchbox","supplementaries:sack"],Text.red("Make sure to empty it before upgrading!"))
  
  tooltip.add("kubejs:botanist_upgrade_smithing_template", [Text.gray("Botanist Upgrade"), Text.green(""), Text.gray("Applies to:"), Text.blue(" Iron Equipment"), Text.gray("Ingredients:"), Text.blue(" Infused Iron Ingot")])
  tooltip.add("kubejs:skyseeker_upgrade_smithing_template", [Text.gray("Skyseeker Upgrade"), Text.green(""), Text.gray("Applies to:"), Text.blue(" Diamond Equipment"), Text.gray("Ingredients:"), Text.blue(" Ingot of the Skies")])
  tooltip.add("kubejs:gold_upgrade_smithing_template", [Text.gray("Gold Upgrade"), Text.green(""), Text.gray("Applies to:"), Text.blue(" Brass Equipment"), Text.gray("Ingredients:"), Text.blue(" Gold Upgrade Parts")])
  tooltip.add("kubejs:steel_upgrade_smithing_template", [Text.gray("Gold Upgrade"), Text.green(""), Text.gray("Applies to:"), Text.blue(" Netherite Equipment"), Text.gray("Ingredients:"), Text.blue(" Steel Upgrade Parts")])

  tooltip.add(["kubejs:sharp_feather","kubejs:very_sharp_feather","kubejs:rainbow_feather"],Text.green("Right click obsidian to insta mine it!"))
  tooltip.add(["kubejs:very_sharp_feather","kubejs:rainbow_feather"],Text.red("Right click netherrack in the nether to cause explosion!"))
  tooltip.add(["kubejs:rainbow_feather"],Text.lightPurple("Right click bedrock on the nether roof to destroy it!"))
  tooltip.add("immersiveengineering:glider",Text.green("Weaker Elytra"))
  tooltip.add("alexsmobs:tarantula_hawk_elytra",[Text.green("Stronger Elytra"), Text.blue("Accepts armor enchantments")])
  tooltip.add("kubejs:the_terraformer",[Text.aqua("Turns basic blocks into compost"), Text.red("Only works above sea level")])

  tooltip.add("elementalcraft:water_mill_wood_saw",Text.red("I can crash the game :("))
  tooltip.add("immersiveengineering:cushion",Text.green("Negates fall damage"))
  tooltip.add("quark:seed_pouch",Text.green("Shift-Right Click to plant in a 3x3!"))

  tooltip.add("ars_nouveau:experience_gem",Text.green("Grants 3 experience points!"))
  tooltip.add("ars_nouveau:greater_experience_gem",Text.green("Grants 12 experience points!"))
  tooltip.add("create:experience_nugget",Text.green("Grants 3 experience point!"))
  tooltip.add("create_sa:heap_of_experience",Text.green("Grants 12 experience points!"))
  tooltip.add("forbidden_arcanus:xpetrified_orb",[Text.green("Grants random amount of experience points!"),Text.blue("Crafting ingredient")])

  tooltip.add("kubejs:archers_glove",Text.gray("Texture by Qwerty"))
  tooltip.add(["kubejs:inert_alloy_ingot","kubejs:ring_travel"],Text.gray("Texture by MalcomRiley"))
  tooltip.add(["kubejs:travelers_belt"],Text.gray("Texture by Futureazoo"))
  tooltip.add(["kubejs:arcane_alloy_ingot","kubejs:neptun_ingot","kubejs:phoenix_ingot","kubejs:obsidian_ingot"],Text.gray("Texture by Farland1ng"))

  tooltip.add("kubejs:broken_key",Text.gold("Right click a spawner to destroy it and obtain infused ruby!"))
  tooltip.add("kubejs:twilight_key",[Text.gold("Right click a spawner in Twilight Forest to destroy it and obtain rare items and supplies!")])
  tooltip.add("kubejs:overworld_key",Text.gold("Right click a spawner in Overworld to destroy it and obtain rare items and supplies!"))

  tooltip.add("kubejs:recipe_changed",Text.red("This recipe has been changed! Check EMI for more information!"))

  

})