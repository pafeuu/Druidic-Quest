
ServerEvents.recipes(event => {
  
	const tooltype = ['hoe','sword','pickaxe','axe','shovel'];

	let DimenstionalTools = ['twilightforest:ironwood_hoe','twilightforest:ironwood_sword','twilightforest:ironwood_pickaxe','twilightforest:ironwood_axe','twilightforest:ironwood_shovel',
	'twilightforest:steeleaf_hoe','twilightforest:steeleaf_sword','twilightforest:steeleaf_pickaxe','twilightforest:steeleaf_axe','twilightforest:steeleaf_shovel','aether:zanite_hoe',
	'aether:zanite_sword','aether:zanite_pickaxe','aether:zanite_axe','aether:zanite_shovel','aether:gravitite_hoe','aether:gravitite_sword','aether:gravitite_pickaxe','aether:gravitite_axe',
	'deep_aether:skyjade_hoe','deep_aether:skyjade_sword','deep_aether:skyjade_pickaxe','deep_aether:skyjade_axe','deep_aether:skyjade_shovel','minecraft:netherite_hoe','minecraft:netherite_sword',
	'minecraft:netherite_pickaxe','minecraft:netherite_axe','minecraft:netherite_shovel']
	

	DimenstionalTools.forEach(tool => {
        event.shapeless(tool, ['enigmaticlegacy:extradimensional_eye', tool]).modifyResult((grid, result) => {
          let _tool = grid.find(Ingredient.of(tool));
          if(!_tool.hasEnchantment('majruszsenchantments:telekinesis', 1)){
            _tool = _tool.enchant('majruszsenchantments:telekinesis', 1);
          }
          return _tool;
        })
    })
	
	event.remove({output:'#minecraft:axes'})
	event.remove({output:'#minecraft:pickaxes'})
	event.remove({output:'#minecraft:shovels'})
	event.remove({output:'#minecraft:hoes'})
	event.remove({output:'#minecraft:swords'})

	//==================================================Functions==================================================

	function tool(output,material,rod,binding){// Creates simple workbench recipes with bindings and tool rods

		event.shaped(
			Item.of(output+'_pickaxe'), 
			[
			  'FFF',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  event.shaped(
			Item.of(output+'_axe'), 
			[
			  'FF ',
			  'FS ', 
			  'XS '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  
		  event.shaped(
			Item.of(output+'_shovel'), 
			[
			  ' F ',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
	  
		  event.shaped(
			Item.of(output+'_hoe'), 
			[
			  'FF ',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  
		  event.shaped(
			Item.of(output+'_sword'), 
			[
			  ' F ',
			  'XF ', 
			  ' S '
			],
			{
			  F: material,
			  X: binding,
			  S: rod
			} 
		  )
	}

	function toolNoSword(output,material,rod,binding){// Creates simple workbench recipes with bindings and tool rods but without a sword recipe

		event.shaped(
			Item.of(output+'_pickaxe'), 
			[
			  'FFF',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  event.shaped(
			Item.of(output+'_axe'), 
			[
			  'FF ',
			  'FS ', 
			  'XS '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  
		  event.shaped(
			Item.of(output+'_shovel'), 
			[
			  ' F ',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
	  
		  event.shaped(
			Item.of(output+'_hoe'), 
			[
			  'FF ',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
	}

	

	//===============================================Tool Functionality=============================================

	//Chisel
	event.custom({
		"type": "lychee:block_interacting",
		"post": [
		  {
			"type": "place",
			"block": "minecraft:stone_slab"
		  },
		  {
			"type": "damage_item",
			"damage": 1
		  },
		  {
			"type": "drop_item",
			"item": "twigs:pebble",
			"count": 3
		  },
		  {
			"type": "execute",
			"command": "playsound minecraft:ui.stonecutter.take_result neutral @p"
		  }
		],
		"item_in": [
		  {
			"tag": "forge:tools/chisels"
		  }
		],
		"block_in": "minecraft:stone"
	  })

		
	
	  event.custom({
		"type": "lychee:block_interacting",
		"post": [
		  {
			"type": "place",
			"block": "minecraft:air"
		  },
		  {
			"type": "damage_item",
			"damage": 1,
			"target": "/item_in/0"
		  },
		  {
			"type": "drop_item",
			"item": "kubejs:primitive_mortar"
		  },
		  {
			"type": "execute",
			"command": "playsound minecraft:ui.stonecutter.take_result neutral @p",
			"hide": true
		  }
		],
		"item_in": [
		  {
			"tag": "forge:tools/chisels"
		  },
		  {
			"item": "flint"
		  }
		],
		"block_in": "minecraft:stone_slab"
	  })

	//Terraformer
	event.custom({
	"type": "lychee:block_interacting",
	"hide_in_viewer": true,
	"contextual":{
		"type": "location",
		"predicate":{
			"position":{
				"y":{
					"min": 60,
					"max": 320
				}
			}
		}
	},
	"post": [
		{
			"type": "drop_item",
			"item": "thermal:compost",
			"contextual":{
				"type": "chance",
				"chance": 0.1
			} 
		},
		{
			"type": "place",
			"block": "air"
		},
		{
			"type": "damage_item"
		}
	],
	"item_in": {
		"item": "kubejs:the_terraformer"
	},
	"block_in": {
		"tag": "alexsmobs:am_spawns"
	}
	})
	
	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/hammers"},
		block_in: "kubejs:sturdy_deepslate",
		post: [
			{type: "place", block: "kubejs:sturdy_deepslate_slab"},
			{type: "damage_item", damage: 8},
			{type: "execute", command: "playsound minecraft:block.deepslate.break neutral @p", hide: true}
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/hammers"},
		block_in: "kubejs:sturdy_deepslate_slab",
		post: [
			{type: "place", block: "kubejs:sturdy_deepslate_plate"},
			{type: "damage_item", damage: 4},
			{type: "execute", command: "playsound minecraft:block.deepslate.break neutral @p", hide: true}
		]
	})


	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/chisels"},
		block_in: "kubejs:sturdy_deepslate_plate",
		post: [
			{type: "place", block: "kubejs:deepslate_rune"},
			{type: "damage_item", damage: 1},
			{type: "execute", command: "playsound minecraft:block.deepslate.break neutral @p", hide: true}
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/chisels"},
		"hide_in_viewer": true,
		block_in: "kubejs:deepslate_rune",
		post: [
			{type: "place", block: "air"},
			{type: "drop_item", item: "kubejs:deepslate_rune"},
			{type: "damage_item", damage: 0}
		]
	})

	// Magical Feathers

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/magic_feather"},
		"hide_in_viewer": true,
		block_in: {tag:"forge:obsidian"},
		post: [
			{type: "place", block: "air"},
			{type: "drop_item", item: "minecraft:obsidian"},
			{type: "damage_item", damage: 1},
			{type: "execute", command: "playsound minecraft:block.amethyst_block.break neutral @p", hide: true}
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/magic_feather"},
		"hide_in_viewer": true,
		block_in: "minecraft:crying_obsidian",
		post: [
			{type: "place", block: "air"},
			{type: "drop_item", item: "minecraft:crying_obsidian"},
			{type: "damage_item", damage: 1},
			{type: "execute", command: "playsound minecraft:block.amethyst_block.break neutral @p",hide: true}
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/tier2_magic_feather"},
		"hide_in_viewer": true,
		block_in: "netherrack",
		contextual:{
			type: "location",
			predicate:{
				dimension: "the_nether",
			}
		},
		post: [
			{type: "explode", block: "air", radius: 5},
			{type: "damage_item", damage: 25},
			{type: "add_item_cooldown", s: 3},
			{type: "execute", command: "playsound minecraft:block.amethyst_block.break neutral @p",hide: true}
		]
	})
	
	event.custom({
		type: "lychee:block_interacting",
		item_in: {item:"kubejs:rainbow_feather"},
		"hide_in_viewer": true,
		block_in: "bedrock",
		contextual:{
			type: "location",
			predicate:{
				dimension: "the_nether",
				"position": {
            		"y": {
					"min": 100,
					"max": 150
				}
        }
				
			}
		},
		post: [
			{type: "place", block: "air"},
			{type: "damage_item", damage: 128},
			{type: "execute", command: "playsound minecraft:block.amethyst_block.break neutral @p",hide: true}
		]
	})

	//Royal Gueard Sword

	event.custom({
		type: "lychee:block_interacting",
		item_in: {item:"kubejs:royal_guard_sword"},
		block_in: "carved_pumpkin",
		post: [
			{type: "place", block: "air"},
			{type: "damage_item", damage: 100},
			{type: "add_item_cooldown", s: 30},
			{type: "execute", "command": "summon iron_golem ~ ~2 ~ {Health:100f,PlayerCreated:1b,CustomName:'{\"text\":\"Guard\",\"color\":\"aqua\",\"bold\":true}',Attributes:[{Name:generic.max_health,Base:100}]}", hide: true}
		]
	})

	//Keys

	event.custom({
		type: "lychee:block_interacting",
		"hide_in_viewer": true,
		post: [
		  {type: "drop_item", item:"kubejs:broken_spawner"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound design_decor:large_chain_break neutral @p", hide: true},
		  {type: "drop_item", item:"thermal:ruby"}
		],
		item_in: {
		  item: "kubejs:broken_key"
		},
		block_in: "minecraft:spawner"
	  })

	event.custom({
		type: "lychee:block_interacting",
		"hide_in_viewer": true,
		contextual:{
			type: "location",
			predicate:{
				dimension: "overworld"
			}
		},
		post: [
		  {type: "drop_item", item:"kubejs:broken_spawner"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.open neutral @p", hide: true},
		  {type: "delay", s: 0.5},
		  {type: "execute", command: "playsound minecraft:entity.experience_orb.pickup neutral @p"},
		  {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force"},
		  {type: "execute", command: "loot spawn ~ ~ ~ loot kubejs:chests/overworld_key"},
		  {type: "delay", s: 1},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.close neutral @p", hide: true}
		],
		item_in: {
		  item: "kubejs:overworld_key"
		},
		block_in: "minecraft:spawner"
	  })
	event.custom({
		type: "lychee:block_interacting",
		"hide_in_viewer": true,
		contextual:{
			type: "location",
			predicate:{
				dimension: "twilightforest:twilight_forest"
			}
		},
		post: [
		  {type: "drop_item", item:"kubejs:broken_spawner"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.open neutral @p", hide: true},
		  {type: "delay", s: 0.5},
		  {type: "execute", command: "playsound minecraft:entity.experience_orb.pickup neutral @p"},
		  {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force"},
		  {type: "execute", command: "loot spawn ~ ~ ~ loot kubejs:chests/twilight_key"},
		  {type: "delay", s: 1},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.close neutral @p", hide: true}
		],
		item_in: {
		  item: "kubejs:twilight_key"
		},
		block_in: "minecraft:spawner"
	  })
	///=============================================================== Shields ==========================================================

	event.shaped("twilightforest:knightmetal_shield",
		[
			"PPP",
			"PXP",
			"PPP"
		],
		{
			X: "shield",
			P: "#forge:plates/knightmetal"
		}
	).id("twilightforest:equipment/knightmetal_shield")

	event.shaped("ars_nouveau:enchanters_shield",
		[
			"YPY",
			"PXP",
			"YPY"
		],
		{
			X: "twilightforest:knightmetal_shield",
			P: "#forge:plates/source_alloy",
			Y: "#forge:plates/gold"
		}
	)

	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "kubejs:recipe_changed"
        ], 
	    "kubejs:recipe_change", // reagent
	    "ars_nouveau:enchanters_shield", // output
	    1000
	).id("ars_nouveau:enchanters_shield");

	///=============================================================== Tier 0 Tools ==========================================================

	toolNoSword("wizards_reborn:arcane_wood","wizards_reborn:arcane_wood_planks","wizards_reborn:arcane_wood_branch","#forge:ropes")

	event.shaped("kubejs:primitive_firestarter",
		[
			" F",
			"F "
		],
		{
			F: "flint"
		}
	)

	event.shaped("create:sand_paper",
		[
			"SFS",
			"SPS",
			"SFS"
		],
		{
			S: "sand",
			P: "paper",
			F: "flint"
		}
	).id("create:crafting/materials/sand_paper")

	event.shaped("create:red_sand_paper",
		[
			"SFS",
			"SPS",
			"SFS"
		],
		{
			S: "red_sand",
			P: "paper",
			F: "flint"
		}
	).id("create:crafting/materials/red_sand_paper")

	event.remove({id:"create:sandpaper_polishing/rose_quartz"})

	event.shaped("kubejs:primitive_saw",
		[
			"F  ",
			" FS",
			"  S"
		],
		{F:"flint",
		 S:"stick"}
	).id("kubejs:primitive_saw")

	event.shaped("kubejs:primitive_mortar",
		[
			" A ",
			"IAI",
			"III"
		],
		{A:"flint",
		 I:"stone"}
	).id("kubejs:primitive_mortar")

	event.shaped('kubejs:primitive_chisel',
		[
			"  F",
			" F ",
			"S  "
		],
		{
			F: "flint",
			S: "#forge:rods/wooden"
		}
	).id("kubejs:primitive_chisel")

	event.shaped('kubejs:primitive_shield',
		[
			"FPF",
			"PHP",
			"FPF"
		],
		{
			H: "kubejs:primitive_handle",
			F: "flint",
			P: "#minecraft:planks"
		}
	)

	event.shaped('kubejs:primitive_shears',
		[
			" F ",
			"SPF",
			" S "
		],
		{
			S: "#forge:rods/wooden",
			F: "flint",
			P: "#minecraft:planks"
		}
	)

	
	event.shaped('effortlessbuilding:reach_upgrade1',
		[
			"CEC",
			"BXB",
			"CEC"
		],
		{
			X: "ender_pearl",
			E: "emerald",
			C: "farmersdelight:canvas",
			B: "kubejs:sapling_ball"
		}
	).id("effortlessbuilding:reach_upgrade1")

	

	event.shaped("kubejs:flint_spear",
		[
			"  F",
			" S ",
			"S  "
		],
		{
			F: "minecraft:flint",
			S: "minecraft:stick"
		}
	)

	event.shaped("kubejs:stone_claymore",
		[
			" B ",
			" B ",
			"CSC"
		],
		{
			C: "cobblestone",
			S: "stick",
			B: "quark:sturdy_stone"
		}
	)
	
	event.custom({
		"type": "lychee:item_exploding",
		 "post": [
		   {
			 "type": "drop_item",
			 "item": "ars_nouveau:ritual_cloudshaping",
			 "count": 2
		   }
		 ],
		 "item_in": [
		   {
			 "tag": "forge:ingots/gold",
		   },
		   {
			 "item": "naturesaura:ancient_log",
		   },
		   {
			 "item": "naturesaura:ancient_log",
		   },
		   {
			 "tag": "forge:flowers/golden",
		   },
		   {
			 "tag": "forge:flowers/golden",
		   }
		   
		 ]
	   
   })

   event.custom({
	"type": "lychee:block_interacting",
	"item_in": {
		"item": "ars_nouveau:ritual_cloudshaping"
	},
	"block_in": "minecraft:sunflower",
	"post": [
	{
		"type": "execute",
		"command": "weather clear"      
	},
	{
		"type": "execute",
		"command": "playsound irons_spellbooks:cast.generic.holy neutral @p",
		"secret": true
	}
	]
})
	event.remove({output:"effortlessbuilding:randomizer_bag"})
	event.remove({output:"effortlessbuilding:golden_randomizer_bag"})
	event.remove({output:"effortlessbuilding:diamond_randomizer_bag"})

	event.remove({output:"thermal:satchel"})
	event.shaped(
		Item.of('thermal:satchel'), 
		[
		  'CFC',
		  'FXF', 
		  'CFC'
		],
		{
		  C: '#forge:leather',
		  F: '#minecraft:wool',
		  X: "#forge:raw_materials/tin"
		}
	  )
	event.shaped(
		Item.of('effortlessbuilding:randomizer_bag'), 
		[
		  'FFF',
		  'FXF', 
		  'FFF'
		],
		{
		  F: '#forge:leather',
		  X: "quark:trowel"
		}
	  )

	

		  	
	  event.remove({output:"archers_paradox:lightning_arrow"})
	  event.shaped(
		Item.of('2x archers_paradox:lightning_arrow'), 
		[
		  ' F ',
		  'FXF',
		  ' F '
		],
		{
		  F: 'minecraft:arrow',
		  X: 'thermal:lightning_charge'
		}
	  )



	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:ring_of_potential"
			},
			{
				"tag": "forge:storage_blocks/lapis"
			},
			
			{
				"tag": "forge:plates/gold"
			},
			{
				"tag": "forge:plates/gold"
			},
			{
				"tag": "forge:plates/gold"
			},
			{
				"tag": "forge:plates/gold"
			},
			{
				"tag": "forge:plates/gold"
			},
			{
				"tag": "forge:plates/gold"
			}
			
		],
		"sapling": {
			"item": "minecraft:acacia_sapling"
		},
		"output": {
			"item": "enigmaticlegacy:golden_ring",
			"count": 1
		},
		"time": 200
	})
	event.remove({id:"enigmaticlegacy:magnet_ring"})
	event.remove({id:"enigmaticlegacy:golden_ring"})
	
	event.shaped(
	  Item.of('minecraft:stone_axe', '{Damage:110}'), 
	  [
		'FF',
		'FS', 
	  ],
	  {
		F: 'twigs:pebble',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_pickaxe', '{Damage:120}'), 
	  [
		'FFF',
		' S ', 
		' S '
	  ],
	  {
		F: 'twigs:pebble',
		S: 'minecraft:stick'
	  }
	)
	
	
	event.shaped(
	  Item.of('minecraft:stone_shovel', '{Damage:120}'), 
	  [
		' F ',
		' S ', 
		' S '
	  ],
	  {
		F: 'twigs:pebble',
		S: 'minecraft:stick'
	  }
	)
	event.shaped(
	  Item.of('minecraft:stone_hoe', '{Damage:120}'), 
	  [
		'FF ',
		' S ', 
		' S '
	  ],
	  {
		F: 'twigs:pebble',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_sword', '{Damage:120}'), 
	  [
		' F ',
		' F ', 
		' S '
	  ],
	  {
		F: 'twigs:pebble',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_sword'), 
	  [
		' F ',
		' F ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_pickaxe'), 
	  [
		'FFF',
		' S ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_axe'), 
	  [
		'FF ',
		'FS ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_shovel'), 
	  [
		' F ',
		' S ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: 'minecraft:stick'
	  }
	)
	event.shaped(
	  Item.of('minecraft:stone_hoe'), 
	  [
		'FF ',
		' S ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_pickaxe'), 
	  [
		'FFF',
		' S ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_axe'), 
	  [
		'FF ',
		'FS ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_shovel'), 
	  [
		' F ',
		' S ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: 'minecraft:stick'
	  }
	)
	event.shaped(
	  Item.of('minecraft:wooden_hoe'), 
	  [
		'FF ',
		' S ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_sword'), 
	  [
		' F ',
		' F ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_pickaxe', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint Pickaxe with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		'FFF',
		'XS ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_axe', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint Axe with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		'FFX',
		'FS ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_shovel', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint Shovel with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		' FX',
		' S ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: 'minecraft:stick'
	  }
	)
	event.shaped(
	  Item.of('minecraft:wooden_hoe', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint hoe with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		'FF ',
		'XS ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: 'minecraft:stick'
	  }
	 )
	 event.shaped(
	  Item.of('minecraft:wooden_sword', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint Sword with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		' F ',
		' F ', 
		'XS '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: 'minecraft:stick'
	  }
	)
	
	
	/// ======================================================================= Tier 1 Tools ============================================================================
	
	event.shaped("thermal:fluid_reservoir",
		[
			"CRC",
			"TBT",
			"TTT"
		],
		{
			C: "#forge:gears/copper",
			R: "thermal:cured_rubber",
			T: "create:fluid_tank",
			B: "bucket"
		}
	).id("thermal:fluid_reservoir")

	event.shaped("thermal:detonator",
		[
			" R ",
			"TET",
			"TTT"
		],
		{
			T: "#forge:plates/tin",
			E: "forbidden_arcanus:ender_pearl_fragment",
			R: "minecraft:redstone_torch"
		}
	).id("thermal:tools/detonator")

	event.shaped("flint_and_steel",
		[
			"III",
			"IFI",
			"III"
		],
		{
			I: "#forge:ingots/iron",
			F: "kubejs:primitive_firestarter"
		}
	).id("minecraft:flint_and_steel")

	event.shaped("kubejs:sacrificial_dagger",
		[
			"  O",
			"GO ",
			"RG "
		],
		{
			O: "obsidian",
			G: "#forge:plates/gold",
			R: "#forge:rods/gold"
		}
	).id("kubejs:sacrificial_dagger")
	
	event.shaped("create:clipboard",
		[
			"C",
			"P",
			"W"
		],
		{
			C: "#forge:nuggets/iron",
			P: "paper",
			W: "#forge:plates/wooden"
		}
	).id("create:crafting/appliances/clipboard")

	event.shaped("create:brown_toolbox",
		[
			"WRW",
			"GSG",
			"WWW"
		],
		{
			W: "#forge:plates/wooden",
			S: "supplementaries:sack",
			G: "#forge:plates/gold",
			R: "#forge:rods/gold"
		}
	).id("create:crafting/curiosities/brown_toolbox")

	tool('minecraft:iron','#forge:ingots/iron','#forge:rods/treated_wood','string')
	tool('kubejs:copper','#forge:ingots/copper','#forge:rods/treated_wood','string')
	tool('kubejs:silver','#forge:ingots/silver','#forge:rods/treated_wood','string')
	tool('kubejs:lead','#forge:ingots/lead','#forge:rods/treated_wood','string')

	

	event.recipes.naturesaura.tree_ritual(Item.of('kubejs:primitive_mining_hammer', '{Modifier:"forbidden_arcanus:demolishing",display:{Name:\'{"italic":false,"text":"Primitive Mining Hammer"}\'}}'),["stone_pickaxe","#forge:rods/treated_wood","twilightforest:naga_scale","twilightforest:naga_scale","quark:sturdy_stone","quark:sturdy_stone","quark:sturdy_stone","quark:sturdy_stone"],"minecraft:oak_sapling",200).id("kubejs:primitive_mining_hammer")
	
	event.recipes.naturesaura.tree_ritual(Item.of('kubejs:primitive_excavator', '{Modifier:"forbidden_arcanus:demolishing",display:{Name:\'{"italic":false,"text":"Primitive Excavator"}\'}}'),["stone_shovel","#forge:rods/treated_wood","twilightforest:naga_scale","twilightforest:naga_scale","quark:sturdy_stone","quark:sturdy_stone","quark:sturdy_stone","quark:sturdy_stone"],"minecraft:oak_sapling",200).id("kubejs:primitive_excavator")
	

	event.shaped("kubejs:the_ice_cube",
		[
			" I ",
			"III",
			" I "
		],
		{I:"ice"}
	).id("kubejs:the_ice_cube")

	/// ======================================================================= Tier 2 Tools ============================================================================
	
	event.smithing("create:copper_diving_boots","#forge:storage_blocks/lead","kubejs:copper_boots","ars_nouveau:water_essence").id("create:crafting/appliances/copper_diving_boots")
	event.smithing("create:copper_diving_helmet","thermal:obsidian_glass","kubejs:copper_helmet","ars_nouveau:water_essence").id("create:crafting/appliances/copper_diving_helmet")

	event.shaped("create:copper_backtank",
		[
			"CRC",
			"CAC",
			"CWC"
		],
		{
			C: "#forge:plates/copper",
			R: "#forge:rods/iron",
			A: "ars_nouveau:air_essence",
			W: "ars_nouveau:water_essence"
		}
	).id("create:crafting/appliances/copper_backtank")

	event.shaped("kubejs:cross_necklace",
		[
			"CCC",
			"CTC",
			"CXC"
		],
		{T:"ars_nouveau:dull_trinket",
		 C:"chain",
		 X:"kubejs:bejeweled_crucifix"}
	).id("kubejs:cross_necklace")

	event.shaped("aether:iron_ring",
		[
			" X ",
			"XRX",
			" X "
		],
		{X:"#forge:ingots/iron",
		 R:"ars_nouveau:ring_of_potential"}
	).id("aether:iron_ring")

	event.shaped("aether:golden_ring",
		[
			" X ",
			"XRX",
			" X "
		],
		{X:"#forge:ingots/gold",
		 R:"ars_nouveau:ring_of_potential"}
	).id("aether:golden_ring")

	event.shaped("kubejs:daybloom_ring",
		[
			" XF",
			"XRX",
			" X "
		],
		{X:"#forge:ingots/silver",
		 R:"aether:golden_ring",
		 F:"minecraft:dandelion"}
	).id("kubejs:daybloom_ring")


	event.shaped('shield',
		[
			"PWP",
			"WSW",
			"PWP"
		],
		{
			W: "#minecraft:planks",
			S: "kubejs:primitive_shield",
			P: "#forge:plates/iron"
		}
	).id("minecraft:shield")

	event.remove({id:"aether:skyroot_iron_vanilla_shield"})
	event.remove({id:"aether:wood_zanite_vanilla_shield"})
	event.remove({id:"aether:skyroot_zanite_vanilla_shield"})

	event.shaped('effortlessbuilding:reach_upgrade2',
		[
			"CBC",
			"BXB",
			"CBC"
		],
		{
			X: "effortlessbuilding:reach_upgrade1",
			C: "#forge:storage_blocks/copper",
			B: "twilightforest:naga_scale"
		}
	).id("effortlessbuilding:reach_upgrade2")

	event.shaped(
		Item.of('effortlessbuilding:golden_randomizer_bag'), 
		[
		  'FFF',
		  'FXF', 
		  'FFF'
		],
		{
		  F: '#forge:plates/gold',
		  X: "effortlessbuilding:randomizer_bag"
		}
	  )
	event.shaped(
		Item.of('effortlessbuilding:diamond_randomizer_bag'), 
		[
		  'FFF',
		  'FXF', 
		  'FFF'
		],
		{
		  F: '#forge:plates/diamond',
		  X: "effortlessbuilding:golden_randomizer_bag"
		}
	  )
	
	event.custom({
		"type": "rubinated_nether:freezing",
		"category": "freezable_misc",
		"cookingtime": 2000,
		"experience": 1.0,
		"ingredient": {
			"item": "kubejs:chill_blade"
		},
		"result": Item.of('kubejs:ice_blade', '{Damage:0,ISB_Spells:{data:[{id:"irons_spellbooks:icicle",index:0,level:5,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:1b}}')
	})

	event.custom({
		type: "lychee:item_inside",
		item_in:[
			{item:"minecraft:iron_sword"},
			{item:"quark:diamond_heart"}
		],
		post:{type: "drop_item", item: "kubejs:chill_blade"},
		block_in: "minecraft:powder_snow"
	})

	event.shaped("aether:chainmail_gloves",
	  [
		'III',
		'IMI', 
		'III' 
	  ],
	  {
		I: 'chain',
		M: 'aether:leather_gloves'

	  }
	)

	event.shaped("aether_redux:ring_of_wisdom",
		[
		  'AIA',
		  'IXI', 
		  'AIA' 
		],
		{
		  A: 'forbidden_arcanus:xpetrified_orb',
		  I: '#forge:ingots/silver',
		  X: 'aether_redux:enchanted_ring'
  
		}
	  ).id("aether_redux:ring_of_wisdom")
	
	event.shaped("aether_redux:shroom_ring",
		[
		  'AYA',
		  'IXI', 
		  'AIA' 
		],
		{
		  A: 'naturesaura:aura_shroom',
		  Y: '#forge:gems/sapphire',
		  I: 'quark:glow_shroom',
		  X: 'aether_redux:enchanted_ring'
  
		}
	  ).id("aether_redux:shroom_ring")

	event.shaped("aether:iron_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:plates/iron',
		  M: 'aether:chainmail_gloves'
  
		}
	  )

	event.shaped("umbral_skies:knightmetal_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:ingots/knightmetal',
		  M: 'aether:iron_gloves'
  
		}
	  )
	
	  event.shaped("umbral_skies:arctic_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: 'forbidden_arcanus:cloth',
		  M: 'aether:leather_gloves'
		}
	  )

	  event.shaped("umbral_skies:yeti_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: 'twilightforest:alpha_yeti_fur',
		  M: 'umbral_skies:arctic_gloves'
		}
	  )

	  event.shaped("umbral_skies:naga_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: 'twilightforest:naga_scale',
		  M: 'aether:leather_gloves'
		}
	  )

	  event.shaped("umbral_skies:ironwood_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:ingots/ironwood',
		  M: 'umbral_skies:naga_gloves'
		}
	  )

	  event.shaped("umbral_skies:steeleaf_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:ingots/steeleaf',
		  M: 'umbral_skies:ironwood_gloves'
		}
	  )

	event.shaped(
		Item.of('kubejs:metal_crucifix'), 
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:plates/lead',
		  M: 'kubejs:wooden_crucifix'

		}
	  )

	  event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{"item": "kubejs:copper_sword"},
			{"item": "oxidized_copper"},
			{"tag": "forge:rods/copper"},
			{"tag": "forge:rods/copper"},
			{"item": "kubejs:copper_sword"},
			{"item": "oxidized_copper"},
			{"item": "kubejs:copper_sword"},
			{"item": "oxidized_copper"}	
		],
		"sapling": {"item": "minecraft:oak_sapling"},
		"output": {"item": 'kubejs:copper_trident'},
		"time": 200
		})
	event.recipes.naturesaura.tree_ritual(Item.of('kubejs:silver_katana').enchant('minecraft:smite', 2).enchant('minecraft:sweeping', 1),[
		"kubejs:silver_sword",
		"thermal:gold_gear",
		"#forge:rods/gold",
		"#forge:rods/gold",
		"#forge:rods/silver",
		"#forge:rods/silver",
		"#forge:rods/silver",
		"#forge:rods/silver"],
		"minecraft:birch_sapling",200).id("kubejs:silver_katana")
	
	event.recipes.naturesaura.tree_ritual("kubejs:lead_waraxe",[
		"quark:sturdy_stone",
		"quark:sturdy_stone",
		"fermented_spider_eye",
		"fermented_spider_eye",
		"kubejs:lead_axe",
		"#forge:plates/lead",
		"kubejs:lead_axe",
		"#forge:plates/lead"],"minecraft:spruce_sapling",200).id("kubejs:lead_waraxe")
	
	event.recipes.naturesaura.tree_ritual(Item.of('kubejs:iron_scythe'),[
		"iron_sword",
		"#forge:rods/iron",
		"#forge:plates/iron",
		"#forge:plates/iron",
		"iron_hoe",
		"#forge:rods/silver",
		"iron_hoe",
		"#forge:rods/silver"],
		"minecraft:oak_sapling",200).id("kubejs:iron_scythe")
	
	
	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:dull_trinket"
			},
			{
				"tag": "forge:plates/gold"
			},
			
			{
				"item": "leather_helmet"
			},
			{
				"item": "leather_chestplate"
			},
			{
				"item": "leather_leggings"
			},
			{
				"item": "leather_boots"
			},
			{
				"item": "kubejs:silver_hoe"
			},
			{
				"item": "kubejs:silver_sword"
			}
			
		],
		"sapling": {
			"item": "ars_nouveau:blue_archwood_sapling"
		},
		"output": {
			"item": 'enigmaticlegacy:enigmatic_amulet',
			"nbt":{
				"AssignedColor": 0.2
			},
			"count": 1
		},
		"time": 200
	})

	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:dull_trinket"
			},
			{
				"tag": "forge:plates/gold"
			},
			
			{
				"item": "leather_helmet"
			},
			{
				"item": "leather_chestplate"
			},
			{
				"item": "leather_leggings"
			},
			{
				"item": "leather_boots"
			},
			{
				"item": "kubejs:silver_hoe"
			},
			{
				"item": "kubejs:silver_sword"
			}
			
		],
		"sapling": {
			"item": "ars_nouveau:blue_archwood_sapling"
		},
		"output": {
			"item": 'enigmaticlegacy:enigmatic_amulet',
			"nbt":{
				"AssignedColor": 0.2
			},
			"count": 1
		},
		"time": 200
	})

	event.remove({output:"enigmaticlegacy:mining_charm"})
	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:dull_trinket"
			},
			{
				"item": "kubejs:gold_upgrade_smithing_template"
			},
			
			{
				"tag": "forge:storage_blocks/diamond"
			},
			{
				"item": "enigmaticlegacy:earth_heart"
			},
			{
				"tag": "forge:plates/gold"
			},
			{
				"tag": "forge:plates/gold"
			},
			{
				"tag": "forge:plates/gold"
			},
			{
				"tag": "forge:plates/gold"
			}
			
		],
		"sapling": {
			"item": "wizards_reborn:arcane_wood_sapling"
		},
		"output": {
			"item": 'enigmaticlegacy:mining_charm',
			"count": 1
		},
		"time": 200
	})

	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:dull_trinket"
			},
			{
				"item": "netherite_upgrade_smithing_template"
			},
			
			{
				"item": "minecraft:golden_sword"
			},
			{
				"item": "skeleton_skull"
			},
			{
				"tag": "forge:plates/netherite"
			},
			{
				"tag": "forge:plates/fiery"
			},
			{
				"tag": "forge:plates/fiery"
			},
			{
				"tag": "forge:plates/netherite"
			}
			
		],
		"sapling": {
			"item": "minecraft:crimson_fungus"
		},
		"output": {
			"item": 'enigmaticlegacy:monster_charm',
			"count": 1
		},
		"time": 200
	}).id("enigmaticlegacy:monster_charm")

	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:dull_trinket"
			},
			{
				"tag": "forge:plates/gold"
			},
			
			{
				"item": "wooden_sword"
			},
			{
				"item": "iron_sword"
			},
			{
				"item": "stone_sword"
			},
			{
				"item": "kubejs:silver_sword"
			},
			{
				"item": "kubejs:lead_sword"
			},
			{
				"item": "kubejs:copper_sword"
			}
			
		],
		"sapling": {
			"item": "ars_nouveau:red_archwood_sapling"
		},
		"output": {
			"item": 'enigmaticlegacy:enigmatic_amulet',
			"nbt":{
				"AssignedColor": 0.1
			},
			"count": 1
		},
		"time": 200
	})

	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:dull_trinket"
			},
			{
				"tag": "forge:plates/gold"
			},
			
			{
				"item": "kubejs:copper_helmet"
			},
			{
				"item": "kubejs:copper_chestplate"
			},
			{
				"item": "kubejs:copper_leggings"
			},
			{
				"item": "kubejs:copper_boots"
			},
			{
				"item": "kubejs:copper_pickaxe"
			},
			{
				"item": "iron_pickaxe"
			}
			
		],
		"sapling": {
			"item": "ars_nouveau:green_archwood_sapling"
		},
		"output": {
			"item": 'enigmaticlegacy:enigmatic_amulet',
			"nbt":{
				"AssignedColor": 0.5
			},
			"count": 1
		},
		"time": 200
	})

	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:dull_trinket"
			},
			{
				"tag": "forge:plates/gold"
			},
			
			{
				"item": "shield"
			},
			{
				"item": "forbidden_arcanus:mortem_helmet"
			},
			{
				"item": "forbidden_arcanus:mortem_chestplate"
			},
			{
				"item": "forbidden_arcanus:mortem_leggings"
			},
			{
				"item": "forbidden_arcanus:mortem_boots"
			},
			{
				"item": "ars_nouveau:bastion_pod"
			}
			
		],
		"sapling": {
			"item": "ars_nouveau:purple_archwood_sapling"
		},
		"output": {
			"item": 'enigmaticlegacy:enigmatic_amulet',
			"nbt":{
				"AssignedColor": 0.3
			},
			"count": 1
		},
		"time": 200
	})

	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:dull_trinket"
			},
			{
				"tag": "forge:plates/gold"
			},
			
			{
				"item": "feather"
			},
			{
				"item": "alexsmobs:roadrunner_feather"
			},
			{
				"item": "alexsmobs:emu_feather"
			},
			{
				"item": "supplementaries:feather_block"
			},
			{
				"item": "quark:bottled_cloud"
			},
			{
				"item": "hay_block"
			}
			
		],
		"sapling": {
			"item": "ars_nouveau:purple_archwood_sapling"
		},
		"output": {
			"item": 'enigmaticlegacy:enigmatic_amulet',
			"nbt":{
				"AssignedColor": 0.4
			},
			"count": 1
		},
		"time": 200
	})

	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:dull_trinket"
			},
			{
				"tag": "forge:plates/gold"
			},
			
			{
				"item": "cod"
			},
			{
				"item": "salmon"
			},
			{
				"item": "pufferfish"
			},
			{
				"tag": "minecraft:boats"
			},
			{
				"item": "alexsmobs:flying_fish"
			},
			{
				"item": "tropical_fish"
			}
			
		],
		"sapling": {
			"item": "ars_nouveau:blue_archwood_sapling"
		},
		"output": {
			"item": 'enigmaticlegacy:enigmatic_amulet',
			"nbt":{
				"AssignedColor": 0.7
			},
			"count": 1
		},
		"time": 200
	})

	

	event.remove({output:"enigmaticlegacy:extradimensional_eye"})
	event.shaped(
		Item.of('enigmaticlegacy:extradimensional_eye'), 
		[
		  'EGE',
		  'GXG', 
		  'EGE'
		],
		{
		  X: 'minecraft:lead',
		  E: 'forbidden_arcanus:ender_pearl_fragment',
		  G: '#forge:plates/gold'
		}
	  )
	event.remove({output:'naturesaura:light_staff'})
	event.custom({
		 "type": "lychee:lightning_channeling",
		  "post": [
			{
			  "type": "drop_item",
			  "item": "naturesaura:light_staff"
			},
			{
				"type": "execute",
				"command": "playsound irons_spellbooks:cast.generic.holy neutral @p",
				"hide": "true"
			}
		  ],
		  "item_in": [
			{
			  "item": "minecraft:glowstone",
			},
			{
			  "item": "farmersdelight:glow_berry_custard",
			},
			{
			  "item": "naturesaura:ancient_stick",
			},
			{
			  "item": "naturesaura:ancient_stick",
			},
			{
			  "item": "naturesaura:token_fear"
			}
		  ]
	})

	event.custom({
		"type": "lychee:lightning_channeling",
		 "post": [
		   {
			 "type": "drop_item",
			 "item": "forbidden_arcanus:quantum_catcher"
		   },
		   {
			   "type": "execute",
			   "command": "playsound irons_spellbooks:cast.generic.lightning neutral @p",
			   "hide": "true"
		   }
		 ],
		 "item_in": [
		   {
			 "item": "ars_nouveau:mob_jar",
		   },
		   {
			 "item": "enigmaticlegacy:extradimensional_eye",
		   },
		   {
			 "item": "enigmaticlegacy:extradimensional_eye",
		   },
		   {
			 "item": "ars_nouveau:air_essence",
		   },
		   {
			 "item": "ars_nouveau:mob_jar"
		   },
		   {
			 "item": "forbidden_arcanus:lens_of_veritatis"
		   }
		 ]
   }).id("forbidden_arcanus:quantum_catcher")
	
	
	event.remove({output:'minecraft:shears'})
	event.shaped(
	  Item.of('minecraft:shears'), 
	  [
		' I ',
		'PSI', 
		'IP '
	  ],
	  {
		I: '#forge:plates/iron',
		P: 'kubejs:wooden_plate',
		S: 'kubejs:primitive_shears'
	  }
	)

	event.remove({output:'solonion:lunchbox'})
	event.shaped(
	  Item.of('solonion:lunchbox'), 
	  [
		'III',
		'ISI', 
		'III'
	  ],
	  {
		I: '#forge:plates/iron',
		S: 'solonion:lunchbag'
	  }
	)

	event.remove({output:'irons_spellbooks:copper_spell_book'})
	event.shaped(
	  Item.of('irons_spellbooks:copper_spell_book'), 
	  [
		'CL',
		'SM', 
		'CL'
	  ],
	  {
		C: '#forge:plates/copper',
		S: 'minecraft:string',
		M: 'kubejs:magic_book',
		L: 'minecraft:leather'
	  }
	)

	event.remove({output:'ars_nouveau:novice_spell_book'})
	event.custom({
		"type": "ars_nouveau:imbuement",
		  "count": 1,
		  "input": {
			"item": "irons_spellbooks:copper_spell_book"
		  },
		  "output": "ars_nouveau:novice_spell_book",
		  "pedestalItems": [],
		  "source": 5000
	})
	
	tool('minecraft:diamond','#forge:gems/diamond','kubejs:zinc_tool_handle','alexsmobs:shed_snake_skin')


	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "minecraft:feather"
			},
			{
				"item": "minecraft:lava_bucket"
			},
			
			{
				"tag": "forge:flowers/golden"
			},
			{
				"tag": "forge:flowers/golden"
			},
			{
				"tag": "forge:ingots/gold"
			},
			{
				"tag": "forge:ingots/gold"
			},
			{
				"tag": "forge:ingots/gold"
			},
			{
				"tag": "forge:ingots/gold"
			}
			
		],
		"sapling": {
			"item": "minecraft:birch_sapling"
		},
		"output": {
			"item": "kubejs:golden_magic_feather",
			"count": 1
		},
		"time": 200
	})
	
	
	/// ============================================= Tier 2 Tools ===========================================================

	event.shaped("kubejs:basic_mortar",
		[
			" A ",
			"IAI",
			"IXI"
		],
		{A:"#forge:ingots/source_alloy",
		 I:"#forge:ingots/arcanum_alloy",
		 X:"kubejs:primitive_mortar"}
	).id("kubejs:basic_mortar")

	event.shaped('effortlessbuilding:reach_upgrade3',
		[
			"CBC",
			"BXB",
			"CBC"
		],
		{
			X: "effortlessbuilding:reach_upgrade2",
			C: "#forge:storage_blocks/source",
			B: "ghast_tear"
		}
	).id("effortlessbuilding:reach_upgrade3")

	event.shaped("kubejs:blade_of_grass",
		[
			'XXX',
			'XAX',
			'XXX'
		],
		{
			X: "kubejs:nature_essence",
			A: "kubejs:mossy_sword"
		}
	)

	
	event.shaped("kubejs:basic_chisel",
		[
			'  A',
			' X ',
			'H  '
		],
		{
			H: "kubejs:zinc_tool_handle",
			X: "kubejs:primitive_chisel",
			A: "kubejs:source_alloy_ingot"
		}
	)

	tooltype.forEach(id => {
		event.shaped("aether:zanite_"+id,
			[
				' I ',
				'IXI', 
				' I ' 
			],
			{
				I: '#forge:gems/zanite',
				X: 'minecraft:iron_'+id
			}
		)	
	});

	tooltype.forEach(id => {
		event.shaped("twilightforest:ironwood_"+id,
			[
				' I ',
				'IXI', 
				' I ' 
			],
			{
				I: '#forge:ingots/ironwood',
				X: 'minecraft:iron_'+id
			}
		)
		event.remove({id:"twilightforest:equipment/ironwood_"+id})	
	});

	tooltype.forEach(id => {
		event.shaped("deep_aether:skyjade_"+id,
			[
				' I ',
				'IXI', 
				' I ' 
			],
			{
				I: '#forge:gems/skyjade',
				X: 'minecraft:iron_'+id
			}
		)	
	});
	
	event.shaped("aether:zanite_ring",
		[
		  ' I ',
		  'IXI', 
		  ' I ' 
		],
		{
		  I: '#forge:gems/zanite',
		  X: 'aether:iron_ring'
		}
	  ).id("aether:zanite_ring")
	
	event.shaped("deep_aether:skyjade_ring",
		[
		  ' I ',
		  'IXI', 
		  ' I ' 
		],
		{
		  I: '#forge:gems/skyjade',
		  X: 'aether:iron_ring'
		}
	  ).id("deep_aether:skyjade_ring")
	

	event.recipes.naturesaura.tree_ritual("kubejs:fiery_magic_feather",
		["kubejs:golden_magic_feather","#minecraft:beds","ars_nouveau:fire_essence","ars_nouveau:fire_essence","ars_nouveau:fire_essence","ars_nouveau:fire_essence","thermal:gunpowder_block","thermal:gunpowder_block"],"minecraft:spruce_sapling")

	event.shapeless("quark:pickarang",["diamond_pickaxe","quark:diamond_heart"]).id("quark:tools/crafting/pickarang_heart")

	event.recipes.naturesaura.tree_ritual("kubejs:the_terraformer",
		["iron_shovel","ars_nouveau:earth_essence","kubejs:nature_essence","kubejs:nature_essence","thermal:device_composter","thermal:device_composter","kubejs:nature_essence","kubejs:nature_essence"],"ars_nouveau:green_archwood_sapling")

	event.shaped("thermal:potion_quiver",
		[
			"PFP",
			"PQP",
			"SPB"
		],
		{
			P: "#forge:plates/bronze",
			F: "ars_nouveau:potion_flask",
			Q: "supplementaries:quiver",
			S: "elementalcraft:air_silk",
			B: "create:belt_connector"
		}
	).id("thermal:potion_quiver")

	
	event.shaped(
		Item.of('4x waystones:return_scroll'), 
		[
		  'NSN',
		  'SXS', 
		  'NSN'
		],
		{
			S: 'enigmaticlegacy:thicc_scroll',
			X: 'minecraft:ender_pearl',
			N: '#forge:nuggets/gold'
		}
	  )
	event.remove({output:"irons_spellbooks:iron_spell_book"})
	event.smithing("irons_spellbooks:iron_spell_book","ars_nouveau:source_gem","irons_spellbooks:copper_spell_book","enigmaticlegacy:iron_ring")

	event.remove({output:"irons_spellbooks:gold_spell_book"})
	event.smithing("irons_spellbooks:gold_spell_book","irons_spellbooks:arcane_ingot","irons_spellbooks:iron_spell_book","irons_spellbooks:silver_ring")

	event.remove({output:"irons_spellbooks:diamond_spell_book"})
	event.smithing("irons_spellbooks:diamond_spell_book","irons_spellbooks:energized_core","irons_spellbooks:gold_spell_book","irons_spellbooks:mana_ring")
                    	   
    tooltype.forEach(id => {
        event.smithing(
            'naturesaura:infused_iron_'+id,
            // This is a custome template you can add any item here it dose not need to be a template.
            'kubejs:botanist_upgrade_smithing_template', 
            // This is the item you wish to upgrade. If it contains a custome name or enchantment it will transfer it to the upgrade.
            Item.of('minecraft:iron_'+id).ignoreNBT(), 
            // This can be any item perf the material you with to upgrade to.
            'naturesaura:infused_iron'
            )

        event.smithing(
                'minecraft:netherite_'+id,
                // This is a custome template you can add any item here it dose not need to be a template.
                'minecraft:netherite_upgrade_smithing_template', 
                // This is the item you wish to upgrade. If it contains a custome name or enchantment it will transfer it to the upgrade.
                Item.of('minecraft:diamond_'+id).ignoreNBT(), 
                // This can be any item perf the material you with to upgrade to.
                '#forge:plates/netherite'
        )

		event.smithing(
			'naturesaura:sky_'+id,
			// This is a custome template you can add any item here it dose not need to be a template.
			'kubejs:skyseeker_upgrade_smithing_template', 
			// This is the item you wish to upgrade. If it contains a custome name or enchantment it will transfer it to the upgrade.
			Item.of('diamond_'+id).ignoreNBT(), 
			// This can be any item perf the material you with to upgrade to.
			'naturesaura:sky_ingot'
		)

		event.smithing('golden_'+id,'kubejs:gold_upgrade_smithing_template',Item.of('kubejs:silver_'+id),'kubejs:gold_upgrade_parts')
		event.smithing("immersiveengineering:"+id+"_steel",'kubejs:steel_upgrade_smithing_template',"naturesaura:infused_iron_"+id,'kubejs:steel_upgrade_parts')
    });

	event.remove({output:'immersiveengineering:glider'})
	event.shaped(
		Item.of('immersiveengineering:glider'), 
		[
		  ' L ',
		  'LXL', 
		  'LCL'
		],
		{
			L: 'immersiveengineering:hemp_fabric',
			X: 'leather_chestplate',
			C: 'ars_nouveau:air_essence'
		}
	  )
	event.shapeless('immersiveengineering:glider',['immersiveengineering:glider','ars_nouveau:air_essence'])

	  event.recipes.naturesaura.tree_ritual(Item.of('kubejs:basic_mining_hammer', '{Modifier:"forbidden_arcanus:demolishing",display:{Name:\'{"italic":false,"text":"Basic Mining Hammer"}\'}}'),["kubejs:primitive_mining_hammer","kubejs:zinc_tool_handle","ars_nouveau:earth_essence","ars_nouveau:earth_essence","#forge:storage_blocks/lead","#forge:storage_blocks/lead","#forge:plates/lead","#forge:plates/lead"],"minecraft:oak_sapling",200).id("kubejs:basic_mining_hammer")
	
	  event.recipes.naturesaura.tree_ritual(Item.of('kubejs:basic_excavator', '{Modifier:"forbidden_arcanus:demolishing",display:{Name:\'{"italic":false,"text":"Basic Excavator"}\'}}'),["kubejs:primitive_excavator","kubejs:zinc_tool_handle","ars_nouveau:earth_essence","ars_nouveau:earth_essence","#forge:storage_blocks/lead","#forge:storage_blocks/lead","#forge:plates/lead","#forge:plates/lead"],"minecraft:oak_sapling",200).id("kubejs:basic_excavator")



	event.remove({id:"ars_nouveau:warp_scroll"})
	event.custom({
		"type": "lychee:lightning_channeling",
		 "post": [
		   {
			 "type": "drop_item",
			 "item": 'ars_nouveau:warp_scroll', 
		   },
		   {
			   "type": "execute",
			   "command": "playsound irons_spellbooks:lightning_lance_cast neutral @p",
			   "hide": "true"
		   }
		 ],
		 "item_in": [
		   {
			 "item": "waystones:return_scroll"
		   },
		   {
			"item": "forbidden_arcanus:ender_pearl_fragment"
		  },
		   {
			 "item": "ars_nouveau:water_essence"
		   }
		 ]
   })
	
	
	/// ============================================= Tier 3 Tools ===========================================================

	event.recipes.naturesaura.tree_ritual(Item.of('kubejs:sturdy_mining_hammer', '{Modifier:"forbidden_arcanus:demolishing",display:{Name:\'{"italic":false,"text":"Sturdy Mining Hammer"}\'}}'),["kubejs:basic_mining_hammer","kubejs:reinforced_tool_handle","kubejs:death_essence","kubejs:death_essence","#forge:plates/netherite","#forge:plates/netherite","#forge:plates/netherite","#forge:plates/netherite"],"minecraft:oak_sapling",200).id("kubejs:sturdy_mining_hammer")
	
	  event.recipes.naturesaura.tree_ritual(Item.of('kubejs:sturdy_excavator', '{Modifier:"forbidden_arcanus:demolishing",display:{Name:\'{"italic":false,"text":"Sturdy Excavator"}\'}}'),["kubejs:basic_excavator","kubejs:reinforced_tool_handle","kubejs:death_essence","kubejs:death_essence","#forge:plates/netherite","#forge:plates/netherite","#forge:plates/netherite","#forge:plates/netherite"],"minecraft:oak_sapling",200).id("kubejs:sturdy_excavator")
	
	event.remove({id:"ars_nouveau:stable_warp_scroll"})
	event.custom(
		{
			"type": "ars_nouveau:enchanting_apparatus",
			"keepNbtOfReagent": true,
			"output": {
			  "item": "ars_nouveau:stable_warp_scroll"
			},
			"pedestalItems": [
			  {
				"item": "minecraft:blaze_powder"
			  },
			  {
				"item": "minecraft:blaze_powder"
			  },
			  {
				"item": "kubejs:ender_essence"
			  },
			  {
				"item": "kubejs:ender_essence"
			  },
			  {
				"tag": "forge:ender_pearls"
			  },
			  {
				"tag": "forge:ender_pearls"
			  }
			],
			"reagent": [
			  {
				"item": "ars_nouveau:warp_scroll"
			  }
			],
			"sourceCost": 0
		  }
	)

	//=======================================================================Tier 4

	event.shapeless(Item.of('minecraft:flint_and_steel', '{Damage:0,Unbreakable:1b}'),["kubejs:primitive_firestarter","4x #forge:plates/steel"])

	event.recipes.create.mechanical_crafting("thermal:flux_drill",
		[
			"DI   ",
			"ICIS ",
			" IXIS",
			" IPIS",
			" IGI "
		],
		{
			D: "immersiveengineering:drillhead_steel",
			I: "#forge:plates/invar",
			C: "thermal:rf_coil",
			S: "immersiveengineering:wirecoil_steel",
			X: "thermal:energy_cell",
			P: "netherite_pickaxe",
			G: "immersiveengineering:wooden_grip"
		}
	).id("thermal:flux_drill")

	event.recipes.create.mechanical_crafting("thermal:flux_saw",
		[
			"DI   ",
			"ICIS ",
			" IXIS",
			" IPIS",
			" IGI "
		],
		{
			D: "immersiveengineering:sawblade",
			I: "#forge:plates/invar",
			C: "thermal:rf_coil",
			S: "immersiveengineering:wirecoil_steel",
			X: "thermal:energy_cell",
			P: "netherite_axe",
			G: "immersiveengineering:wooden_grip"
		}
	).id("thermal:flux_saw")
	
})
