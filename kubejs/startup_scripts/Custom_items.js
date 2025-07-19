const $ShearsItem = Java.loadClass('net.minecraft.world.item.ShearsItem')
const $ShieldItem = Java.loadClass('net.minecraft.world.item.ShieldItem')
const $FlintAndSteelItem = Java.loadClass('net.minecraft.world.item.FlintAndSteelItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

ItemEvents.toolTierRegistry(event => {

  event.add('royal', tier => {
    tier.uses = 600
    tier.speed = 6.0
    tier.attackDamageBonus = 0.0
    tier.level = 2
    tier.enchantmentValue = 24
    tier.repairIngredient = '#forge:plates/gold'
  })

  event.add('copper', tier => {
    tier.uses = 1024
    tier.speed = 4.0
    tier.attackDamageBonus = 1.5
    tier.level = 2
    tier.enchantmentValue = 12
    tier.repairIngredient = '#forge:ingots/copper'
  })

  event.add('silver', tier => {
    tier.uses = 256
    tier.speed = 7.0
    tier.attackDamageBonus = 0.0
    tier.level = 2
    tier.enchantmentValue = 20
    tier.repairIngredient = '#forge:ingots/silver'
  })

  event.add('lead', tier => {
    tier.uses = 512
    tier.speed = 5.5
    tier.attackDamageBonus = 0.0
    tier.level = 3
    tier.enchantmentValue = 14
    tier.repairIngredient = '#forge:ingots/lead'
  })

  event.add('terraformer', tier => {
    tier.uses = 4096
    tier.speed = 8.0
    tier.attackDamageBonus = 0
    tier.level = 2
    tier.enchantmentValue = 24
    tier.repairIngredient = 'ars_nouveau:earth_essence'
  })

  event.add('primitive', tier => {
    tier.uses = 2048
    tier.speed = 1.5
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 12
    tier.repairIngredient = 'quark:sturdy_stone'
  })

  event.add('basic', tier => {
    tier.uses = 4096
    tier.speed = 3
    tier.attackDamageBonus = 2
    tier.level = 2
    tier.enchantmentValue = 12
    tier.repairIngredient = '#forge:storage_blocks/lead'
  })

  event.add('sturdy', tier => {
    tier.uses = 8192
    tier.speed = 5
    tier.attackDamageBonus = 4
    tier.level = 3
    tier.enchantmentValue = 12
    tier.repairIngredient = '#forge:storage_blocks/invar'
  })

  event.add('ice', tier => {
    tier.uses = 512
    tier.speed = 3.0
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 16
    tier.repairIngredient = 'thermal:blizz_rod'
  })

  event.add('grass', tier => {
    tier.uses = 512
    tier.speed = 3.0
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 16
    tier.repairIngredient = 'kubejs:nature_essence'
  })

})
ItemEvents.armorTierRegistry(event => {
  event.add('copper', tier => {
    tier.durabilityMultiplier = 30 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [1, 3, 4, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 8
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/copper'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })

  event.add('silver', tier => {
    tier.durabilityMultiplier = 8 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [1, 3, 4, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 18
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/silver'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })

  event.add('lead', tier => {
    tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [2, 4, 5, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 12
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/lead'
    tier.toughness = 0.5 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.1
  })
})

StartupEvents.registry('item', item => {
  
  ///===================================================PLATES===========================================================

  item.create('stone_plate').tag("forge:plates/stone").tag("dq:tier1/component")
  item.create('wooden_plate').tag("forge:plates/wooden").tag("dq:tier1/component")
  item.create('diamond_plate').tag('forge:plates/diamond').tag("dq:tier1/component")

  item.create('source_alloy_plate').tag('forge:plates').tag('forge:plates/source_alloy').tag("dq:tier2/component")
  item.create('arcanum_alloy_plate').tag('forge:plates').tag('forge:plates/arcanum_alloy').tag("dq:tier2/component")
  item.create('infused_iron_plate').tag('forge:plates').tag('forge:plates/infused_iron').tag("dq:tier2/component")
  item.create('tainted_gold_sheet').tag('forge:plates').tag('forge:plates/tainted_gold').tag("dq:tier2/component")

  //item.create('drenched_iron_sheet').tag('forge:plates').tag('forge:plates/drenched_iron').tag("dq:tier3/component")
  

  item.create('sky_sheet').tag('forge:plates').tag('forge:plates/sky').tag("dq:tier4/component")
  //item.create('swift_alloy_sheet').tag('forge:plates').tag('forge:plates/swift_alloy').tag("dq:tier4/component")

  item.create('depth_sheet').tag('forge:plates').tag('forge:plates/depth').tag("dq:tier5/component")
  //item.create('fireite_sheet').tag('forge:plates').tag('forge:plates/fireite').tag("dq:tier5/component")

  ///===================================================GEARS===========================================================
  item.create('wooden_gear').tag('forge:gears/wooden').tag('forge:gears').tag("dq:tier1/component")
  item.create('stone_gear').tag('forge:gears/stone').tag('forge:gears').tag("dq:tier1/component")
  item.create('zinc_gear').tag('forge:gears/zinc').tag('forge:gears').tag("dq:tier1/component")

  item.create('source_alloy_gear').tag('forge:gears/source_alloy').tag('forge:gears').tag("dq:tier2/component")
  item.create('arcanum_alloy_gear').tag('forge:gears/arcanum_alloy').tag('forge:gears').tag("dq:tier2/component")
  item.create('infused_iron_gear').tag('forge:gears/infused_iron').tag('forge:gears').tag("dq:tier2/component")
  item.create('tainted_gold_gear').tag('forge:gears/tainted_gold').tag('forge:gears').tag("dq:tier2/component")
  item.create('ironwood_gear').tag('forge:gears/ironwood').tag('forge:gears').tag("dq:tier2/component")

  //item.create('drenched_iron_gear').tag('forge:gears/drenched_iron').tag('forge:gears').tag("dq:tier3/component")
  item.create('andesite_gear').tag('forge:gears/andesite').tag('forge:gears').tag("dq:tier3/component")
  item.create('brass_gear').tag('forge:gears/brass').tag('forge:gears').tag("dq:tier3/component")
  item.create('knightmetal_gear').tag('forge:gears/knightmetal').tag('forge:gears').tag("dq:tier3/component")
  item.create('fiery_gear').tag('forge:gears/fiery').tag('forge:gears').tag("dq:tier3/component")
  item.create('arcane_gold_gear').tag('forge:gears/arcane_gold').tag('forge:gears').tag("dq:tier3/component")

  //item.create('swift_alloy_gear').tag('forge:gears/swift_alloy').tag('forge:gears').tag("dq:tier4/component")
  item.create('sky_gear').tag('forge:gears/sky').tag('forge:gears').tag("dq:tier4/component")
  item.create('uranium_gear').tag('forge:gears/uranium').tag('forge:gears').tag("dq:tier4/component")
  item.create('aluminum_gear').tag('forge:gears/aluminum').tag('forge:gears').tag("dq:tier4/component")
  item.create('stainless_steel_gear').tag('forge:gears/stainless_steel').tag('forge:gears').tag("dq:tier4/component")

  item.create('depth_gear').tag('forge:gears/depth').tag('forge:gears').tag("dq:tier5/component")
  //item.create('fireite_gear').tag('forge:gears/fireite').tag('forge:gears').tag("dq:tier5/component")  
  

  ///===================================================RODS=================================================================

  item.create("zinc_tool_handle").tag("forge:rods").tag("dq:tier2/component")
  item.create("reinforced_tool_handle").tag("forge:rods").tag("dq:tier3/component")

  item.create("copper_rod").tag("forge:rods").tag("forge:rods/copper").tag("dq:tier1/component")
  item.create("gold_rod").tag("forge:rods").tag("forge:rods/gold").tag("dq:tier1/component")
  item.create("diamond_rod").tag("forge:rods").tag("forge:rods/diamond").tag("dq:tier1/component")

  item.create("electrum_rod").tag("forge:rods").tag("forge:rods/electrum").tag("dq:tier2/component")
  item.create("arcanum_alloy_rod").tag("forge:rods").tag("forge:rods/arcanum_alloy").tag("dq:tier2/component")
  item.create("source_alloy_rod").tag("forge:rods").tag("forge:rods/source_alloy").tag("dq:tier2/component")
  item.create("infused_iron_rod").tag("forge:rods").tag("forge:rods/infused_iron").tag("dq:tier2/component")
  item.create("tainted_gold_rod").tag("forge:rods").tag("forge:rods/tainted_gold").tag("dq:tier2/component")

  item.create("brass_rod").tag("forge:rods").tag("forge:rods/brass").tag("dq:tier3/component")
  item.create('fiery_rod').tag("forge:rods").tag("forge:rods/fiery").tag("dq:tier3/component")
  item.create("arcane_gold_rod").tag("forge:rods").tag("forge:rods/arcane_gold").tag("dq:tier3/component")
  //item.create("drenched_iron_rod").tag("forge:rods").tag("forge:rods/drenched_iron").tag("dq:tier3/component")

  item.create("sky_rod").tag("forge:rods").tag("forge:rods/sky").tag("dq:tier4/component")
  //item.create("swift_alloy_rod").tag("forge:rods").tag("forge:rods/swift_alloy").tag("dq:tier4/component")

  item.create("depth_rod").tag("forge:rods").tag("forge:rods/depth").tag("dq:tier5/component")
  //item.create("fireite_rod").tag("forge:rods").tag("forge:rods/fireite").tag("dq:tier5/component")
  
  item.create("carbon_infused_sturdy_handle").displayName("Carbon Infused Sturdy Handle").tag("forge:rods").tag("dq:tier2/component")

  ///===================================================INGOTS===========================================================

  item.create('source_alloy_ingot').tag('forge:ingots').tag('forge:ingots/source_alloy').tag("dq:tier1/component")
  item.create('arcanum_alloy_ingot').tag('forge:ingots').tag('forge:ingots/arcanum_alloy').tag("dq:tier1/component")
  item.create('wrought_iron_ingot').tag('forge:ingots').tag('forge:ingots/wrought_iron')
  item.create('aquatic_ingot').tag('forge:ingots').tag('forge:ingots/aquatic')
  item.create('phoenix_ingot').tag('forge:ingots').tag('forge:ingots/phoenix')
  

  ///===================================================NUGGETS=========================================================

  item.create('ironwood_nugget').tag('forge:nuggets').tag('forge:nuggets/ironwood').tag("dq:tier2/component")
  item.create('infused_iron_nugget').tag('forge:nuggets').tag('forge:nuggets/infused_iron').tag("dq:tier2/component")
  item.create('arcanum_alloy_nugget').tag('forge:nuggets').tag('forge:nuggets/arcanum_alloy').tag("dq:tier2/component")
  item.create('source_alloy_nugget').tag('forge:nuggets').tag('forge:nuggets/source_alloy').tag("dq:tier2/component")
  item.create('tainted_gold_nugget').tag('forge:nuggets').tag('forge:nuggets/tainted_gold').tag("dq:tier2/component")

  item.create('andesite_alloy_nugget').tag('forge:nuggets').tag('forge:nuggets/andesite_alloy').tag("dq:tier3/component")
  item.create('fiery_nugget').tag('forge:nuggets').tag('forge:nuggets/fiery').tag("dq:tier3/component")
  item.create('knightmetal_nugget').tag('forge:nuggets').tag('forge:nuggets/knightmetal').tag("dq:tier3/component")

  item.create('sky_nugget').tag('forge:nuggets').tag('forge:nuggets/sky').tag("dq:tier4/component")

  item.create('depth_nugget').tag('forge:nuggets').tag('forge:nuggets/depth').tag("dq:tier5/component")


  ///===================================================GEMS=============================================================

  item.create("berry_quartz").displayName("Berry Quartz").tag("forge:gems")
  item.create("salmon_quartz").displayName("Salmon Quartz").tag("forge:gems")
  item.create("lemon_quartz").displayName("Lemon Quartz").tag("forge:gems").tag("dq:tier1/component")
  item.create("ivy_quartz").displayName("Ivy Quartz").tag("forge:gems")
  item.create("sapphire").tag("forge:gems").tag("dq:tier1/component").tag("forge:gems/sapphire")
  item.create("unstable_ivy_quartz").displayName("Unstable Ivy Quartz").tag("forge:gems")
  item.create("infused_emerald").tag("forge:gems").tag("dq:tier1/component")
  item.create("infused_diamond").tag("forge:gems").tag("dq:tier1/component")
  item.create("infused_amethyst").tag("forge:gems").tag("dq:tier1/component")
  
  item.create("air_infused_arcanum").tag("forge:gems").tag("dq:tier2/component")
  item.create("earth_infused_arcanum").tag("forge:gems").tag("dq:tier2/component")
  item.create("fire_infused_arcanum").tag("forge:gems").tag("dq:tier2/component")
  item.create("water_infused_arcanum").tag("forge:gems").tag("dq:tier2/component")

  ///===================================================DUSTS============================================================
  
  item.create('zinc_dust').tag('forge:dusts').tag('forge:dusts/zinc')
  item.create("sulfur_quartz_blend").displayName("Sulfuric Quartz Blend").tag("forge:dusts").tag("dq:tier1/component")
  item.create("primitive_alchemical_dust").tag("forge:dusts").tag("dq:tier1/component").tag("dq:alchemical_dust").glow(true)
  item.create('basic_alchemical_dust').tag('forge:dusts').tag('dq:alchemical_dust').tag("dq:tier2/component").glow(true)
  item.create('improved_alchemical_dust').tag('forge:dusts').tag('dq:alchemical_dust').tag("dq:tier3/component").glow(true)
  item.create('advanced_alchemical_dust').tag('forge:dusts').tag('dq:alchemical_dust').tag("dq:tier4/component").glow(true)
  item.create('ultimate_alchemical_dust').tag('forge:dusts').tag('dq:alchemical_dust').tag("dq:tier5/component").glow(true)
  
  ///===================================================ESSENCE==========================================================

  item.create('nature_essence').displayName('Nature essence').tag('forge:essences').tag("dq:tier2/component")
  item.create('ender_essence').displayName('Ender Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('light_essence').displayName('Light Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('dark_essence').displayName('Dark Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('life_essence').displayName('Life Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('death_essence').displayName('Death Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('lightning_essence').tag("forge:essences").tag("dq:tier3/component")
  item.create('electricity_essence').tag("forge:essences").tag("dq:tier4/component")

  ///===================================================RUNES===========================================================
  
  item.create('large_enchanting_rune').displayName('Large Enchanting Rune').tag("dq:tier3/component")
  item.create('big_enchanting_rune').displayName('Big Enchanting Rune').tag("dq:tier3/component")
  item.create('enchanting_rune').displayName('Enchanting Rune').tag("dq:tier3/component")
  
  item.create('enchanting_rune_of_curses').tag("dq:tier3/component")
  item.create('enchanting_rune_of_fire').tag("dq:tier3/component")
  item.create('enchanting_rune_of_ice').tag("dq:tier3/component")
  item.create('enchanting_rune_of_water').tag("dq:tier3/component")
  item.create('enchanting_rune_of_mana').tag("dq:tier3/component")
  item.create('enchanting_rune_of_speed').tag("dq:tier3/component")
  item.create('enchanting_rune_of_agility').tag("dq:tier3/component")
  item.create('enchanting_rune_of_horror').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_horror').tag("dq:tier3/component")
  item.create('enchanting_rune_of_pain').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_pain').tag("dq:tier3/component")
  item.create('enchanting_rune_of_nature').tag("dq:tier3/component")
  item.create('enchanting_rune_of_repulsion').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_steel').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_cosmos').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_wisdom').tag("dq:tier3/component")
  item.create('large_enchanting_rune_of_wisdom').tag("dq:tier3/component")
  item.create('large_enchanting_rune_of_luck').tag("dq:tier3/component")
  item.create('large_enchanting_rune_of_infinity').tag("dq:tier3/component")

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
  item.create("daybloom_ring").unstackable().tag("curios:ring")

  ///====================================================BELTS==========================================================

  item.create("travelers_belt").displayName("Traveler's Belt").unstackable().tag("curios:belt")
  item.create("builders_belt").displayName("Builder's Belt").unstackable().tag("curios:belt")

  ///===================================================GLOVES==========================================================

  item.create("archers_glove").displayName("Archer's Glove").unstackable().tag("curios:hands")
  item.create('mittens').displayName('Mittens').tag("curios:hands").unstackable()

  //===================================================FEET========================================================

  item.create("bouncy_boots_cover").tag("curios:feet").unstackable()
  item.create("silent_boots_cover").tag("curios:feet").unstackable()
  item.create("fall_boots_cover").tag("curios:feet").unstackable().displayName("Featherfall Boots Cover")
  item.create("gravity_boots_cover").tag("curios:feet").unstackable()
  item.create("sturdy_boots_cover").tag("curios:feet").unstackable()


  ///===================================================TOTEMS
  
  item.create('roadrunner_totem').unstackable().tag("forge:tools/totems")
  item.create('bunny_totem').unstackable().tag("forge:tools/totems")
  item.create('tiger_totem').unstackable().tag("forge:tools/totems")
  item.create('frog_totem').unstackable().tag("forge:tools/totems")
  item.create('penguin_totem').unstackable().tag("forge:tools/totems")
  item.create('bear_totem').unstackable().tag("forge:tools/totems")
  item.create('crab_totem').unstackable().tag("forge:tools/totems")
  item.create('leafcutter_ant_totem').unstackable().tag("forge:tools/totems")

  item.create('wooden_crucifix').unstackable().tag("forge:tools/totems")
  item.create('metal_crucifix').unstackable().tag("forge:tools/totems")
  item.create('bejeweled_crucifix').unstackable().tag("forge:tools/totems")

  ///===================================================NECKLACES

  item.create('cross_necklace').displayName('Cross Necklace').tag("curios:necklace").unstackable()

  //==================================================CHARMS

  item.create('the_ice_cube').tag('curios:charm').unstackable()

  ///===================================================TEMPLATES

  item.create('botanist_upgrade_smithing_template').displayName('Smithing Template').tag("dq:tier2/component")
  item.create('gold_upgrade_smithing_template').displayName('Smithing Template').tag("dq:tier2/component")
  item.create('steel_upgrade_smithing_template').displayName('Smithing Template').tag("dq:tier3/component")
  item.create('skyseeker_upgrade_smithing_template').displayName('Smithing Template').tag("dq:tier3/component")
  item.create('phoenix_upgrade_smithing_template').displayName('Smithing Template').tag("dq:tier3/component")

  ///===================================================KEYS===========================================================

  item.create('overworld_key').displayName('Overworld Key').tag("dq:tier0/tool")
  item.create('twilight_key').displayName('Twilight Key').tag("dq:tier1/tool")
  item.create('nether_key').displayName('Nether Key').tag("dq:tier2/tool")
  item.create('end_key').displayName('End Key').tag("dq:tier4/tool")
  item.create('aether_key').displayName('Aether Key').tag("dq:tier3/tool")
  item.create('dark_key').displayName('Dark Key').tag("dq:tier5/tool")
  item.create('broken_key').displayName('Broken Key').tag("dq:tier0/tool")

  ///=================================================TOOLS============================================================
  item.create("mossy_sword","sword").tier('stone').tag("minecraft:swords").tag("minecraft:tools").tag("forge:tools/stone").tag("dq:tier0/weapon")
  item.create("royal_guard_sword","sword").tier('royal').tag("minecraft:swords").tag("minecraft:tools").tag("forge:tools/iron").tag("dq:tier1/weapon")
  item.create('chill_blade','sword').displayName("Chilled Blade").tier('ice').tag('minecraft:sword').tag("forge:tools/iron").tag('minecraft:tools').tag("dq:tier1/weapon")
  item.create('blade_of_grass','irons_spells_js:magic_sword').tier('grass').tag('minecraft:sword').tag("forge:tools/iron").tag('minecraft:tools').glow(true).addDefaultSpell("irons_spellbooks:poison_splash",3).tag("dq:tier2/weapon")
  item.create('ice_blade','irons_spells_js:magic_sword').tier('ice').tag('minecraft:sword').tag("forge:tools/iron").tag('minecraft:tools').glow(true).addDefaultSpell("irons_spellbooks:icicle",3).tag("dq:tier1/weapon").speedBaseline(-2.1)
  item.create('flint_spear','sword').tier('wood').tag('minecraft:sword').tag("forge:tools/flint").tag('minecraft:tools').speedBaseline(-2.9).tag("dq:tier0/weapon")
  item.create('stone_claymore','sword').tier('stone').tag('minecraft:sword').tag("forge:tools/stone").tag('minecraft:tools').speedBaseline(-2.7).tag("dq:tier0/weapon").attackDamageBaseline(7)
  item.create('iron_scythe','sword').tier('iron').tag('minecraft:sword').tag("forge:tools/iron").tag("minecraft:tools").tag("dq:tier1/weapon").speedBaseline(-2.8).attackDamageBaseline(7)

  item.create('golden_magic_feather','sword').tier('gold').glow(true).tag("minecraft:tools").tag("forge:tools/magic_feather").tag("dq:tier1/weapon").tag("dq:tier1/tool")
  item.create('fiery_magic_feather','sword').tier('diamond').glow(true).tag("minecraft:tools").tag("forge:tools/magic_feather").tag("forge:tools/tier2_magic_feather").tag("dq:tier2/weapon").tag("dq:tier2/tool")
  item.create('rainbow_magic_feather','sword').tier('netherite').glow(true).tag("minecraft:tools").tag("forge:tools/magic_feather").tag("forge:tools/tier2_magic_feather").tag("dq:tier3/weapon").tag("dq:tier3/tool")

  item.create('copper_pickaxe','pickaxe').tier('copper').tag("minecraft:tools").tag("minecraft:tools/pickaxe").tag("dq:tier1/tool")
  item.create('copper_sword','sword').tier('copper').tag("minecraft:tools").tag("dq:tier1/weapon")
  item.create('copper_axe','axe').tier('copper').tag("minecraft:tools").tag("minecraft:tools/axe").tag("dq:tier1/tool")
  item.create('copper_shovel','shovel').tier('copper').tag("minecraft:tools").tag("minecraft:tools/shovel").tag("dq:tier1/tool")
  item.create('copper_hoe','hoe').tier('copper').tag("minecraft:tools").tag("minecraft:tools/hoe").tag("dq:tier1/tool")
  item.create('copper_trident','sword').tier('copper').tag('minecraft:sword').tag("forge:tools/copper").tag('minecraft:tools').speedBaseline(-2.9).tag("dq:tier1/weapon")

  item.create('lead_pickaxe','pickaxe').tier('lead').tag("minecraft:tools").tag("minecraft:tools/pickaxe").tag("dq:tier1/tool")
  item.create('lead_sword','sword').tier('lead').tag("minecraft:tools").tag("dq:tier1/weapon")
  item.create('lead_axe','axe').tier('lead').tag("minecraft:tools").tag("minecraft:tools/axe").tag("dq:tier1/tool")
  item.create('lead_shovel','shovel').tier('lead').tag("minecraft:tools").tag("minecraft:tools/shovel").tag("dq:tier1/tool")
  item.create('lead_hoe','hoe').tier('lead').tag("minecraft:tools").tag("minecraft:tools/hoe").tag("dq:tier1/tool")
  item.create('lead_waraxe','axe').tier('lead').tag("minecraft:tools").tag("minecraft:tools/axe").tag("dq:tier1/tool").speedBaseline(-3.2).tag("dq:tier1/weapon").attackDamageBaseline(10).tag("forge:tools/lead")

  item.create('silver_pickaxe','pickaxe').tier('silver').tag("minecraft:tools").tag("minecraft:tools/pickaxe").tag("dq:tier1/tool")
  item.create('silver_sword','sword').tier('silver').tag("minecraft:tools").tag("dq:tier1/weapon")
  item.create('silver_axe','axe').tier('silver').tag("minecraft:tools").tag("minecraft:tools/axe").tag("dq:tier1/tool")
  item.create('silver_shovel','shovel').tier('silver').tag("minecraft:tools").tag("minecraft:tools/shovel").tag("dq:tier1/tool")
  item.create('silver_hoe','hoe').tier('silver').tag("minecraft:tools").tag("minecraft:tools/hoe").tag("dq:tier1/tool")
  item.create("silver_katana","sword").tier('silver').tag("minecraft:tools").tag("dq:tier1/weapon").tag("dq:tier1/tool").speedBaseline(-2.2).tag('forge:tools/silver')

  item.create('primitive_mining_hammer','pickaxe').tier('primitive').tag("minecraft:tools").tag('forge:tools/hammers').tag("dq:tier1/tool")
  item.create('basic_mining_hammer','pickaxe').tier('basic').tag("minecraft:tools").tag('forge:tools/hammers').tag("dq:tier2/tool")
  item.create('sturdy_mining_hammer','pickaxe').tier('sturdy').tag("minecraft:tools").tag('forge:tools/hammers').tag("dq:tier3/tool")
  /*item.create('advanced_mining_hammer','pickaxe').tier('advanced').tag("minecraft:tools").tag('forge:tools/hammers').tag("dq:tier4/tool")
  item.create('ultimate_mining_hammer','pickaxe').tier('ultimate').tag("minecraft:tools").tag('forge:tools/hammers').tag("dq:tier5/tool")*/

  item.create('primitive_excavator','shovel').tier('primitive').tag("minecraft:tools").tag('forge:tools/excavators').tag("dq:tier1/tool")
  item.create('basic_excavator','shovel').tier('basic').tag("minecraft:tools").tag('forge:tools/excavators').tag("dq:tier2/tool")
  item.create('sturdy_excavator','shovel').tier('sturdy').tag("minecraft:tools").tag('forge:tools/excavators').tag("dq:tier3/tool")
  /*item.create('advanced_excavator','shovel').tier('advanced').tag("minecraft:tools").tag('forge:tools/excavators').tag("dq:tier4/tool")
  item.create('ultimate_excavator','shovel').tier('ultimate').tag("minecraft:tools").tag('forge:tools/excavators').tag("dq:tier5/tool")*/

  item.create('the_terraformer','shovel').glow(true).rarity("epic").tier("terraformer").tag("minecraft:tools").tag("dq:tier2/tool")
  
  item.create('sacrificial_dagger','sword').tier('gold').tag("minecraft:tools").tag("dq:tier1/weapon").tag("dq:tier1/tool").speedBaseline(-2.0).attackDamageBaseline(1)
  
  item.createCustom('primitive_shears',() => new $ShearsItem(new $ItemProperties().defaultDurability(8)))

  item.createCustom('primitive_firestarter',() => new $FlintAndSteelItem(new $ItemProperties().defaultDurability(8)))

  item.createCustom('primitive_shield', () => new $ShieldItem(new $ItemProperties().defaultDurability(128)))

  item.create('brick_glue').maxDamage(96).unstackable().tag("forge:tools/glue").tag("dq:tier0/tool")

  item.create('primitive_mortar').maxDamage(16).unstackable().tag("forge:tools/mortars").tag("dq:tier0/tool")
  item.create('basic_mortar').maxDamage(64).tag("forge:tools/mortars").tag("dq:tier1/tool").unstackable()
  item.create('primitive_saw').maxDamage(64).unstackable().tag("forge:tools/saws").tag("dq:tier0/tool")

  item.create('primitive_chisel').maxDamage(16).unstackable().tag("forge:tools/chisels").tag("dq:tier0/tool").tag("forge:tools")
  item.create('basic_chisel').maxDamage(128).tag("forge:tools/chisels").tag("dq:tier2/tool").unstackable().tag("forge:tools")

  ///==========================================================ARMOR====================================================

  item.create('copper_helmet','helmet').tier('copper').tag("dq:tier1/armor")
  item.create('copper_chestplate','chestplate').tier('copper').tag("dq:tier1/armor")
  item.create('copper_leggings','leggings').tier('copper').tag("dq:tier1/armor")
  item.create('copper_boots','boots').tier('copper').tag("dq:tier1/armor")

  item.create('silver_helmet','helmet').tier('silver').tag("dq:tier1/armor")
  item.create('silver_chestplate','chestplate').tier('silver').tag("dq:tier1/armor")
  item.create('silver_leggings','leggings').tier('silver').tag("dq:tier1/armor")
  item.create('silver_boots','boots').tier('silver').tag("dq:tier1/armor")

  item.create('lead_helmet','helmet').tier('lead').tag("dq:tier1/armor")
  item.create('lead_chestplate','chestplate').tier('lead').tag("dq:tier1/armor")
  item.create('lead_leggings','leggings').tier('lead').tag("dq:tier1/armor")
  item.create('lead_boots','boots').tier('lead').tag("dq:tier1/armor")
  
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

  item.create('natural_clay_blend').tag('dq:tier3/component')
  item.create('blast_brick').tag('dq:tier3/component')
  item.create('arcane_leather').tag('dq:tier0/component')
  item.create('recipe_changed')
  item.create('primitive_handle')
  item.create('pipe_sealant')
  item.create('shapeshifting_root').displayName('Shapeshifting Root')
  item.create('greater_shapeshifting_root').displayName('Greater Shapeshifting Root')
  item.create("gold_upgrade_parts").displayName("Gold Upgrade Parts")
  item.create("steel_upgrade_parts")
  item.create('unassembled_clock').displayName('Unassembled Clock')
  item.create('unassembled_compass').displayName('Unassembled Compass')
  item.create("dimension_ripper").displayName("Dimension Ripper").tag("twilightforest:portal/activator")
  item.create('sapling_ball').displayName('Sapling Ball')
  item.create('magic_book').displayName('Magical Book')
  item.create('fiery_clay_blend').displayName('Fiery Clay Blend')
  item.create('basic_token').displayName('Basic Token')
  
})

