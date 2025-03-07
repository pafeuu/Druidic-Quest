 priority: 0

ServerEvents.tags('item', event => {

  event.removeAllTagsFrom([global.nukelist])

  event.add("c:hidden_from_recipe_viewers",[global.nukelist])
  

  let seed = ["vintagedelight:oat_seeds","vintagedelight:ghost_pepper_seeds"]



  let flower = ['minecraft:sunflower','minecraft:dandelion','naturesaura:aura_bloom','bloomingnature:wild_sunflower','regions_unexplored:yellow_snowbelle','bloomingnature:freesia_yellow','bloomingnature:golden_rod','regions_unexplored:alpha_dandelion']

  /*let wiring = ['minecraft:repeater', 'minecraft:calibrated_sculk_sensor', 'minecraft:tripwire_hook', 'minecraft:daylight_detector', 'minecraft:string', 'minecraft:activator_rail', 'minecraft:detector_rail', 'minecraft:powered_rail', 'minecraft:rail', 
                'minecraft:redstone', 'minecraft:piston', 'minecraft:composter', 'create:redstone_link', 'minecraft:sticky_piston', 'minecraft:dispenser', 'minecraft:redstone_lamp', 'minecraft:redstone_torch', 'minecraft:dropper',
                 'minecraft:hopper', 'ars_nouveau:redstone_relay', 'minecraft:lever', 'minecraft:target', 'quark:redstone_randomizer', 'minecraft:comparator','create:controller_rail', 'create:large_cogwheel', 'create:shaft', 'create:cogwheel', 'create:gearbox', 
                 'create:vertical_gearbox', 'create:clutch', 'create:gearshift', 'create:encased_chain_drive', 'create:adjustable_chain_gearshift', 'create:belt_connector', 'create:fluid_pipe', 'create:mechanical_pump', 'create:smart_fluid_pipe', 'create:fluid_valve', 
                 'create:piston_extension_pole', 'create:gantry_shaft', 'create:analog_lever', 'create:pulse_repeater', 'create:pulse_extender', 'create:powered_latch', 'create:powered_toggle_latch', 'create:track','supplementaries:hourglass', 'supplementaries:crank', 
                 'supplementaries:wind_vane', 'supplementaries:cog_block', 'supplementaries:turn_table', 'supplementaries:spring_launcher', 'supplementaries:faucet']*/
  
  let froglights = ["#chipped:ochre_froglight","#chipped:verdant_froglight","#chipped:pearlescent_froglight",
                    "swampier_swamps:white_froglight","swampier_swamps:orange_froglight","swampier_swamps:magenta_froglight",
                    "swampier_swamps:light_blue_froglight","swampier_swamps:lime_froglight","swampier_swamps:pink_froglight",
                    "swampier_swamps:gray_froglight","swampier_swamps:light_gray_froglight","swampier_swamps:cyan_froglight",
                    "swampier_swamps:blue_froglight","swampier_swamps:brown_froglight","swampier_swamps:red_froglight",
                    "swampier_swamps:black_froglight"]

  let SourceLinks = ['ars_nouveau:alchemical_sourcelink','ars_nouveau:vitalic_sourcelink','ars_nouveau:mycelial_sourcelink','ars_nouveau:volcanic_sourcelink','ars_nouveau:agronomic_sourcelink']
  
  let Tier0Component = ['minecraft:string','minecraft:feather','farmersdelight:canvas','farmersdelight:straw']
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

  let Tier0Armor = []
  let Tier1Armor = []
  let Tier2Armor = []
  let Tier3Armor = []

  let Tier0Weapon = []
  let Tier1Weapon = []
  let Tier2Weapon = []
  let Tier3Weapon = []

  let Tier0Accessory = []
  let Tier1Accessory = []
  let Tier2Accessory = []
  let Tier3Accessory = []

  event.add("forge:tools/chisels","elementalcraft:chisel")
  event.add("forge:tools/hammers","immersiveengineering:hammer")
  event.add("forge:ingots/andesite_alloy","create:andesite_alloy")
  
  event.remove("twilightforest:portal/activator","minecraft:diamond")
 

  event.remove("forge:gems/ruby","thermal:ruby")
  event.remove("forge:storage_blocks/ruby","thermal:ruby_block")
  event.remove("forge:storage_blocks/gunpowder","thermal:gunpowder_block")
  event.remove("curios:head","immersive_weathering:flower_crown")
  

  event.add("forge:insect","alexsmobs:maggot")
  event.add("forge:ingots/infused_iron","naturesaura:infused_iron")
  event.add("forge:storage_blocks/infused_iron","naturesaura:infused_iron_block")
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

  event.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel')
  event.remove('forge:nuggets/steel', 'immersiveengineering:nugget_steel')
  event.remove('forge:storage_blocks/steel', 'immersiveengineering:storage_steel')
  event.remove('forge:rods/steel', 'immersiveengineering:stick_steel')
  event.remove('forge:plates/steel', 'immersiveengineering:plate_steel')
  event.remove('forge:dusts/steel', 'immersiveengineering:dust_steel')

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
 
	tool('kubejs:copper')
	tool('kubejs:silver')
  tool('kubejs:lead')
  tool('create_sa:experience')
  tool('create_sa:rose_quartz')
  tool('create_sa:blazing')
  tool('enigmaticlegacy:etherium')
  tool('forbidden_arcanus:draco_arcanus')
  tool('forbidden_arcanus:reinforced_deorum')

  event.add('druidic_quest:dimensional_tools',['#forge:tools/ironwood',"#forge:tools/zanite","#forge:tools/gravitite","#forge:tools/holystone", 
    "#forge:tools/skyjade","#forge:tools/steeleaf","#forge:tools/ironwood","#forge:tools/blaze","#forge:tools/netherite"])
  
})

ServerEvents.tags('block', event => {

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

  event.add("irons_spellbooks:spectral_hammer_mineable",["twigs:schist","twigs:rhyolite","immersiveweathering:mossy_stone"])

  let grass =["regions_unexplored:medium_grass","regions_unexplored:ashen_grass","regions_unexplored:bladed_grass","regions_unexplored:frozen_grass","regions_unexplored:sandy_grass","regions_unexplored:steppe_grass",
    "regions_unexplored:mycotoxic_grass","regions_unexplored:bladed_tall_grass","regions_unexplored:sandy_tall_grass","regions_unexplored:steppe_tall_grass","regions_unexplored:windswept_grass","immersive_weathering:frosty_grass","immersive_weathering:dune_grass"]

  let pickaxeable = ["#forge:glass","#forge:glass_panes","#chipped:glass","beacon","skeleton_skull","wither_skeleton_skull","player_head","elementalcraft:burnt_glass"]

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