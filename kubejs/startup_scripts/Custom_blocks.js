StartupEvents.registry("block", (event) => {
    
	event.create("primitive_machine") // Create a new block
    .displayName("Primitive Machine Casing") // Set a custom name
    .soundType("stone") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(4.0) // Set resistance (to explosions, etc)
    .tagBoth("tier1/component") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_stone_tool') // the tool tier must be at least iron
	
	
	event.create("basic_magic_machine") // Create a new block
    .displayName("Basic Magic Machine") // Set a custom name
    .soundType("amethyst") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(6.0) // Set resistance (to explosions, etc)
    .tagBoth("tier1/component") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_stone_tool') // the tool tier must be at least iron
	.texture('up', 'kubejs:block/basic_magic_machine_top')
	.texture('down', 'kubejs:block/basic_magic_machine_top')
	

    event.create("magical_generator_block") // Create a new block
    .soundType("amethyst") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(6.0) // Set resistance (to explosions, etc)
    .tagBoth("tier1/component") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_stone_tool') // the tool tier must be at least iron
	
	event.create("magic_machine") // Create a new block
    .displayName("Magic Machine") // Set a custom name
    .soundType("amethyst") // Set a material (affects the sounds and some properties)
    .hardness(1.2) // Set hardness (affects mining time)
    .resistance(6.0) // Set resistance (to explosions, etc)
    .tagBoth("tier2/component") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
	.texture('up', 'kubejs:block/magic_machine_top')
	.texture('down', 'kubejs:block/magic_machine_top')
	
	
	
	event.create("andesite_machine") // Create a new block
    .displayName("Andesite Machine Casing") // Set a custom name
    .material("metal") // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(8.0) // Set resistance (to explosions, etc)
    .tagBoth("tier3/component") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
	.texture('up', 'kubejs:block/andesite_machine_top')
	.texture('down', 'kubejs:block/andesite_machine_bot')
	

    event.create("pressing_catalyst","falling") // Create a new block
    .displayName("Pressing Catalyst") // Set a custom name
    .soundType("anvil") // Set a material (affects the sounds and some properties)
    .hardness(1.5) // Set hardness (affects mining time)
    .resistance(8.0) // Set resistance (to explosions, etc)
    .tagBoth("tier2/component") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
	.texture('up', 'kubejs:block/anvil')
	.texture('down', 'kubejs:block/anvil')
	
	
	event.create("steel_machine") // Create a new block
    .displayName("Steel Machine Casing") // Set a custom name
    .material("anvil") // Set a material (affects the sounds and some properties)
    .hardness(3.0) // Set hardness (affects mining time)
    .resistance(12.0) // Set resistance (to explosions, etc)
    .tagBoth("tier4/component") // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
	.texture('up', 'kubejs:block/steel_machine_top')
	.texture('down', 'kubejs:block/steel_machine_bot')
	

    event.create("gold_leaf_block")
    .displayName("Gold Leaf Block")
    .soundType("moss")
    .hardness("0.2")
    .resistance("0.5")
    .tagBlock("mineable/hoe")

    event.create("ivy_block","basic")
    .displayName("Ivy Block")
    .soundType("moss")
    .hardness("0.2")
    .resistance("0.5")
    .tagBlock("mineable/hoe")
    .tagBlock("minecraft:climbable")

    event.create("sturdy_deepslate")
    .textureAll("minecraft:block/blast_furnace_top")
    .displayName("Sturdy Deepslate")
    .soundType("polished_deepslate")
    .hardness("3")
    .resistance("6")
    .tagBlock("mineable/pickaxe")

    event.create("sturdy_deepslate_slab","slab")
    .textureAll("minecraft:block/blast_furnace_top")
    .soundType("polished_deepslate")
    .hardness("3")
    .resistance("6")
    .tagBlock("mineable/pickaxe")

    event.create("sturdy_deepslate_plate")
    .textureAll("minecraft:block/blast_furnace_top")
    .box(0, 0, 0, 16, 3, 16)
    .soundType("polished_deepslate")
    .hardness("3")
    .resistance("6")
    .tagBlock("mineable/pickaxe")

    event.create("deepslate_rune","cardinal")
    .model('kubejs:block/deepslate_rune')
    .box(2, 0, 0, 9, 3, 1)
    .box(1, 0, 1, 10, 3, 4)
    .box(5, 0, 4, 13, 3, 16)
    .box(0, 0, 4, 5, 3, 11)
    .box(10, 0, 2, 11, 3, 4)
    .box(13, 0, 5, 10, 3, 8)
    .box(14, 0, 7, 15, 3, 8)
    .box(13, 0, 12, 15, 3, 14)
    .box(13, 0, 14, 14, 3, 15)
    .box(2, 0, 11, 5, 3, 13)
    .box(1, 0, 11, 2, 3, 12)
    .box(4, 0, 13, 5, 3, 15)
    .box(13, 0, 5, 14, 3, 8)
    .box(13, 0, 8, 16, 3, 12)
    .renderType('cutout')
    .soundType("polished_deepslate")
    .hardness("3")
    .resistance("6")
    .tagBlock("mineable/pickaxe")

    event.create("broken_spawner")
    .textureAll("minecraft:block/spawner")
    .displayName("Broken Spawner")
    .soundType("stone")
    .hardness("3")
    .resistance("6")
    .tagBlock("mineable/pickaxe")

    event.create("polished_planks")
    .textureAll("minecraft:block/beehive_end")
    .displayName("Polished Planks")
    .soundType("wood")
    .hardness("1")
    .resistance("3")
    .tagBlock("mineable/axe")

    event.create("stacked_planks")
    .textureAll("minecraft:block/composter_side")
    .displayName("Stacked Planks")
    .soundType("wood")
    .hardness("1")
    .resistance("3")
    .tagBlock("mineable/axe")

    event.create("packed_planks")
    .textureAll("minecraft:block/composter_bottom")
    .displayName("Packed Planks")
    .soundType("wood")
    .hardness("1")
    .resistance("3")
    .tagBlock("mineable/axe")

    event.create("sturdy_basalt")
    .textureAll("rubinated_nether:block/freezer/freezer_bottom")
    .displayName("Copper Reinforced Sturdy Basalt")
    .soundType("gilded_blackstone")
    .hardness("3")
    .resistance("6")
    .tagBlock("mineable/pickaxe")
    .tagBlock('minecraft:needs_iron_tool')

    event.create("inert_alloy_block")
    .soundType("metal")
    .hardness("2")
    .resistance("6")
    .tagBlock("mineable/pickaxe")
    .tagBlock('minecraft:needs_iron_tool')

    event.create("arcane_alloy_block")
    .soundType("metal")
    .hardness("2")
    .resistance("6")
    .tagBlock("mineable/pickaxe")
    .tagBlock('minecraft:needs_iron_tool')

    

	
})