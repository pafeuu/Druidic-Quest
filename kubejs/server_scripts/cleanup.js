var colors = ['red','blue','white','gray','light_gray','black','purple','magenta','yellow','green','lime','light_blue','blue','orange','pink','brown']

var metals = ['tin','silver','lead','gold','iron','copper','nickel','zinc','aluminum']

var alloys = ['bronze','enderium','brass','invar','rose_gold','constantan','signalum','lumium']

var VintagePlates = ['tin','silver','lead','nickel','zinc','aluminum','bronze','enderium','invar','rose_gold','constantan',
	'signalum','lumium']

var CreatePlates = ['copper','brass','iron']

var wood_TF = ['canopy','mangrove','twilight_oak','time','transformation','mining','sorting','dark']

var wood_TF_no_mangrove = ['canopy','twilight_oak','time','transformation','mining','sorting','dark']

ServerEvents.recipes(event => {
  
	event.remove({id:"enigmaticlegacy:infernal_shield"})
	event.remove({id:"alexsmobs:shield_of_the_deep"})
	event.remove({id:"immersiveengineering:crafting/shield"})

	event.remove({type:"minecraft:crafting_shapeless",mod:"thermal",output:"#forge:dusts"})
	event.remove({type:"minecraft:crafting_shapeless",mod:"thermal",output:"#forge:ingots",input:"minecraft:fire_charge"})

	event.remove({input:'immersiveengineering:hammer'})
	event.remove({mod:"immersiveengineering",output:"#forge:rods/all_metal"})
	event.remove({output:"elementalcraft:water_mill_wood_saw"})
	event.remove({output:"#aether:accessories_gloves"})

	event.replaceOutput({id:"vintageimprovements:craft/sulfur_nuggets_to_item"},"vintageimprovements:sulfur","thermal:sulfur")

	event.shapeless("naturesaura:infused_iron","9x kubejs:infused_iron_nugget")
	event.stonecutting("farmersdelight:potato_crate","thermal:potato_block")
	event.stonecutting("farmersdelight:potato_crate","quark:potato_crate")
	event.remove({id:"quark:building/crafting/compressed/potato_crate"})
	event.remove({id:"thermal:storage/potato_block"})

	event.shapeless("kubejs:gold_leaf_block","9x naturesaura:gold_leaf")
	event.shapeless("9x naturesaura:gold_leaf","kubejs:gold_leaf_block")

	event.shapeless("9x immersive_weathering:ivy","kubejs:ivy_block")
	event.shapeless("kubejs:ivy_block","9x immersive_weathering:ivy")

	event.shapeless("9x deepslate","kubejs:sturdy_deepslate")
	event.shapeless("kubejs:sturdy_deepslate","9x deepslate")

	event.shaped("thermal:ruby_block",["RR","RR"],{R:"thermal:ruby"})
	event.shapeless("4x thermal:ruby","thermal:ruby_block")

	event.shaped("thermal:gunpowder_block",["GGG","GGG","GGG"],{G:"#forge:storage_blocks/gunpowder"}).id("thermal:storage/gunpowder_block")
	event.shapeless("9x quark:gunpowder_sack","thermal:gunpowder_block").id("thermal:storage/gunpowder_from_block")

	event.shapeless("kubejs:inert_alloy_block","9x kubejs:inert_alloy_ingot")
	event.shapeless("9x kubejs:inert_alloy_ingot","kubejs:inert_alloy_block")
	event.shapeless("kubejs:arcane_alloy_block","9x kubejs:arcane_alloy_ingot")
	event.shapeless("9x kubejs:arcane_alloy_ingot","kubejs:arcane_alloy_block")

	//============================= Dusts
	event.recipes.create.milling('thermal:quartz_dust','#forge:gems/quartz')
	event.recipes.create.milling("thermal:sulfur_dust","#forge:gems/sulfur")

    metals.forEach(id => {
		event.custom(
			{
			"type": "create:milling",
			"ingredients": [
			  {
				"tag": "forge:raw_materials/"+id
			  }
			],
			"results": [
			  {
				"item": "thermal:"+id+"_dust",
				"count": 1
			  }
			],
			"processingTime": 100
		  })/// Adds Dusts crafting recipes to the create machines
		
	});
	 
	function metal(material)
	{
		event.remove({id:'thermal:machines/press/press_'+material+'_ingot_to_coin'})
		event.remove({id:'thermal:machines/press/press_'+material+'_nugget_to_coin'}) /// Removes Coins crafting recipes

		event.custom(
			{
			"type": "create:milling",
			"ingredients": [
			  {
				"tag": "forge:ingots/"+material
			  }
			],
			"results": [
			  {
				"item": "thermal:"+material+"_dust",
				"count": 1
			  }
			],
			"processingTime": 100
		  })/// Adds Dusts crafting recipes to the create machines
	}
	//-------------------Keys---------------------

	event.recipes.create.milling('thermal:ruby','kubejs:broken_key')
	event.recipes.create.milling(['kubejs:broken_key',"2x thermal:ruby"],'kubejs:overworld_key')
	event.recipes.create.milling(['kubejs:broken_key',"4x thermal:ruby"],'kubejs:twilight_key')
	event.recipes.create.milling(['kubejs:broken_key',"8x thermal:ruby"],'kubejs:nether_key')

	//-------------------Plates---------------------

	function plates(inputItem, outputItem) {// Adds Plates crafting recipes to the machines
		event.custom({
			type: "create:pressing",
			ingredients: [{ tag: inputItem }],
			results: [{ item: outputItem }],
		});// Adds Plates crafting recipes to the create machines
	
		event.recipes.thermal.press(outputItem,"#"+inputItem)// Adds Plates crafting recipes to the thermal machines
	
		event.custom({
			type: "immersiveengineering:metal_press",
			energy: 2400,
			input: { tag: inputItem },
			mold: "immersiveengineering:mold_plate",
			result: { item: outputItem },
		});// Adds Plates crafting recipes to the IE machines
	}
	
	function hammering(block, output, count) {
		event.custom({
			type: "lychee:block_interacting",
			item_in: { item: "immersiveengineering:hammer" },
			block_in: block,
			post: [
				{ type: "drop_item", item: output,count: count },
				{ type: "place", block: "air" },
				{ type: "damage_item" }
			]
		});// Adds In World Plates crafting recipes 
	}

	hammering("minecraft:copper_block","create:copper_sheet", 3)
	hammering("minecraft:iron_block","create:iron_sheet", 3)
	hammering("minecraft:gold_block","create:golden_sheet", 3)
	hammering("create:brass_block","create:brass_sheet",3)

	hammering("thermal:tin_block","vintageimprovements:tin_sheet", 3)
	hammering("thermal:silver_block","vintageimprovements:silver_sheet", 3)
	hammering("thermal:lead_block","vintageimprovements:lead_sheet", 3)
	hammering("thermal:nickel_block","vintageimprovements:nickel_sheet", 3)
	hammering("thermal:bronze_block","vintageimprovements:bronze_sheet", 3)

	hammering("minecraft:diamond_block","kubejs:diamond_plate", 3)
	hammering("kubejs:inert_alloy_block","kubejs:inert_alloy_plate", 3)
	hammering("kubejs:arcane_alloy_block","kubejs:arcane_alloy_plate", 3)
	hammering("immersiveengineering:treated_wood_horizontal", "kubejs:wooden_plate", 1)
	hammering("minecraft:smooth_stone","kubejs:stone_plate", 1)

	hammering("twilightforest:ironwood_block","vintageimprovements:ironwood_sheet", 3)
	hammering("twilightforest:steeleaf_block","vintageimprovements:steeleaf_sheet", 3)
	hammering("twilightforest:knightmetal_block","vintageimprovements:knightmetal_sheet", 3)
	hammering("twilightforest:fiery_block","vintageimprovements:fiery_sheet", 3)
	hammering("create:experience_block","create_things_and_misc:experience_sheet",3)

	plates("forge:ingots/arcane_alloy","kubejs:arcane_alloy_plate")
	plates("forge:ingots/inert_alloy","kubejs:inert_alloy_plate")
	plates("forge:treated_wood", "kubejs:wooden_plate")
	plates("chipped:smooth_stone","kubejs:stone_plate")
	plates("forge:gems/diamond","kubejs:diamond_plate")
	
	
	
	plates("create:experience_nugget","create_things_and_misc:experience_sheet")
	plates("forge:ingots/ironwood","vintageimprovements:ironwood_sheet")
	plates("forge:ingots/knightmetal","vintageimprovements:knightmetal_sheet")
	plates("forge:ingots/fiery","vintageimprovements:fiery_sheet")
	plates("forge:ingots/tin","vintageimprovements:tin_sheet")
	
	plates("forge:ingots/silver","vintageimprovements:silver_sheet")
	plates("forge:ingots/lead","vintageimprovements:lead_sheet")
	plates("forge:ingots/nickel","vintageimprovements:nickel_sheet")
	plates("forge:ingots/bronze","vintageimprovements:bronze_sheet")

	plates("forge:ingots/copper","create:copper_sheet")

	plates("forge:ingots/iron","create:iron_sheet")

	plates("forge:ingots/gold","create:golden_sheet")

	plates("forge:ingots/brass","create:brass_sheet")

	event.remove([{id:"create:pressing/gold_ingot"},{id:"thermal:machines/press/press_gold_ingot_to_plate"},{id:"immersiveengineering:metalpress/plate_brass"}])

	VintagePlates.forEach(material => {
		event.replaceOutput({output:'#forge:plates/'+material},'#forge:plates/'+material,'vintageimprovements:'+material+'__sheet')
		event.shapeless('vintageimprovements:'+material+'_sheet','#forge:plates/'+material)	
	});

	CreatePlates.forEach(material => {
		event.replaceOutput({output:'#forge:plates/'+material},'#forge:plates/'+material,'create:'+material+'__sheet')
		event.shapeless('create:'+material+'_sheet','#forge:plates/'+material)	
	});
		 // ofc gold is different
		event.replaceOutput({output:'#forge:plates/gold'},'#forge:plates/gold','create:golden_sheet')
		event.shapeless('create:golden_sheet','#forge:plates/gold')	

	//-------------------Coins---------------------
	event.shapeless('thermal:silver_coin', ['9x thermal:copper_coin'])
	event.shapeless('thermal:gold_coin', ['9x thermal:silver_coin'])
	event.shapeless('thermal:netherite_coin', ['9x thermal:gold_coin'])
	event.shapeless('thermal:enderium_coin', ['9x thermal:netherite_coin'])

	event.shapeless('9x thermal:copper_coin',['thermal:silver_coin'])
	event.shapeless('9x thermal:silver_coin',['thermal:gold_coin'])
	event.shapeless('9x thermal:gold_coin',['thermal:netherite_coin'])
	event.shapeless('9x thermal:netherite_coin',['thermal:enderium_coin'])
	
	metal('gold')
	metal('copper')
	metal('silver')
	metal('enderium')
	metal('netherite')
	metal('steel')
	metal('invar')
	metal('nickel')
	metal('tin')
	metal('lead')
	metal('bronze')
	metal('electrum')
	metal('constantan')
	metal('iron')
	metal('signalum')
	metal('lumium')
	event.remove({output:'thermal:press_coin_die'})

	
	///=======================================Building blocks=======================================///

	event.shaped("2x kubejs:polished_planks",
		[
			"PX",
			"XP"
		],
		{
			P: "#minecraft:planks",
			X: "#forge:rods/wooden"
		}
	)
	event.shaped("2x kubejs:stacked_planks",
		[
			"PP",
			"PP"
		],
		{
			P: "#minecraft:wooden_slabs",
		}
	)

	event.shaped("kubejs:packed_planks",
		[
			"SPS",
			"PPP",
			"SPS"
		],
		{
			P: "#minecraft:planks",
			S: "#forge:rods/wooden"
		})

	event.shapeless("twigs:cracked_bricks","immersive_weathering:cracked_bricks").id("twigs:cracked_bricks")
	event.shapeless("createdeco:cracked_red_bricks","twigs:cracked_bricks").id("createdeco:cracked_red_bricks_from_bricks_smelting")
	event.shapeless("immersive_weathering:cracked_bricks","createdeco:cracked_red_bricks")

	event.remove({id:'supplementaries:timber_frame'})
	event.shaped(
		Item.of('4x supplementaries:timber_frame'), 
		[
		  'CCC', 
		  'C C',
		  'CCC',
		],
		{
		  C: 'stick'
		}
	  )

	wood_TF.forEach(type => {
		
		event.shapeless("twilightdelight:"+type+"_cabinet","everycomp:fd/twilightforest/"+type+"_cabinet").id("twilightdelight:"+type+"_cabinet")
		

		event.shaped("twilightforest:"+type+"_chest",
			[
				"XXX",
				"X X",
				"XXX"
			],
			{X:"twilightforest:"+type+"_planks"}
		).id("twilightforest:wood/"+type+"_chest")
	});

	wood_TF_no_mangrove.forEach(type => {
		event.shapeless("everycomp:fd/twilightforest/"+type+"_cabinet","twilightdelight:"+type+"_cabinet")
	});

	event.shaped("supplementaries:item_shelf",
		[
			"S S",
			"PPP"
		],
		{S:"#forge:rods/wooden",P:"minecraft:planks"}
	).id("supplementaries:item_shelf")

	event.remove({output:"twigs:calcite_wall"})
	event.remove({output:"twigs:tuff_wall"})
	event.remove({output:"twigs:calcite_stairs"})
	event.remove({output:"createdeco:mossy_red_bricks"})
	event.remove({output:"twigs:mossy_bricks"})
	event.remove({id:"immersive_weathering:charred_log"})

	event.shapeless("regions_unexplored:blackstone_cluster","blackstone").id("regions_unexplored:blackstone_cluster")
	event.shapeless("twigs:polished_basalt_bricks","architects_palette:basalt_tiles").id("twigs:polished_basalt_bricks")
	event.shapeless("architects_palette:basalt_tiles","twigs:polished_basalt_bricks")
	event.shapeless("twigs:mossy_bricks","immersive_weathering:mossy_bricks")
	event.shapeless("createdeco:mossy_red_bricks","twigs:mossy_bricks")
	event.shapeless("immersive_weathering:mossy_bricks","createdeco:mossy_red_bricks")
	event.shapeless("quark:mossy_cobblestone_bricks","twigs:mossy_cobblestone_bricks").id("quark:building/crafting/mossy_cobblestone_bricks")

	event.shaped("architects_palette:hadaline_tiles",["XX","XX"],{"X":"architects_palette:hadaline_bricks"}).id("architects_palette:hadaline_tiles")
	event.shaped("ancient_aether:carved_tiles",["XX","XX"],{"X":"aether_redux:carved_base"}).id("ancient_aether:carved_tiles")

	event.shapeless("regions_unexplored:mossy_stone","immersive_weathering:mossy_stone").id("regions_unexplored:mossy_stone")
	event.shapeless("immersive_weathering:mossy_stone","regions_unexplored:mossy_stone")

	event.shapeless("quark:dripstone_bricks","architects_palette:dripstone_bricks").id("architects_palette:dripstone_bricks")
	event.shapeless("architects_palette:dripstone_bricks","quark:dripstone_bricks")

	event.shapeless("quark:calcite_bricks","architects_palette:calcite_bricks").id("architects_palette:calcite_bricks")
	event.shapeless("architects_palette:calcite_bricks","quark:calcite_bricks")

	event.shapeless("twigs:cobblestone_bricks","quark:cobblestone_bricks").id("twigs:cobblestone_bricks")
	event.shapeless("quark:cobblestone_bricks","twigs:cobblestone_bricks")
	event.shapeless("twigs:gravel_bricks","supplementaries:gravel_bricks")
	event.shapeless("supplementaries:gravel_bricks","twigs:gravel_bricks").id("supplementaries:gravel_bricks")

	event.remove({id:"twigs:azalea_flowers_from_flowering_azalea"})

	event.shapeless("4x regions_unexplored:blue_magnolia_flowers","4x regions_unexplored:blue_magnolia_leaves").id("regions_unexplored:blue_magnolia_flowers")
	event.shapeless("4x regions_unexplored:pink_magnolia_flowers","4x regions_unexplored:pink_magnolia_leaves").id("regions_unexplored:pink_magnolia_flowers")
	event.shapeless("4x regions_unexplored:white_magnolia_flowers","4x regions_unexplored:white_magnolia_leaves").id("regions_unexplored:white_magnolia_flowers")

	event.shaped("aether:iron_ring",
		[
			"XXX",
			"XRX",
			"XXX"
		],
		{X:"#forge:nuggets/iron",
		 R:"ars_nouveau:ring_of_potential"}
	).id("aether:iron_ring")
	
	event.replaceInput({id:"immersiveengineering:crafting/wirecutter"},"#forge:rods/wooden","immersiveengineering:stick_treated")

	//============================= Shapeshifting Root

	event.shaped("quark:ancient_sapling",
	[
		"XXX",
		"XRX",
		"XXX"
	],
	{
		X: "calcite",
		R: "kubejs:shapeshifting_root"
	})

	event.shaped("quark:blue_blossom_sapling",
		[
			"XXX",
			"XRX",
			"XXX"
		],
		{
			X: "#forge:dyes/blue",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("quark:red_blossom_sapling",
		[
			"XXX",
			"XRX",
			"XXX"
		],
		{
			X: "#forge:dyes/red",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("quark:lavender_blossom_sapling",
		[
			"XXX",
			"XRX",
			"XXX"
		],
		{
			X: "#forge:dyes/purple",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("quark:orange_blossom_sapling",
		[
			"XXX",
			"XRX",
			"XXX"
		],
		{
			X: "#forge:dyes/orange",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("quark:yellow_blossom_sapling",
		[
			"XXX",
			"XRX",
			"XXX"
		],
		{
			X: "#forge:dyes/yellow",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("regions_unexplored:blue_bioshroom",
		[
			"ZXZ",
			"XRX",
			"ZXZ"
		],
		{
			X: "#forge:dyes/blue",
			Z: "quark:glow_shroom",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("regions_unexplored:pink_bioshroom",
		[
			"ZXZ",
			"XRX",
			"ZXZ"
		],
		{
			X: "#forge:dyes/pink",
			Z: "quark:glow_shroom",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("regions_unexplored:green_bioshroom",
		[
			"ZXZ",
			"XRX",
			"ZXZ"
		],
		{
			X: "#forge:dyes/green",
			Z: "quark:glow_shroom",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("regions_unexplored:yellow_bioshroom",
		[
			"ZXZ",
			"XRX",
			"ZXZ"
		],
		{
			X: "#forge:dyes/yellow",
			Z: "quark:glow_shroom",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("regions_unexplored:pink_bioshroom",
		[
			"ZXZ",
			"XRX",
			"ZXZ"
		],
		{
			X: "#forge:dyes/pink",
			Z: "quark:glow_shroom",
			R: "kubejs:shapeshifting_root"
	})

	event.shaped("quark:glow_shroom",
		[
			"ZXZ",
			"ZRZ",
			"ZZZ"
		],
		{
			X: "#forge:mushrooms",
			Z: "glow_berries",
			R: "kubejs:shapeshifting_root"
	})

})

