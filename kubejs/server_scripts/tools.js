
ServerEvents.recipes(event => {
  
	const tooltype = ['hoe','sword','pickaxe','axe','shovel'];

	const armorslot = ["helmet","chestplate","leggings","boots"]

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

	event.remove({output:/simple_weapons:corinthium*/})
	//==================================================Functions==================================================

	function naturearmorup(input,output,smith,material)
	{
		// Upgrades the armor
		event.smithing("naturesaura:"+output+"_helmet","kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_helmet").ignoreNBT()    ,"naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_chest" ,"kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_chestplate").ignoreNBT(),"naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_pants" ,"kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_leggings").ignoreNBT()  ,"naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_shoes" ,"kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_boots").ignoreNBT()     ,"naturesaura:"+material)
		
		// Removes the old recipes
		event.remove([{output:"naturesaura"+output+"_helmet", output:"naturesaura:"+output+"_chest", output:"naturesaura:"+output+"_pants",output:"naturesaura:"+output+"_shoes"}])
		event.remove({output:"naturesaura:"+output+"_shoes"})
	}   

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

	function simplearmor(material,helmet,chest,leg,boots)
	{
		event.shaped(
			Item.of(helmet), 
			[
			  'FFF',
			  'F F'
			],
			{
			  F: material
			}
		)
		event.shaped(
			Item.of(chest), 
			[
			  'F F',
			  'FFF', 
			  'FFF'
			],
			{
			  F: material
			}
		)
		event.shaped(
			Item.of(leg), 
			[
			  'FFF',
			  'F F', 
			  'F F'
			],
			{
			  F: material
			}
		)

		event.shaped(
			Item.of(boots), 
			[
			  'F F', 
			  'F F'
			],
			{
			  F: material
			}
		  )
	}

	function SimpleArmorUpgrade(material,helmet,chest,leg,boots,helmet2,chest2,leg2,boots2)
	{
		event.shaped(
			Item.of(helmet2), 
			[
			  'FFF',
			  'FXF'
			],
			{
			  F: material,
			  X: helmet
			}
		)
		event.shaped(
			Item.of(chest2), 
			[
			  'FXF',
			  'FFF', 
			  'FFF'
			],
			{
			  F: material,
			  X: chest
			}
		)
		event.shaped(
			Item.of(leg2), 
			[
			  'FFF',
			  'FXF', 
			  'F F'
			],
			{
			  F: material,
			  X: leg
			}
		)

		event.shaped(
			Item.of(boots2), 
			[
			  'F F', 
			  'FXF'
			],
			{
			  F: material,
			  X: boots
			}
		  )
		
	}

	//===============================================Tool Functionality=============================================

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
		  {type: "execute", command: "loot spawn ~ ~ ~ loot kubejs:key/overworld"},
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
				dimension: "twilight_forest"
			}
		},
		post: [
		  {type: "drop_item", item:"kubejs:broken_spawner"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.open neutral @p", hide: true},
		  {type: "delay", s: 0.5},
		  {type: "execute", command: "playsound minecraft:entity.experience_orb.pickup neutral @p"},
		  {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force"},
		  {type: "execute", command: "loot spawn ~ ~ ~ loot kubejs:key/twilight"},
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
			P: "#forge:plates/arcane_alloy",
			Y: "#forge:plates/gold"
		}
	).id("ars_nouveau:enchanters_shield")

	///=============================================================== Tier 0 Tools ==========================================================

	event.shaped("kubejs:primitive_spear",
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
	event.remove({output:"immersiveengineering:armor_faraday_helmet"})
	event.remove({output:"immersiveengineering:armor_faraday_chestplate"})
	event.remove({output:"immersiveengineering:armor_faraday_leggings"})
	event.remove({output:"immersiveengineering:armor_faraday_boots"})

	
	
	simplearmor('immersiveengineering:hemp_fabric',"immersiveengineering:armor_faraday_helmet","immersiveengineering:armor_faraday_chestplate","immersiveengineering:armor_faraday_leggings","immersiveengineering:armor_faraday_boots")
	

	  
	
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
				"tag": "forge:plates/iron"
			},
			
			{
				"tag": "immersive_weathering:bark"
			},
			{
				"tag": "immersive_weathering:bark"
			},
			{
				"tag": "immersive_weathering:bark"
			},
			{
				"tag": "immersive_weathering:bark"
			},
			{
				"tag": "immersive_weathering:bark"
			},
			{
				"tag": "immersive_weathering:bark"
			}
			
		],
		"sapling": {
			"item": "minecraft:cherry_sapling"
		},
		"output": {
			"item": "enigmaticlegacy:iron_ring",
			"count": 1
		},
		"time": 200
	})

	event.remove({id:"enigmaticlegacy:iron_ring"})
	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "ars_nouveau:ring_of_potential"
			},
			{
				"tag": "forge:gems/diamond"
			},
			
			{
				"tag": "forge:plates/iron"
			},
			{
				"tag": "forge:plates/iron"
			},
			{
				"tag": "forge:storage_blocks/redstone"
			},
			{
				"tag": "forge:storage_blocks/lapis"
			},
			{
				"tag": "forge:plates/iron"
			},
			{
				"tag": "forge:plates/iron"
			}
			
		],
		"sapling": {
			"item": "minecraft:jungle_sapling"
		},
		"output": {
			"item": "enigmaticlegacy:magnet_ring",
			"count": 1
		},
		"time": 200
	})

	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"item": "spider_eye"
			},
			{
				"tag": "forge:gems/diamond"
			},
			{
				"tag": "forge:storage_blocks/coal"
			},
			{
				"tag": "forge:storage_blocks/coal"
			},
			{
				"tag": "forge:storage_blocks/coal"
			},
			{
				"tag": "forge:storage_blocks/coal"
			},
			{
				"tag": "forge:storage_blocks/coal"
			},
			{
				"tag": "forge:storage_blocks/coal"
			}
			
		],
		"sapling": {
			"item": "minecraft:oak_sapling"
		},
		"output": {
			"item": "enigmaticlegacy:enigmatic_eye",
			"count": 1
		},
		"time": 200
	})

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
	  Item.of('immersiveengineering:hammer', '{Damage:50}'), 
	  [
		' CB',
		' SC', 
		'S  '
	  ],
	  {
		C: 'quark:sturdy_stone',
		B: 'minecraft:string',
		S: 'minecraft:stick'
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_axe', '{Damage:119}'), 
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
	
	
	event.custom({
		"type": "naturesaura:tree_ritual",
		"ingredients": [
			{
				"tag": "forge:gems/lapis"
			},
			{
				"tag": "forge:gems/lapis"
			},
			{
				"item": "irons_spellbooks:arcane_essence"
			},
			{
				"item": "irons_spellbooks:arcane_essence"
			},
			{
				"tag": "forge:gems/emerald"
			},
			{
				"tag": "forge:gems/emerald"
			},
			{
				"tag": "forge:gems/emerald"
			},
			{
				"tag": "forge:gems/emerald"
			}
		],
		"sapling": {
			"item": "ars_nouveau:blue_archwood_sapling"
		},
		"output": {
			"item": "thermal:xp_crystal",
			"count": 1
		},
		"time": 200
	}).id("thermal:tools/xp_crystal")
	

	/// ======================================================================= Tier 1 Tools ============================================================================

	
	simplearmor("#forge:plates/copper","kubejs:copper_helmet","kubejs:copper_chestplate","kubejs:copper_leggings","kubejs:copper_boots")
	simplearmor("#forge:plates/lead","kubejs:lead_helmet","kubejs:lead_chestplate","kubejs:lead_leggings","kubejs:lead_boots")
	simplearmor("#forge:plates/silver","kubejs:silver_helmet","kubejs:silver_chestplate","kubejs:silver_leggings","kubejs:silver_boots")
	
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
		  A: 'regions_unexplored:blue_bioshroom',
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
		"output": {"item": 'kubejs:rusty_trident'},
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
			"item": "regions_unexplored:golden_larch_sapling"
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
			"item": "regions_unexplored:brimwood_sapling"
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
			  "item": "twilightdelight:torchberries_crate",
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
		S: 'minecraft:string'
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

	event.remove([{output:"iron_helmet"},{output:"iron_chestplate"},{output:"iron_leggings"},{output:"iron_boots"},{output:"diamond_helmet"},{output:"diamond_chestplate"},{output:"diamond_leggings"},{output:"diamond_boots"},
		{output:"chainmail_helmet"},{output:"chainmail_chestplate"},{output:"chainmail_leggings"},{output:"chainmail_boots"}])
	
	simplearmor("#forge:plates/iron","iron_helmet","iron_chestplate","iron_leggings","iron_boots")
	simplearmor("#forge:plates/diamond","diamond_helmet","diamond_chestplate","diamond_leggings","diamond_boots")
	simplearmor("minecraft:chain","chainmail_helmet","chainmail_chestplate","chainmail_leggings","chainmail_boots")
	tool('minecraft:iron','#forge:ingots/iron','#forge:rods/treated_wood','string')
	tool('kubejs:copper','#forge:ingots/copper','#forge:rods/treated_wood','string')
	tool('kubejs:silver','#forge:ingots/silver','#forge:rods/treated_wood','string')
	tool('kubejs:lead','#forge:ingots/lead','#forge:rods/treated_wood','string')
	tool('minecraft:diamond','#forge:gems/diamond','kubejs:zinc_tool_handle','alexsmobs:shed_snake_skin')

	  
	event.remove({output:'ars_nouveau:dowsing_rod'})
	event.custom({
		"type": "lychee:block_interacting",
    "item_in": {
        "tag": "forge:dusts/gold"
    },
    "block_in": "ars_nouveau:archwood_planks",
    "post": [
		{
			"type": "if",
			"contextual":[
			{
				"type": "chance",
				"chance": 0.25
			}
		],
		"then":[
			{
				"type": "drop_item",
            	"item": "ars_nouveau:dowsing_rod"
			},
			{
				"type": "execute",
				"command": "particle minecraft:happy_villager ~ ~ ~ 0.25 0.25 0.25 1 25 force",
				"hide": "true"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:block.amethyst_block.break neutral @p",
				"hide": "true"
			},
			{
				"type": "place",
				"block": "air"
			}
		],
		"else":[
			{
				"type": "execute",
				"command": "particle minecraft:angry_villager ~ ~ ~ 0.25 0.25 0.25 1 10 force",
				"hide": "true"
			},
			{
				"type": "execute",
				"command": "playsound minecraft:entity.villager.no neutral @p",
				"hide": "true"
			},
			{
				"type": "place",
				"block": "air"
			}
		]
	}]
	})

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
			' A',
			'X '
		],
		{
			X: "kubejs:zinc_tool_handle",
			A: "kubejs:arcane_alloy_ingot"
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
	
	SimpleArmorUpgrade("#forge:gems/zanite","iron_helmet","iron_chestplate","iron_leggings","iron_boots","aether:zanite_helmet","aether:zanite_chestplate","aether:zanite_leggings","aether:zanite_boots")
	SimpleArmorUpgrade("#forge:gems/skyjade","iron_helmet","iron_chestplate","iron_leggings","iron_boots","deep_aether:skyjade_helmet","deep_aether:skyjade_chestplate","deep_aether:skyjade_leggings","deep_aether:skyjade_boots")
	
	event.remove([{output:"aether:zanite_helmet"},{output:"aether:zanite_chestplate"},{output:"aether:zanite_leggings"},{output:"aether:zanite_boots"}])
	event.remove([{output:"deep_aether:skyjade_helmet"},{output:"deep_aether:skyjade_chestplate"},{output:"deep_aether:skyjade_leggings"},{output:"deep_aether:skyjade_boots"}])


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
			S: 'tombstone:strange_scroll',
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
                    	   
    naturearmorup("diamond","sky","skyseeker","sky_ingot")
	naturearmorup("iron","infused_iron","botanist","infused_iron")
	event.remove({output:["naturesaura:sky_helmet","naturesaura:sky_chest","naturesaura:sky_pants","naturesaura:sky_shoes"]})
	event.remove({output:["naturesaura:infused_iron_helmet","naturesaura:infused_iron_chest","naturesaura:infused_iron_pants","naturesaura:infused_iron_shoes"]})


	armorslot.forEach(id=>{
		event.smithing("immersiveengineering:armor_steel_"+id,"kubejs:steel_upgrade_smithing_template",Item.of("netherite_"+id).ignoreNBT(),"#forge:plates/steel").id("immersiveengineering:crafting/armor_steel_"+id)

		event.smithing("golden_"+id,"kubejs:gold_upgrade_smithing_template",Item.of("kubejs:silver_"+id).ignoreNBT(),"kubejs:gold_upgrade_parts").id("minecraft:golden_"+id)

	})
	
	
	
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

		event.smithing('golden_'+id,'kubejs:gold_upgrade_smithing_template',Item.of('kubejs:silver_'+id).ignoreNBT(),'kubejs:gold_upgrade_parts')
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

	event.custom({
		 "type": "lychee:lightning_channeling",
		  "post": [
			{
			  "type": "drop_item",
			  "item": 'kubejs:mining_hammer',
			  "nbt": {
				"Modifier": "forbidden_arcanus:demolishing",
				"Enchantments":[{
					"lvl": 1,
					"id": "minecraft:unbreaking"
			  }]
			  }
			},
			{
				"type": "execute",
				"command": "playsound irons_spellbooks:lightning_lance_cast neutral @p",
				"hide": "true"
			}
		  ],
		  "item_in": [
			{
			  "item": "kubejs:copper_pickaxe"
			},
			{
			  "item": "ars_nouveau:earth_essence"
			}
		  ]
	})

	event.custom({
		"type": "lychee:lightning_channeling",
		 "post": [
		   {
			 "type": "drop_item",
			 "item": 'kubejs:copper_shovel',
			 "nbt": {
			   "Modifier": "forbidden_arcanus:demolishing",
			   "Enchantments":[{
				   "lvl": 3,
				   "id": "minecraft:unbreaking"
			 }]
			 }
		   },
		   {
			   "type": "execute",
			   "command": "playsound irons_spellbooks:lightning_lance_cast neutral @p",
			   "hide": "true"
		   }
		 ],
		 "item_in": [
		   {
			 "item": "kubejs:copper_shovel"
		   },
		   {
			 "item": "ars_nouveau:earth_essence"
		   }
		 ]
   })

   event.custom({
	"type": "lychee:lightning_channeling",
	 "post": [
	   {
		 "type": "drop_item",
		 "item": 'kubejs:copper_hoe',
		 "nbt": {
		   "Modifier": "forbidden_arcanus:demolishing",
		   "Enchantments":[{
			   "lvl": 3,
			   "id": "minecraft:unbreaking"
		 }]
		 }
	   },
	   {
		   "type": "execute",
		   "command": "playsound irons_spellbooks:lightning_lance_cast neutral @p",
		   "hide": "true"
	   }
	 ],
	 "item_in": [
	   {
		 "item": "kubejs:copper_hoe"
	   },
	   {
		 "item": "ars_nouveau:earth_essence"
	   }
	 ]
})


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

	event.custom({
		type: "elementalcraft:binding",
		"element_amount": 2500,
		"element_type": "fire",
		ingredients: [
			{item: "ars_nouveau:fire_essence"},
			{item: "ars_nouveau:water_essence"},
			{item: "ars_nouveau:air_essence"},
			{item: "ars_nouveau:earth_essence"},
			{item: "kubejs:nature_essence"},
			{item: "kubejs:fiery_magic_feather"}
		],
		"output": {
			"Count": 1,
			item: "kubejs:rainbow_magic_feather"
		}
	})
	
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
	
})
