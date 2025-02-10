ItemEvents.tooltip( tooltip => {
  // ========================================== Texture Credits ==========================================
  tooltip.add(["kubejs:archers_glove"],Text.gray("Texture by Qwerty"))

  tooltip.add(["kubejs:inert_alloy_ingot",
               "kubejs:ring_travel",
               "kubejs:copper_pickaxe",
               "kubejs:copper_shovel",
               "kubejs:copper_axe",
               "kubejs:copper_hoe",
               "kubejs:copper_sword",
               "kubejs:silver_pickaxe",
               "kubejs:silver_shovel",
               "kubejs:silver_hoe",
               "kubejs:silver_axe",
               "kubejs:silver_sword",
               "kubejs:lead_sword",
               "kubejs:lead_pickaxe",
               "kubejs:lead_shovel",
               "kubejs:lead_hoe",
               "kubejs:lead_axe"],Text.gray("Texture by MalcomRiley"))

  tooltip.add(["kubejs:travelers_belt"],Text.gray("Texture by Futureazoo"))

  tooltip.add("kubejs:sapphire",Text.gray("Texture by JuniDeerGirl"))

  tooltip.add(["kubejs:arcane_alloy_ingot",
               "kubejs:neptun_ingot",
               "kubejs:phoenix_ingot",
               "kubejs:obsidian_ingot",
               "kubejs:copper_helmet",
               "kubejs:copper_chestplate",
               "kubejs:copper_leggings",
               "kubejs:copper_boots",
               "kubejs:silver_helmet",
               "kubejs:silver_chestplate",
               "kubejs:silver_leggings",
               "kubejs:silver_boots",
               "kubejs:lead_helmet",
               "kubejs:lead_chestplate",
               "kubejs:lead_leggings",
               "kubejs:lead_boots"],Text.gray("Texture by Farland1ng"))

  // ========================================== Villager Trading =========================================
  tooltip.add(['enigmaticlegacy:thicc_scroll',
               'irons_spellbooks:common_ink',
               'ars_nouveau:potion_flask',
               'explorerscompass:explorerscompass',
               'enigmaticlegacy:cosmic_cake',
               'enigmaticlegacy:mending_mixture'],Text.green('Available through villager trading'))
  
  ///=========================================== Offhand ===============================================
  tooltip.add(['kubejs:roadrunner_totem',
               "kubejs:tiger_totem",
               "kubejs:frog_totem",
               "kubejs:penguing_totem",
               "kubejs:wooden_crucifix",
               "kubejs:metal_crucifix",
               "kubejs:bejeweled_crucifix",
               "kubejs:penguin_totem",
               "kubejs:bear_totem"],Text.gray("Works only in the offhand"))

  //=========================================== Upgrading =============================================
  
  tooltip.add(["solonion:lunchbag",
               "solonion:lunchbox",
               "supplementaries:sack",
               "immersiveengineering:crate"],Text.red("Make sure to empty it before upgrading!"))
  //======================================= Smithing Templates ==============================

  tooltip.add("kubejs:botanist_upgrade_smithing_template", [Text.gray("Botanist Upgrade"), Text.green(""), Text.gray("Applies to:"), Text.blue(" Iron Equipment"), Text.gray("Ingredients:"), Text.blue(" Infused Iron Ingot")])
  tooltip.add("kubejs:skyseeker_upgrade_smithing_template", [Text.gray("Skyseeker Upgrade"), Text.green(""), Text.gray("Applies to:"), Text.blue(" Diamond Equipment"), Text.gray("Ingredients:"), Text.blue(" Ingot of the Skies")])
  tooltip.add("kubejs:gold_upgrade_smithing_template", [Text.gray("Gold Upgrade"), Text.green(""), Text.gray("Applies to:"), Text.blue(" Brass Equipment"), Text.gray("Ingredients:"), Text.blue(" Gold Upgrade Parts")])
  tooltip.add("kubejs:steel_upgrade_smithing_template", [Text.gray("Gold Upgrade"), Text.green(""), Text.gray("Applies to:"), Text.blue(" Netherite Equipment"), Text.gray("Ingredients:"), Text.blue(" Steel Upgrade Parts")])
  
  //======================================= Custom Tools ======================================
  
  tooltip.add(["kubejs:sharp_feather","kubejs:very_sharp_feather","kubejs:rainbow_feather"],Text.green("Right click obsidian to insta mine it!"))
  tooltip.add(["kubejs:very_sharp_feather","kubejs:rainbow_feather"],Text.red("Right click netherrack in the nether to cause explosion!"))
  tooltip.add(["kubejs:rainbow_feather"],Text.lightPurple("Right click bedrock on the nether roof to destroy it!"))
  tooltip.add("kubejs:the_terraformer",[Text.aqua("Turns basic blocks into compost"), Text.red("Only works above sea level")])
  tooltip.add("kubejs:broken_key",Text.gold("Right click a spawner to destroy it and obtain infused ruby!"))
  tooltip.add("kubejs:twilight_key",[Text.gold("Right click a spawner in Twilight Forest to destroy it and obtain rare items and supplies!")])
  tooltip.add("kubejs:overworld_key",Text.gold("Right click a spawner in Overworld to destroy it and obtain rare items and supplies!"))
  
  tooltip.add("immersiveengineering:glider",Text.green("Weaker Elytra"))
  tooltip.add("alexsmobs:tarantula_hawk_elytra",[Text.green("Stronger Elytra"), Text.blue("Accepts armor enchantments")])
  tooltip.add("minecraft:enchanted_book",[Text.green("Right click to learn the enchantment!"),Text.red("Can't be used in anvil to apply enchantments!")])
  tooltip.add("supplemenetaries:bellows",[Text.red("Speeds up furnaces"),Text.green("Speeds up copper aging"),Text.blue("Pushes entities away")])
  tooltip.add("elementalcraft:water_mill_wood_saw",Text.red("I can crash the game :("))
  tooltip.add("immersiveengineering:cushion",Text.green("Negates fall damage"))
  tooltip.add("quark:seed_pouch",Text.green("Shift-Right Click to plant in a 3x3!"))

  tooltip.add("ars_nouveau:experience_gem",Text.green("Grants 3 experience points!"))
  tooltip.add("ars_nouveau:greater_experience_gem",Text.green("Grants 12 experience points!"))
  tooltip.add("create:experience_nugget",Text.green("Grants 3 experience point!"))
  tooltip.add("create_sa:heap_of_experience",Text.green("Grants 12 experience points!"))
  tooltip.add("forbidden_arcanus:xpetrified_orb",[Text.green("Grants random amount of experience points!"),Text.blue("Crafting ingredient")])


  tooltip.add("kubejs:recipe_changed",Text.red("This recipe has been changed! Check EMI for more information!"))

  tooltip.add("aether:agility_cape",[Text.gold("When on back:"),Text.blue("+0.5 step height")])
  tooltip.add("aether:valkyrie_cape",[Text.gold("When on back:"),Text.blue("Grants slow falling")])
  tooltip.add("aether:swet_cape",[Text.gold("When on back:"),Text.blue("Allows riding Swets")])
  tooltip.add("aether:invisibility_cloak",[Text.gold("When on back:"),Text.blue("Makes you invisible")])

  tooltip.add("aether:shield_of_repulsion",[Text.gold("When on body:"),Text.blue("Repels enemy projectiles")])
  tooltip.add("ancient_aether:shield_of_remediation",[Text.gold("When on body:"),Text.blue("Grants immunity to Inebration")])
  tooltip.add("ancient_aether:shield_of_inebriation",[Text.gold("When on body:"),Text.blue("50% chance to inflict Inebration on attacker")])

  tooltip.add("aether:iron_bubble",[Text.gold("When worn as charm:"),Text.blue("Allows underwater breathing")])

  tooltip.add("deep_aether:spooky_ring",[Text.gold("When worn as ring:"),Text.blue("Grants extra damage depending on time of the night(most at midnight)")])
  tooltip.add("aether:zanite_ring",[Text.gold("When worn as ring:"),Text.blue("Allows you to mine faster"),Text.red("Does not last long!")])
  tooltip.add("aether:zanite_pendant",[Text.gold("When worn as ring:"),Text.blue("Allows you to mine faster"),Text.red("Does not last long!")])
  tooltip.add("deep_aether:skyjade_ring",[Text.gold("When worn as ring:"),Text.blue("Allows you to mine faster"),Text.red("Does not last long!")])
  tooltip.add("aether:ice_ring",[Text.gold("When worn as ring:"),Text.blue("Freezes water and lava beneath you")])

  tooltip.add("aether:sentry_boots",Text.blue("Grants immunity to fall damage"))
  tooltip.add(["deep_aether:skyjade_boots",
    "deep_aether:skyjade_chestplate",
    "deep_aether:skyjade_leggings",
    "deep_aether:skyjade_helmet"],Text.blue("Loses armor value as the durability goes down"))
    
  tooltip.add(["aether:zanite_pickaxe",
    "aether:zanite_axe",
    "aether:zanite_shovel",
    "aether:zanite_hoe",
    "aether:zanite_sword"],Text.blue("Gains effectiveness as the durability goes down"))

  tooltip.add(["deep_aether:skyjade_pickaxe",
    "deep_aether:skyjade_axe",
    "deep_aether:skyjade_shovel",
    "deep_aether:skyjade_sword"],Text.blue("Loses effectiveness as the durability goes down"))
  
 
  tooltip.add("aether:pig_slayer",Text.blue("Deals extra damage to pigs and piglike creatures!"))
  tooltip.add("deep_aether:afterburner",Text.blue("Hold right click to shoot a barrage of fireballs!"))

  tooltip.add("#druidic_quest:dimensional_tools",[Text.darkPurple("Tool made from materials outside of the main realm!"),Text.blue("Combine it with extradimensional eye"),Text.blue("in the crafting grid to apply telekinesis enchant!")])
  tooltip.add("enigmaticlegacy:extradimensional_eye",Text.blue("Combine it with dimensional tools in the crafting grid to apply telekinesis enchant!"))

  //=======================Arrows=======================

  tooltip.add("forbidden_arcanus:boom_arrow",[Text.gold("Explodes on impact with entities!"),Text.gold("Deals massive amounts of damage!")])
})