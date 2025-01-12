 priority: 0

ServerEvents.tags('item', event => {

  let seed = ["vintagedelight:oat_seeds","vintagedelight:ghost_pepper_seeds"]
  let hide = ["twigs:calcite_wall","twigs:tuff_wall","twigs:calcite_stairs","kubejs:recipe_changed","kubejs:unstable_ivy_quartz","aether:life_shard",
              "immersiveengineering:shield","alexsmobs:shield_of_the_deep","enigmaticlegacy:infernal_shield","forbiddenarcanus:obsidian_skull_shield",]
  let flower = ['minecraft:sunflower','minecraft:dandelion','naturesaura:aura_bloom','bloomingnature:wild_sunflower','regions_unexplored:yellow_snowbelle','bloomingnature:freesia_yellow','bloomingnature:golden_rod','regions_unexplored:alpha_dandelion']

  let wiring = ['minecraft:repeater', 'minecraft:calibrated_sculk_sensor', 'minecraft:tripwire_hook', 'minecraft:daylight_detector', 'minecraft:string', 'minecraft:activator_rail', 'minecraft:detector_rail', 'minecraft:powered_rail', 'minecraft:rail', 
                'minecraft:redstone', 'minecraft:piston', 'minecraft:composter', 'create:redstone_link', 'minecraft:sticky_piston', 'minecraft:dispenser', 'minecraft:redstone_lamp', 'minecraft:redstone_torch', 'minecraft:dropper',
                 'minecraft:hopper', 'ars_nouveau:redstone_relay', 'minecraft:lever', 'minecraft:target', 'quark:redstone_randomizer', 'minecraft:comparator','create:controller_rail', 'create:large_cogwheel', 'create:shaft', 'create:cogwheel', 'create:gearbox', 
                 'create:vertical_gearbox', 'create:clutch', 'create:gearshift', 'create:encased_chain_drive', 'create:adjustable_chain_gearshift', 'create:belt_connector', 'create:fluid_pipe', 'create:mechanical_pump', 'create:smart_fluid_pipe', 'create:fluid_valve', 
                 'create:piston_extension_pole', 'create:gantry_shaft', 'create:analog_lever', 'create:pulse_repeater', 'create:pulse_extender', 'create:powered_latch', 'create:powered_toggle_latch', 'create:track','supplementaries:hourglass', 'supplementaries:crank', 
                 'supplementaries:wind_vane', 'supplementaries:cog_block', 'supplementaries:turn_table', 'supplementaries:spring_launcher', 'supplementaries:faucet']
  
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
  let Tier3Tool = []

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

  event.remove("twilightforest:portal/activator","minecraft:diamond")
  event.remove("forge:gems/ruby","thermal:ruby")
  event.remove("forge:storage_blocks/ruby","thermal:ruby_block")
  event.remove("forge:storage_blocks/gunpowder","thermal:gunpowder_block")
  

  event.add("forge:insect","alexsmobs:maggot")
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
  event.add('immersive_weathering:bark','farmersdelight:tree_bark')
  event.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel')

  
  wiring.forEach(id => {
    event.add("immersiveengineering:toolbox/wiring",id)
  })
  flower.forEach(id => {
    event.add('forge:flowers/golden',id)
  });
  
  seed.forEach(id => {
    event.add("quark:seed_pouch_holdable",id)
  });

  hide.forEach(id=> {
    event.add("c:hidden_from_recipe_viewers",id)
  });
  
  event.add("c:hidden_from_recipe_viewers","#forge:tools/skyroot")
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
  tooltier('create_sa:copper','copper')
  tooltier('create_sa:zinc','zinc')
  tooltier('create_sa:brass','brass')
  tooltier('create_sa:experience','exp')
  tooltier('create_sa:blazing','blaze')
  tooltier('create_sa:rose_quartz','rose_quartz')
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
 
	tool('create_sa:copper')
	tool('create_sa:zinc')
  tool('create_sa:brass')
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