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

  item.create('stone_plate').displayName('Stone Plate').tag("forge:plates/stone").tag("druidic_quest:tier1/component")
  item.create('wooden_plate').displayName('Wooden Plate').tag("forge:plates/wooden").tag("druidic_quest:tier1/component")
  item.create('diamond_plate').displayName('Diamond Plate').tag('forge:plates/diamond').tag("druidic_quest:tier1/component")
  item.create('arcane_alloy_plate').tag('forge:plates').tag('forge:plates/arcane_alloy').tag("druidic_quest:tier2/component")
  item.create('inert_alloy_plate').tag('forge:plates').tag('forge:plates/inert_alloy').tag("druidic_quest:tier2/component")

  ///===================================================GEARS===========================================================
  item.create('wooden_gear').displayName('Wooden Gear').tag('forge:gears/wooden').tag('forge:gears').tag("druidic_quest:tier1/component")
  item.create('stone_gear').displayName('Stone Gear').tag('forge:gears/stone').tag('forge:gears').tag("druidic_quest:tier1/component")

  item.create("carbon_infused_sturdy_handle").displayName("Carbon Infused Sturdy Handle").tag("forge:rods").tag("druidic_quest:tier2/component")

  ///===================================================INGOTS===========================================================

  item.create('arcane_alloy_ingot').tag('forge:ingots').tag('forge:ingots/arcane_alloy').tag("druidic_quest:tier1/component")
  item.create('inert_alloy_ingot').tag('forge:ingots').tag('forge:ingots/inert_alloy').tag("druidic_quest:tier1/component")
  item.create('wrought_iron_ingot').tag('forge:ingots').tag('forge:ingots/wrought_iron')
  item.create('neptun_ingot').tag('forge:ingots').tag('forge:ingots/neptun')
  item.create('phoenix_ingot').tag('forge:ingots').tag('forge:ingots/phoenix')
  item.create('obsidian_ingot').tag('forge:ingots').tag('forge:ingots/obsidian')

  ///===================================================NUGGETS=========================================================

  item.create('infused_iron_nugget').tag('forge:nuggets').tag('forge:nuggets/infused_iron').tag("druidic_quest:tier2/component")

  ///===================================================GEMS=============================================================

  item.create("berry_quartz").displayName("Berry Quartz").tag("forge:gems")
  item.create("salmon_quartz").displayName("Salmon Quartz").tag("forge:gems")
  item.create("lemon_quartz").displayName("Lemon Quartz").tag("forge:gems")
  item.create("ivy_quartz").displayName("Ivy Quartz").tag("forge:gems")
  item.create("unstable_ivy_quartz").displayName("Unstable Ivy Quartz").tag("forge:gems")

  ///===================================================DUSTS============================================================

  item.create("sulfur_quartz_blend").displayName("Sulfuric Quartz Blend").tag("forge:dusts").tag("druidic_quest:tier1/component")
  item.create('alchemical_dust').displayName('Alchemical Dust').tag('forge:dusts')
  item.create('improved_alchemical_dust').displayName('Improved Alchemical Dust').tag('forge:dusts')
  

  ///===================================================ESSENCE==========================================================

  item.create('nature_essence').displayName('Nature essence').tag('forge:essences').tag("druidic_quest:tier2/component")
  item.create('ender_essence').displayName('Ender Essence').tag('forge:essences').tag("druidic_quest:tier3/component")
  item.create('light_essence').displayName('Light Essence').tag('forge:essences').tag("druidic_quest:tier3/component")
  item.create('dark_essence').displayName('Dark Essence').tag('forge:essences').tag("druidic_quest:tier3/component")
  item.create('life_essence').displayName('Life Essence').tag('forge:essences').tag("druidic_quest:tier3/component")
  item.create('death_essence').displayName('Death Essence').tag('forge:essences').tag("druidic_quest:tier3/component")

  ///===================================================RUNES===========================================================
  
  item.create('large_enchanting_rune').displayName('Large Enchanting Runestone').tag("druidic_quest:tier2/component")
  item.create('big_enchanting_rune').displayName('Big Enchanting Runestone').tag("druidic_quest:tier2/component")
  item.create('medium_enchanting_rune').displayName('Medium Enchanting Runestone').tag("druidic_quest:tier2/component")
  item.create('small_enchanting_rune').displayName('Small Enchanting Runestone').tag("druidic_quest:tier2/component")

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

  item.create('botanist_upgrade_smithing_template').displayName('Smithing Template').tag("druidic_quest:tier2/component")
  item.create('gold_upgrade_smithing_template').displayName('Smithing Template').tag("druidic_quest:tier2/component")
  item.create('steel_upgrade_smithing_template').displayName('Smithing Template').tag("druidic_quest:tier3/component")
  item.create('skyseeker_upgrade_smithing_template').displayName('Smithing Template').tag("druidic_quest:tier3/component")

  ///===================================================KEYS===========================================================

  item.create('overworld_key').displayName('Overworld Key').tag("druidic_quest:tier0/tool")
  item.create('twilight_key').displayName('Twilight Key').tag("druidic_quest:tier1/tool")
  item.create('nether_key').displayName('Nether Key').tag("druidic_quest:tier2/tool")
  item.create('end_key').displayName('End Key').tag("druidic_quest:tier4/tool")
  item.create('aether_key').displayName('Aether Key').tag("druidic_quest:tier3/tool")
  item.create('dark_key').displayName('Dark Key').tag("druidic_quest:tier5/tool")
  item.create('broken_key').displayName('Broken Key').tag("druidic_quest:tier0/tool")

  ///=================================================TOOLS============================================================
  item.create("mossy_sword","sword").tier('stone').tag("minecraft:swords").tag("minecraft:tools").tag("forge:tools/stone").tag("druidic_quest:tier0/weapon")
  item.create("royal_guard_sword","sword").tier('royal').tag("minecraft:swords").tag("minecraft:tools").tag("forge:tools/iron").tag("druidic_quest:tier1/weapon")
  item.create('chill_blade','sword').displayName("Chilled Blade").tier('ice').tag('minecraft:sword').tag("forge:tools/iron").tag('minecraft:tools').tag("druidic_quest:tier1/weapon")
  item.create('blade_of_grass','irons_spells_js:magic_sword').tier('grass').tag('minecraft:sword').tag("forge:tools/iron").tag('minecraft:tools').glow(true).addDefaultSpell("irons_spellbooks:poison_splash",3).tag("druidic_quest:tier2/weapon")
  item.create('ice_blade','irons_spells_js:magic_sword').tier('ice').tag('minecraft:sword').tag("forge:tools/iron").tag('minecraft:tools').glow(true).addDefaultSpell("irons_spellbooks:icicle",3).tag("druidic_quest:tier1/weapon")
  item.create('rusty_trident','sword').tier('fire').tag('minecraft:sword').tag("forge:tools/copper").tag('minecraft:tools').speedBaseline(-2.9).tag("druidic_quest:tier0/weapon")
  item.create('primitive_spear','sword').tier('wood').tag('minecraft:sword').tag("forge:tools/flint").tag('minecraft:tools').speedBaseline(-2.9).tag("druidic_quest:tier0/weapon")

  item.create('golden_magic_feather','sword').tier('gold').glow(true).tag("minecraft:tools").displayName("Golden Feather").tag("forge:tools/magic_feather").tag("druidic_quest:tier1/weapon").tag("druidic_quest:tier1/tool")
  item.create('fiery_magic_feather','sword').tier('diamond').glow(true).tag("minecraft:tools").displayName("Fiery Feather").tag("forge:tools/magic_feather").tag("forge:tools/tier2_magic_feather").tag("druidic_quest:tier2/weapon").tag("druidic_quest:tier2/tool")
  item.create('rainbow_magic_feather','sword').tier('netherite').glow(true).tag("minecraft:tools").displayName("Rainbow Feather").tag("forge:tools/magic_feather").tag("forge:tools/tier2_magic_feather").tag("druidic_quest:tier3/weapon").tag("druidic_quest:tier3/tool")

  item.create('mining_hammer','pickaxe').tier('hammer').tag("minecraft:tools").tag('forge:tools/hammers').tag("druidic_quest:tier2/tool")
  item.create('the_terraformer','shovel').glow(true).rarity("epic").tier("terraformer").tag("minecraft:tools").tag("druidic_quest:tier2/tool")
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