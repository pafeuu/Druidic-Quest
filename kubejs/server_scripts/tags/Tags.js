 priority: 0

ServerEvents.tags('item', event => {

  event.removeAllTagsFrom([global.nukelist])

  event.add("c:hidden_from_recipe_viewers",[global.nukelist])
  

  let seed = ["vintagedelight:oat_seeds","vintagedelight:ghost_pepper_seeds"]



  let flower = ['minecraft:sunflower','minecraft:dandelion','naturesaura:aura_bloom','bloomingnature:wild_sunflower',/*'regions_unexplored:yellow_snowbelle',*/'bloomingnature:freesia_yellow','bloomingnature:golden_rod'/*,'regions_unexplored:alpha_dandelion'*/]

  /*let wiring = ['minecraft:repeater', 'minecraft:calibrated_sculk_sensor', 'minecraft:tripwire_hook', 'minecraft:daylight_detector', 'minecraft:string', 'minecraft:activator_rail', 'minecraft:detector_rail', 'minecraft:powered_rail', 'minecraft:rail', 
                'minecraft:redstone', 'minecraft:piston', 'minecraft:composter', 'create:redstone_link', 'minecraft:sticky_piston', 'minecraft:dispenser', 'minecraft:redstone_lamp', 'minecraft:redstone_torch', 'minecraft:dropper',
                 'minecraft:hopper', 'ars_nouveau:redstone_relay', 'minecraft:lever', 'minecraft:target', 'quark:redstone_randomizer', 'minecraft:comparator','create:controller_rail', 'create:large_cogwheel', 'create:shaft', 'create:cogwheel', 'create:gearbox', 
                 'create:vertical_gearbox', 'create:clutch', 'create:gearshift', 'create:encased_chain_drive', 'create:adjustable_chain_gearshift', 'create:belt_connector', 'create:fluid_pipe', 'create:mechanical_pump', 'create:smart_fluid_pipe', 'create:fluid_valve', 
                 'create:piston_extension_pole', 'create:gantry_shaft', 'create:analog_lever', 'create:pulse_repeater', 'create:pulse_extender', 'create:powered_latch', 'create:powered_toggle_latch', 'create:track','supplementaries:hourglass', 'supplementaries:crank', 
                 'supplementaries:wind_vane', 'supplementaries:cog_block', 'supplementaries:turn_table', 'supplementaries:spring_launcher', 'supplementaries:faucet']*/
  
  let froglights = ["minecraft:ochre_froglight","minecraft:verdant_froglight","minecraft:pearlescent_froglight",
                    "swampier_swamps:white_froglight","swampier_swamps:orange_froglight","swampier_swamps:magenta_froglight",
                    "swampier_swamps:light_blue_froglight","swampier_swamps:lime_froglight","swampier_swamps:pink_froglight",
                    "swampier_swamps:gray_froglight","swampier_swamps:light_gray_froglight","swampier_swamps:cyan_froglight",
                    "swampier_swamps:blue_froglight","swampier_swamps:brown_froglight","swampier_swamps:red_froglight",
                    "swampier_swamps:black_froglight"]

  let SourceLinks = ['ars_nouveau:alchemical_sourcelink','ars_nouveau:vitalic_sourcelink','ars_nouveau:mycelial_sourcelink','ars_nouveau:volcanic_sourcelink','ars_nouveau:agronomic_sourcelink']
  
  event.add("dq:tier0componenets", 
    ['minecraft:string',
      'minecraft:feather',
      'farmersdelight:canvas',
      'farmersdelight:straw'])

  let Tier1Component = []
  let Tier2Component = []
  let Tier3Component = []

  let Tier0Machine = []
  let Tier1Machine = []
  let Tier2Machine = []
  let Tier3Machine = []

  let Tier0Tool = []
  let Tier1Tool = []
  let Tier2Tool = []
  let Tier3Tool = ["elementalcraft:chisel"]

  event.add("dq:tier0/armor",[
      'thermal:beekeeper_helmet',
      'irons_spellbooks:wandering_magician_boots', 
      'irons_spellbooks:wandering_magician_helmet',
      'thermal:beekeeper_chestplate',
      'irons_spellbooks:wandering_magician_leggings',
      'thermal:beekeeper_leggings',
      'thermal:beekeeper_boots',
      'irons_spellbooks:wandering_magician_chestplate',
      'minecraft:leather_helmet',
      'minecraft:leather_chestplate',
      'minecraft:leather_leggings',
      'minecraft:leather_boots',
      'forbidden_arcanus:mortem_helmet',
      'forbidden_arcanus:mortem_chestplate',
      'forbidden_arcanus:mortem_leggings',
      'forbidden_arcanus:mortem_boots',
      'alexsmobs:crocodile_chestplate',
      'alexsmobs:rocky_chestplate',
      'alexsmobs:unsettling_kimono',
      'alexsmobs:roadrunner_boots',
      'alexsmobs:flying_fish_boots',
      'alexsmobs:centipede_leggings',
      'alexsmobs:emu_leggings',
      'alexsmobs:fedora',
      'alexsmobs:sombrero'])
  
  event.add("dq:tier1/armor",[
    'irons_spellbooks:pumpkin_helmet',
    'irons_spellbooks:pumpkin_chestplate',
    'irons_spellbooks:pumpkin_leggings',
    'irons_spellbooks:pumpkin_boots',
    'kubejs:lead_helmet',
    'kubejs:lead_chestplate',
    'kubejs:lead_leggings',
    'kubejs:lead_boots',
    'kubejs:silver_helmet',
    'kubejs:silver_chestplate',
    'kubejs:silver_leggings',
    'kubejs:silver_boots',
    'immersiveengineering:armor_faraday_helmet',
    'immersiveengineering:armor_faraday_chestplate',
    'immersiveengineering:armor_faraday_leggings',
    'immersiveengineering:armor_faraday_boots',
    'minecraft:chainmail_helmet',
    'minecraft:chainmail_chestplate',
    'minecraft:chainmail_leggings',
    'minecraft:chainmail_boots',
    'kubejs:copper_boots',
    'kubejs:copper_leggings',
    'kubejs:copper_chestplate',
    'kubejs:copper_helmet',
    'minecraft:iron_helmet',
    'minecraft:iron_chestplate',
    'minecraft:iron_leggings',
    'minecraft:iron_boots',
    'twilightforest:ironwood_helmet',
    'twilightforest:ironwood_chestplate',
    'twilightforest:ironwood_leggings',
    'twilightforest:ironwood_boots',
    'twilightforest:naga_chestplate',
    'twilightforest:naga_leggings',
    'thermal:diving_helmet',
    'thermal:diving_chestplate',
    'thermal:diving_leggings',
    'thermal:diving_boots',
    'ars_nouveau:sorcerer_hood',
    'ars_nouveau:sorcerer_robes',
    'ars_nouveau:sorcerer_leggings',
    'ars_nouveau:sorcerer_boots'])

  event.add("dq:tier2/armor",[
    'deep_aether:skyjade_boots',
    'deep_aether:skyjade_leggings',
    'deep_aether:skyjade_chestplate',
    'deep_aether:skyjade_helmet',
    'aether:zanite_boots',
    'aether:zanite_leggings',
    'aether:zanite_chestplate',
    'aether:zanite_helmet',
    'minecraft:diamond_helmet',
    'minecraft:diamond_boots',
    'minecraft:diamond_leggings',
    'minecraft:diamond_chestplate',
    'minecraft:golden_helmet',
    'minecraft:golden_chestplate',
    'minecraft:golden_leggings',
    'minecraft:golden_boots',
    'naturesaura:infused_iron_helmet',
    'naturesaura:infused_iron_chest',
    'naturesaura:infused_iron_pants',
    'naturesaura:infused_iron_shoes',
    'twilightforest:steeleaf_helmet',
    'twilightforest:steeleaf_chestplate',
    'twilightforest:steeleaf_leggings',
    'twilightforest:steeleaf_boots',
    'twilightforest:fiery_helmet',
    'twilightforest:fiery_boots',
    'twilightforest:fiery_leggings',
    'twilightforest:fiery_chestplate',
    'ars_nouveau:arcanist_boots',
    'ars_nouveau:arcanist_leggings',
    'ars_nouveau:arcanist_robes',
    'ars_nouveau:arcanist_hood',
    'twilightforest:knightmetal_helmet',
    'twilightforest:knightmetal_chestplate',
    'twilightforest:knightmetal_boots',
    'twilightforest:knightmetal_leggings',
    'twilightforest:phantom_helmet',
    'twilightforest:phantom_chestplate'])

  event.add("dq:tier3/armor",[
    'naturesaura:sky_helmet',
    'naturesaura:sky_chest',
    'naturesaura:sky_pants',
    'naturesaura:sky_shoes',
    'aether:phoenix_helmet',
    'aether:phoenix_chestplate',
    'aether:phoenix_leggings',
    'aether:phoenix_boots',
    'irons_spellbooks:cryomancer_helmet',
    'aether:obsidian_helmet',
    'aether:obsidian_chestplate',
    'aether:obsidian_leggings',
    'aether:obsidian_boots',
    'aether:neptune_helmet',
    'aether:neptune_chestplate',
    'aether:neptune_leggings',
    'aether:neptune_boots',
    'minecraft:netherite_helmet',
    'minecraft:netherite_chestplate',
    'minecraft:netherite_leggings',
    'minecraft:netherite_boots',
    'ars_nouveau:battlemage_leggings',
    'ars_nouveau:battlemage_robes',
    'ars_nouveau:battlemage_hood',
    'ars_nouveau:battlemage_boots',
    'irons_spellbooks:cryomancer_chestplate',
    'irons_spellbooks:cryomancer_leggings',
    'irons_spellbooks:cryomancer_boots',
    'irons_spellbooks:electromancer_helmet',
    'irons_spellbooks:electromancer_chestplate',
    'irons_spellbooks:electromancer_leggings',
    'irons_spellbooks:electromancer_boots',
    'irons_spellbooks:plagued_helmet',
    'irons_spellbooks:plagued_chestplate',
    'irons_spellbooks:plagued_leggings',
    'irons_spellbooks:plagued_boots',
    'irons_spellbooks:priest_helmet',
    'irons_spellbooks:priest_chestplate',
    'irons_spellbooks:priest_leggings',
    'irons_spellbooks:priest_boots',
    'irons_spellbooks:pyromancer_helmet',
    'irons_spellbooks:pyromancer_chestplate',
    'irons_spellbooks:pyromancer_leggings',
    'irons_spellbooks:pyromancer_boots',
    'irons_spellbooks:shadowwalker_helmet',
    'irons_spellbooks:shadowwalker_chestplate',
    'irons_spellbooks:shadowwalker_leggings',
    'irons_spellbooks:shadowwalker_boots'])
  
  event.add("dq:tier4/armor",[
    'naturesaura:depth_helmet',
    'naturesaura:depth_chest',
    'naturesaura:depth_pants',
    'naturesaura:depth_shoes',
    'immersiveengineering:armor_steel_helmet',
    'immersiveengineering:armor_steel_chestplate',
    'immersiveengineering:armor_steel_leggings',
    'immersiveengineering:armor_steel_boots',
    'irons_spellbooks:netherite_mage_helmet',
    'irons_spellbooks:netherite_mage_chestplate',
    'irons_spellbooks:netherite_mage_leggings',
    'irons_spellbooks:netherite_mage_boots',
    'forbidden_arcanus:draco_arcanus_helmet',
    'forbidden_arcanus:draco_arcanus_chestplate',
    'forbidden_arcanus:draco_arcanus_leggings',
    'forbidden_arcanus:draco_arcanus_boots',
    'aether:gravitite_helmet',
    'aether:gravitite_chestplate',
    'aether:gravitite_leggings',
    'aether:gravitite_boots',
    'deep_aether:stormforged_helmet',
    'deep_aether:stormforged_chestplate',
    'deep_aether:stormforged_leggings',
    'deep_aether:stormforged_boots',
    'deep_aether:stratus_helmet',
    'deep_aether:stratus_chestplate',
    'deep_aether:stratus_leggings',
    'deep_aether:stratus_boots'])

  event.add("dq:tier5/armor",[
    'enigmaticlegacy:etherium_helmet',
    'enigmaticlegacy:etherium_chestplate',
    'enigmaticlegacy:etherium_leggings',
    'enigmaticlegacy:etherium_boots',
    'deeperdarker:warden_helmet',
    'deeperdarker:warden_chestplate',
    'deeperdarker:warden_leggings',
    'deeperdarker:warden_boots',
    'thermal:hazmat_helmet',
    'thermal:hazmat_chestplate',
    'thermal:hazmat_leggings',
    'thermal:hazmat_boots',
    'forbidden_arcanus:tyr_helmet',
    'forbidden_arcanus:tyr_chestplate',
    'forbidden_arcanus:tyr_leggings',
    'forbidden_arcanus:tyr_boots',
    'ancient_aether:valkyrum_helmet',
    'ancient_aether:valkyrum_chestplate',
    'ancient_aether:valkyrum_leggings',
    'ancient_aether:valkyrum_boots'
  ])
  
  let Tier0Weapon = []
  let Tier1Weapon = []
  let Tier2Weapon = []
  let Tier3Weapon = []

  let Tier0Accessory = []
  let Tier1Accessory = []
  let Tier2Accessory = []
  let Tier3Accessory = []
  
  event.add("dq:primitive_hoes",[
    "minecraft:wooden_hoe",
    "minecraft:stone_hoe",
    "kubejs:copper_hoe",
    "aether:holystone_hoe",
    "immersiveengineering:steel_hoe"])

  event.add("dq:basic_hoes",[
    "kubejs:silver_hoe",
    "kubejs:lead_hoe",
    "minecraft:iron_hoe",
    "minecraft:golden_hoe",
    "minecraft:diamond_hoe",
    "naturesaura:infused_iron_hoe",
    "aether:zanite_hoe",
    "aether:gravitite_hoe",
    "deeperdarker:resonarium_hoe",
    "twilightforest:ironwood_hoe",
    "twilightforest:steeleaf_hoe",
    "deep_aether:skyjade_hoe"])

  event.add("dq:advanced_hoes",[
    "minecraft:netherite_hoe",
    "forbidden_arcanus:draco_arcanus_hoe",
    "forbidden_arcanus:reinforced_deorum_hoe",
    "naturesaura:depth_hoe",
    "naturesaura:sky_hoe",
    "aether:valkyrie_hoe",
    "deep_aether:stratus_hoe",
    "ancient_aether:valkyrum_hoe",
    "ancient_aether:divine_hoe",])
  event.add("forge:tools/chisels","elementalcraft:chisel")
  event.add("forge:tools/hammers","immersiveengineering:hammer")
  event.add("forge:ingots/andesite_alloy","create:andesite_alloy")
  
  event.remove("twilightforest:portal/activator","minecraft:diamond")
 

  event.remove("forge:gems/ruby","thermal:ruby")
  event.remove("forge:storage_blocks/ruby","thermal:ruby_block")
  event.remove("forge:storage_blocks/gunpowder","thermal:gunpowder_block")
  event.remove("curios:head","immersive_weathering:flower_crown")
  

  event.add("forge:insect",["alexsmobs:maggot",'twilightforest:firefly', 'twilightforest:cicada', 'twilightforest:moonworm'])
  
  event.add("quark:seed_pouch_holdable","forge:seeds")
  event.add("quark:seed_pouch_holdable","minecraft:saplings")

  event.add("forge:tools","#minecraft:tools")
  event.add("forge:tools","quark:abacus")
  event.add("forge:tools","quark:trowel")
  event.add("forge:tools","immersiveengineering:hammer")
  event.add("forge:tools","supplementaries:wrench")
  event.add("forge:tools","minecraft:shears")
  event.add("forge:tools","minecraft:flint_and_steel")
  event.add("forge:tools","#c:tools")

  event.add("immersiveengineering:toolbox/tools","#forge:tools")
  event.add("forge:storage_blocks/potato","farmersdelight:potato_crate")
  event.add("forge:gems",["forbidden_arcanus:rune","forbidden_arcanus:dark_rune"])
  event.add("forge:gems/zanite","#aether:gems/zanite")
  event.add("forge:gems/skyjade","deep_aether:skyjade")

  event.add("minecraft:axes","#forge:tools/axes")
  event.add("minecraft:pickaxes","#forge:tools/pickaxes")
  event.add("minecraft:swords","#forge:tools/swords")
  event.add("minecraft:shovels","#forge:tools/shovels")
  event.add("minecraft:hoes","#forge:tools/hoes")
  
  event.add('forge:ingots/stainless_steel', 'immersiveengineering:ingot_steel')
  event.add('forge:nuggets/stainless_steel', 'immersiveengineering:nugget_steel')
  event.add('forge:storage_blocks/stainless_steel', 'immersiveengineering:storage_steel')
  event.add('forge:rods/stainless_steel', 'immersiveengineering:stick_steel')
  event.add('forge:plates/stainless_steel', 'immersiveengineering:plate_steel')
  event.add('forge:dusts/stainless_steel', 'immersiveengineering:dust_steel')

  event.add('forge:ingots/sky','naturesaura:sky_ingot')
  event.add('forge:ingots/depth','naturesaura:depth_ingot')
  event.add('forge:ingots/tainted_gold','naturesaura:tainted_gold')
  event.add("forge:ingots/infused_iron","naturesaura:infused_iron")
  event.add("forge:storage_blocks/infused_iron","naturesaura:infused_iron_block")
  event.add("forge:storage_blocks/tainted_gold","naturesaura:tainted_gold_block")
  event.add("forge:storage_blocks/sky","naturesaura:sky_ingot_block")
  event.add("forge:storage_blocks/depth","naturesaura:depth_ingot_block")

  event.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel')
  event.remove('forge:nuggets/steel', 'immersiveengineering:nugget_steel')
  event.remove('forge:storage_blocks/steel', 'immersiveengineering:storage_steel')
  event.remove('forge:rods/steel', 'immersiveengineering:stick_steel')
  event.remove('forge:plates/steel', 'immersiveengineering:plate_steel')
  event.remove('forge:dusts/steel', 'immersiveengineering:dust_steel')

  event.add('forge:ingots/andesite','create:andesite_alloy')
  event.add('forge:storage_blocks/andesite','create:andesite_alloy_block')
  event.add('forge:plates/andesite','vintageimprovements:andesite_sheet')

  event.add('immersive_weathering:bark','farmersdelight:tree_bark')
  SourceLinks.forEach(id => {
    event.add("druidic_quest:generators/source",id)
  });

  froglights.forEach(id => {
    event.add("forge:froglights",id)
  });


  flower.forEach(id => {
    event.add('forge:flowers/golden',id)
  });
  
  seed.forEach(id => {
    event.add("quark:seed_pouch_holdable",id)
  });  
  
  event.add("c:hidden_from_recipe_viewers","#forge:tools/skyroot")
  event.add("c:hidden_from_recipe_viewers","immersiveengineering:potion_bucket")
  event.add("c:hidden_from_recipe_viewers","immersiveengineering:shader")
  event.add("c:hidden_from_recipe_viewers","kubejs:depleted_ruby_block")
  event.add("c:hidden_from_recipe_viewers","kubejs:unassembled_clock")
  event.add("c:hidden_from_recipe_viewers","kubejs:unassembled_compass")

  event.add("forge:tools/shields","kubejs:primitive_shield")
  event.add("forge:shields","kubejs:primitive_shield")
  event.add("forge:tools","kubejs:primitive_shield")

  function tool(name)
  {
    event.add('minecraft:axes', name+'_axe')  
    event.add('minecraft:pickaxes', name+'_pickaxe')  
    event.add('minecraft:swords', name+'_sword')  
    event.add('minecraft:shovels', name+'_shovel')  
    event.add('minecraft:hoes', name+'_hoe')  
  }

  function tooltier(name, tier)
  {
    event.add('forge:tools/'+tier, name+'_axe')  
	  event.add('forge:tools/'+tier, name+'_pickaxe')  
	  event.add('forge:tools/'+tier, name+'_sword')  
	  event.add('forge:tools/'+tier, name+'_shovel')  
	  event.add('forge:tools/'+tier, name+'_hoe')  
  }

  tooltier('minecraft:wooden','flint')
  tooltier('minecraft:stone','stone')
  tooltier('kubejs:copper','copper')
  tooltier('kubejs:silver','silver')
  tooltier('kubejs:lead','lead')
  
  tooltier('naturesaura:infused_iron','botanist')
  tooltier('aether:zanite','zanite')
  tooltier('aether:gravitite','gravitite')
  tooltier('aether:holystone','holystone')
  tooltier('aether:skyroot','skyroot')
  tooltier('deep_aether:skyjade','skyjade')
  tooltier('enigmaticlegacy:etherium','etherium')
  tooltier('forbidden_arcanus:draco_arcanus','draco_arcanus')
  tooltier('forbidden_arcanus:reinforced_deorum','reinforced_deorum')
  tooltier('forbidden_arcanus:reinforced_obsidian','reinforced_obsidian')
  tooltier('twilightforest:ironwood','ironwood')
  tooltier('twilightforest:steeleaf','steeleaf')
  tooltier('wizards_reborn:arcane_wood','arcane_wood')
 
	tool('kubejs:copper')
	tool('kubejs:silver')
  tool('kubejs:lead')
  tool('enigmaticlegacy:etherium')
  tool('forbidden_arcanus:draco_arcanus')
  tool('forbidden_arcanus:reinforced_deorum')

  event.add('forge:tools/steel', "immersiveengineering:hoe_steel")  
	event.add('forge:tools/steel', "immersiveengineering:pickaxe_steel")  
	event.add('forge:tools/steel', "immersiveengineering:axe_steel")  
	event.add('forge:tools/steel', "immersiveengineering:shovel_steel")  
	event.add('forge:tools/steel', "immersiveengineering:sword_steel")  

  event.add('druidic_quest:dimensional_tools',['#forge:tools/ironwood',"#forge:tools/zanite","#forge:tools/gravitite","#forge:tools/holystone", 
    "#forge:tools/skyjade","#forge:tools/steeleaf","#forge:tools/ironwood","#forge:tools/blaze","#forge:tools/netherite"])
  
})

