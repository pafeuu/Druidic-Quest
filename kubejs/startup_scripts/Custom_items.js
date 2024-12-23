ItemEvents.toolTierRegistry(event => {

  event.add('royal', tier => {
    tier.uses = 600
    tier.speed = 6.0
    tier.attackDamageBonus = 0.0
    tier.level = 2
    tier.enchantmentValue = 24
    tier.repairIngredient = '#forge:plates/gold'
  })

  event.add('terraformer', tier => {
    tier.uses = 4096
    tier.speed = 8.0
    tier.attackDamageBonus = 0
    tier.level = 2
    tier.enchantmentValue = 24
    tier.repairIngredient = 'ars_nouveau:earth_essence'
  })

  event.add('hammer', tier => {
    tier.uses = 2048
    tier.speed = 1.5
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 12
    tier.repairIngredient = 'ars_nouveau:earth_essence'
  })

  event.add('ice', tier => {
    tier.uses = 512
    tier.speed = 3.0
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 12
    tier.repairIngredient = 'thermal:blizz_rod'
  })

  event.add('grass', tier => {
    tier.uses = 512
    tier.speed = 3.0
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 12
    tier.repairIngredient = 'kubejs:nature_essence'
  })

})

StartupEvents.registry('item', item => {
  
  ///===================================================PLATES===========================================================

  item.create('stone_plate').displayName('Stone Plate').tag("forge:plates/stone")
  item.create('wooden_plate').displayName('Wooden Plate').tag("forge:plates/wooden")
  item.create('diamond_plate').displayName('Diamond Plate').tag('forge:plates/diamond')
  item.create('arcane_alloy_plate').tag('forge:plates')
  item.create('inert_alloy_plate').tag('forge:plates')

  ///===================================================GEARS===========================================================
  item.create('wooden_gear').displayName('Wooden Gear').tag('forge:gears/wooden')
  item.create('stone_gear').displayName('Stone Gear').tag('forge:gears/stone')

  item.create("carbon_infused_sturdy_handle").displayName("Carbon Infused Sturdy Handle")

  ///===================================================INGOTS===========================================================

  item.create('arcane_alloy_ingot').displayName('Arcane Alloy Ingot')
  item.create('inert_alloy_ingot').displayName('Inert Alloy Ingot')
  item.create('wrought_iron_ingot').displayName('Wrought Iron Ingot')
  item.create('neptun_ingot')
  item.create('phoenix_ingot')
  item.create('obsidian_ingot')
  item.create('infused_iron_nugget').displayName('Infused Iron Nugget')

  ///===================================================GEMS=============================================================

  item.create("berry_quartz").displayName("Berry Quartz")
  item.create("salmon_quartz").displayName("Salmon Quartz")
  item.create("lemon_quartz").displayName("Lemon Quartz")
  item.create("ivy_quartz").displayName("Ivy Quartz")
  item.create("unstable_ivy_quartz").displayName("Unstable Ivy Quartz")

  ///===================================================DUSTS============================================================

  item.create("sulfur_quartz_blend").displayName("Sulfuric Quartz Blend")
  item.create('alchemical_dust').displayName('Alchemical Dust')
  item.create('improved_alchemical_dust').displayName('Improved Alchemical Dust')
  

  ///===================================================ESSENCE==========================================================

  item.create('nature_essence').displayName('Nature essence')
  item.create('ender_essence').displayName('Ender Essence')
  item.create('light_essence').displayName('Light Essence')
  item.create('dark_essence').displayName('Dark Essence')
  item.create('life_essence').displayName('Life Essence')
  item.create('death_essence').displayName('Death Essence')

  ///=====================================================RINGS========================================================

  item.create('lesser_arcane_ring').displayName("Lesser Arcane Magic Ring").unstackable().tag("curios:ring")
  item.create('lesser_fire_ring').displayName("Lesser Fire Magic Ring").unstackable().tag("curios:ring")
  item.create('lesser_ice_ring').displayName("Lesser Ice Magic Ring").unstackable().tag("curios:ring")
  item.create('lesser_nature_ring').displayName("Lesser Nature Magic Ring").unstackable().tag("curios:ring")
  item.create('lesser_lightning_ring').displayName("Lesser Lightning Magic Ring").unstackable().tag("curios:ring")
  item.create('lesser_blood_ring').displayName("Lesser Blood Magic Ring").unstackable().tag("curios:ring")
  item.create('lesser_ender_ring').displayName("Lesser Ender Magic Ring").unstackable().tag("curios:ring")
  item.create('lesser_holy_ring').displayName("Lesser Holy Magic Ring").unstackable().tag("curios:ring")
  item.create("ring_travel").displayName("Ring of Costly Travel").unstackable().tag("curios:ring")

  ///====================================================BELTS==========================================================

  item.create("travelers_belt").displayName("Traveler's Belt").unstackable().tag("curios:belt")
  item.create("builders_belt").displayName("Builder's Belt").unstackable().tag("curios:belt")

  ///===================================================GLOVES==========================================================

  item.create("archers_glove").displayName("Archer's Glove").unstackable().tag("curios:hands")
  item.create('mittens').displayName('Mittens').tag("curios:hands").unstackable()

  ///===================================================TOTEMS
  
  item.create('roadrunner_totem').unstackable().tag("forge:tools/totems")
  item.create('bunny_totem').unstackable().tag("forge:tools/totems")
  item.create('tiger_totem').unstackable().tag("forge:tools/totems")
  item.create('frog_totem').unstackable().tag("forge:tools/totems")
  item.create('penguin_totem').unstackable().tag("forge:tools/totems")
  item.create('bear_totem').unstackable().tag("forge:tools/totems")
  item.create('wooden_crucifix').unstackable().tag("forge:tools/totems")
  item.create('metal_crucifix').unstackable().tag("forge:tools/totems")
  item.create('bejeweled_crucifix').unstackable().tag("forge:tools/totems")

  ///===================================================NECKLACES

  item.create('cross_necklace').displayName('Cross Necklace').tag("curios:necklace").unstackable()

  //==================================================CHARMS

  item.create('the_ice_cube').tag('curios:charm').unstackable()

  ///===================================================TEMPLATES

  item.create('botanist_upgrade_smithing_template').displayName('Smithing Template')
  item.create('gold_upgrade_smithing_template').displayName('Smithing Template')
  item.create('steel_upgrade_smithing_template').displayName('Smithing Template')
  item.create('skyseeker_upgrade_smithing_template').displayName('Smithing Template')

  ///===================================================KEYS===========================================================

  item.create('overworld_key').displayName('Overworld Key')
  item.create('twilight_key').displayName('Twilight Key')
  item.create('nether_key').displayName('Nether Key')
  item.create('end_key').displayName('End Key')
  item.create('aether_key').displayName('Aether Key')
  item.create('dark_key').displayName('Dark Key')
  item.create('broken_key').displayName('Broken Key')

  ///=================================================TOOLS============================================================
  item.create("royal_guard_sword","sword").tier('royal').tag("minecraft:swords").tag("minecraft:tools").tag("forge:tools/iron")
  item.create('chill_blade','sword').displayName("Chilled Blade").tier('ice').tag('minecraft:sword').tag('minecraft:tools')
  item.create('blade_of_grass','irons_spells_js:magic_sword').tier('grass').tag('minecraft:sword').tag('minecraft:tools').glow(true).addDefaultSpell("irons_spellbooks:poison_splash",3)
  item.create('ice_blade','irons_spells_js:magic_sword').tier('ice').tag('minecraft:sword').tag('minecraft:tools').glow(true).addDefaultSpell("irons_spellbooks:icicle",3)
  item.create('rusty_trident','sword').tier('fire').tag('minecraft:sword').tag('minecraft:tools').speedBaseline(-2.9)

  item.create('golden_magic_feather','sword').tier('gold').glow(true).tag("minecraft:tools").displayName("Golden Feather").tag("forge:tools/magic_feather")
  item.create('fiery_magic_feather','sword').tier('diamond').glow(true).tag("minecraft:tools").displayName("Fiery Feather").tag("forge:tools/magic_feather").tag("forge:tools/tier2_magic_feather")
  item.create('rainbow_magic_feather','sword').tier('netherite').glow(true).tag("minecraft:tools").displayName("Rainbow Feather").tag("forge:tools/magic_feather").tag("forge:tools/tier2_magic_feather")

  item.create('mining_hammer','pickaxe').tier('hammer').tag("minecraft:tools").tag('forge:tools/hammers')
  item.create('the_terraformer','shovel').glow(true).rarity("epic").tier("terraformer").tag("minecraft:tools")
  ///===================================================FOOD===========================================================

  item.create("cut_onions").displayName("Cut Onions").food(food=>{
    food.hunger(4).saturation(1).fastToEat().effect("alexsmobs:mosquito_repellent",3000,0,1)})
    
  ///==================================================SPICES===========================================================

  item.create('nether_spice')
  item.create('heavenly_spice')
  item.create('aquatic_spice')
  item.create('underground_spice')
  item.create('cosmic_spice')

  ///===================================================MISC===========================================================

  item.create('recipe_changed')
  item.create('pipe_sealant')
  item.create('shapeshifting_root').displayName('Shapeshifting Root')
  item.create('greater_shapeshifting_root').displayName('Greater Shapeshifting Root')
  item.create("gold_upgrade_parts").displayName("Gold Upgrade Parts")
  item.create('unassembled_clock').displayName('Unassembled Clock')
  item.create('unassembled_compass').displayName('Unassembled Compass')
  item.create("dimension_ripper").displayName("Dimension Ripper").tag("twilightforest:portal/activator")
  item.create('sapling_ball').displayName('Sapling Ball')
  item.create('magic_book').displayName('Magical Book')
  item.create('fiery_clay_blend').displayName('Fiery Clay Blend')
  item.create('basic_token').displayName('Basic Token')

  
  
})