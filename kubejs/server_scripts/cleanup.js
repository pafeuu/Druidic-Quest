var colors = ['red','blue','white','gray','light_gray','black','purple','magenta','yellow','green','lime','light_blue','blue','orange','pink','brown']

var metals = ['tin','silver','lead','gold','iron','copper','nickel','zinc','aluminum']

var alloys = ['bronze','enderium','brass','invar','rose_gold','constantan','signalum','lumium']

var wood_TF = ['canopy','mangrove','twilight_oak','time','transformation','mining','sorting','dark']

var wood_TF_no_mangrove = ['canopy','twilight_oak','time','transformation','mining','sorting','dark']


global.nukelist = ["twigs:calcite_wall",
    "twigs:tuff_wall",
    "twigs:calcite_stairs",
    "kubejs:recipe_changed",
    "kubejs:unstable_ivy_quartz",
    "aether:life_shard",
    "immersiveengineering:shield",
    "alexsmobs:shield_of_the_deep",
    "enigmaticlegacy:infernal_shield",
    "forbiddenarcanus:obsidian_skull_shield",
    "immersiveengineering:toolbox",
    'vintageimprovements:refined_radiance_sheet',
	'vintageimprovements:refined_glowstone_sheet',
	'vintageimprovements:refined_obsidian_sheet', 
	'vintageimprovements:refined_glowstone_rod', 
	'vintageimprovements:refined_obsidian_rod',
	'vintageimprovements:refined_glowstone_spring',
	'vintageimprovements:refined_obsidian_spring',
	'vintageimprovements:small_refined_glowstone_spring',
	'vintageimprovements:small_refined_obsidian_spring',
	'vintageimprovements:refined_glowstone_wire',
	'vintageimprovements:refined_obsidian_wire',
	'vintageimprovements:refined_radiance_rod',
	'vintageimprovements:refined_radiance_spring',
	'vintageimprovements:small_refined_radiance_spring',
	'vintageimprovements:refined_radiance_wire',
	'vintageimprovements:queens_slime_sheet',
	'vintageimprovements:slimesteel_sheet',
	'vintageimprovements:amethyst_bronze_sheet',
	'vintageimprovements:cast_iron_sheet', 
	'vintageimprovements:cobalt_sheet',
	'vintageimprovements:cast_iron_rod',
	'vintageimprovements:cobalt_rod',
	'vintageimprovements:amethyst_bronze_rod',
	'vintageimprovements:nethersteel_sheet',
	'vintageimprovements:nethersteel_sheet',
	'vintageimprovements:hepatizon_sheet',
	'vintageimprovements:rhodium_sheet',
	'vintageimprovements:pure_gold_sheet',
	'vintageimprovements:platinum_sheet',
	'vintageimprovements:pig_iron_sheet',
	'vintageimprovements:palladium_sheet',
	'vintageimprovements:manyullyn_sheet',
	'vintageimprovements:osmium_sheet',
	'vintageimprovements:hepatizon_rod',
	'vintageimprovements:manyullyn_rod',
	'vintageimprovements:osmium_rod',
	'vintageimprovements:palladium_rod',
	'vintageimprovements:pig_iron_rod',
	'vintageimprovements:platinum_rod',
	'vintageimprovements:pure_gold_rod',
	'vintageimprovements:rhodium_rod',
	'vintageimprovements:amethyst_bronze_spring',
	'vintageimprovements:pure_gold_spring',
	'vintageimprovements:platinum_spring',
	'vintageimprovements:pig_iron_spring',
	'vintageimprovements:palladium_spring',
	'vintageimprovements:osmium_spring',
	'vintageimprovements:manyullyn_spring',
	'vintageimprovements:hepatizon_spring',
	'vintageimprovements:cobalt_spring',
	'vintageimprovements:cast_iron_spring',
	'vintageimprovements:rhodium_spring',
	'vintageimprovements:small_amethyst_bronze_spring',
	'vintageimprovements:small_cast_iron_spring',
	'vintageimprovements:small_cobalt_spring',
	'vintageimprovements:small_hepatizon_spring',
	'vintageimprovements:small_manyullyn_spring',
	'vintageimprovements:small_osmium_spring',
	'vintageimprovements:small_palladium_spring',
	'vintageimprovements:small_pig_iron_spring',
	'vintageimprovements:small_platinum_spring',
	'vintageimprovements:small_pure_gold_spring',
	'vintageimprovements:small_rhodium_spring',
	'vintageimprovements:amethyst_bronze_wire',
	'vintageimprovements:cast_iron_wire',
	'vintageimprovements:cobalt_wire',
	'vintageimprovements:hepatizon_wire',
	'vintageimprovements:manyullyn_wire',
	'vintageimprovements:osmium_wire',
	'vintageimprovements:palladium_wire',
	'vintageimprovements:pig_iron_wire',
	'vintageimprovements:platinum_wire',
	'vintageimprovements:pure_gold_wire',
	'vintageimprovements:rhodium_wire',
	'vintageimprovements:calorite_rod',
	'vintageimprovements:ostrum_rod',
	'vintageimprovements:desh_rod',
	'vintageimprovements:nethersteel_rod',
	'vintageimprovements:queens_slime_rod',
	'vintageimprovements:slimesteel_rod',
	'vintageimprovements:calorite_wire',
	'vintageimprovements:ostrum_wire',
	'vintageimprovements:desh_wire',
	'vintageimprovements:queens_slime_wire',
	'vintageimprovements:slimesteel_wire',
	'vintageimprovements:nethersteel_wire',
	'vintageimprovements:calorite_spring',
	'vintageimprovements:ostrum_spring',
	'vintageimprovements:desh_spring',
	'vintageimprovements:nethersteel_spring',
	'vintageimprovements:queens_slime_spring',
	'vintageimprovements:slimesteel_spring',
	'vintageimprovements:shadow_steel_spring',
	'vintageimprovements:small_calorite_spring', 
	'vintageimprovements:small_ostrum_spring',
	'vintageimprovements:small_desh_spring',
	'vintageimprovements:small_queens_slime_spring',
	'vintageimprovements:small_slimesteel_spring',
	'vintageimprovements:small_shadow_steel_spring',
	'vintageimprovements:small_nethersteel_spring',
	'immersiveengineering:plate_copper', 
	'immersiveengineering:plate_aluminum',
	'immersiveengineering:plate_gold',
	'immersiveengineering:plate_iron',
	'immersiveengineering:plate_constantan',
	'immersiveengineering:plate_uranium',
	'immersiveengineering:plate_nickel',
	'immersiveengineering:plate_silver',
	'immersiveengineering:plate_lead',
	'thermal:iron_plate',
	'thermal:gold_plate',
	'thermal:copper_plate',
	'thermal:tin_plate',
	'thermal:lead_plate',
	'thermal:silver_plate',
	'thermal:netherite_plate',
	'thermal:nickel_plate',
	'thermal:enderium_plate',
	'thermal:lumium_plate',
	'thermal:signalum_plate',
	'thermal:constantan_plate',
	'thermal:invar_plate',
	'thermal:electrum_plate',
	'thermal:bronze_plate',
	'thermal:rose_gold_plate','vintageimprovements:shadow_steel_wire', 
	'vintageimprovements:shadow_steel_sheet',
	'vintageimprovements:shadow_steel_rod',
	'immersiveengineering:stick_aluminum',
	'immersiveengineering:storage_electrum',
	'immersiveengineering:storage_electrum',
	'immersiveengineering:dust_silver',
	'immersiveengineering:raw_silver',
	'immersiveengineering:raw_lead',
	'immersiveengineering:raw_block_lead',
	'immersiveengineering:deepslate_ore_lead',
	'immersiveengineering:ore_lead',
	'immersiveengineering:storage_lead',
	'immersiveengineering:ingot_electrum',
	'immersiveengineering:ingot_silver',
	'immersiveengineering:ingot_lead',
	'immersiveengineering:ingot_nickel',
	'immersiveengineering:ingot_constantan',
	'immersiveengineering:dust_lead',
	'immersiveengineering:storage_nickel',
	'immersiveengineering:ore_nickel',
	'immersiveengineering:nugget_electrum',
	'immersiveengineering:nugget_silver',
	'immersiveengineering:nugget_lead',
	'immersiveengineering:nugget_nickel',
	'immersiveengineering:raw_nickel',
	'immersiveengineering:storage_nickel',
	'immersiveengineering:raw_block_nickel',
	'immersiveengineering:ore_nickel',
	'immersiveengineering:deepslate_ore_nickel',
	'immersiveengineering:dust_electrum',
	'immersiveengineering:dust_silver',
	'immersiveengineering:dust_nickel',
	'immersiveengineering:raw_silver',
	'immersiveengineering:raw_block_silver',
	'immersiveengineering:ore_silver',
	'immersiveengineering:storage_silver',
	'immersiveengineering:deepslate_ore_silver',
	'thermal:copper_nugget',
	'immersiveengineering:nugget_copper',
	'immersiveengineering:dust_copper',
	'immersiveengineering:dust_gold',
	'immersiveengineering:dust_iron',
	'immersiveengineering:coal_coke',
	'immersiveengineering:coke',
	'immersiveengineering:slab_coke',
	'immersiveengineering:slab_storage_lead',
	'immersiveengineering:storage_constantan',
	'immersiveengineering:slab_storage_constantan',
	'immersiveengineering:slab_storage_electrum',
	'immersiveengineering:slab_storage_silver',
	'immersiveengineering:nugget_constantan',
	'immersiveengineering:dust_constantan',
	'thermal:ruby_ore',
	'thermal:deepslate_ruby_ore',
	'thermal:sapphire_gear',
	'thermal:ruby_gear',
	'thermal:quartz_gear',
	'thermal:emerald_gear',
	'thermal:lapis_gear',
	'effortlessbuilding:muscles', 
	'effortlessbuilding:elastic_hand', 
	'effortlessbuilding:building_techniques_book',
	'aether_redux:veridium_hoe',
	'aether_redux:veridium_axe',
	'aether_redux:veridium_pickaxe',
	'aether_redux:veridium_shovel',
	'aetherdelight:veridium_knife', 
	'aether_redux:veridium_sword',
	'create:cart_assembler', 
	'create:mechanical_bearing',
	'create:clockwork_bearing', 
	'create:windmill_bearing', 
	'create:large_water_wheel',
	'immersiveengineering:dust_wood', 
	'immersiveengineering:dust_sulfur', 
	'vintageimprovements:sulfur', 
	'vintageimprovements:sulfur_block',
	'aether:valkyrie_pickaxe',
	'aether:valkyrie_axe',
	'aether:valkyrie_shovel',
	'aether:valkyrie_hoe',
	'aether:valkyrie_lance',
	'aether:valkyrie_helmet',
	'aether:valkyrie_chestplate',
	'aether:valkyrie_leggings',
	'aether:valkyrie_boots',
	'aether:valkyrie_gloves',
	'tombstone:tablet_of_recall',
	'tombstone:tablet_of_home',
	'tombstone:tablet_of_assistance',
	'tombstone:tablet_of_cupidity',
	'tombstone:tablet_of_guard',
	'tombstone:lost_tablet',
	'tombstone:scroll_of_knowledge',
	'tombstone:dust_of_vanishing',
	'tombstone:dust_of_frost',
	'tombstone:book_of_disenchantment',
	'tombstone:book_of_recycling',
	'tombstone:book_of_repairing',
	'tombstone:book_of_scribe',
	'tombstone:book_of_magic_impregnation',
	'tombstone:seeker_rod',
	'tombstone:voodoo_poppet',
	'tombstone:bag_of_seeds',
	'tombstone:christmas_hat',
	'tombstone:smoke_ball',
	'tombstone:magic_scroll',
	'tombstone:scroll_of_preservation',
	'tombstone:scroll_of_unstable_intangibility',
	'tombstone:scroll_of_feather_fall',
	'tombstone:scroll_of_purification',
	'tombstone:scroll_of_true_sight',
	'tombstone:scroll_of_reach',
	'tombstone:scroll_of_lightning_resistance',
	'tombstone:scroll_of_frost_resistance',
	'tombstone:scroll_of_aquatic_life',
	'tombstone:scroll_of_mercy',
	'everycomp:tf/twilightforest/mangrove_banister',
	"everycomp:tf/aether/skyroot_banister",
	"twigs:tuff_stairs",
	"quark:charcoal_block",
	"immersiveengineering:slag",
	"twilightforest:mangrove_chest",
	'twigs:mossy_bricks',
	'twigs:mossy_brick_stairs',
	'twigs:mossy_brick_slab',
	'twigs:mossy_brick_wall']/*,
	'thermal:constantan_dust',
	'thermal:bronze_dust',
	'thermal:enderium_dust',
	'thermal:rose_gold_dust',
	'immersiveengineering:dust_steel',
	'thermal:lumium_dust',
	'thermal:electrum_dust',
	'thermal:signalum_dust',
	'thermal:steel_dust',
	'thermal:invar_dust']*/

