ServerEvents.recipes(event =>{

    function SlabsAndStairs(mod,woodtype)
    {
        event.custom({
			type: "sawmill:woodcutting",
			count: 2,
			ingredient: {
				item: mod+":"+woodtype+"_planks"
			},
			result: mod+":"+woodtype+"_slab"
		})

        event.custom({
			type: "sawmill:woodcutting",
			count: 1,
			ingredient: {
				item: mod+":"+woodtype+"_planks"
			},
			result: mod+":"+woodtype+"_stairs"
		})

        event.remove({output:mod+":"+woodtype+"_stairs",type:"minecraft:crafting_shaped"})
        event.remove({output:mod+":"+woodtype+"_slab",type:"minecraft:crafting_shaped"})

		event.shaped("3x "+mod+":"+woodtype+"_stairs",
			[
				"SP",
				"PP"
			],
			{
				P: mod+":"+woodtype+"_planks",
				S: "#forge:tools/saws"
			}
		).damageIngredient("#forge:tools/saws", 1)

		event.shaped("2x "+mod+":"+woodtype+"_slab",
			[
				"S",
				"P"
			],
			{
				P: mod+":"+woodtype+"_planks",
				S: "#forge:tools/saws"
			}
		).damageIngredient("#forge:tools/saws", 1)
    }

	 function QuarkSlabsAndStairs(mod,woodtype)
    {
        event.custom({
			type: "sawmill:woodcutting",
			count: 2,
			ingredient: {
				item: mod+":"+woodtype+"_planks"
			},
			result: mod+":"+woodtype+"_planks_slab"
		})

        event.custom({
			type: "sawmill:woodcutting",
			count: 1,
			ingredient: {
				item: mod+":"+woodtype+"_planks"
			},
			result: mod+":"+woodtype+"_planks_stairs"
		})

        event.remove({output:mod+":"+woodtype+"_planks_stairs",type:"minecraft:crafting_shaped"})
        event.remove({output:mod+":"+woodtype+"_planks_slab",type:"minecraft:crafting_shaped"})

		event.shaped("3x "+mod+":"+woodtype+"_planks_stairs",
			[
				"SP",
				"PP"
			],
			{
				P: mod+":"+woodtype+"_planks",
				S: "#forge:tools/saws"
			}
		).damageIngredient("#forge:tools/saws", 1)

		event.shaped("2x "+mod+":"+woodtype+"_planks_slab",
			[
				"S",
				"P"
			],
			{
				P: mod+":"+woodtype+"_planks",
				S: "#forge:tools/saws"
			}
		).damageIngredient("#forge:tools/saws", 1)
    }

	function CuttingLogs(planks,log)
	{
		event.custom({
			"type": "lychee:block_interacting",
			"post": [
			  {
				"type": "place",
				"block": "minecraft:air"
			  },
			  {
				"type": "damage_item",
				"damage": 1
			  },
			  {
				"type": "drop_item",
				"item": planks,
				"count": 1
			  },
			  {
				"type": "execute",
				"command": "playsound sawmill:ui.sawmill.take_result neutral @p",
				"hide": true
			  },
			  {
				"type": "execute",
				"command": "particle crit ~ ~ ~ 0.25 0.25 0.25 0 15",
				"hide": true
			  }
			],
			"item_in": [
			  {
				"tag": "forge:tools/axes"
			  }
			],
			"block_in": log
		  })// Adds recipe for planks > Clicking stripped logs with an axe will drop 1 plank and remove the block

		event.custom({
			"type": "lychee:block_interacting",
			"post": [
			  {
				"type": "place",
				"block": "minecraft:air"
			  },
			  {
				"type": "damage_item",
				"damage": 1
			  },
			  {
				"type": "drop_item",
				"item": planks,
				"count": 3
			  },
			  {
				"type": "execute",
				"command": "playsound sawmill:ui.sawmill.take_result neutral @p",
				"hide": true
			  },
			  {
				"type": "execute",
				"command": "particle crit ~ ~ ~ 0.25 0.25 0.25 0 15",
				"hide": true
			  }
			],
			"item_in": [
			  {
				"tag": "forge:tools/saws"
			  }
			],
			"block_in": log
		  })// Adds recipe for planks > Clicking stripped logs with a sam will drop 3 planks and remove the block
		  event.custom({
			type: "sawmill:woodcutting",
			count: 3,
			ingredient: {
				item: log
			},
			result: planks
		})


		event.remove({output:planks, type:"minecraft:crafting_shapeless"}) // Removes default shapeless recipe recipe
	}
	
	CuttingLogs("minecraft:oak_planks","minecraft:stripped_oak_log")
	CuttingLogs("minecraft:spruce_planks","minecraft:stripped_spruce_log")
	CuttingLogs("minecraft:birch_planks","minecraft:stripped_birch_log")
	CuttingLogs("minecraft:jungle_planks","minecraft:stripped_jungle_log")
	CuttingLogs("minecraft:acacia_planks","minecraft:stripped_acacia_log")
	CuttingLogs("minecraft:dark_oak_planks","minecraft:stripped_dark_oak_log")
	CuttingLogs("minecraft:crimson_planks","minecraft:stripped_crimson_stem")
	CuttingLogs("minecraft:warped_planks","minecraft:stripped_warped_stem")
	CuttingLogs("mangrove_planks","stripped_mangrove_log")
	CuttingLogs("cherry_planks","stripped_cherry_log")
	CuttingLogs("bamboo_planks","stripped_bamboo_block")
	CuttingLogs("architects_palette:twisted_planks","architects_palette:stripped_twisted_log")
	CuttingLogs("ancient_aether:highsproot_planks","ancient_aether:stripped_highsproot_log")
	CuttingLogs("ancient_aether:sakura_planks","ancient_aether:stripped_sakura_log")
	CuttingLogs("deep_aether:yagroot_planks","deep_aether:stripped_yagroot_log")
	CuttingLogs("deep_aether:cruderoot_planks","deep_aether:stripped_cruderoot_log")
	CuttingLogs("deep_aether:conberry_planks","deep_aether:stripped_conberry_log")
	CuttingLogs("deep_aether:sunroot_planks","deep_aether:stripped_sunroot_log")
	CuttingLogs("deep_aether:roseroot_planks","deep_aether:stripped_roseroot_log")
	CuttingLogs("deeperdarker:echo_planks","deeperdarker:stripped_echo_log")
	CuttingLogs("deeperdarker:bloom_planks","deeperdarker:stripped_blooming_stem")
	CuttingLogs("forbidden_arcanus:aurum_planks","forbidden_arcanus:stripped_aurum_log")
	CuttingLogs("mynethersdelight:powdery_planks","mynethersdelight:stripped_powdery_block")
	CuttingLogs("quark:ancient_planks","quark:stripped_ancient_log")
	CuttingLogs("quark:azalea_planks","quark:stripped_azalea_log")
	CuttingLogs("quark:blossom_planks","quark:stripped_blossom_log")
	CuttingLogs("minecraft:bamboo_planks","regions_unexplored:stripped_bamboo_log")
	CuttingLogs("minecraft:oak_planks","regions_unexplored:stripped_small_oak_log")
	CuttingLogs("regions_unexplored:baobab_planks","regions_unexplored:stripped_baobab_log")
	CuttingLogs("regions_unexplored:alpha_planks","regions_unexplored:alpha_log")
	CuttingLogs("regions_unexplored:blackwood_planks","regions_unexplored:stripped_blackwood_log")
	CuttingLogs("regions_unexplored:blue_bioshroom_planks","regions_unexplored:stripped_blue_bioshroom_stem")
	CuttingLogs("regions_unexplored:yellow_bioshroom_planks","regions_unexplored:stripped_yellow_bioshroom_stem")
	CuttingLogs("regions_unexplored:pink_bioshroom_planks","regions_unexplored:stripped_pink_bioshroom_stem")
	CuttingLogs("regions_unexplored:green_bioshroom_planks","regions_unexplored:stripped_green_bioshroom_stem")
	CuttingLogs("regions_unexplored:brimwood_planks","regions_unexplored:stripped_brimwood_log")
	CuttingLogs("regions_unexplored:cobalt_planks","regions_unexplored:stripped_cobalt_log")
	CuttingLogs("regions_unexplored:cypress_planks","regions_unexplored:stripped_cypress_log")
	CuttingLogs("regions_unexplored:dead_planks","regions_unexplored:stripped_dead_log")
	CuttingLogs("regions_unexplored:eucalyptus_planks","regions_unexplored:stripped_eucalyptus_log")
	CuttingLogs("regions_unexplored:joshua_planks","regions_unexplored:stripped_joshua_log")
	CuttingLogs("regions_unexplored:kapok_planks","regions_unexplored:stripped_kapok_log")
	CuttingLogs("regions_unexplored:larch_planks","regions_unexplored:stripped_larch_log")
	CuttingLogs("regions_unexplored:magnolia_planks","regions_unexplored:stripped_magnolia_log")
	CuttingLogs("regions_unexplored:maple_planks","regions_unexplored:stripped_maple_log")
	CuttingLogs("regions_unexplored:mauve_planks","regions_unexplored:stripped_mauve_log")
	CuttingLogs("regions_unexplored:palm_planks","regions_unexplored:stripped_palm_log")
	CuttingLogs("regions_unexplored:pine_planks","regions_unexplored:stripped_pine_log")
	CuttingLogs("regions_unexplored:redwood_planks","regions_unexplored:stripped_redwood_log")
	CuttingLogs("regions_unexplored:socotra_planks","regions_unexplored:stripped_socotra_log")
	CuttingLogs("regions_unexplored:willow_planks","regions_unexplored:stripped_willow_log")
	CuttingLogs("aether:skyroot_planks","aether:stripped_skyroot_log")
	CuttingLogs("aether_redux:fieldsproot_planks","aether_redux:stripped_fieldsproot_log")
	CuttingLogs("aether_redux:blightwillow_planks","aether_redux:stripped_blightwillow_log")
	CuttingLogs("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_stem")
	CuttingLogs("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_hyphae")
	CuttingLogs("aether_redux:cloudcap_planks","aether_redux:stripped_cloudcap_stem")
	CuttingLogs("aether_redux:crystal_planks","aether_redux:stripped_crystal_log")
	CuttingLogs("aether_redux:glacia_planks","aether_redux:stripped_glacia_log")
	CuttingLogs("twilightforest:twilight_oak_planks","twilightforest:stripped_twilight_oak_log")
	CuttingLogs("twilightforest:canopy_planks","twilightforest:stripped_canopy_log")
	CuttingLogs("twilightforest:mangrove_planks","twilightforest:stripped_mangrove_log")
	CuttingLogs("twilightforest:dark_planks","twilightforest:stripped_dark_log")
	CuttingLogs("twilightforest:transformation_planks","twilightforest:stripped_transformation_log")
	CuttingLogs("twilightforest:mining_planks","twilightforest:stripped_mining_log")
	CuttingLogs("twilightforest:sorting_planks","twilightforest:stripped_sorting_log")
	CuttingLogs("twilightforest:time_planks","twilightforest:stripped_time_log")
	CuttingLogs("thermal:rubberwood_planks","thermal:stripped_rubberwood_log")
	CuttingLogs("ars_nouveau:archwood_planks","ars_nouveau:stripped_blue_archwood_log")
	CuttingLogs("ars_nouveau:archwood_planks","ars_nouveau:stripped_green_archwood_log")
	CuttingLogs("ars_nouveau:archwood_planks","ars_nouveau:stripped_red_archwood_log")
	CuttingLogs("ars_nouveau:archwood_planks","ars_nouveau:stripped_purple_archwood_log")

    SlabsAndStairs("minecraft","oak")
	SlabsAndStairs("minecraft","spruce")
	SlabsAndStairs("minecraft","birch")
	SlabsAndStairs("minecraft","jungle")
	SlabsAndStairs("minecraft","acacia")
	SlabsAndStairs("minecraft","dark_oak")
	SlabsAndStairs("minecraft","crimson")
	SlabsAndStairs("minecraft","warped")
	SlabsAndStairs("minecraft","mangrove")
	SlabsAndStairs("minecraft","cherry")
	SlabsAndStairs("minecraft","bamboo")
	SlabsAndStairs("architects_palette","twisted")
	SlabsAndStairs("ancient_aether","highsproot")
	SlabsAndStairs("ancient_aether","sakura")
	SlabsAndStairs("deep_aether","yagroot")
	SlabsAndStairs("deep_aether","cruderoot")
	SlabsAndStairs("deep_aether","conberry")
	SlabsAndStairs("deep_aether","sunroot")
	SlabsAndStairs("deep_aether","roseroot")
	SlabsAndStairs("deeperdarker","echo")
	SlabsAndStairs("deeperdarker","bloom")
	SlabsAndStairs("forbidden_arcanus","aurum")
	SlabsAndStairs("mynethersdelight","powdery")
	QuarkSlabsAndStairs("quark","ancient")
	QuarkSlabsAndStairs("quark","azalea")
	QuarkSlabsAndStairs("quark","blossom")
	SlabsAndStairs("minecraft","bamboo")
	SlabsAndStairs("regions_unexplored","baobab")
	SlabsAndStairs("regions_unexplored","alpha")
	SlabsAndStairs("regions_unexplored","blackwood")
	SlabsAndStairs("regions_unexplored","blue_bioshroom")
	SlabsAndStairs("regions_unexplored","yellow_bioshroom")
	SlabsAndStairs("regions_unexplored","pink_bioshroom")
	SlabsAndStairs("regions_unexplored","green_bioshroom")
	SlabsAndStairs("regions_unexplored","brimwood")
	SlabsAndStairs("regions_unexplored","cobalt")
	SlabsAndStairs("regions_unexplored","cypress")
	SlabsAndStairs("regions_unexplored","dead")
	SlabsAndStairs("regions_unexplored","eucalyptus")
	SlabsAndStairs("regions_unexplored","joshua")
	SlabsAndStairs("regions_unexplored","kapok")
	SlabsAndStairs("regions_unexplored","larch")
	SlabsAndStairs("regions_unexplored","magnolia")
	SlabsAndStairs("regions_unexplored","maple")
	SlabsAndStairs("regions_unexplored","mauve")
	SlabsAndStairs("regions_unexplored","palm")
	SlabsAndStairs("regions_unexplored","pine")
	SlabsAndStairs("regions_unexplored","redwood")
	SlabsAndStairs("regions_unexplored","socotra")
	SlabsAndStairs("regions_unexplored","willow")
	var colors = ['red','blue','white','gray','light_gray','black','purple','magenta','yellow','green','lime','light_blue','cyan','orange','pink','brown']
	colors.forEach(color => {
		SlabsAndStairs("regions_unexplored",color+"_painted")
	});
	
	SlabsAndStairs("aether","skyroot")
	SlabsAndStairs("aether_redux","fieldsproot")
	SlabsAndStairs("aether_redux","blightwillow")
	SlabsAndStairs("aether_redux","jellyshroom")
	SlabsAndStairs("aether_redux","jellyshroom")
	SlabsAndStairs("aether_redux","cloudcap")
	SlabsAndStairs("aether_redux","crystal")
	SlabsAndStairs("aether_redux","glacia")
	SlabsAndStairs("twilightforest","twilight_oak")
	SlabsAndStairs("twilightforest","canopy")
	SlabsAndStairs("twilightforest","mangrove")
	SlabsAndStairs("twilightforest","dark")
	SlabsAndStairs("twilightforest","transformation")
	SlabsAndStairs("twilightforest","mining")
	SlabsAndStairs("twilightforest","sorting")
	SlabsAndStairs("twilightforest","time")
	SlabsAndStairs("thermal","rubberwood")
	SlabsAndStairs("ars_nouveau","archwood")

    
})