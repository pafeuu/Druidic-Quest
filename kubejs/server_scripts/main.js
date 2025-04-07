var colors = ['red','blue','white','gray','light_gray','black','purple','magenta','yellow','green','lime','light_blue','cyan','orange','pink','brown']

var metals = ['tin','silver','lead','gold','iron','copper','nickel','zinc','aluminum']

var wood = ['oak','spruce','birch','jungle','acacia','dark_oak',"crimson","warped"]

var wood_RU = ['alpha','baobab','blackwood','blue_bioshroom','brimwood','cobalt','cypress','dead','eucalyptus','joshua','green_bioshroom','kapok','larch','magnolia','maple','mauve','palm','pine','pink_bioshroom','redwood','socotra','willow','yellow_bioshroom']

var wood_FA = ['aurum','fungyss','edelwood']

var wood_TF = ['canopy','mangrove','twilight_oak','time','transformation','mining','sorting','dark']

var alloys = ['bronze','enderium','brass','invar','rose_gold','constantan','signalum','lumium']

ServerEvents.recipes(event => {
  
	event.remove({id:"enigmaticlegacy:thicc_scroll"});
	event.remove({id:"explorerscompass:explorers_compass"});
	event.remove({id:'ars_nouveau:potion_flask'})
	event.remove({mod:'waystones'})
	event.remove({output:'#minecraft:axes'})
	event.remove({output:'#minecraft:pickaxes'})
	event.remove({output:'#minecraft:shovels'})
	event.remove({output:'#minecraft:hoes'})
	event.remove({output:'#minecraft:swords'})
	event.remove({output:"elementalcraft:spell_desk"})
	
	event.replaceInput({mod:'ars_nouveau', not:{type:"minecraft:stonecutting"}}, 'ars_nouveau:sourcestone','kubejs:arcane_alloy_ingot')
	event.replaceInput({mod:'elementalcraft'}, 'minecraft:iron_ingot','kubejs:inert_alloy_ingot')
	event.replaceInput({mod:'crafting_on_a_stick'}, 'minecraft:stick','kubejs:zinc_tool_handle')
	event.shapeless("2x minecraft:rooted_dirt",["minecraft:dirt","minecraft:mangrove_roots"])
	event.shapeless("minecraft:rooted_dirt",["minecraft:dirt","minecraft:hanging_roots"])
	

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/knives"},
		block_in: "farmersdelight:onion_crate",
		post: [
			{type: "place", block: "air"},
			{type: "drop_item", item: "kubejs:cut_onions", "count": 3},
			{type: "damage_item", damage: 9},
			{type: "hurt", damage: 2, hide: true},
			{type: "execute", command: "playsound farmersdelight:block.cutting_board.knife neutral @p",hide: true}
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/knives"},
		block_in: "minecraft:bone_block",
		post: [
			{type: "place", block: "minecraft:skeleton_skull"},
			{type: "damage_item",damage: 1},
			{type: "execute",command: "playsound farmersdelight:block.cutting_board.knife neutral @p",hide: true}
		]
	})


	function clickb(block, item, output) {
		event.custom({
			type: "create:item_application",
			ingredients: [
				{ item: block },
				{ item: item },
			],
			results: [
				{ item: output },
			],
		});
	}
	clickb("minecraft:obsidian","kubejs:cut_onions","minecraft:crying_obsidian")
	 

	/// ======================================================================= Tier 0 Machines ========================================================================
	/*event.shaped("minecraft:chest",
		[
			"BLB",
			"LPL",
			"BLB"
		],
		{
			B: "#immersive_weathering:bark",
			L: "#minecraft:logs",
			P: "twigs:pebble"
		}
	).id("minecraft:chest")

	

	event.shaped("minecraft:chest",
		[
			"BLB",
			"LPL",
			"BLB"
		],
		{
			B: "#immersive_weathering:bark",
			L: "#minecraft:logs",
			P: "flint"
		}
	).id("minecraft:chest2")*/

	event.shaped("minecraft:crafting_table",
		[
			"PP",
			"XX"
		],
		{
			P: "twigs:pebble",
			X: "#minecraft:planks"
		}
	).id("minecraft:crafting_table")

	event.remove({output:'minecraft:crafting_table'})
	
	event.shaped("supplementaries:bellows",["SSS","ABA","SSS"],{S:"#minecraft:wooden_slabs",A:"elementalcraft:air_shard",B:"bundle"}).id("supplementaries:bellows")
	
	event.shaped("minecraft:beehive",
		[
			"SSS",
			"XXX",
			"SSS"
		],
		{
			S: "kubejs:polished_planks",
			X: "honeycomb"
		}
	).id("minecraft:beehive")

	event.custom({
		type: "lychee:item_inside",
		item_in: [
			{item: "forbidden_arcanus:ender_pearl_fragment"},
			{tag: "forge:insect"},
			{tag: "forge:storage_blocks/beetroot"},
			{tag: "forge:storage_blocks/beetroot"}],
		block_in: "minecraft:water",
		post: [
			{type: "place", block: "alexsmobs:capsid"},
		]
	})
	
	event.shaped("composter",[
		"F F",
		"S S",
		"PPP"
	],
	{
		F: "#minecraft:wooden_fences",
		S: "kubejs:stacked_planks",
		P: "kubejs:packed_planks"
	}).id("minecraft:composter")
	
	event.remove({output:"naturesaura:animal_spawner"})
	event.custom({
		type: "lychee:item_exploding",
		 post: [
		   {
			 type: "drop_item",
			 item: "naturesaura:animal_spawner",
			 "count": 1
		   }
		 ],
		 item_in: [
		   {tag: "forge:storage_blocks/gold"},
		   {item: "minecraft:hay_block"},
		   {item: "minecraft:moss_block"},
		   {item: "naturesaura:gold_leaf"}
		 ]
	   
   })
	
	event.remove({output:'supplementaries:sack'})
	event.shaped(
	  Item.of('supplementaries:sack'), 
	  [
		'CSC', 
		' C '
	  ],
	  {
		C: 'farmersdelight:canvas',
		S: '#forge:string'
	  }
	)

	event.remove({id:'naturesaura:gold_fiber'})
	event.remove({output:'naturesaura:wood_stand'})
	event.custom({
		"type": "lychee:block_interacting",
		"comment": "one of the items needs to be in the offhand",
		"post": [
		  {
			"type": "place",
			"block": "naturesaura:wood_stand"
		  },
		  {
			"type": "damage_item",
			"damage": 1,
			"target": "/item_in/0"
		  },
		  {
			"type": "execute",
			"command": "playsound sawmill:ui.sawmill.take_result neutral @p",
			"hide": true
		  },
		  {
			"type": "execute",
			"command": "ftbquests change_progress @p complete 0808C0083EAF8BE2",
			"hide": true
		  }
		],
		"item_in": [
		  {
			"tag": "forge:tools/knives"
		  },
		  {
			"item": "naturesaura:gold_leaf"
		  }
		],
		"block_in": {
		"tag": "forge:stripped_logs"
		}
	  })
	

	event.remove({output:'immersiveengineering:cokebrick'})
	event.custom({
		  type: "lychee:item_exploding",
		  post: [
			{type: "drop_item", item: "naturesaura:gold_fiber", "count": 3}
		  ],
		  item_in: [
			{item: "minecraft:string",},
			{item: "minecraft:string",},
			{item: "minecraft:wheat_seeds",},
			{item: "minecraft:wheat_seeds",},
			{tag: "forge:flowers/golden",},
			{tag: "forge:flowers/golden",},
			{tag: "forge:flowers/golden",}
			]	
	})

	event.custom({
		type: "naturesaura:tree_ritual",
		ingredients: [
			{item: "minecraft:ink_sac"},
			{item: "minecraft:ink_sac"},
			{item: "minecraft:ink_sac"},
			{item: "minecraft:ink_sac"},
			{item: "create:wheat_flour"},
			{item: "create:wheat_flour"},
			{item: "create:wheat_flour"},
			{item: "create:wheat_flour"}
		],
		"sapling": {item: "minecraft:spruce_sapling"},
		"output": {item: "kubejs:brick_glue","count": 1},
		"time": 200
	})

	event.shaped("3x immersiveengineering:cokebrick",
	[
		"CSC",
		"GBG",
		"CSC"

	],
	{
		C: "sand",
		G: "gravel",
		S: "clay",
		B: "kubejs:brick_glue"
	}).damageIngredient("kubejs:brick_glue",3)
	
	
	/// ======================================================================= Tier 0 Components ========================================================================

	event.shaped("kubejs:primitive_handle",
		[
			" F ",
			"FSF",
			" F "
		],
		{
			F:"flint",
			S:"#forge:rods/wooden"
		}
	)
	event.recipes.create.milling("2x forbidden_arcanus:spawner_scrap","kubejs:broken_spawner")
	event.recipes.naturesaura.tree_ritual("2x naturesaura:ancient_sapling",["#forge:storage_blocks/redstone","#minecraft:saplings","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal"],"quark:red_blossom_sapling").id("naturesaura:tree_ritual/ancient_sapling")
	event.recipes.naturesaura.tree_ritual("2x naturesaura:ancient_sapling",["#forge:storage_blocks/redstone","#minecraft:saplings","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal","#forge:gems/arcane_crystal"],"quark:ancient_sapling")
	

	event.custom({
		type: "lychee:block_interacting",
    item_in: {
        tag: "forge:tools/knives"
    },
    block_in: "naturesaura:wood_stand",
    post: [
        {
            type: "place",
            block: "air"      
        },
		{
			type: "drop_item",
			item: "kubejs:basic_token",
			count: 1
		},
		{
			type: "damage_item",
			damage: 15
		},
		{
			type: "execute",
			command: "playsound sawmill:ui.sawmill.take_result neutral @p",
			hide: true
		}
    ]
	})

	event.remove({output:'ars_nouveau:mundane_belt'})
	event.shaped(
	  Item.of('ars_nouveau:mundane_belt'), 
	  [
		'RIR',
		'I I', 
		'RIR'
	  ],
	  {
		I: '#forge:leather',
		R: '#forge:rope'
	  }
	)

	event.remove({output:'ars_nouveau:ring_of_potential'})
	event.shaped(
	  Item.of('ars_nouveau:ring_of_potential'), 
	  [
		'RIR',
		'I I', 
		'RIR'
	  ],
	  {
		I: '#forge:ingots/iron',
		R: '#forge:nuggets/iron'
	  }
	)

	event.remove({output:'ars_nouveau:dull_trinket'})
	event.shaped(
	  Item.of('ars_nouveau:dull_trinket'), 
	  [
		' I ',
		'IXI', 
		' I '
	  ],
	  {
		X: '#forge:nuggets/iron',
		I: '#forge:rope'
	  }
	)
	event.shapeless('twigs:twig', ['#minecraft:saplings'])
	event.shapeless('4x twigs:pebble', ['minecraft:cobblestone'])
	event.remove({output:'dungeonnowloading:cobblestone_pebble'})
	
	event.remove({output:'immersive_weathering:mulch_block'})
	event.shapeless('2x immersive_weathering:mulch_block', ['minecraft:dirt','#immersive_weathering:bark','immersive_weathering:moss_clump','minecraft:bone_meal'])
	
	event.remove({output:'farmersdelight:organic_compost'})
	event.shapeless('farmersdelight:organic_compost', ['immersive_weathering:mulch_block','2x minecraft:bone_meal','2x minecraft:rotten_flesh','2x farmersdelight:straw'])

	event.custom({
		type: "lychee:item_inside",
		  post: [
			{
			  type: "place",
			  block: "create:chocolate"
			}
		  ],
		  item_in: [
			{
			  item: "minecraft:sugar"
			},
			{
			  item: "minecraft:sugar"
			},
			{
			  item:  "minecraft:sugar"
			},
			{
			  item: "minecraft:cocoa_beans"
			}
		  ],
		  block_in: "minecraft:water"
	})
	
	event.custom({
		type: "lychee:item_inside",
		  post: [
			{
			  type: "drop_item",
			  item: "create:bar_of_chocolate"
			}
		  ],
		  item_in: [
			{
			  item: "minecraft:ice"
			}
		  ],
		  block_in: "create:chocolate"
	})
	event.shaped(
	  Item.of('kubejs:sapling_ball'), 
	  [
		' S ',
		'SSS', 
		' S '
	  ],
	  {
		S: '#minecraft:saplings'
	  }
	)
	
	event.remove({output:'minecraft:glass_bottle'})
	event.shaped(
	  Item.of('2x minecraft:glass_bottle'), 
	  [
		' B ',
		'S S', 
		' S '
	  ],
	  {
		B: '#minecraft:wooden_buttons',
		S: '#forge:glass'
	  }
	)
	
	event.shaped(
	  Item.of('6x minecraft:glass_bottle'), 
	  [
		' B ',
		'S S', 
		' S '
	  ],
	  {
		B: '#forge:treated_wood',
		S: '#forge:glass'
	  }
	)
	
	event.remove({output:'farmersdelight:canvas'})
	event.shaped(
	  Item.of('farmersdelight:canvas'), 
	  [
		'CS', 
		'SC'
	  ],
	  {
		C: 'minecraft:string',
		S: 'farmersdelight:straw',
	  }
	)
	event.shaped(
		Item.of('minecraft:string'), 
		[
		  'SS', 
		  'SS',
		  'SS'
		],
		{
		  S: 'immersiveengineering:hemp_fiber'
		}
	  )
	.id("immersiveengineering:crafting/string")
	
	
	
	event.custom({
	  type: "lychee:block_clicking",
	  post: [
		{
		  type: "hurt",
		  damage: 1
		},
		{
			type: "drop_item",
			"contextual": [
				{
				type: "chance",
				"chance": 0.4
				}
			],
			item: "twigs:pebble",
			"count": 1
		},
		{
			type: "add_item_cooldown",
			"s": 0.5
	    }
	  ],
	  item_in: {
		item: "minecraft:air"
	  },
	  block_in: "minecraft:stone"
	})

	
	
	/// ======================================================================= Tier 1 components =======================================================================
	event.shaped('3x kubejs:pipe_sealant',
		[
			"XYX",
			"YZY",
			"XYX"
		],
		{
			X: "quark:moss_paste",
			Y: "thermal:rubber",
			Z: "string"
		}
	)

	event.shaped('kubejs:pipe_sealant',
		[
			"XYX",
			"YZY",
			"XYX"
		],
		{
			X: "quark:moss_paste",
			Y: "slime_ball",
			Z: "string"
		}
	)

	event.shaped('thermal:beekeeper_fabric',
		[
			"XSX",
			"SXS",
			"XSX"
		],
		{
			S:"string",
			X:"honeycomb"
	})

	event.shaped('thermal:diving_fabric',
		[
			"XSX",
			"SXS",
			"XSX"
		],
		{
			S:"immersiveengineering:hemp_fabric",
			X:"kubejs:pipe_sealant"
	}).id("thermal:diving_fabric")

	clickb("glass","thermal:slag","immersiveengineering:slag_glass")

	event.remove({id:"immersiveengineering:smelting/slag_glass"})

	event.shaped("kubejs:sturdy_basalt",
		[
			"CXC",
			"XXX",
			"CXC"
		],
		{
			X: "smooth_basalt",
			C: "#forge:plates/copper"
		}
	)

	event.custom({
		type: "lychee:block_interacting",
		item_in: [{tag:"forge:dusts/iron"}],
		block_in: "infested_stone",
		post: [
			{type: "place", block: "air"},
			{type: "if", contextual:{type: "chance", chance: 0.1}, 
			then: {type: "drop_item", item: "thermal:silver_dust"},
			else: {type: "execute", command: "summon minecraft:silverfish ~ ~ ~"}}		
		]
	})

	event.custom({
		type: "lychee:item_exploding",
		  post: [
			{
			  type: "drop_item",
			  item: "kubejs:dimension_ripper"
			},
			{
				type: "execute",
				command: "playsound irons_spellbooks:spell.earthquake.cast neutral @p",
				hide: "true"
			}
		  ],
		  item_in: [
			{
			  item: "quark:diamond_heart"
			},
			{
			  item: "forbidden_arcanus:arcane_crystal"
			},
			{
			  item:  "diamond"
			},
			{
			  item: "redstone_block"
			}
		  ]
	})
	
	event.custom({
		type: "lychee:lightning_channeling",
		 post: [
		   {
			 type: "drop_item",
			 item: "elementalcraft:inert_crystal"
		   },
		   {
			   type: "execute",
			   command: "playsound irons_spellbooks:lightning_lance_cast neutral @p",
			   hide: "true"
		   }
		 ],
		 item_in: [
		   {
			 item: "forbidden_arcanus:arcane_crystal_dust_speck",
		   },
		   {
			item: "forbidden_arcanus:arcane_crystal_dust_speck",
		  },
		  {
			item: "forbidden_arcanus:arcane_crystal_dust_speck",
		  },
		  {
			item: "forbidden_arcanus:arcane_crystal_dust_speck",
		  },
		   {
			 tag: "forge:gems/quartz",
		   }
		 ]
   })

   event.custom({
	type: "lychee:lightning_channeling",
	 post: [
	   {
		 type: "drop_item",
		 item: "create:brass_ingot",
		 "count": 2

	   },
	   {
		   type: "execute",
		   command: "playsound irons_spellbooks:lightning_lance_cast neutral @p",
		   hide: "true"
	   }
	 ],
	 item_in: [
	   {
		 tag: "forge:ingots/zinc",
	   },
	   {
		tag: "forge:ingots/zinc",
	  },
	  {
		tag: "forge:ingots/copper",
	  },
	  {
		tag: "forge:ingots/copper",
	  }
	 ]
})
	
	event.shaped(
		Item.of('2x kubejs:sapling_ball'), 
		[
		  ' S ',
		  'SXS', 
		  ' S '
		],
		{
		  X: '#minecraft:saplings',
		  S: 'thermal:compost'
		}
	  )
	
	
	event.custom({

		type: "create:filling",
		ingredients: [
		  {
			tag: "minecraft:planks"
		  },
		  {
			"fluid": "immersiveengineering:creosote",
			"amount": 200
		  }
		],
		results: [
		  {
			item: "immersiveengineering:treated_wood_horizontal"
		  }
		]
	})
	

	event.remove({output:'thermal:drill_head'})
	event.shaped(
	  Item.of('thermal:drill_head'), 
	  [
		' P ',
		'IGI', 
		'III'
	  ],
	  {
		I: '#forge:plates/iron',
		P: "minecraft:iron_pickaxe",
		G: "#forge:gears/iron"
	  }
	)

	event.remove({output:'thermal:saw_blade'})
	event.shaped(
	  Item.of('thermal:saw_blade'), 
	  [
		'III',
		'ISI', 
		'III'
	  ],
	  {
		I: '#forge:ingots/iron',
		S: 'kubejs:wooden_gear'
	  }
	)

	event.shaped(
		Item.of('kubejs:magic_book'), 
		[
		  'ISI',
		  'ISI', 
		  'ISI'
		],
		{
		  I: 'irons_spellbooks:arcane_essence',
		  S: 'minecraft:paper'
		}
	  )
	
	event.shaped(
	  Item.of('kubejs:primitive_machine'), 
	  [
		'PIP',
		'ISI', 
		'PIP'
	  ],
	  {
		I: 'quark:sturdy_stone',
		P: '#forge:storage_blocks/potato',
		S: 'kubejs:stone_gear'
	  }
	)
	
	event.remove({output:'minecraft:redstone_torch'})
	event.shaped(
	  Item.of('minecraft:redstone_torch'), 
	  [
		'R',
		'S' 
	  ],
	  {
		R: '#forge:dusts/redstone',
		S: '#forge:rods/treated_wood'
	  }
	)
	event.shaped(
	  Item.of('kubejs:stone_gear'), 
	  [
		'III',
		'IGI', 
		'III'
	  ],
	  {
		I: 'kubejs:stone_plate',
		G: 'kubejs:wooden_gear'
	  }
	)
	
	
	event.shaped(
	  Item.of('kubejs:basic_magic_machine'), 
	  [
		'IDI',
		'DGD', 
		'IDI'
	  ],
	  {
		I: '#forge:dusts/gold',
		D: '#forge:gems/amethyst',
		G: 'kubejs:primitive_machine'
	  }
	)
	
	event.shaped(
	  Item.of('2x kubejs:basic_magic_machine'), 
	  [
		'IDI',
		'DGD', 
		'IDI'
	  ],
	  {
		I: '#forge:dusts/gold',
		D: '#forge:gems/source',
		G: 'kubejs:primitive_machine'
	  }
	)

	
	event.shaped(
	  Item.of('kubejs:wooden_gear'), 
	  [
		' I ',
		'IGI', 
		' I '
	  ],
	  {
		I: 'kubejs:wooden_plate',
		G: 'minecraft:redstone_torch'
	  }
	)
	
	
	event.remove({id:"irons_spellbooks:lightning_bottle"})
	event.custom({
		type: "lychee:item_exploding",
		  "contextual": [
			{
			  type: "location",
			  "predicate": {
				"position":{ 
				"y": {
				 "min": 180,
				 "max": 210
				}
				}
			  }
			}
		  ],
		  post: [
			{
			  type: "drop_item",
			  item: "irons_spellbooks:lightning_bottle"
			},
			{
				type: "execute",
				command: "execute playsound minecraft:entity.lightning_bolt.impact neutral @p"
			}
		  ],
		  item_in: [
			{
			  item: "quark:bottled_cloud"
			},
			{
			  item: "minecraft:lightning_rod"
			}
		  ]
	})
	
	event.custom({
		type: "lychee:item_exploding",
		  post: [
			{
			  type: "drop_item",
			  item: "thermal:blitz_rod"
			},
			{
				type: "execute",
				command: "playsound irons_spellbooks:lightning_lance_cast neutral @p",
				hide: "true"
			}
		  ],
		  item_in: [
			{item: "irons_spellbooks:lightning_bottle"},
			{
			  item: "twilightforest:liveroot"
			},
			{
			  item: "minecraft:snowball"
			}
		  ]
	})

	event.custom({
		type: "lychee:item_exploding",
		post:[
			{type:"drop_item", item:"thermal:blizz_rod"},
			{type:"execute", command:"playsound twilightforest:entity.twilightforest.snow_queen.ambient neutral @p", hide:"true"}
		],
		item_in:[
			{item:"thermal:blitz_rod"},
			{item:"snow_block"},
			{item:"irons_spellbooks:frozen_bone"}
		]
	})
	
	event.remove({output:'sophisticatedstorage:upgrade_base'})
	event.shaped(
	  Item.of('sophisticatedstorage:upgrade_base'), 
	  [
		'III',
		'IGI', 
		'III'
	  ],
	  {
		I: 'kubejs:wooden_plate',
		G: '#forge:gems/diamond'
	  }
	)
	
	/// ======================================================================= Tier 1 Machines =======================================================================
	
	event.shaped("create:pulse_repeater",
		[
			"SXS",
			"BYB",
			"SZS"
		],
		{	
			S: "#forge:plates/stone",
			B: "#forge:plates/brass",
			X: "repeater",
			Z: "comparator",
			Y: "supplementaries:hourglass"
		}
	).id("create:crafting/logistics/pulse_repeater")

	event.shaped("create:pulse_extender",
		[
			"SRS",
			"BRB",
			"SRS"
		],
		{
			S: "#forge:plates/stone",
			B: "#forge:plates/brass",
			R: "repeater"
		}
	).id("create:crafting/logistics/pulse_extender")

	event.shaped("repeater",
		[
			"STS",
			"SRS",
			"STS"
		],
		{
			S: "#forge:plates/stone",
			T: "redstone_torch",
			R: "redstone"
		}
	).id("minecraft:repeater")

	event.remove({id:"quark:tweaks/crafting/utility/misc/repeater"})

	event.shaped("comparator",
		[
			"STS",
			"TDT",
			"SQS"
		],
		{
			S: "#forge:plates/stone",
			T: "redstone_torch",
			D: "redstone",
			Q: "#forge:storage_blocks/quartz"
		}
	).id("minecraft:comparator")

	event.shaped("create:powered_latch",
		[
			"SLS",
			"SRS",
			"SPS"
		],
		{
			S: "#forge:plates/stone",
			L: "lever",
			R: "repeater",
			P: "piston"
		}
	).id("create:crafting/logistics/powered_latch")

	event.shapeless("create:powered_toggle_latch",["create:powered_latch","redstone_torch"]).id("create:crafting/logistics/powered_toggle_latch")

	event.shaped("create:placard",
		[
			" P ",
			"PFP",
			" P "
		],
		{
			P: "#forge:plates/copper",
			F: "item_frame"
		}
	)

	event.shaped("3x create:placard",
		[
			" P ",
			"PFP",
			" P "
		],
		{
			P: "#forge:plates/brass",
			F: "item_frame"
		}
	).id("create:crafting/kinetics/placard")

	event.shaped("thermal:device_tree_extractor",
		[
			"GFG",
			"WMW",
			"SBS"
		],
		{
			G: "#forge:gears/tin",
			F: "supplementaries:faucet",
			W: "#forge:plates/wooden",
			M: "kubejs:primitive_machine",
			S: "#forge:plates/tin",
			B: "bucket"
		}
	).id("thermal:device_tree_extractor")

	event.shaped("thermal:device_nullifier",
		[
			"LLL",
			"SMS",
			"SCS"
		],
		{
			L: "#forge:plates/lead",
			M: "kubejs:primitive_machine",
			S: "#forge:plates/tin",
			C: "#forge:storage_blocks/cactus"
		}
	).id("thermal:device_nullifier")

	event.shaped("thermal:device_potion_diffuser",
		[
			"LGL",
			"WMW",
			"SJS"
		],
		{
			L: "#forge:plates/lead",
			G: "#forge:gears/lead",
			W: "glass_bottle",
			M: "kubejs:primitive_machine",
			S: "#forge:plates/tin",
			J: "supplementaries:jar"
		}
	).id("thermal:device_potion_diffuser")

	event.shaped("create:chute",[" I ","ICI"," I "],{I:"#forge:plates/iron",C:"quark:chute"}).id("create:crafting/kinetics/chute")

	event.shaped("create:redstone_contact",["CIC","ROR","CCC"],{C:"quark:sturdy_stone",R:"#forge:storage_blocks/redstone",O:"observer",I:"#forge:plates/iron"}).id("create:crafting/logistics/redstone_contact")

	event.replaceInput({id:"minecraft:anvil"},"iron_ingot","#forge:plates/iron")

	event.shaped("rubinated_nether:freezer",
		[
			"PPP",
			"RMR",
			"BXB"
		],
		{
			P: "#forge:plates/copper",
			R: "#forge:rods/copper",
			M: "kubejs:primitive_machine",
			B: "kubejs:sturdy_basalt",
			X: "thermal:blizz_rod"
		}
	).id("rubinated_nether:freezer_crafting")

	event.shaped("immersiveengineering:sorter",
		[
			"BCB",
			"HFH",
			"BMB"
		],
		{
			C: "comparator",
			H: "woodenhopper:wooden_hopper",
			M: "kubejs:primitive_machine",
			B: "kubejs:sturdy_basalt",
			F: "sophisticatedstorage:filter_upgrade"
		}
	).id("immersiveengineering:crafting/sorter")

	event.remove({output:'torchmaster:feral_flare_lantern'})
	event.shaped(
	  Item.of('torchmaster:feral_flare_lantern'), 
	  [
		'AAA',
		'AIA', 
		'AAA'
	  ],
	  {
		A: '#forge:plates/lead',
		I: "ars_nouveau:glyph_light"
	  }
	)

	event.remove({output:'supplementaries:faucet'})
	event.shaped(
	  Item.of('supplementaries:faucet'), 
	  [
		' L ',
		'III', 
		'  H'
	  ],
	  {
		L: 'minecraft:lever',
		I: "#forge:ingots/iron",
		H: 'woodenhopper:wooden_hopper'
	  }
	)

	event.remove({output:'create:depot'})
	event.shaped(
	  Item.of('create:depot'), 
	  [
		'III', 
		'PPP'
	  ],
	  {
		I: '#forge:ingots/iron',
		P: "#minecraft:planks"
	  }
	)
	event.remove({output:'create:fluid_tank'})
	event.shaped(
	  Item.of('create:fluid_tank'), 
	  [
		' P ',
		'PXP', 
		' P '
	  ],
	  {
		P: '#forge:plates/copper',
		X: 'supplementaries:jar'
	  }
	)

	event.remove({output:'create:spout'})
	event.shaped(
	  Item.of('create:spout'), 
	  [
		'PPP',
		'PXP', 
		'PFP'
	  ],
	  {
		P: 'minecraft:dried_kelp',
		X: 'create:fluid_tank',
		F: 'supplementaries:faucet'
	  }
	)
	
	event.remove({output:'naturesaura:auto_crafter'})
	event.shaped(
	  Item.of('2x naturesaura:auto_crafter'), 
	  [
		'PTP',
		'PMP', 
		'PCP'
	  ],
	  {
		T: 'naturesaura:token_joy',
		M: 'kubejs:primitive_machine',
		P: 'naturesaura:ancient_planks',
		C: 'immersiveengineering:craftingtable'
	  }
	)

	event.remove({output:'supplementaries:cog_block'})
	event.shaped(
	  Item.of('4x supplementaries:cog_block'), 
	  [
		'ZPZ',
		'PXP', 
		'ZPZ'
	  ],
	  {
		Z: '#forge:ingots/copper',
		P: '#forge:dusts/redstone',
		X: 'kubejs:wooden_gear'
	  }
	)

	event.replaceInput({id:"ars_nouveau:glyph_craft"},"minecraft:crafting_table","naturesaura:auto_crafter")

	event.remove({output:'vintagedelight:fermenting_jar'})
	event.shaped(
	  Item.of('vintagedelight:fermenting_jar'), 
	  [
		' P ',
		'PXP', 
		' P '
	  ],
	  {
		P: '#forge:glass/tinted',
		X: 'supplementaries:jar'
	  }
	)

	event.remove({output:'sawmill:sawmill'})
	event.shaped(
	  Item.of('sawmill:sawmill'), 
	  [
		'SSS',
		'SBS', 
		'PPP'
	  ],
	  {
		B: 'thermal:saw_blade',
		P: '#forge:treated_wood',
		S: '#forge:rods/treated_wood'
	  }
	)
	
	event.remove({output:'minecraft:dropper'})
	event.remove({output:'minecraft:dispenser'})
	event.shapeless('minecraft:dropper', ['kubejs:primitive_machine','minecraft:redstone_torch'])
	event.shapeless('minecraft:dispenser', ['minecraft:dropper','minecraft:bow'])
	
	event.remove({output:'supplementaries:jar'})
	event.shaped(
	  Item.of('supplementaries:jar'), 
	  [
		'PSP',
		'P P', 
		'PPP'
	  ],
	  {
		S: '#forge:treated_wood_slab',
		P: '#forge:glass'
	  }
	)
	
	event.remove({output:"irons_spellbooks:scroll_forge"})
	event.shaped(
	  Item.of("irons_spellbooks:scroll_forge"), 
	  [
		'PPP',
		' B ', 
		'OOO'
	  ],
	  {
		P: 'minecraft:polished_deepslate',
		B: 'kubejs:basic_magic_machine',
		O: 'minecraft:crying_obsidian'
	  }
	)
	
	event.remove({output:'create:hand_crank'})
	event.shaped(
	  Item.of('create:hand_crank'), 
	  [
		'S',
		'P'
	  ],
	  {
		S: '#forge:rods/treated_wood',
		P: 'quark:sturdy_stone'
	  }
	)
	
	event.remove({output:'create:millstone'})
	event.shaped(
	  Item.of('create:millstone'), 
	  [
		'S',
		'G', 
		'P'
	  ],
	  {
		G: 'kubejs:stone_gear',
		P: 'kubejs:primitive_machine',
		S: 'woodenhopper:wooden_hopper'
	  }
	)
	
	event.remove({output:'woodenhopper:wooden_hopper'})
	event.shaped(
	  Item.of('woodenhopper:wooden_hopper'), 
	  [
		'P P',
		'PTP', 
		' P ' 
	  ],
	  {
		P: '#forge:treated_wood',
		T: 'kubejs:wooden_gear'
	  }
	)
	
	event.remove({output:'minecraft:furnace'})
	event.custom({
		type: "lychee:block_interacting",
    item_in: {
        tag: "forge:coal_coke"
    },
    block_in: "stone",
    post: [
        {
            type: "place",
            block: "minecraft:furnace",
            "contextual": {
                type: "chance",
                "chance": 0.25
            }
        },
		{
			type: "execute",
			command: "playsound create:steam neutral @p",
			hide: "true"
		}
    ]
	})
	
	event.remove({output:'quark:deepslate_furnace'})
	event.remove({output:'quark:blackstone_furnace'})
	event.shapeless('quark:deepslate_furnace',['minecraft:furnace','minecraft:cobbled_deepslate'])
	event.shapeless('quark:blackstone_furnace',['minecraft:furnace','minecraft:blackstone'])
	
	event.remove({output:'farmersdelight:basket'})
	event.shaped(
	  Item.of('farmersdelight:basket'), 
	  [
		'CHC', 
		'CCC' 
	  ],
	  {
		H: 'woodenhopper:wooden_hopper',
		C: 'farmersdelight:canvas'
	  }
	)
	
	event.remove({id:'minecraft:stonecutter'})
	event.shaped(
	  Item.of('minecraft:stonecutter'), 
	  [
		' G ', 
		'PSP', 
		'SSS' 
	  ],
	  {
		P: '#forge:treated_wood',
		S: 'minecraft:smooth_stone',
		G: 'thermal:saw_blade'
	  }
	)
	
	event.remove({id:'minecraft:grindstone'})
	event.shaped(
	  Item.of('minecraft:grindstone'), 
	  [
		'PSP', 
		'F F' 
	  ],
	  {
		P: '#forge:treated_wood',
		S: 'minecraft:smooth_stone',
		F: 'immersiveengineering:treated_fence'
	  }
	)
	
	event.remove({output:'immersiveengineering:crate'})
	event.shaped(
	  Item.of('immersiveengineering:crate'), 
	  [
		'PPP',
		'PSP', 
		'PPP' 
	  ],
	  {
		P: '#forge:treated_wood',
		S: 'supplementaries:sack'
	  }
	)
	
	event.remove({output:'irons_spellbooks:inscription_table'})
	event.shaped(
	  Item.of('irons_spellbooks:inscription_table'), 
	  [
		'BBQ',
		'PPP', 
		'F F' 
	  ],
	  {
		B: '#forge:books',
		Q: 'minecraft:writable_book',
		P: '#forge:treated_wood_slab',
		F: 'immersiveengineering:treated_fence'
	  }
	)
	
	event.remove({output:'sophisticatedbackpacks:backpack'})
	event.shaped(
	  Item.of('sophisticatedbackpacks:backpack'), 
	  [
		'CEC',
		'CXC', 
		'LLL' 
	  ],
	  {
		C: 'farmersdelight:canvas',
		L: '#forge:leather',
		X: 'immersiveengineering:crate',
		E: 'minecraft:ender_pearl'
	  }
	)
	
	
	
	event.shaped('ars_nouveau:imbuement_chamber', ['kubejs:recipe_changed']).id("ars_nouveau:imbuement_chamber")
	event.custom({
		 type: "lychee:lightning_channeling",
		  post: [
			{
			  type: "drop_item",
			  item: "ars_nouveau:imbuement_chamber"
			},
			{
				type: "execute",
				command: "playsound irons_spellbooks:lightning_lance_cast neutral @p",
				hide: "true"
			}
		  ],
		  item_in: [
			{
			  item: "kubejs:basic_magic_machine",
			},
			{
			  item: "supplementaries:jar",
			},
			{
			  item: "woodenhopper:wooden_hopper",
			},
			{
			  item: "twilightforest:naga_scale"
			}
		  ]
	})
	
	event.remove({output:'thermal:device_composter'})
	event.shaped(
	  Item.of('thermal:device_composter'), 
	  [
		'PCP',
		'PMP', 
		'PHP' 
	  ],
	  {
		P: '#forge:plates/tin',
		C: 'minecraft:composter',
		M: 'kubejs:basic_magic_machine',
		H: 'woodenhopper:wooden_hopper'
	  }
	)
	
	event.remove({output:'thermal:device_fisher'})
	event.shaped(
	  Item.of('thermal:device_fisher'), 
	  [
		'PCP',
		'PMP', 
		'PHP' 
	  ],
	  {
		P: '#forge:plates/tin',
		C: 'minecraft:fishing_rod',
		M: 'kubejs:basic_magic_machine',
		H: 'woodenhopper:wooden_hopper'
	  }
	)
	
	event.remove({id:"supplementaries:bed_from_feather_block"})

	event.shapeless("aether:skyroot_bed",["#minecraft:beds","#aether:skyroot_repairing"]).id("aether:skyroot_bed")
	colors.forEach(color => {
		event.shaped(
		  Item.of('comforts:sleeping_bag_'+color),
		  [
			'CCP',
			'SSS'
		  ],
		  {
			C: 'handcrafted:'+color+'_sheet',
			P: 'handcrafted:'+color+'_cushion',
			S: 'farmersdelight:canvas'
		  }
		).id("comforts:sleeping_bag_"+color)

		event.shaped(
			Item.of(color+'_bed'),
			[
				'CSC',
				'III',
				'PPP'
			],
			{
				C: 'handcrafted:'+color+'_sheet',
				I: 'immersiveengineering:cushion',
				P: 'forge:treated_wood',
				S: 'comforts:sleeping_bag_'+color
			}
		).id("minecraft:"+color+"_bed")

		event.shaped(
			Item.of('2x handcrafted:'+color+'_sheet'),
			[
				'XZX',
				'ZXZ'
			],
			{
				X: color+'_carpet',
				Z: "#forge:string"
			}
		).id("handcrafted:"+color+"_sheet")
		
		event.shaped(Item.of("handcrafted:"+color+"_cushion"),
		[
			"XCX",
			"CZC",
			"XCX"
		],
		{
			X: "handcrafted:"+color+"_sheet",
			C: "#forge:feathers",
			Z: "#forge:string"
		}
		).id("handcrafted:"+color+"_cushion")
	});

	wood.forEach(wood => {
		event.shaped('handcrafted:'+wood+'_fancy_bed',
		[
			'HP ',
			'PXP',
			' P '
		],
		{
			H: 'handcrafted:hammer',
			X: '#minecraft:beds',
			P: wood+'_planks'
		}
		).id("handcrafted:"+wood+"_fancy_bed")
	});
	

	event.shaped('immersiveengineering:cushion',
		[
			"FFF",
			"FXF",
			"FFF"
		],
		{
			F: "immersiveengineering:hemp_fabric",
			X: "#handcrafted:cushions"
		}
	).id("immersiveengineering:crafting/cushion")
	
	event.remove({output:'minecraft:smoker'})
	event.shaped(
	  Item.of('minecraft:smoker'), 
	  [
		'PPP',
		'PMP', 
		'PHP' 
	  ],
	  {
		P: '#minecraft:logs',
		M: 'kubejs:primitive_machine',
		H: 'minecraft:furnace'
	  }
	)
	
	event.remove({output:'minecraft:blast_furnace'})
	event.shaped(
	  Item.of('minecraft:blast_furnace'), 
	  [
		'PPP',
		'PMP', 
		'PHP' 
	  ],
	  {
		P: 'minecraft:smooth_stone',
		M: 'kubejs:primitive_machine',
		H: 'minecraft:furnace'
	  }
	)
	event.remove('minecraft:observer')
	event.shapeless('minecraft:observer', ['kubejs:primitive_machine','minecraft:spider_eye'])
	
	event.remove('minecraft:dropper')
	event.shapeless('minecraft:dropper', ['kubejs:primitive_machine','quark:chute'])
	
	event.remove('minecraft:dispenser')
	event.shapeless('minecraft:dispenser', ['kubejs:primitive_machine','minecraft:bow'])
	
	event.remove('minecraft:piston')
	event.shapeless('minecraft:piston', ['kubejs:primitive_machine','create:piston_extension_pole'])
	
	event.replaceInput({id:"immersiveengineering:crafting/conveyor_basic"},"minecraft:redstone","kubejs:primitive_machine")
	event.replaceInput({id:"immersiveengineering:crafting/conveyor_extract"},"immersiveengineering:component_iron","woodenhopper:wooden_hopper")
	event.replaceInput({id:"immersiveengineering:crafting/hemp_fabric"},"#forge:rods/wooden","immersiveengineering:stick_treated")
	event.replaceInput({id:"immersiveengineering:crafting/strip_curtain"},"#forge:rods/all_metal","immersiveengineering:stick_treated")
	
	event.remove({output:'create:belt_connector'})
	event.shaped(
	  Item.of('create:belt_connector'), 
	  [
		'PPP',
		'PMP', 
		'PPP' 
	  ],
	  {
		P: "immersiveengineering:conveyor_basic",
		M: 'thermal:cured_rubber',
	  }
	)
	
	event.remove('create:piston_extension_pole')
	event.shaped(
	  Item.of('4x create:piston_extension_pole'), 
	  [
		'P',
		'M', 
		'P' 
	  ],
	  {
		P: "#minecraft:planks",
		M: '#forge:ingots/iron',
	  }
	)
	
	/// ======================================== Tier 2 Components ================================================================

	event.shaped("kubejs:aura_generator_block",
		[
			"IGI",
			"IMI",
			"IGI"
		],
		{
			I: "#forge:plates/infused_iron",
			G: '#forge:gears/infused_iron',
			M: "kubejs:magical_generator_block"
		}
	).id("kubejs:aura_generator_block")

	event.shaped(
		Item.of('forbidden_arcanus:golden_orchid_seeds'), 
		[
		  'BBB',
		  'BFB', 
		  'BBB' 
		],
		{
		  F: "forbidden_arcanus:yellow_orchid",
		  B: "forbidden_arcanus:deorum_block",
		}
	  ).id("forbidden_arcanus:golden_orchid_seeds")

	event.custom({
		type: "lychee:lightning_channeling",
		post: [
			{ type: "drop_item", item: "kubejs:small_enchanting_rune", count: 4 },
			{ type: "execute", command: "playsound forbidden_arcanus:item.mundabitur_dust.use neutral @P", hide: true }
		],
		item_in: [
			{ item: "kubejs:deepslate_rune" },
			{ item: "aether:zanite_gemstone" },
			{ item: "deep_aether:skyjade" },
			{ item: "ars_nouveau:source_gem_block" },
			{ item: "ars_nouveau:source_gem_block" },
			{ item: "ars_nouveau:source_gem_block" }
		]
	})

	event.shaped("kubejs:medium_enchanting_rune",["AA","AA"],{A:"kubejs:small_enchanting_rune"})
	event.shaped("kubejs:big_enchanting_rune",["AA","AA"],{A:"kubejs:medium_enchanting_rune"})
	event.shaped("kubejs:large_enchanting_rune",["AA","AA"],{A:"kubejs:big_enchanting_rune"})

	event.recipes.naturesaura.altar("aether:zanite_gemstone","diamond",7500,40)
	event.recipes.naturesaura.altar("deep_aether:skyjade","emerald",7500,40)

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "ars_nouveau:source_gem"
			},
			count: 3
		  },
		  "input1": {
			base_ingredient: {
				tag: "forge:ingots/gold"
			},
			count: 2,
		  },
		   
		  "result": {
			"base_ingredient": {
			  item: "kubejs:arcane_alloy_ingot"
			},
			"count": 2
		  },
		  "time": 800	
	})

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "elementalcraft:contained_crystal"
			},
			count: 3
		  },
		  "input1": {
			base_ingredient: {
				tag: "forge:ingots/iron"
			},
			count: 2,
		  },
		   
		  "result": {
			"base_ingredient": {
			  item: "kubejs:inert_alloy_ingot"
			},
			"count": 2
		  },
		  "time": 800	
	})

	event.recipes.ars_nouveau.enchanting_apparatus(
		["kubejs:zinc_tool_handle","blaze_rod","#forge:storage_blocks/coal_coke","#forge:storage_blocks/coal_coke"],
		"twilightforest:liveroot",
		"kubejs:carbon_infused_sturdy_handle",
		1000
	)

	event.recipes.ars_nouveau.enchanting_apparatus(
		["kubejs:ivy_block","kubejs:ivy_block","kubejs:ivy_block","kubejs:ivy_block","ars_nouveau:earth_essence","ars_nouveau:earth_essence"],
		"kubejs:lemon_quartz",
		"kubejs:ivy_quartz",
		1000
	)

	

	event.custom({
		type: "lychee:lightning_channeling",
		post: [
			{ type: "drop_item", item: "kubejs:lemon_quartz" },
			{ type: "execute", command: "playsound irons_spellbooks:spell.poison_splash.begin neutral @p", hide: true }
		],
		item_in: [
			{ item: "kubejs:sulfur_quartz_blend" },
			{ item: "forbidden_arcanus:arcane_crystal_dust" },
			{ item: "fruitsdelight:lemon_juice" },
			{ item: "fruitsdelight:lemon_juice" },
			{ item: "fruitsdelight:lemon_juice" },
			{ item: "fruitsdelight:lemon_juice" }
		]
	})
	event.shapeless("3x kubejs:sulfur_quartz_blend",["5x #forge:dusts/sulfur","4x #forge:dusts/quartz"])

	event.shapeless("minecraft:heart_of_the_sea",["ars_nouveau:water_essence","8x minecraft:prismarine_crystals"])

	event.custom({
		type: "lychee:block_crushing",
		post: [
			{ type: "drop_item", item: "forbidden_arcanus:mundabitur_dust" },
			{ type: "execute", command: "playsound minecraft:entity_blaze.hurt neutral @p", hide: true }
		],
		item_in: [
			{ item: "forbidden_arcanus:arcane_crystal_dust" },
			{ item: "kubejs:arcane_alloy_ingot" },
			{ item: "wither_rose" },
			{ tag: "forge:gems/cinnabar" }
		]
	}).id("forbidden_arcanus:mundabitur_dust")

	event.custom({
		type: "lychee:block_crushing",
		post: [
			{ type: "drop_item", item: "forbidden_arcanus:mundabitur_dust", count: 2 },
			{ type: "execute", command: "playsound minecraft:entity_blaze.hurt neutral @p", hide: true }
		],
		item_in: [
			{ item: "forbidden_arcanus:arcane_crystal_dust" },
			{ item: "kubejs:arcane_alloy_ingot" },
			{ item: "wither_rose" },
			{ tag: "forge:gems/ruby" }
		]
	})

	event.custom({
		type: "lychee:block_crushing",
		post: [
			{ type: "drop_item", item: "forbidden_arcanus:mundabitur_dust", count: 4 },
			{ type: "execute", command: "playsound minecraft:entity_blaze.hurt neutral @p", hide: true }
		],
		item_in: [
			{ item: "forbidden_arcanus:arcane_crystal_dust" },
			{ item: "kubejs:arcane_alloy_ingot" },
			{ item: "wither_rose" },
			{ item: "thermal:ruby" }
		]
	})

   event.recipes.ars_nouveau.enchanting_apparatus(["kubejs:zinc_tool_handle","thermal:ruby","#forge:storage_blocks/gold","#forge:storage_blocks/gold","#forge:storage_blocks/gold","#forge:storage_blocks/gold"],"bundle","kubejs:gold_upgrade_parts")

   event.custom({
	type: "lychee:block_crushing",
	post: [
		{ type: "drop_item", item: "forbidden_arcanus:corrupti_dust" },
		{ type: "execute", command: "playsound minecraft:entity_blaze.death neutral @p", hide: true }
	],
	item_in: [
		{ item: "forbidden_arcanus:mundabitur_dust" },
		{ item: "forbidden_arcanus:obsidian_ingot" },
		{ item: "allium" },
		{ item: "forbidden_arcanus:rune" }
	]
	}).id("forbidden_arcanus:corrupti_dust")

	event.custom({
			type: "elementalcraft:infusion",
			element_amount: 500,
			element_type: "earth",
			input: {item: "quark:sturdy_stone"},
			output: {item: "elementalcraft:whiterock"}
	}).id("elementalcraft:infusion/whiterock")

	event.shaped(
	  Item.of('kubejs:magic_machine'), 
	  [
		'CAC',
		'AXA',
		'CAC'
	  ],
	  {
		X: "kubejs:basic_magic_machine",
		C: '#forge:plates/infused_iron',
		A: "kubejs:sturdy_deepslate"
	  }
	)

	
	event.shaped(
	  Item.of('create:filter'), 
	  [
		'CXC'
	  ],
	  {
		X: "minecraft:iron_bars",
		C: '#minecraft:wool',
	  }
	).id("create:crafting/kinetics/filter")

	event.shaped(
		Item.of('create:attribute_filter'), 
		[
		  'CCC',
		  'CXC',
		  'CCC'
		],
		{
		  X: "create:filter",
		  C: '#forge:nuggets/brass',
		}
	  ).id("create:crafting/kinetics/attribute_filter")

	event.remove('minecraft:iron_bars')
	event.shaped(
	  Item.of('6x minecraft:iron_bars'), 
	  [
		'CCC',
		'CCC'
	  ],
	  {
		C: '#forge:rods/iron',
	  }
	)

	event.shaped(
	  Item.of('6x quark:gold_bars'), 
	  [
		'CCC',
		'CCC'
	  ],
	  {
		C: '#forge:rods/gold',
	  }
	).id("quark:building/crafting/gold_bars")

	function smithingtemplate(block,material,name)
	{
		event.shaped(
			Item.of("2x kubejs:"+name+"_upgrade_smithing_template"), 
			[
			  'CZC',
			  'CXC',
			  'CCC'
			],
			{
			  Z: block,
			  C: material,
			  X: "kubejs:"+name+"_upgrade_smithing_template"
			}
		  )
	}
	smithingtemplate("minecraft:mossy_stone_bricks","naturesaura:infused_iron","botanist")
	smithingtemplate("elementalcraft:whiterock","naturesaura:sky_ingot","skyseeker")
	smithingtemplate("basalt","thermal:gold_plate","gold")
	smithingtemplate("end_stone","#forge:ingots/steel","steel")

	event.recipes.naturesaura.tree_ritual("naturesaura:token_joy",
	["#forge:gems/lapis","kubejs:basic_token","create:bar_of_chocolate","create:bar_of_chocolate","create:bar_of_chocolate","create:bar_of_chocolate","create:bar_of_chocolate","create:bar_of_chocolate"],"quark:yellow_blossom_sapling",100).id("naturesaura:tree_ritual/token_joy")

	event.recipes.naturesaura.tree_ritual("naturesaura:token_sorrow",
	["#forge:dusts/redstone","kubejs:basic_token","crying_obsidian","crying_obsidian","crying_obsidian","crying_obsidian","crying_obsidian","crying_obsidian"],"quark:blue_blossom_sapling",100).id("naturesaura:tree_ritual/token_sorrow")

	event.recipes.naturesaura.tree_ritual("naturesaura:token_fear",
	["#forge:gems/niter","kubejs:basic_token","carved_pumpkin","carved_pumpkin","carved_pumpkin","carved_pumpkin","carved_pumpkin","carved_pumpkin"],"quark:lavender_blossom_sapling",100).id("naturesaura:tree_ritual/token_fear")

	event.recipes.naturesaura.tree_ritual("naturesaura:token_anger",
	["#forge:gems/sulfur","kubejs:basic_token","immersive_weathering:vitrified_sand","immersive_weathering:vitrified_sand","immersive_weathering:vitrified_sand","immersive_weathering:vitrified_sand","immersive_weathering:vitrified_sand","immersive_weathering:vitrified_sand"],"quark:red_blossom_sapling",100).id("naturesaura:tree_ritual/token_anger")

	
	event.custom({
		type: "lychee:item_inside",
		contextual:[
			{type: "location",predicate: {biome: "minecraft:lush_caves"}}
		  ],
		  post: [
			{ type: "drop_item", item: "kubejs:nature_essence"},
			{ type: "execute", command: "playsound irons_spellbooks:spell.acid_orb.charge neutral @p", hide: "true"}
		  ],
		  item_in: [
			{item: "kubejs:sapling_ball"},
			{item: "farmersdelight:rich_soil"},
			{item: "ars_nouveau:source_gem"},
			{item: "minecraft:honeycomb"}
		  ],
		  block_in: "minecraft:water"
	})
	
	
	event.remove({output:'tombstone:strange_scroll'})
	event.custom({
		type: "ars_nouveau:imbuement",
		count: 1,
		input: {item: "farmersdelight:canvas"},
		output: 'tombstone:strange_scroll',
		pedestalItems: [],
		source: 1000
	})

	event.remove({output:'elementalcraft:contained_crystal'})
	event.custom({
		type: "ars_nouveau:imbuement",
		count: 1,
		input: {item: "elementalcraft:inert_crystal"},
		output: "elementalcraft:contained_crystal",
		pedestalItems: [],
		source: 500
	})
	
	event.custom({
		type: "lychee:item_inside",
		contextual:[
			{type: "location",predicate: {position:{ y: {min: 200, max: 350}}}}
		  ],
		  post: [
			{type: "drop_item",item: "ars_nouveau:air_essence"},
			{type: "execute",command: "playsound irons_spellbooks:spell.gust.cast neutral @p",hide: "true"}
		  ],
		  item_in: [
			{item: "kubejs:nature_essence"},
			{item: "elementalcraft:aircrystal"},
			{item:  "ars_nouveau:source_gem"},
			{item: "minecraft:feather"}
		  ],
		  block_in: "minecraft:water"
	})
	//event.shapeless("ars_nouveau:air_essence",["kubejs:recipe_changed"]).id("ars_nouveau:imbuement_air_essence")
	event.recipes.ars_nouveau.imbuement("kubejs:recipe_changed","ars_nouveau:air_essence",100,[]).id("ars_nouveau:imbuement_air_essence")
	event.recipes.ars_nouveau.imbuement("kubejs:recipe_changed","ars_nouveau:earth_essence",100,[]).id("ars_nouveau:imbuement_earth_essence")
	event.recipes.ars_nouveau.imbuement("kubejs:recipe_changed","ars_nouveau:fire_essence",100,[]).id("ars_nouveau:imbuement_fire_essence")
	event.recipes.ars_nouveau.imbuement("kubejs:recipe_changed","ars_nouveau:water_essence",100,[]).id("ars_nouveau:imbuement_water_essence")
	event.custom({
		type: "lychee:item_inside",
		contextual: [
			{type: "location",predicate: {biome: "minecraft:lush_caves"}}
		  ],
		  post: [
			{type: "drop_item",item: "ars_nouveau:water_essence"},
			{type: "execute",command: "playsound minecraft:entity.dolphin.jump neutral @p",hide: "true"}
		  ],
		  item_in: [
			{item: "kubejs:nature_essence"},
			{item: "elementalcraft:watercrystal"},
			{item:  "ars_nouveau:source_gem"},
			{tag: "minecraft:fishes"}
		  ],
		  block_in: "minecraft:water"
	})
	
	event.custom({
		type: "lychee:item_exploding",
		contextual: [
			{type: "location",predicate: {position:{ y: {min: -64,max: 20}}}}
		  ],
		  post: [
			{type: "drop_item",item: "ars_nouveau:earth_essence"},
			{type: "execute",command: "playsound irons_spellbooks:spell.earthquake.cast neutral @p",hide: "true"}
		  ],
		  item_in: [
			{item: "kubejs:nature_essence"},
			{item: "elementalcraft:earthcrystal"},
			{item:  "ars_nouveau:source_gem"},
			{item: "minecraft:bone"}
		  ]
	})
	
	event.custom({
		type: "lychee:item_exploding",
		contextual: [
			{type: "location",predicate: {dimension: "minecraft:the_nether"}}
		  ],
		  post: [
			{type: "drop_item",item: "ars_nouveau:fire_essence"},
			{type: "execute",command: "playsound irons_spellbooks:spell.heatsurge.prepare neutral @p",hide: "true"}
		  ],
		  item_in: [
			{item: "kubejs:nature_essence"},
			{item: "elementalcraft:firecrystal"},
			{item:  "ars_nouveau:source_gem"},
			{item: "minecraft:blaze_rod"}
		  ]
	})

	


	

	event.remove({output:'ars_nouveau:arcane_pedestal'})
	event.shaped(
		Item.of('ars_nouveau:arcane_pedestal'), 
		[
		  'WWW',
		  'GXG', 
		  'GWG' 
		],
		{
		  X: 'irons_spellbooks:pedestal',
		  W: 'kubejs:arcane_alloy_ingot',
		  G: "#forge:rods/gold"

		}
	)

	event.recipes.naturesaura.tree_ritual("2x kubejs:arcane_alloy_ingot",["ars_nouveau:source_gem","ars_nouveau:source_gem","ars_nouveau:source_gem","#forge:dusts/gold","#forge:dusts/gold","#forge:dusts/gold"],"ars_nouveau:purple_archwood_sapling",100)
	
	event.recipes.naturesaura.tree_ritual("2x kubejs:inert_alloy_ingot",["elementalcraft:contained_crystal","elementalcraft:contained_crystal","elementalcraft:contained_crystal","#forge:dusts/iron","#forge:dusts/iron","#forge:dusts/iron"],"birch_sapling",100)

	event.replaceInput({id:'naturescompass:natures_compass'},'#minecraft:saplings','kubejs:nature_essence')
	/// ======================================== Tier 2 Machines ================================================================

	event.shaped("thermal:device_collector",
		[
			"LYL",
			"OXO",
			"THT"
		],
		{
			L: "#forge:plates/lead",
			Y: "#forge:gears/tin",
			O: "#forge:gears/lead",
			X: "naturesaura:hopper_upgrade",
			H: "hopper",
			T: "#forge:plates/tin"

		}
	).id("thermal:device_collector")

	function SourceGeneratorsRecipe(type,ingredient)
	{
		event.shaped("ars_nouveau:"+type+"_sourcelink",
			[
				"GXG",
				"GMG",
				"GXG"
			],
			{
				G: "#forge:rods/gold",
				M: "kubejs:magical_generator_block",
				X: ingredient
			}
		).id("ars_nouveau:"+type+"_sourcelink")
	}

	SourceGeneratorsRecipe("volcanic","ars_nouveau:fire_essence")
	SourceGeneratorsRecipe("agronomic","kubejs:nature_essence")
	SourceGeneratorsRecipe("vitalic","kubejs:death_essence")
	SourceGeneratorsRecipe("mycelial","quark:glow_shroom")
	SourceGeneratorsRecipe("alchemical",'immersive_weathering:golden_moss_clump')
	
	event.recipes.naturesaura.tree_ritual("kubejs:pressing_catalyst",["#forge:gears/arcane_alloy","#forge:gears/inert_alloy","anvil","anvil","immersiveengineering:hammer","immersiveengineering:hammer","anvil","anvil"],"architects_palette:twisted_sapling")
	
	event.shaped("elementalcraft:water_mill_grindstone",
		[
			"CXC",
			"AMA",
			"XGX"
		],
		{
			X: "elementalcraft:whiterock",
			C: "kubejs:carbon_infused_sturdy_handle",
			A: "ars_nouveau:water_essence",
			M: "kubejs:basic_magic_machine",
			G: "create:millstone"
		}
	).id("elementalcraft:water_mill_grindstone")

	event.shaped("elementalcraft:evaporator",
		[
			"CXC",
			"GFG",
			"CMC"
		],
		{
			F: "blast_furnace",
			X: "#forge:glass",
			M: "kubejs:basic_magic_machine",
			C: "kubejs:carbon_infused_sturdy_handle",
			G: "elementalcraft:elementpipe_impaired"
		}
	).id("elementalcraft:evaporator")

	event.shaped(
		Item.of('elementalcraft:extractor'), 
		[
		  ' X ',
		  ' C ',
		  'CMC'
		],
		{
		  M: "kubejs:basic_magic_machine",
		  X: 'hopper',
		  C: 'kubejs:carbon_infused_sturdy_handle'
		}
	).id("elementalcraft:extractor")

	event.shaped(
		Item.of('elementalcraft:infuser'), 
		[
		  'CIC',
		  'IMI',
		  'CIC'
		],
		{
		  M: "kubejs:basic_magic_machine",
		  I: 'kubejs:inert_alloy_ingot',
		  C: 'kubejs:carbon_infused_sturdy_handle'
		}
	).id("elementalcraft:infuser")

	event.shaped(
		Item.of('ars_nouveau:arcane_core'), 
		[
		  'AAA',
		  'RXR',
		  'AMA'
		],
		{
		  M: "kubejs:basic_magic_machine",
		  X: "quark:diamond_heart",
		  R: '#forge:rods/gold',
		  A: 'kubejs:arcane_alloy_ingot'
		}
	).id("ars_nouveau:arcane_core")

	event.remove({output:'minecraft:enchanting_table'})
	event.shaped(
	  Item.of('minecraft:enchanting_table'), 
	  [
		' X ',
		'POP',
		'OMO'
	  ],
	  {
		O: "minecraft:obsidian",
		M: "kubejs:magic_machine",
		X: 'quark:diamond_heart',
		P: '#forge:plates/diamond'
	  }
	)

	event.remove({output:"ars_nouveau:source_jar"})

	event.remove('elementalcraft:instrument_retriever')
	event.shaped(
	  Item.of('elementalcraft:instrument_retriever'), 
	  [
		'RRR',
		'RFR',
		' H '
	  ],
	  {
		R: "elementalcraft:whiterock",
		F: "create:filter",
		H: 'woodenhopper:wooden_hopper'
	  }
	)

	event.remove('irons_spellbooks:pedestal')
	event.shaped(
	  Item.of('irons_spellbooks:pedestal'), 
	  [
		'H',
		'F',
		'H'
	  ],
	  {
		
		F: "create:depot",
		H: 'minecraft:andesite'
	  }
	)

	event.remove('elementalcraft:sorter')
	event.shaped(
	  Item.of('elementalcraft:sorter'), 
	  [
		'RRR',
		'RFR',
		' H '
	  ],
	  {
		R: "elementalcraft:whiterock",
		F: "minecraft:comparator",
		H: 'elementalcraft:instrument_retriever',
	  }
	)

	event.remove({output:'create:schematicannon'})
	event.shaped(
	  Item.of('create:schematicannon'), 
	  [
		' BB',
		'WDW',
		'SFS'
	  ],
	  {
		S: "minecraft:smooth_stone",
		W: "#minecraft:logs",
		D: "minecraft:dispenser",
		B: '#forge:storage_blocks/iron',
		F: "ars_nouveau:fire_essence"
	  }
	)
	
	clickb("vintagedelight:fermenting_jar","kubejs:arcane_alloy_ingot","ars_nouveau:source_jar")

	event.shaped('elementalcraft:small_container',
		[
			' P ',
			'PXP',
			' P '
		],
		{
			P: 'elementalcraft:elementpipe_impaired',
			X: 'ars_nouveau:source_jar'
		}
	).id('elementalcraft:small_container')
	
	event.remove({output:"ars_nouveau:mob_jar"})
	event.shapeless("ars_nouveau:mob_jar",["ars_nouveau:source_jar","supplementaries:cage"])
	event.shaped(
	  Item.of('3x quark:pipe'), 
	  [
		'CGC'
	  ],
	  {
		C: '#forge:ingots/copper',
		G: 'elementalcraft:burnt_glass'
	  }
	)
	
	event.remove({output:'quark:feeding_trough'})
	event.shaped(
	  Item.of('quark:feeding_trough'), 
	  [
		'CGC',
		'CCC'
	  ],
	  {
		C: '#forge:treated_wood',
		G: 'kubejs:nature_essence'
	  }
	)
	
	event.remove({output:'elementalcraft:elementpipe_impaired'})
	event.shaped(
	  Item.of('12x elementalcraft:elementpipe_impaired'), 
	  [
	    'GGG',
		'CMC',
		'GGG'
	  ],
	  {
		C: 'elementalcraft:contained_crystal',
		M: 'kubejs:basic_magic_machine',
		G: '#forge:glass'
	  }
	)
	
	event.remove({output:'irons_spellbooks:arcane_anvil'})
	event.shaped(
	  Item.of('irons_spellbooks:arcane_anvil'), 
	  [
	    'DMD',
		' A ',
		'GGG'
	  ],
	  {
		D: '#forge:gems/diamond',
		A: 'minecraft:anvil',
		M: 'kubejs:magic_machine',
		G: 'minecraft:polished_deepslate'
	  }
	)
	
	event.remove({output:"immersiveengineering:alloybrick"})
	event.custom({	
		 type: "ars_nouveau:imbuement",
	  "count": 1,
	  "input": {
		item: "kubejs:magic_machine"
	  },
	  "output": "immersiveengineering:alloybrick",
	  "pedestalItems": [
		{
		  item: {
			item: "ars_nouveau:air_essence"
		  }
		},
		{
		  item: {
			item: "ars_nouveau:water_essence"
		  }
		},
		{
		  item: {
			item: "ars_nouveau:fire_essence"
		  }
		},
		{
			item: {
			  item: "naturesaura:tainted_gold"
			}
		},
		{
		  item: {
			item: "ars_nouveau:earth_essence"
		  }
		}
	  ],
	  "source": 500	
	})

	event.remove({output:"ars_nouveau:enchanting_apparatus"})
	event.custom({
		type: "naturesaura:tree_ritual",
		ingredients: [
			{item: "enchanted_book"},
			{tag: "forge:storage_blocks/diamond"},
			{item: "kubejs:arcane_alloy_ingot"},
			{item: "kubejs:arcane_alloy_ingot"},
			{tag: "forge:storage_blocks/gold"},
			{tag: "forge:storage_blocks/gold"},
			{item: "kubejs:arcane_alloy_ingot"},
			{item: "kubejs:arcane_alloy_ingot"}
		],
		"sapling": {item: "ars_nouveau:blue_archwood_sapling"},
		"output": {item: "ars_nouveau:enchanting_apparatus","count": 1},
		"time": 200
	})

	event.remove({output:"naturesaura:nature_altar"})
	event.custom(
		{
			type: "ars_nouveau:enchanting_apparatus",
			"keepNbtOfReagent": false,
			"output": {item: "naturesaura:nature_altar"},
			"pedestalItems": [
			  {item: "minecraft:smooth_stone"},
			  {item: "naturesaura:token_joy"},
			  {item: "kubejs:nature_essence"},
			  {item: "kubejs:nature_essence"},
			  {item: "kubejs:nature_essence"},
			  {item: "kubejs:nature_essence"},
			  {item: "kubejs:nature_essence"},
			  {item: "kubejs:nature_essence"}
			],
			"reagent": [
			  {item: "kubejs:basic_magic_machine"}
			],
			"sourceCost": 0
		  }
	)
	

	event.remove({output:'kubejs:zinc_tool_handle'})
	event.custom({
		type: "ars_nouveau:enchanting_apparatus",
		"keepNbtOfReagent": false,
		"output": {item: "kubejs:zinc_tool_handle"},
		"pedestalItems": [
		  {item: "minecraft:leather"},
		  {item: "minecraft:string"},
		  {item: "naturesaura:ancient_stick"},
		  {tag: "forge:ingots/zinc"},
		  {tag: "forge:ingots/zinc"},
		  {tag: "forge:ingots/zinc"}
		],
		"reagent": [
		  {item: 'immersiveengineering:stick_treated'}
		],
		"sourceCost": 0
	})
	
	event.remove({output:"create:water_wheel"})
	event.shapeless("create:water_wheel", ["create:cogwheel","ars_nouveau:water_essence"])
	
	event.remove({output:"create:large_water_wheel"})
	event.shapeless("create:large_water_wheel", ["create:large_cogwheel","2x ars_nouveau:water_essence"])
	
	
	
	///========================================= Tier 3 Components ================================================================

	event.shaped(
		Item.of('wither_skeleton_skull'), 
		[
		  'BBB',
		  'BFB', 
		  'BBB' 
		],
		{
		  F: "minecraft:skeleton_skull",
		  B: "wither_rose",
		}
	  )
	
	event.shaped(
		Item.of('enigmaticlegacy:infinimeal'), 
		[
		  'BXB',
		  'XFX', 
		  'BXB' 
		],
		{
		  F: "enigmaticlegacy:earth_heart",
		  B: "thermal:compost",
		  X: "kubejs:nature_essence"
		}
	).id("enigmaticlegacy:infinimeal")
	

	event.recipes.farmersdelight.cutting("deep_aether:goldenleaf_berries","#forge:tools/knives",Item.of("naturesaura:gold_leaf")
	.withChance(0.5))

	event.custom(
		{
			type: "lychee:block_crushing",
			post:[
				{type: "drop_item", item: "sophisticatedstorage:storage_link"},
				{type: "execute", command: "playsound immersiveengineering:metal_press_smash neutral @p", hide: true}
			],
			item_in:[
				{item: "ender_pearl"},
				{item: "sophisticatedstorage:advanced_pickup_upgrade"},
				{tag: "forge:plates/nickel"},
				{item: "kubejs:ivy_quartz"}
			]
		}
	).id("sophisticatedstorage:storage_link")
	event.remove({id:"sophisticatedstorage:storage_link_from_controller"})

	event.shaped(
		Item.of('create:brass_hand'), 
		[
		  ' A ',
		  'BCB',
		  ' B '
		],
		{
		  C: 'alexsmobs:falconry_glove',
		  B: '#forge:plates/brass',
		  A: 'create:andesite_alloy'
		  
		}
	  ).id("create:crafting/kinetics/brass_hand")

	event.custom({
		type: "create:sequenced_assembly",
		ingredient: {item: "kubejs:ivy_quartz"},
		loops: 12,
		results: [
		  {item: "kubejs:salmon_quartz"}
		],
		"sequence": [
			{
				type: "create:deploying",
				ingredients: [
				  {item: "kubejs:unstable_ivy_quartz"},
				  {item: "regions_unexplored:salmonberry" }
				],
				results: [
				  {item: "kubejs:unstable_ivy_quartz"}
				]
			  },
			{
				type: "create:deploying",
				ingredients: [
				  {item: "kubejs:unstable_ivy_quartz"},
				  {item: "regions_unexplored:salmonberry"}
				],
				results: [
				  {item: "kubejs:unstable_ivy_quartz"}
				]
			  },
		  {
			type: "create:deploying",
			ingredients: [
			  {item: "kubejs:unstable_ivy_quartz"},
			  {tag: "forge:raw_fishes/salmon"}
			],
			results: [
			  {item: "kubejs:unstable_ivy_quartz"}
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  {item: "kubejs:unstable_ivy_quartz"},
			  {item: "regions_unexplored:salmonberry"}
			],
			results: [
			  {item: "kubejs:unstable_ivy_quartz"}
			]
		  },
		],
		"transitionalItem": {item: "kubejs:unstable_ivy_quartz"}
	})

	event.recipes.naturesaura.altar("naturesaura:infused_stone","elementalcraft:whiterock",7500,40).id("naturesaura:altar/infused_stone")
	event.remove({output:"minecraft:clock"})
	event.custom({
		type: "create:sequenced_assembly",
		"ingredient": {
		  tag: "forge:plates/gold"
		},
		"loops": 1,
		results: [
		  {
			item: "minecraft:clock"
		  }
		],
		"sequence": [
		  {
			type: "create:deploying",
			ingredients: [
			  {
				item: "kubejs:unassembled_clock"
			  },
			  {
				item: "vintageimprovements:redstone_module"
			  }
			],
			results: [
			  {
				item: "kubejs:unassembled_clock"
			  }
			]
		  },
		  {
			type: "create:pressing",
			ingredients: [
			  {
				item: "kubejs:unassembled_clock"
			  }
			],
			results: [
			  {
				item: "kubejs:unassembled_clock"
			  }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  {
				item: "kubejs:unassembled_clock"
			  },
			  {
				tag: "forge:rods/gold"
			  }
			],
			results: [
			  {
				item: "kubejs:unassembled_clock"
			  }
			]
		  },
		  {
			type: "create:pressing",
			ingredients: [
			  {
				item: "kubejs:unassembled_clock"
			  }
			],
			results: [
			  {
				item: "kubejs:unassembled_clock"
			  }
			]
		  }
		],
		"transitionalItem": {
		  item: "kubejs:unassembled_clock"
		}
	  }
	)

	event.remove({output:"minecraft:compass"})
	event.custom({
		type: "create:sequenced_assembly",
		"ingredient": {
		  tag: "forge:plates/iron"
		},
		"loops": 1,
		results: [
		  {
			item: "minecraft:compass"
		  }
		],
		"sequence": [
		  {
			type: "create:deploying",
			ingredients: [
			  {
				item: "kubejs:unassembled_compass"
			  },
			  {
				item: "vintageimprovements:redstone_module"
			  }
			],
			results: [
			  {
				item: "kubejs:unassembled_compass"
			  }
			]
		  },
		  {
			type: "create:pressing",
			ingredients: [
			  {
				item: "kubejs:unassembled_compass"
			  }
			],
			results: [
			  {
				item: "kubejs:unassembled_compass"
			  }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  {
				item: "kubejs:unassembled_compass"
			  },
			  {
				tag: "forge:rods/iron"
			  }
			],
			results: [
			  {
				item: "kubejs:unassembled_compass"
			  }
			]
		  },
		  {
			type: "create:pressing",
			ingredients: [
			  {
				item: "kubejs:unassembled_compass"
			  }
			],
			results: [
			  {
				item: "kubejs:unassembled_compass"
			  }
			]
		  }
		],
		"transitionalItem": {
		  item: "kubejs:unassembled_compass"
		}
	  }
	)
	
	
	event.remove({output:'architects_palette:algal_blend'})
	event.shaped(
	  Item.of('4x architects_palette:algal_blend'), 
	  [
	    'IGI',
		'CXC',
		'IGI'
	  ],
	  {
		C: 'minecraft:clay_ball',
		I: '#forge:dusts/iron',
		X: 'kubejs:nature_essence',
		G: 'minecraft:kelp'
	  }
	)
	
	
	event.shapeless('9x create:andesite_alloy', ['create:andesite_alloy_block'])
	event.remove({output:'create:andesite_alloy'})
	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			item: "architects_palette:algal_blend"
		  },
		  "input1": {
			item: "minecraft:andesite"
		  },
		  "result": {
			"base_ingredient": {
			  item: "create:andesite_alloy"
			},
			"count": 2
		  },
		  "time": 200
		
	})

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			item: "ars_nouveau:water_essence"
		  },
		  "input1": {
			item: "kubejs:inert_alloy_ingot"
		  },
		  "result": {
			"base_ingredient": {
			  item: "elementalcraft:drenched_iron_ingot"
			},
			"count": 2
		  },
		  "time": 200
	}).id("elementalcraft:infusion/drenched_iron_ingot")

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "forbidden_arcanus:mundabitur_dust"
			},
			count: 3
		  },
		  "input1": {
			item: "minecraft:gold_ingot"
		  },
		  "result": {
			"base_ingredient": {
			  item: "forbidden_arcanus:deorum_ingot"
			},
			"count": 1
		  },
		  "time": 200
	}).id("forbidden_arcanus:deorum_ingot")

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "kubejs:ender_essence"
			},
			count: 4
		  },
		  "input1": {
			tag: "forge:ingots/lead"
		  },
		  "result": {
			"base_ingredient": {
			  item: "thermal:enderium_ingot"
			},
			"count": 1
		  },
		  "time": 200
	}).id("thermal:machines/smelter/smelter_alloy_enderium")

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "kubejs:light_essence"
			},
			count: 4
		  },
		  "input1": {
			tag: "forge:ingots/enderium"
		  },
		  "result": {
			"base_ingredient": {
			  item: "thermal:lumium_ingot"
			},
			"count": 1
		  },
		  "time": 200
	}).id("thermal:machines/smelter/smelter_alloy_lumium")

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			tag: "twilightforest:fiery_vial"
		  },
		  "input1": {
			item: "kubejs:inert_alloy_ingot"
		  },
		  "result": {
			"base_ingredient": {
			  item: "twilightforest:fiery_ingot"
			},
			"count": 1
		  },
		  "time": 200	
	}).id("twilightforest:equipment/fiery_ingot_crafting")

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "ars_nouveau:fire_essence"
			},
			count: 4
		  },
		  "input1": {
			item: "twilightforest:fiery_tears"
		  },
		  "result": {
			"base_ingredient": {
			  item: "twilightforest:fiery_tears"
			},
			"count": 2
		  },
		  "time": 800	
	})

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "ars_nouveau:fire_essence"
			},
			count: 4
		  },
		  "input1": {
			item: "twilightforest:fiery_blood"
		  },
		  "result": {
			"base_ingredient": {
			  item: "twilightforest:fiery_blood"
			},
			"count": 2
		  },
		  "time": 800	
	})

	
	event.remove({output:'minecraft:cauldron'})
	event.shaped(
	  Item.of('minecraft:cauldron'), 
	  [
		' I ',
		'IXI', 
		' I ' 
	  ],
	  {
		X: 'create:basin',
		I: '#forge:ingots/iron'
	  }
	)
	
	event.shaped(
	  Item.of('kubejs:andesite_machine'), 
	  [
		'AYA',
		'GXG', 
		'AZA' 
	  ],
	  {
		X: 'minecraft:dispenser',
		Z: 'vintageimprovements:redstone_module',
		A: 'create:andesite_casing',
		Y: 'minecraft:hopper',
		G: '#forge:gears/andesite'
	  }
	)

	event.remove({id:"vintageimprovements/sequenced_assembly/redstone_module"})
	event.remove({output:"vintageimprovements:redstone_module"})
	event.custom({
		type: "elementalcraft:binding",
		"element_amount": 1250,
		"element_type": "air",
		ingredients: [
			{
			tag: "forge:plates/gold"
			},
			{
			item: "thermal:redstone_servo"
			},
			{
			item: "minecraft:comparator"
			},
			{
			item: "create:pulse_repeater"
			},
			{
			item: "elementalcraft:firecrystal"
			}
		],
		"output": {
			"Count": 1,
			item: "vintageimprovements:redstone_module"
		}
	})

	event.custom({
		type: "elementalcraft:binding",
		"element_amount": 1250,
		"element_type": "air",
		ingredients: [
			{
			item: "ars_nouveau:earth_essence"
			},
			{
			item: "ars_nouveau:water_essence"
			},
			{
			item: "minecraft:ender_eye"
			},
			{
			item: "minecraft:crying_obsidian"
			},
			{
			item: "minecraft:crying_obsidian"
			}
		],
		"output": {
			"Count": 1,
			item: "kubejs:ender_essence"
		}
	})

	event.custom({
		type: "elementalcraft:binding",
		"element_amount": 1250,
		"element_type": "water",
		ingredients: [
			{
			item: "ars_nouveau:fire_essence"
			},
			{
			item: "ars_nouveau:air_essence"
			},
			{
			item: "quark:glowberry_sack"
			},
			{
			tag: "forge:froglights"
			},
			{
			item: "minecraft:glow_ink_sac"
			}
		],
		"output": {
			"Count": 1,
			item: "kubejs:light_essence"
		}
	})

	
	
	///======================================== Tier 3 Machines =======================================================================

	event.shaped("create:steam_engine",
		[
			"PAP",
			"PFP",
			"PWP"
		],
		{
			P: "#forge:plates/copper",
			A: "#forge:rods/andesite",
			F: "ars_nouveau:fire_essence",
			W: "ars_nouveau:water_essence"
		}
	).id("create:crafting/kinetics/steam_engine")

	event.shaped("2x create:redstone_link",
		[
			"T",
			"C",
			"E"
		],
		{
			T: "redstone_torch",
			C: "create:brass_casing",
			E: "kubejs:ender_essence"
		}
	).id("create:crafting/logistics/redstone_link")

	event.shaped(
		Item.of('create:mechanical_press'), 
		[
		  'PXP',
		  'PYP', 
		  'PZP'
		],
		{
		  P: 'create:andesite_casing',
		  X: 'kubejs:andesite_machine',
		  Y: "piston",
		  Z: "kubejs:pressing_catalyst"
		}
	  ).id("create:crafting/kinetics/mechanical_press")
	
	event.shaped(
	  Item.of('sophisticatedstorage:controller'), 
	  [
		'PXP',
		'LYL', 
		'PZP'
	  ],
	  {
		P: '#forge:plates/silver',
		X: 'kubejs:ender_essence',
		Y: "sophisticatedstorage:gold_barrel",
		Z: "vintageimprovements:redstone_module",
		L: "sophisticatedstorage:storage_link"
	  }
	).id("sophisticatedstorage:controller")

	event.remove({output:'torchmaster:megatorch'})
	event.shaped(
	  Item.of('torchmaster:megatorch'), 
	  [
		'AXA',
		' L ', 
		'ALA'
	  ],
	  {
		A: '#forge:storage_blocks/lead',
		X: 'kubejs:light_essence',
		L: "#minecraft:logs"
	  }
	)
	
	event.remove({output:'thermal:device_rock_gen'})
	event.shaped(
	  Item.of('thermal:device_rock_gen'), 
	  [
	    'SBS',
		'WXL',
		'IGI'
	  ],
	  {
		L: 'minecraft:lava_bucket',
		B: 'ars_nouveau:glyph_break',
		I: '#forge:plates/tin',
		X: 'kubejs:andesite_machine',
		W: 'minecraft:water_bucket',
		S: '#forge:plates/lead',
		G: '#forge:gears/tin'
	  }
	)
	
	event.remove({output:'farmersdelight:cooking_pot'})
	event.shaped(
	  Item.of('farmersdelight:cooking_pot'), 
	  [
		' Y ',
		' Z ', 
		'IXI' 
	  ],
	  {
		X: 'minecraft:cauldron',
		Y: 'minecraft:iron_shovel',
		Z: 'minecraft:heart_of_the_sea',
		I: 'minecraft:brick'
	  }
	)
	
	event.remove({output:'irons_spellbooks:alchemist_cauldron'})
	event.shaped(
	  Item.of('irons_spellbooks:alchemist_cauldron'), 
	  [
		'ICI',
		'IMI', 
		'IFI' 
	  ],
	  {
		I: '#forge:ingots/iron',
		C: 'minecraft:cauldron',
		M: 'kubejs:andesite_machine',
		F: 'ars_nouveau:fire_essence'
	  }
	)

	event.remove({id:"vintageimprovements/sequenced_assembly/redstone_module"})
	event.remove({output:"create:smart_chute"})
	event.custom({
		type: "elementalcraft:binding",
		"element_amount": 250,
		"element_type": "water",
		ingredients: [
			{
			tag: "forge:plates/brass"
			},
			{
			item: "create:filter"
			},
			{
			item: "vintageimprovements:redstone_module"
			},
			{
			item: "create:chute"
			}
		],
		"output": {
			"Count": 1,
			item: "create:smart_chute"
		}
	})

	event.remove({output:"create:brass_tunnel"})
	event.custom({
		type: "elementalcraft:binding",
		"element_amount": 250,
		"element_type": "water",
		ingredients: [
			{
			tag: "forge:plates/brass"
			},
			{
			item: "create:filter"
			},
			{
			item: "vintageimprovements:redstone_module"
			},
			{
			item: "create:andesite_tunnel"
			}
		],
		"output": {
			"Count": 1,
			item: "create:brass_tunnel"
		}
	})

	event.remove({output:"create:brass_funnel"})
	event.custom({
		type: "elementalcraft:binding",
		"element_amount": 250,
		"element_type": "water",
		ingredients: [
			{
			tag: "forge:plates/brass"
			},
			{
			item: "create:filter"
			},
			{
			item: "vintageimprovements:redstone_module"
			},
			{
			item: "create:andesite_funnel"
			}
		],
		"output": {
			"Count": 1,
			item: "create:brass_funnel"
		}
	})

	event.shaped("create:mechanical_drill",
		[ "AXA","AYA","AZA" ],
		{ A:"create:andesite_casing",X:"thermal:drill_head",Y:"kubejs:andesite_machine",Z:"ars_nouveau:glyph_break" }).id("create:crafting/kinetics/mechanical_drill")
	
	event.shaped("create:mechanical_saw",
		[ "AXA","AYA","AZA" ],
		{ A:"create:andesite_casing",X:"thermal:saw_blade",Y:"kubejs:andesite_machine",Z:"ars_nouveau:glyph_fell" }).id("create:crafting/kinetics/mechanical_saw")
	
	event.shaped("create:mechanical_harvester",
		[ "XXX","AYA","AZA" ],
		{ A:"create:andesite_casing",X:"vintageimprovements:iron_spring",Y:"kubejs:andesite_machine",Z:"ars_nouveau:glyph_harvest" }).id("create:crafting/kinetics/mechanical_harvester")
	
	event.shaped("create:mechanical_plough",
		[ "AXA","AYA","AZA" ],
		{ A:"create:andesite_casing",X:"tombstone:grave_plate",Y:"kubejs:andesite_machine",Z:"ars_nouveau:glyph_touch" }).id("create:crafting/kinetics/mechanical_plough")
	
	event.shaped("create:encased_fan",
		[ "AXA","AYA","AZA" ],
		{ A:"create:andesite_casing",X:"create:propeller",Y:"kubejs:andesite_machine",Z:"ars_nouveau:glyph_gust" }).id("create:crafting/kinetics/encased_fan")
	
	event.shaped("create:mechanical_mixer",
		[ "AXA","AYA","AZA" ],
		{ A:"create:andesite_casing",X:"create:whisk",Y:"kubejs:andesite_machine",Z:"create:cogwheel" }).id("create:crafting/kinetics/mechanical_mixer")
	
	event.shaped("create:mechanical_roller",
		[ "AXA","AYA","AZA" ],
		{ A:"create:andesite_casing",X:"create:crushing_wheel",Y:"kubejs:andesite_machine",Z:"ars_nouveau:glyph_exchange" }).id("create:crafting/kinetics/mechanical_roller")
	
	event.shaped("create:weighted_ejector",
		[ "AXA","AYA","AZA" ],
		{ A:"create:andesite_casing",X:"create:depot",Y:"supplementaries:spring_launcher",Z:"create:cogwheel" }).id("create:crafting/kinetics/weighted_ejector")

	event.shaped("create:deployer",
		[ "AXA","AYA","AZA" ],
		{ A:"create:andesite_casing",X:"create:brass_hand",Y:"kubejs:andesite_machine",Z:"ars_nouveau:glyph_interact" }).id("create:crafting/kinetics/deployer")

	event.shaped("create:portable_storage_interface",
		[ "AXA","AYA","AXA" ],
		{ A:"create:andesite_casing",X:"create:chute",Y:"kubejs:andesite_machine",}).id("create:crafting/kinetics/portable_storage_interface")
	
	//============================================ Tier 4 Components ========================================================================================

	event.recipes.create.mixing("create:rose_quartz",["kubejs:salmon_quartz","4x forbidden_arcanus:mundabitur_dust","wither_rose"]).id("create:crafting/materials/rose_quartz").heated()

	event.remove({id:'immersiveengineering:blastfurnace/steel'})

	event.recipes.createMechanicalCrafting("vintageimprovements:grinder_belt",[
		"SSSSS",
		"SDDDS",
		"SDXDS",
		"SDDDS",
		"SSSSS"
	],{
		S: 'create:sand_paper',
		D: '#forge:plates/diamond',
		X: 'forbidden_arcanus:stellarite_piece'
	}).id("vintageimprovements:craft/grinder_belt")

	event.custom({

		type: "immersiveengineering:blast_furnace",
		"input": {
			item: "kubejs:wrought_iron_ingot"
		},
		"result": {
			item: "thermal:steel_ingot"
		},
		"slag": {
			item: "thermal:slag"
		},
		"time": 600
	})

	event.shaped(
		Item.of('kubejs:steel_machine'), 
		[
		  'IGI',
		  'RMR', 
		  'IGI' 
		],
		{
		  I: '#forge:plates/steel',
		  M: 'kubejs:andesite_machine',
		  R: 'forbidden_arcanus:rune',
		  G: '#forge:gears/steel'

		}
	  )
	event.recipes.create.compacting("prettypipes:blank_module",["#forge:storage_blocks/zinc","3x prettypipes:pipe","vintageimprovements:redstone_module"]).id("prettypipes:blank_module")

	event.recipes.create.compacting("prettypipes:low_crafting_module",["prettypipes:blank_module","create:mechanical_arm","sophisticatedstorage:crafting_upgrade"]).id("prettypipes:low_crafting_module")

	event.recipes.create.compacting("prettypipes:low_filter_module",["prettypipes:blank_module","sophisticatedstorage:filter_upgrade","3x prettypipes:pipe"]).id("prettypipes:low_filter_module")
	
	event.recipes.create.mixing("kubejs:fiery_clay_blend",["#forge:dusts/coal_coke","ars_nouveau:fire_essence","twigs:silt_ball","clay_ball","ars_nouveau:bombegranate_pod"]).heated()

	event.recipes.create.compacting("immersiveengineering:blastbrick","12x kubejs:fiery_clay_blend").id("immersiveengineering:crafting/blastbrick").heated()

	
	event.shaped(
		Item.of('create:empty_blaze_burner'), 
		[
		  'BBB',
		  'FDF', 
		  'BNB' 
		],
		{
		  B: 'iron_bars',
		  D: 'kubejs:death_essence',
		  F: "ars_nouveau:fire_essence",
		  N: "netherrack"

		}
	  ).id("create:crafting/kinetics/empty_blaze_burner")
	//===================================================== Tier 4 Machines

	event.shaped("create:mechanical_crafter",
		[ "AZA","AYA","AXA" ],
		{ A:"create:brass_casing",X:"sophisticatedstorage:crafting_upgrade",Y:"kubejs:andesite_machine",Z:"#forge:gears/steel"}).id("create:crafting/kinetics/mechanical_crafter")
	
	event.shaped("vintageimprovements:belt_grinder",
		[ "AZA","AYA","AXA" ],
		{ A:"create:andesite_casing",Z:"vintageimprovements:grinder_belt",Y:"kubejs:andesite_machine",X:"#forge:gears/steel"}).id("vintageimprovements:craft/belt_grinder")
	

	event.shaped("2x create:white_sail",
		[ "AYA","XYX","AYA" ],
		{ A:"#forge:rods/treated_wood",X:"create:andesite_alloy",Y:"immersiveengineering:windmill_sail"}).id("create:crafting/kinetics/white_sail")
	

		event.remove({id:'ars_nouveau:storage_lectern'})
		event.custom({
			type: "ars_nouveau:imbuement",
			"count": 1,
			"input": {
				item: "prettypipes:crafting_terminal"
			},
			"output": 'ars_nouveau:storage_lectern',
			"pedestalItems": [],
			"source": 10000
		})

	  event.remove({output:'minecraft:hopper'})
	  event.shaped(
		Item.of('2x minecraft:hopper'), 
		[
		  ' I ',
		  'IMI', 
		  ' I ' 
		],
		{
		  I: '#forge:plates/steel',
		  M: 'woodenhopper:wooden_hopper'

		}
	  )

	  event.shaped(
		Item.of('minecraft:hopper'), 
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:plates/iron',
		  M: 'woodenhopper:wooden_hopper',

		}
	  )

	  event.remove({output:"prettypipes:pipe"})
	  event.shaped(
		Item.of('prettypipes:pipe'), 
		[
		  'IMI' 
	 
		],
		{
		  I: '#forge:nuggets/steel',
		  M: 'quark:pipe'

		}
	  )



	//======================================================== placeholder endgame

	event.remove({output:"thermal:machine_frame"})
	event.custom(
		{
			type: "create:mechanical_crafting",
			"pattern": [
			  "AAAAAAA",
			  "ABCHCBA",
			  "ACGEGCA",
			  "APXYXPA",
			  "ACGNGCA",
			  "ABCHCBA",
			  "AAAAAAA"
			],
			"key": {
			  "C": {
				item: "thermal:rf_coil"
			  },
			  "B": {
				item: "thermal:redstone_servo"
			  },
			  "H": {
				item: "minecraft:hopper"
			  },
			  "P": {
				item: "immersiveengineering:capacitor_hv"
			  },
			  "G": {
				item: "create:large_cogwheel"
			  },
			  "X": {
				item: "create:mechanical_arm"
			  },
			  "Y": {
				item: "minecraft:nether_star"
			  },
			  "N": {
				tag: "forge:gears/netherite"
			  },
			  "E": {
				tag: "forge:gears/enderium"
			  },
			  "A": {
				tag: "forge:plates/tin"
			  }
			},
			"result": {
			  item: "thermal:machine_frame",
			  "count": 1
			},
			"acceptMirrored": true
		  }
	)
})