ServerEvents.recipes(event => {

	let RemoveById = ["thermal:compat/immersiveengineering/press_ie_steel_ingot_to_plate",
		"vintageimprovements:pressing/uranium_ingot",
		"immersiveengineering:metalpress/plate_uranium",
		"thermal:compat/immersiveengineering/press_ie_uranium_ingot_to_plate",
		"create:pressing/gold_ingot",
		"thermal:machines/press/press_gold_ingot_to_plate",
		"immersiveengineering:metalpress/plate_brass",
		"vintageimprovements:pressing/nickel_ingot",
		"vintageimprovements:pressing/rose_gold_ingot",
		"vintageimprovements:pressing/signalum_ingot",
		"vintageimprovements:pressing/vanadium_ingot",
		"create:pressing/copper_ingot",
		"create:pressing/brass_ingot",
		"create:pressing/iron_ingot",
		"vintageimprovements:pressing/bronze_ingot",
		"vintageimprovements:pressing/constantan_ingot",
		"vintageimprovements:pressing/enderium_ingot",
		"vintageimprovements:pressing/fiery_ingot",
		"vintageimprovements:pressing/invar_ingot",
		"vintageimprovements:pressing/ironwood_ingot",
		"vintageimprovements:pressing/knightmetal_ingot",
		"vintageimprovements:pressing/lead_ingot",
		"vintageimprovements:pressing/lumium_ingot",
		"vintageimprovements:pressing/silver_ingot",
		"vintageimprovements:pressing/tin_ingot",
		"immersiveengineering:metalpress/plate_zinc",
		"vintageimprovements:pressing/andesite_alloy",
		"thermal:compat/immersiveengineering/press_ie_aluminum_ingot_to_plate",
		"immersiveengineering:metalpress/plate_steel",
		"immersiveengineering:metalpress/plate_silver",
		"thermal:machines/press/press_netherite_ingot_to_plate",
		"immersiveengineering:metalpress/plate_electrum",
		"vintageimprovements:hammering/netherite_ingot",
		"thermal:storage/carrot_block",
		"thermal:storage/apple_block",
		"thermal:machines/press/packing3x3/press_potato_packing",
		"thermal:storage/beetroot_block",
		"thermal:storage/sugar_cane_block",
		"thermal:machines/press/packing3x3/press_beetroot_packing",
		"thermal:machines/press/packing3x3/press_beetroot_packing",
		"thermal:machines/press/packing3x3/press_carrot_packing",
		"thermal:machines/press/packing3x3/press_sugar_cane_packing",
		"thermal:machines/press/packing3x3/press_apple_packing",
		"quark:building/crafting/compressed/beetroot_crate",
		"quark:building/crafting/compressed/carrot_crate",
		"quark:building/crafting/compressed/apple_crate",
		"thermal:storage/gunpowder_block",
		"thermal:storage/gunpowder_from_block"/*,
		"architects_palette:vslabs/iron_ore_brick_vertical_slab",
		"architects_palette:vertslabs/myonite_brick_vertical_slab",
		"architects_palette:vertslabs/coal_ore_brick_vertical_slab_revert",
		"architects_palette:vertslabs/lapis_ore_brick_vertical_slab_revert",
		"architects_palette:vslabs/redstone_ore_brick_vertical_slab_revert",
		"architects_palette:vslabs/lapis_ore_brick_vertical_slab",
		"architects_palette:vertslabs/iron_ore_brick_vertical_slab_revert",
		"architects_palette:vertslabs/gold_ore_brick_vertical_slab",
		"architects_palette:vertslabs/diamond_ore_brick_vertical_slab_revert",
		"architects_palette:vslabs/diamond_ore_brick_vertical_slab",
		"architects_palette:vertslabs/coal_ore_brick_vertical_slab",
		"architects_palette:vslabs/redstone_ore_brick_vertical_slab",
		"architects_palette:vertslabs/emerald_ore_brick_vertical_slab_revert",
		"architects_palette:vertslabs/emerald_ore_brick_vertical_slab",
		"architects_palette:vertslabs/myonite_vertical_slab_revert",
		"regions_unexplored:magenta_dye_from_cactus_flower",
		"architects_palette:vslabs/gold_ore_brick_vertical_slab_revert",
		"architects_palette:tuff_bricks",
		"regions_unexplored:yellow_dye_from_tall_yellow_bioshroom"*/,
		"minecraft:bamboo_mosaic_slab"
		]
	
	RemoveById.forEach(id => {
		event.remove({id:id})
	});

	event.remove({output:[global.nukelist]})
	event.remove({input:[global.nukelist]})
  
	event.remove({type:"minecraft:crafting_shapeless",mod:"thermal",output:"#forge:dusts"})
	event.remove({type:"minecraft:crafting_shapeless",mod:"thermal",output:"#forge:ingots",input:"minecraft:fire_charge"})

	event.remove({input:'immersiveengineering:hammer'})
	event.remove({mod:"immersiveengineering",output:"#forge:rods/all_metal"})
	event.remove({output:"elementalcraft:water_mill_wood_saw"})
	event.remove({output:"#aether:accessories_gloves"})

	event.replaceOutput({id:"vintageimprovements:craft/sulfur_nuggets_to_item"},"vintageimprovements:sulfur","thermal:sulfur")
	event.replaceInput({id:"elementalcraft:air_mill_wood_saw"},"grindstone","thermal:saw_blade")

	
	event.stonecutting("farmersdelight:potato_crate","thermal:potato_block")
	event.stonecutting("farmersdelight:potato_crate","quark:potato_crate")

	event.stonecutting("thermal:potato_block","farmersdelight:potato_crate")
	event.stonecutting("thermal:potato_block","quark:potato_crate")

	event.stonecutting("quark:potato_crate","farmersdelight:potato_crate")
	event.stonecutting("quark:potato_crate","thermal:potato_block")

	event.stonecutting("quark:beetroot_crate","thermal:beetroot_block")
	event.stonecutting("quark:beetroot_crate","farmersdelight:beetroot_crate")

	event.stonecutting("thermal:beetroot_block","quark:beetroot_crate")
	event.stonecutting("thermal:beetroot_block","farmersdelight:beetroot_crate")

	event.stonecutting("farmersdelight:beetroot_crate","quark:beetroot_crate")
	event.stonecutting("farmersdelight:beetroot_crate","thermal:beetroot_block")

	event.stonecutting("quark:apple_crate","fruitsdelight:apple_crate")
	event.stonecutting("quark:apple_crate","thermal:apple_block")

	event.stonecutting("thermal:apple_block","fruitsdelight:apple_crate")
	event.stonecutting("thermal:apple_block","quark:apple_crate")

	event.stonecutting("fruitsdelight:apple_crate","quark:apple_crate")
	event.stonecutting("fruitsdelight:apple_crate","thermal:apple_block")

	event.stonecutting("quark:carrot_crate","farmersdelight:carrot_crate")
	event.stonecutting("quark:carrot_crate","thermal:carrot_block")

	event.stonecutting("thermal:carrot_block","farmersdelight:carrot_crate")
	event.stonecutting("thermal:carrot_block","quark:carrot_crate")

	event.stonecutting("farmersdelight:carrot_crate","quark:carrot_crate")
	event.stonecutting("farmersdelight:carrot_crate","thermal:carrot_block")

	event.stonecutting("quark:sugar_cane_block","thermal:sugar_cane_block")
	event.stonecutting("thermal:sugar_cane_block","quark:sugar_cane_block")

	
	event.remove({id:"quark:building/crafting/compressed/potato_crate"})
	event.remove({id:"quark:tweaks/crafting/utility/misc/easy_sticks"})
	event.remove({id:"thermal:storage/potato_block"})
	event.replaceInput({id:"forbidden_arcanus:boom_arrow"},"arrow","archers_paradox:explosive_arrow")

	event.shapeless("create:iron_sheet",["thermal:iron_plate"])
	event.shapeless("create:golden_sheet",["thermal:gold_plate"])

	///Needs Chipped to work
	/*event.shaped("3x everycomp:ch/naturesaura/overgrown_ancient_door",
		[
			"AA",
			"AA",
			"AA"
		],
		{
			A: "naturesaura:ancient_planks"
		}
	)

	event.shaped("2x everycomp:dd/naturesaura/tall_ancient_door",
		[
			"A",
			"A",
			"A"
		],
		{
			A: "everycomp:ch/naturesaura/overgrown_ancient_door"
		}
	).id("everycomp:dd/naturesaura/tall_ancient_door")

	event.stonecutting("everycomp:dd/naturesaura/short_ancient_door","everycomp:ch/naturesaura/overgrown_ancient_door").id("everycomp:dd/naturesaura/short_ancient_door")*/

	function StorageCompacting(big,small)
	{
		event.shapeless(big,"9x "+small)
		event.shapeless("9x "+small,big)
		//Compacts 9 small items into 1 big item and back (nuggets, ingots, storage blocks)
	};

	function SmallStorageCompacting(big,small)
	{
		event.shaped(big,["YY","YY"],{Y:small})
		event.shapeless("4x "+small,big)
		//Compacts 4 small items into 1 big item and back (used for some gems and gems blocks)
	};

	StorageCompacting("kubejs:gold_leaf_block","naturesaura:gold_leaf")
	StorageCompacting("kubejs:ivy_block","immersive_weathering:ivy")
	StorageCompacting("kubejs:sturdy_deepslate","minecraft:deepslate")
	StorageCompacting("naturesaura:infused_iron","kubejs:infused_iron_nugget")
	StorageCompacting("kubejs:sapphire_block","kubejs:sapphire")
	StorageCompacting("thermal:gunpowder_block","quark:gunpowder_sack")
	StorageCompacting("kubejs:arcanum_alloy_block","kubejs:arcanum_alloy_ingot")
	StorageCompacting("kubejs:source_alloy_block","kubejs:source_alloy_ingot")
	StorageCompacting("kubejs:arcanum_alloy_ingot","kubejs:arcanum_alloy_nugget")
	StorageCompacting("kubejs:source_alloy_ingot","kubejs:source_alloy_nugget")
	StorageCompacting("twilightforest:ironwood_ingot","kubejs:ironwood_nugget")
	StorageCompacting("twilightforest:knightmetal_ingot","kubejs:knightmetal_nugget")
	StorageCompacting("naturesaura:tainted_gold","kubejs:tainted_gold_nugget")
	StorageCompacting("naturesaura:sky_ingot","kubejs:sky_nugget")
	StorageCompacting("naturesaura:depth_ingot","kubejs:depth_nugget")
	StorageCompacting('twilightforest:fiery_ingot','kubejs:fiery_nugget')
	StorageCompacting("create:andesite_alloy","kubejs:andesite_alloy_nugget")



	SmallStorageCompacting("thermal:ruby_block","thermal:ruby")
	SmallStorageCompacting("thermal:sapphire_block","thermal:sapphire")


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
	//-------------------Gears----------------------

	function CustomGears(material,id)
	{
		event.recipes.thermal.press(id,["4x #forge:ingots/"+material,"thermal:press_gear_die"])//Thermal Press Recipe

		event.shaped(id,
			[
				"RPR",
				"PGP",
				"RPR"
			],
			{
				P: "#forge:plates/"+material,
				R: "#forge:rods/"+material,
				G: "kubejs:stone_gear"
			}
		)// Crafting Table recipe

		event.custom({
			"type": "immersiveengineering:metal_press",
			"energy": 2400,
			"input": {
				"base_ingredient": {
				"tag": "forge:ingots/"+material
				},
				"count": 4
			},
			"mold": "immersiveengineering:mold_gear",
			"result": {
				"item": id
			}
		})// IE Press Recipe
	}

	function ThermalGears(material)
	{
		event.remove({id:"thermal:parts/"+material+"_gear"})//removes original recipe
		event.shaped("thermal:"+material+"_gear",
			[
				"RPR",
				"PGP",
				"RPR"
			],
			{
				P: "#forge:plates/"+material,
				R: "#forge:rods/"+material,
				G: "kubejs:stone_gear"
			}
		)// Adds crafting recipes for gears from thermal
	}

	ThermalGears("iron")
	ThermalGears("gold")
	ThermalGears("copper")
	ThermalGears("netherite")
	ThermalGears("tin")
	ThermalGears("lead")
	ThermalGears("silver")
	ThermalGears("bronze")
	ThermalGears("nickel")
	ThermalGears("steel")
	ThermalGears("rose_gold")
	ThermalGears("electrum")
	ThermalGears("invar")
	ThermalGears("constantan")
	ThermalGears("signalum")
	ThermalGears("lumium")
	ThermalGears("enderium")
	ThermalGears("diamond")
	CustomGears("infused_iron","kubejs:infused_iron_gear")
	CustomGears("source_alloy","kubejs:source_alloy_gear")
	CustomGears("arcanum_alloy","kubejs:arcanum_alloy_gear")
	CustomGears("aluminum","kubejs:aluminum_gear")
	CustomGears("andesite","kubejs:andesite_gear")
	CustomGears("zinc","kubejs:zinc_gear")
	CustomGears("uranium","kubejs:uranium_gear")
	CustomGears("stainless_steel","kubejs:stainless_steel_gear")
	CustomGears("ironwood","kubejs:ironwood_gear")
	CustomGears("knightmetal","kubejs:knightmetal_gear")
	//CustomGears("drenched_iron","kubejs:drenched_iron_gear")
	//CustomGears("swift_alloy","kubejs:swift_alloy_gear")
	CustomGears("tainted_gold","kubejs:tainted_gold_gear")
	CustomGears("sky","kubejs:sky_gear")
	CustomGears("depth","kubejs:depth_gear")
	CustomGears("brass","kubejs:brass_gear")
	//CustomGears("fireite","kubejs:fireite_gear")
	CustomGears("fiery","kubejs:fiery_gear")

	event.custom({
		"type": "lychee:block_clicking",
		"post": [
			{
			"type": "prevent_default"
			}
		],
		"item_in": {
			"item": "wizards_reborn:arcanum_dust"
		},
		"block_in": "minecraft:gold_ore"
	})


	//-------------------Rods-----------------------

	function rods(material,output)
	{
		// Function that uses tag as an input and item id as an output
		// Adds shaped recipe, IE Recipe and Thermal Recipe
		event.shaped(output,
			[
				"  X",
				" X ",
				"X  "
			],
			{
				X: "#forge:plates/"+material
			})

		event.custom({
			type: "immersiveengineering:metal_press",
			energy: 2400,
			input: {"base_ingredient":{"tag":"forge:plates/"+material},"count":2},
			mold: "immersiveengineering:mold_rod",
			result: { item: output },
		});

		event.recipes.thermal.press(output,["#forge:plates/"+material,"immersiveengineering:mold_rod"])
		event.remove({output:output})
		event.remove({output:"#forge:rods/"+material})
	}

	rods("infused_iron","kubejs:infused_iron_rod")
	rods("source_alloy","kubejs:source_alloy_rod")
	//rods("arcanum_alloy","kubejs:arcanum_alloy_rod")
	rods("copper","kubejs:copper_rod")
	rods("electrum","kubejs:electrum_rod")
	rods("diamond","kubejs:diamond_rod")
	rods("gold","kubejs:gold_rod")
	//rods("drenched_iron","kubejs:drenched_iron_rod")
	//rods("swift_alloy","kubejs:swift_alloy_rod")
	rods("tainted_gold","kubejs:tainted_gold_rod")
	rods("sky","kubejs:sky_rod")
	rods("depth","kubejs:depth_rod")
	rods("brass","kubejs:brass_rod")
	//rods("fireite","kubejs:fireite_rod")

	event.remove({id:"vintageimprovements:craft/fiery_rod"})
	
	rods("fiery","kubejs:fiery_rod")
	


	rods("iron","immersiveengineering:stick_iron")
	rods("stainless_steel","immersiveengineering:stick_steel")

	rods("aluminum",'vintageimprovements:aluminum_rod')
	rods("andesite","vintageimprovements:andesite_rod")
	rods("bronze","vintageimprovements:bronze_rod")
	rods("constantan","vintageimprovements:constantan_rod")
	rods("enderium","vintageimprovements:enderium_rod")
	rods("invar","vintageimprovements:invar_rod")
	rods("ironwood","vintageimprovements:ironwood_rod")
	rods("knightmetal","vintageimprovements:knightmetal_rod")
	rods("lead","vintageimprovements:lead_rod")
	rods("lumium","vintageimprovements:lumium_rod")
	rods("netherite","vintageimprovements:netherite_rod")
	rods("nickel","vintageimprovements:nickel_rod")
	rods("rose_gold","vintageimprovements:rose_gold_rod")
	rods("signalum","vintageimprovements:signalum_rod")
	rods("silver","vintageimprovements:silver_rod")
	rods("steel","vintageimprovements:steel_rod")
	rods("tin","vintageimprovements:tin_rod")

	rods("uranium","vintageimprovements:uranium_rod")
	rods("vanadium","vintageimprovements:vanadium_rod")
	rods("zinc","vintageimprovements:zinc_rod")
	
	//-------------------Plates---------------------

	function PlatesOnetoOne(inputItem,outputItem, inputBlock)
	{
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
	
		event.custom({
			type: "lychee:block_interacting",
			item_in: { item: "immersiveengineering:hammer" },
			block_in: inputBlock,
			post: [
				{ type: "drop_item", item: outputItem ,count: 1 },
				{ type: "place", block: "air" },
				{ type: "damage_item" }
			]
		});// Adds In World Plates crafting recipes 

		event.custom(
			{
				type: "lychee:block_crushing",
				"comment": "25% chance for extra drop!",
				post: [
				  {
					type: "anvil_damage_chance",
					"chance": 0
				  },
				  {
					type: "place",
					block: "minecraft:air",
				  },
				  {
					type: "drop_item",
					item: outputItem,
					count: 1
				  },
				  {
					type: "drop_item",
					"contextual": [
					  {
						type: "chance",
						"chance": 0.25
					  }
					],
					item: outputItem
				  }
				],
				"falling_block": "minecraft:anvil",
				"landing_block": inputBlock
			  }  
		)

		event.custom(
			{
				type: "lychee:block_crushing",
				post: [
				  {
					type: "anvil_damage_chance",
					"chance": 0
				  },
				  {
					type: "place",
					block: "minecraft:air",
				  },
				  {
					type: "drop_item",
					item: outputItem,
					count: 2
				  }
				],
				"falling_block": "kubejs:pressing_catalyst",
				"landing_block": inputBlock
			  }  
		)

		event.recipes.naturesaura.altar(Item.of(outputItem,2),inputBlock,500,100,"kubejs:pressing_catalyst")
	}
	function plates(inputItem, outputItem, inputBlock) {// Adds Plates crafting recipes to the machines
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
	
		event.custom({
			type: "lychee:block_interacting",
			item_in: { item: "immersiveengineering:hammer" },
			block_in: inputBlock,
			post: [
				{ type: "drop_item", item: outputItem,count: 3 },
				{ type: "place", block: "air" },
				{ type: "damage_item" }
			]
		});// Adds In World Plates crafting recipes
		
		event.custom(
			{
				type: "lychee:block_crushing",
				post: [
				  {
					type: "anvil_damage_chance",
					"chance": 0
				  },
				  {
					type: "place",
					block: "minecraft:air",
				  },
				  {
					type: "drop_item",
					item: outputItem,
					count: 4
				  }
				],
				"falling_block": "minecraft:anvil",
				"landing_block": inputBlock
			  }  
		)// Adds in World Plates crafting recipes from falling anvil

		event.custom(
			{
				type: "lychee:block_crushing",
				post: [
				  {
					type: "anvil_damage_chance",
					"chance": 0
				  },
				  {
					type: "place",
					block: "minecraft:air",
				  },
				  {
					type: "drop_item",
					item: outputItem,
					count: 5
				  }
				],
				"falling_block": "kubejs:pressing_catalyst",
				"landing_block": inputBlock
			  }  
		)// Adds in World Plates crafting recipes from falling pressing catalyst

		event.recipes.naturesaura.altar(Item.of(outputItem,5),inputBlock,500,100,"kubejs:pressing_catalyst")
	}

	PlatesOnetoOne("forge:treated_wood", "kubejs:wooden_plate", "immersiveengineering:treated_wood_horizontal")
	PlatesOnetoOne("chipped:smooth_stone","kubejs:stone_plate", "minecraft:smooth_stone")

	plates("forge:ingots/source_alloy","kubejs:source_alloy_plate","kubejs:source_alloy_block")
	plates("forge:ingots/infused_iron","kubejs:infused_iron_plate","naturesaura:infused_iron_block")
	//plates("forge:ingots/arcanum_alloy","kubejs:arcanum_alloy_plate","kubejs:arcanum_alloy_block")
	plates("forge:gems/diamond","kubejs:diamond_plate","minecraft:diamond_block")
	
	plates("forge:ingots/ironwood","vintageimprovements:ironwood_sheet","twilightforest:ironwood_block")
	plates("forge:ingots/knightmetal","vintageimprovements:knightmetal_sheet","twilightforest:knightmetal_block")
	plates("forge:ingots/fiery","vintageimprovements:fiery_sheet","twilightforest:fiery_block")
	//plates("forge:ingots/fireite","kubejs:fireite_sheet","elementalcraft:fireite_block")

	plates("forge:ingots/tin","vintageimprovements:tin_sheet","thermal:tin_block")
	plates("forge:ingots/silver","vintageimprovements:silver_sheet","thermal:silver_block")
	plates("forge:ingots/lead","vintageimprovements:lead_sheet","thermal:lead_block")
	plates("forge:ingots/nickel","vintageimprovements:nickel_sheet","thermal:nickel_block")
	plates("forge:ingots/bronze","vintageimprovements:bronze_sheet","thermal:bronze_block")

	plates("forge:ingots/uranium",'vintageimprovements:uranium_sheet','immersiveengineering:storage_uranium')
	plates("forge:ingots/stainless_steel",'immersiveengineering:plate_steel',"immersiveengineering:storage_steel")
	plates("forge:ingots/steel","thermal:steel_plate","thermal:steel_block")
	plates("forge:ingots/electrum","immersiveengineering:plate_electrum","thermal:electrum_block")

	plates("forge:ingots/constantan",'vintageimprovements:constantan_sheet',"thermal:constantan_block")
	plates("forge:ingots/enderium",'vintageimprovements:enderium_sheet','thermal:enderium_block')
	plates("forge:ingots/invar",'vintageimprovements:invar_sheet',"thermal:invar_block")
	plates("forge:ingots/lumium",'vintageimprovements:lumium_sheet',"thermal:lumium_block")
	plates("forge:ingots/rose_gold",'vintageimprovements:rose_gold_sheet',"thermal:rose_gold_block")
	plates("forge:ingots/signalum",'vintageimprovements:signalum_sheet',"thermal:signalum_block")
	plates("forge:ingots/zinc",'vintageimprovements:zinc_sheet',"create:zinc_block")
	plates("forge:ingots/vanadium",'vintageimprovements:vanadium_sheet',"vintageimprovements:vanadium_block")

	plates("forge:ingots/aluminum",'vintageimprovements:aluminum_sheet',"immersiveengineering:storage_aluminum")
	plates("forge:ingots/andesite_alloy",'vintageimprovements:andesite_sheet','create:andesite_alloy_block')
	plates("forge:ingots/copper","create:copper_sheet","minecraft:copper_block")
	plates("forge:ingots/iron","create:iron_sheet","minecraft:iron_block")
	plates("forge:ingots/gold","create:golden_sheet","minecraft:gold_block")
	plates("forge:ingots/netherite","vintageimprovements:netherite_sheet","minecraft:netherite_block")
	plates("forge:ingots/brass","create:brass_sheet","create:brass_block")

	//plates("forge:ingots/drenched_iron","kubejs:drenched_iron_sheet","elementalcraft:drenched_iron_block")
	//plates("forge:ingots/swift_alloy","kubejs:swift_alloy_sheet","elementalcraft:swift_alloy_block")
	plates("forge:ingots/tainted_gold","kubejs:tainted_gold_sheet","naturesaura:tainted_gold_block")
	plates("forge:ingots/sky","kubejs:sky_sheet","naturesaura:sky_ingot_block")
	plates("forge:ingots/depth","kubejs:depth_sheet","naturesaura:depth_ingot_block")
	


	//-------------------Coins---------------------
	event.shapeless('thermal:silver_coin', ['9x thermal:copper_coin'])
	event.shapeless('thermal:gold_coin', ['9x thermal:silver_coin'])
	event.shapeless('thermal:netherite_coin', ['9x thermal:gold_coin'])
	event.shapeless('thermal:enderium_coin', ['9x thermal:netherite_coin'])

	event.shapeless('9x thermal:copper_coin',['thermal:silver_coin'])
	event.shapeless('9x thermal:silver_coin',['thermal:gold_coin'])
	event.shapeless('9x thermal:gold_coin',['thermal:netherite_coin'])
	event.shapeless('9x thermal:netherite_coin',['thermal:enderium_coin'])
	
	metal('enderium')
	metal('steel')
	metal('invar')
	metal('bronze')
	metal('electrum')
	metal('constantan')
	metal('signalum')
	metal('lumium')
	event.remove({output:'thermal:press_coin_die'})

	
	///=======================================Building blocks=======================================///

	event.shaped("immersiveengineering:sawdust",
		[
			"SS"
		],
		{
			S: "#forge:dusts/wood"
		}
	).id("immersiveengineering:crafting/sawdust")

	event.recipes.thermal.rock_gen("create:limestone","air","create:honey",30)

	event.recipes.thermal.rock_gen("create:scoria","air","create:chocolate",30)

	/*event.recipes.thermal.rock_gen("minecraft:crying_obsidian","air","deep_aether:poison_fluid",30)
	/// Why doesnt it work :(
	event.recipes.thermal.rock_gen("deep_aether:aersmog","water","deep_aether:poison_fluid",30)*/

	event.shaped("8x twigs:gravel_bricks",
		[
			"GGG",
			"GXG",
			"GGG"
		],
		{
			G: "#forge:gravel",
			X: "kubejs:brick_glue"
		}
	).damageIngredient("kubejs:brick_glue",8).id("twigs:gravel_bricks")

	event.shaped("8x immersiveengineering:slag_brick",
		[
			"GGG",
			"GXG",
			"GGG"
		],
		{
			G: "#forge:slag",
			X: "kubejs:brick_glue"
		}
	).damageIngredient("kubejs:brick_glue",8).id("immersiveengineering:crafting/slag_brick")

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
		
		event.shaped("twilightforest:"+type+"_chest",
			[
				"XXX",
				"X X",
				"XXX"
			],
			{X:"twilightforest:"+type+"_planks"}
		).id("twilightforest:wood/"+type+"_chest")
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
	
	event.remove({output:"twigs:mossy_bricks"})
	event.remove({id:"immersive_weathering:charred_log"})

	//Regions Unexplored
	//event.shapeless("regions_unexplored:blackstone_cluster","blackstone").id("regions_unexplored:blackstone_cluster")

	//event.shapeless("twigs:polished_basalt_bricks","architects_palette:basalt_tiles").id("twigs:polished_basalt_bricks")
	//event.shapeless("architects_palette:basalt_tiles","twigs:polished_basalt_bricks")
	event.shapeless("twigs:mossy_bricks","immersive_weathering:mossy_bricks")
	
	
	event.shapeless("quark:mossy_cobblestone_bricks","twigs:mossy_cobblestone_bricks").id("quark:building/crafting/mossy_cobblestone_bricks")

	//event.shaped("architects_palette:hadaline_tiles",["XX","XX"],{"X":"architects_palette:hadaline_bricks"}).id("architects_palette:hadaline_tiles")
	event.shaped("ancient_aether:carved_tiles",["XX","XX"],{"X":"aether_redux:carved_base"}).id("ancient_aether:carved_tiles")

	//Regions Unexplored
	//event.shapeless("regions_unexplored:mossy_stone","immersive_weathering:mossy_stone").id("regions_unexplored:mossy_stone")
	//event.shapeless("immersive_weathering:mossy_stone","regions_unexplored:mossy_stone")

	//event.shapeless("quark:dripstone_bricks","architects_palette:dripstone_bricks").id("architects_palette:dripstone_bricks")
	//event.shapeless("architects_palette:dripstone_bricks","quark:dripstone_bricks")

	//event.shapeless("quark:calcite_bricks","architects_palette:calcite_bricks").id("architects_palette:calcite_bricks")
	//event.shapeless("architects_palette:calcite_bricks","quark:calcite_bricks")

	event.shapeless("twigs:cobblestone_bricks","quark:cobblestone_bricks").id("twigs:cobblestone_bricks")
	event.shapeless("quark:cobblestone_bricks","twigs:cobblestone_bricks")
	event.shapeless("twigs:gravel_bricks","supplementaries:gravel_bricks")
	event.shapeless("supplementaries:gravel_bricks","twigs:gravel_bricks").id("supplementaries:gravel_bricks")

	event.remove({id:"twigs:azalea_flowers_from_flowering_azalea"})

	event.remove({id:"immersiveengineering:crafting/toolbox"})

	/* Regions Unexplored
	event.shapeless("4x regions_unexplored:blue_magnolia_flowers","4x regions_unexplored:blue_magnolia_leaves").id("regions_unexplored:blue_magnolia_flowers")
	event.shapeless("4x regions_unexplored:pink_magnolia_flowers","4x regions_unexplored:pink_magnolia_leaves").id("regions_unexplored:pink_magnolia_flowers")
	event.shapeless("4x regions_unexplored:white_magnolia_flowers","4x regions_unexplored:white_magnolia_leaves").id("regions_unexplored:white_magnolia_flowers")*/

	
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

	/*event.shaped("regions_unexplored:blue_bioshroom",
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
	*/

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