ServerEvents.tags('block', event => {

  event.add("minecraft:mineable/pickaxe",[
    "mbd2:elemental_binder",
    "mbd2:elemental_evaporator",
    "mbd2:elemental_infuser",
    "mbd2:elemental_extractor"
  ])

  event.add("minecraft:needs_iron_tool",[
    "mbd2:elemental_binder",
    "mbd2:elemental_evaporator",
    "mbd2:elemental_infuser",
    "mbd2:elemental_extractor"
  ])
  
  event.add("druidic_quest:terraformer","#forge:stone")
  event.add("druidic_quest:terraformer","#minecraft:dirt")
  event.add("druidic_quest:terraformer","#minecraft:sand")


  event.add("forge:stripped_logs",['thermal:stripped_rubberwood_log',
    'twilightforest:stripped_sorting_log',
    'twilightforest:stripped_mining_log',
    'twilightforest:stripped_transformation_log',
    'twilightforest:stripped_time_log',
    'twilightforest:stripped_dark_log',
    'twilightforest:stripped_mangrove_log',
    'twilightforest:stripped_canopy_log',
    'twilightforest:stripped_twilight_oak_log',
    'aether_redux:stripped_glacia_log',
    'aether_redux:stripped_crystal_log',
    'aether_redux:stripped_blightwillow_log',
    'aether_redux:stripped_fieldsproot_log',
    'aether:stripped_skyroot_log',
    'forbidden_arcanus:stripped_aurum_log',
    'deep_aether:stripped_sunroot_log',
    'deep_aether:stripped_conberry_log',
    'deep_aether:stripped_cruderoot_log',
    'deep_aether:stripped_yagroot_log',
    'deep_aether:stripped_roseroot_log',
    'architects_palette:stripped_twisted_log',
    'ars_nouveau:stripped_blue_archwood_log',
    'ars_nouveau:stripped_purple_archwood_log',
    'ars_nouveau:stripped_red_archwood_log',
    'ars_nouveau:stripped_green_archwood_log',
    'ancient_aether:stripped_highsproot_log',
    'minecraft:stripped_cherry_log',
    'minecraft:stripped_mangrove_log',
    'minecraft:stripped_dark_oak_log',
    'minecraft:stripped_acacia_log',
    'minecraft:stripped_jungle_log',
    'minecraft:stripped_birch_log',
    'minecraft:stripped_spruce_log',
    'minecraft:stripped_oak_log'])

  event.add("irons_spellbooks:spectral_hammer_mineable",
    ["twigs:schist",
      "twigs:rhyolite",
      "immersiveweathering:mossy_stone",
      "forbidden_arcanus:darkstone",
      'biomeswevegone:dacite',
      'biomeswevegone:white_dacite',
      'biomeswevegone:red_rock',
      'biomeswevegone:rocky_stone',
      'biomeswevegone:mossy_stone'])

  let grass =[/*"regions_unexplored:medium_grass",
    "regions_unexplored:ashen_grass",
    "regions_unexplored:bladed_grass",
    "regions_unexplored:frozen_grass",
    "regions_unexplored:sandy_grass",
    "regions_unexplored:steppe_grass",
    "regions_unexplored:mycotoxic_grass",
    "regions_unexplored:bladed_tall_grass",
    "regions_unexplored:sandy_tall_grass",
    "regions_unexplored:steppe_tall_grass",
    "regions_unexplored:windswept_grass",*/
    "immersive_weathering:frosty_grass",
    "immersive_weathering:dune_grass",
    "biomeswevegone:prairie_grass",
    "biomeswevegone:tall_prairie_grass"]
  

  let pickaxeable = ["#forge:glass","#forge:glass_panes","#chipped:glass","beacon","skeleton_skull","wither_skeleton_skull","player_head"/*,"elementalcraft:burnt_glass"*/]

  let axeable = ["skeleton_skull","wither_skeleton_skull","player_head","supplementaries:sack","quark:bonded_leather"]

  let hoeable = ["supplementaries:sack","naturesaura:golden_leaves"]

  let knifeable = ["quark:bonded_leather",]
  
  pickaxeable.forEach(id => {
    event.add("minecraft:mineable/pickaxe",id)
  });

  axeable.forEach(id => {
    event.add("minecraft:mineable/axe",id)
  });

  hoeable.forEach(id=>{
    event.add("minecraft:mineable/hoe",id)
  });

  knifeable.forEach(id => {
    event.add("farmersdelight:mineable/knife",id)
  });

  grass.forEach(id => {
    event.add("forge:tall_grass",id)
  });

})