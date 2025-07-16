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
	//CuttingLogs("architects_palette:twisted_planks","architects_palette:stripped_twisted_log")
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

	/*CuttingLogs("minecraft:bamboo_planks","regions_unexplored:stripped_bamboo_log")
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
	CuttingLogs("regions_unexplored:willow_planks","regions_unexplored:stripped_willow_log")*/
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
	CuttingLogs("wizards_reborn:innocent_wood_planks","wizards_reborn:stripped_innocent_wood_log")
	CuttingLogs("wizards_reborn:arcane_wood_planks","wizards_reborn:stripped_arcane_wood_log")
	CuttingLogs("biomeswevegone:aspen_planks","biomeswevegone:stripped_aspen_log")
	CuttingLogs("biomeswevegone:baobab_planks","biomeswevegone:stripped_baobab_log")
	CuttingLogs("biomeswevegone:blue_enchanted_planks","biomeswevegone:stripped_blue_enchanted_log")
	CuttingLogs("biomeswevegone:cika_planks","biomeswevegone:stripped_cika_log")
	CuttingLogs("biomeswevegone:cypress_planks","biomeswevegone:stripped_cypress_log")
	CuttingLogs("biomeswevegone:ebony_planks","biomeswevegone:stripped_ebony_log")
	CuttingLogs("biomeswevegone:fir_planks","biomeswevegone:stripped_fir_log")
	CuttingLogs("biomeswevegone:green_enchanted_planks","biomeswevegone:stripped_green_enchanted_log")
	CuttingLogs("biomeswevegone:holly_planks","biomeswevegone:stripped_holly_log")
	CuttingLogs("biomeswevegone:ironwood_planks","biomeswevegone:stripped_ironwood_log")
	CuttingLogs("biomeswevegone:jacaranda_planks","biomeswevegone:stripped_jacaranda_log")
	CuttingLogs("biomeswevegone:mahogany_planks","biomeswevegone:stripped_mahogany_log")
	CuttingLogs("minecraft:birch_planks","biomeswevegone:stripped_palo_verde_log")
	CuttingLogs("biomeswevegone:zelkova_planks","biomeswevegone:stripped_zelkova_log")
	CuttingLogs("biomeswevegone:witch_hazel_planks","biomeswevegone:stripped_witch_hazel_log")
	CuttingLogs("biomeswevegone:willow_planks","biomeswevegone:stripped_willow_log")
	CuttingLogs("biomeswevegone:white_mangrove_planks","biomeswevegone:stripped_white_mangrove_log")
	CuttingLogs("biomeswevegone:skyris_planks","biomeswevegone:stripped_skyris_log")
	CuttingLogs("biomeswevegone:sakura_planks","biomeswevegone:stripped_sakura_log")
	CuttingLogs("biomeswevegone:rainbow_eucalyptus_planks","biomeswevegone:stripped_rainbow_eucalyptus_log")
	CuttingLogs("biomeswevegone:redwood_planks","biomeswevegone:stripped_redwood_log")
	CuttingLogs("biomeswevegone:pine_planks","biomeswevegone:stripped_pine_log")
	CuttingLogs("biomeswevegone:palm_planks","biomeswevegone:stripped_palm_log")
	CuttingLogs("biomeswevegone:maple_planks","biomeswevegone:stripped_maple_log")
	CuttingLogs("biomeswevegone:florus_planks","biomeswevegone:stripped_florus_stem")

	CuttingLogs("minecraft:oak_planks","minecraft:stripped_oak_wood")
	CuttingLogs("minecraft:spruce_planks","minecraft:stripped_spruce_wood")
	CuttingLogs("minecraft:birch_planks","minecraft:stripped_birch_wood")
	CuttingLogs("minecraft:jungle_planks","minecraft:stripped_jungle_wood")
	CuttingLogs("minecraft:acacia_planks","minecraft:stripped_acacia_wood")
	CuttingLogs("minecraft:dark_oak_planks","minecraft:stripped_dark_oak_wood")
	CuttingLogs("minecraft:crimson_planks","minecraft:stripped_crimson_stem")
	CuttingLogs("minecraft:warped_planks","minecraft:stripped_warped_stem")
	CuttingLogs("mangrove_planks","stripped_mangrove_wood")
	CuttingLogs("cherry_planks","stripped_cherry_wood")
	CuttingLogs("ancient_aether:highsproot_planks","ancient_aether:stripped_highsproot_wood")
	CuttingLogs("ancient_aether:sakura_planks","ancient_aether:stripped_sakura_wood")
	CuttingLogs("deep_aether:yagroot_planks","deep_aether:stripped_yagroot_wood")
	CuttingLogs("deep_aether:cruderoot_planks","deep_aether:stripped_cruderoot_wood")
	CuttingLogs("deep_aether:conberry_planks","deep_aether:stripped_conberry_wood")
	CuttingLogs("deep_aether:sunroot_planks","deep_aether:stripped_sunroot_wood")
	CuttingLogs("deep_aether:roseroot_planks","deep_aether:stripped_roseroot_wood")
	CuttingLogs("deeperdarker:echo_planks","deeperdarker:stripped_echo_wood")
	CuttingLogs("deeperdarker:bloom_planks","deeperdarker:stripped_blooming_stem")
	CuttingLogs("forbidden_arcanus:aurum_planks","forbidden_arcanus:stripped_aurum_wood")
	
	CuttingLogs("quark:ancient_planks","quark:stripped_ancient_wood")
	CuttingLogs("quark:azalea_planks","quark:stripped_azalea_wood")
	CuttingLogs("quark:blossom_planks","quark:stripped_blossom_wood")
	CuttingLogs("aether:skyroot_planks","aether:stripped_skyroot_wood")
	CuttingLogs("aether_redux:fieldsproot_planks","aether_redux:stripped_fieldsproot_wood")
	CuttingLogs("aether_redux:blightwillow_planks","aether_redux:stripped_blightwillow_wood")
	CuttingLogs("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_stem")
	CuttingLogs("aether_redux:jellyshroom_planks","aether_redux:jellyshroom_hyphae")
	CuttingLogs("aether_redux:cloudcap_planks","aether_redux:stripped_cloudcap_stem")
	CuttingLogs("aether_redux:crystal_planks","aether_redux:stripped_crystal_wood")
	CuttingLogs("aether_redux:glacia_planks","aether_redux:stripped_glacia_wood")
	CuttingLogs("twilightforest:twilight_oak_planks","twilightforest:stripped_twilight_oak_wood")
	CuttingLogs("twilightforest:canopy_planks","twilightforest:stripped_canopy_wood")
	CuttingLogs("twilightforest:mangrove_planks","twilightforest:stripped_mangrove_wood")
	CuttingLogs("twilightforest:dark_planks","twilightforest:stripped_dark_wood")
	CuttingLogs("twilightforest:transformation_planks","twilightforest:stripped_transformation_wood")
	CuttingLogs("twilightforest:mining_planks","twilightforest:stripped_mining_wood")
	CuttingLogs("twilightforest:sorting_planks","twilightforest:stripped_sorting_wood")
	CuttingLogs("twilightforest:time_planks","twilightforest:stripped_time_wood")
	CuttingLogs("thermal:rubberwood_planks","thermal:stripped_rubberwood_wood")
	CuttingLogs("ars_nouveau:archwood_planks","ars_nouveau:stripped_blue_archwood_wood")
	CuttingLogs("ars_nouveau:archwood_planks","ars_nouveau:stripped_green_archwood_wood")
	CuttingLogs("ars_nouveau:archwood_planks","ars_nouveau:stripped_red_archwood_wood")
	CuttingLogs("ars_nouveau:archwood_planks","ars_nouveau:stripped_purple_archwood_wood")
	CuttingLogs("wizards_reborn:innocent_wood_planks","wizards_reborn:stripped_innocent_wood")
	CuttingLogs("wizards_reborn:arcane_wood_planks","wizards_reborn:stripped_arcane_wood")
	CuttingLogs("biomeswevegone:aspen_planks","biomeswevegone:stripped_aspen_wood")
	CuttingLogs("biomeswevegone:baobab_planks","biomeswevegone:stripped_baobab_wood")
	CuttingLogs("biomeswevegone:blue_enchanted_planks","biomeswevegone:stripped_blue_enchanted_wood")
	CuttingLogs("biomeswevegone:cika_planks","biomeswevegone:stripped_cika_wood")
	CuttingLogs("biomeswevegone:cypress_planks","biomeswevegone:stripped_cypress_wood")
	CuttingLogs("biomeswevegone:ebony_planks","biomeswevegone:stripped_ebony_wood")
	CuttingLogs("biomeswevegone:fir_planks","biomeswevegone:stripped_fir_wood")
	CuttingLogs("biomeswevegone:green_enchanted_planks","biomeswevegone:stripped_green_enchanted_wood")
	CuttingLogs("biomeswevegone:holly_planks","biomeswevegone:stripped_holly_wood")
	CuttingLogs("biomeswevegone:ironwood_planks","biomeswevegone:stripped_ironwood_wood")
	CuttingLogs("biomeswevegone:jacaranda_planks","biomeswevegone:stripped_jacaranda_wood")
	CuttingLogs("biomeswevegone:mahogany_planks","biomeswevegone:stripped_mahogany_wood")
	CuttingLogs("minecraft:birch_planks","biomeswevegone:stripped_palo_verde_wood")
	CuttingLogs("biomeswevegone:zelkova_planks","biomeswevegone:stripped_zelkova_wood")
	CuttingLogs("biomeswevegone:witch_hazel_planks","biomeswevegone:stripped_witch_hazel_wood")
	CuttingLogs("biomeswevegone:willow_planks","biomeswevegone:stripped_willow_wood")
	CuttingLogs("biomeswevegone:white_mangrove_planks","biomeswevegone:stripped_white_mangrove_wood")
	CuttingLogs("biomeswevegone:skyris_planks","biomeswevegone:stripped_skyris_wood")
	CuttingLogs("biomeswevegone:sakura_planks","biomeswevegone:stripped_sakura_wood")
	CuttingLogs("biomeswevegone:rainbow_eucalyptus_planks","biomeswevegone:stripped_rainbow_eucalyptus_wood")
	CuttingLogs("biomeswevegone:redwood_planks","biomeswevegone:stripped_redwood_wood")
	CuttingLogs("biomeswevegone:pine_planks","biomeswevegone:stripped_pine_wood")
	CuttingLogs("biomeswevegone:palm_planks","biomeswevegone:stripped_palm_wood")
	CuttingLogs("biomeswevegone:maple_planks","biomeswevegone:stripped_maple_wood")
	CuttingLogs("biomeswevegone:florus_planks","biomeswevegone:stripped_florus_wood")
	CuttingLogs("naturesaura:ancient_planks","naturesaura:ancient_log")
	CuttingLogs("naturesaura:ancient_planks","naturesaura:ancient_bark")
	event.remove([{id:"naturesaura:ancient_planks"},{id:"naturesaura:ancient_planks_from_bark"}])
	CuttingLogs("wizards_reborn:cork_bamboo_planks","wizards_reborn:cork_bamboo_block")
	


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
	//SlabsAndStairs("architects_palette","twisted")
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
	/*SlabsAndStairs("regions_unexplored","baobab")
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
	});*/
	
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
	SlabsAndStairs("wizards_reborn","innocent_wood")
	SlabsAndStairs("wizards_reborn","arcane_wood")
	SlabsAndStairs("biomeswevegone","aspen")
	SlabsAndStairs("biomeswevegone","baobab")
	SlabsAndStairs("biomeswevegone","blue_enchanted")
	SlabsAndStairs("biomeswevegone","green_enchanted")
	SlabsAndStairs("biomeswevegone","florus")
	SlabsAndStairs("biomeswevegone","cika")
	SlabsAndStairs("biomeswevegone","cypress")
	SlabsAndStairs("biomeswevegone","ebony")
	SlabsAndStairs("biomeswevegone","fir")
	SlabsAndStairs("biomeswevegone","holly")
	SlabsAndStairs("biomeswevegone","ironwood")
	SlabsAndStairs("biomeswevegone","jacaranda")
	SlabsAndStairs("biomeswevegone","mahogany")
	SlabsAndStairs("biomeswevegone","maple")
	SlabsAndStairs("biomeswevegone","palm")
	SlabsAndStairs("biomeswevegone","pine")
	SlabsAndStairs("biomeswevegone","rainbow_eucalyptus")
	SlabsAndStairs("biomeswevegone","redwood")
	SlabsAndStairs("biomeswevegone","sakura")
	SlabsAndStairs("biomeswevegone","skyris")
	SlabsAndStairs("biomeswevegone","white_mangrove")
	SlabsAndStairs("biomeswevegone","willow")
	SlabsAndStairs("biomeswevegone","witch_hazel")
	SlabsAndStairs("biomeswevegone","zelkova")
	SlabsAndStairs("naturesaura","ancient")
	SlabsAndStairs("wizards_reborn","cork_bamboo")
	SlabsAndStairs("wizards_reborn","cork_bamboo_chiseled")


	///F&A fixes

	event.shaped("forbidden_arcanus:fungyss_fence_gate",
		[
			"SPS",
			"SPS"
		],
		{
			S: "#c:rods/wooden",
			P: "forbidden_arcanus:fungyss_planks"
		}
	).id("forbidden_arcanus:fungyss_fence_gate")

	event.shaped("3x forbidden_arcanus:fungyss_fence",
		[
			"PSP",
			"PSP"
		],
		{
			S: "#c:rods/wooden",
			P: "forbidden_arcanus:fungyss_planks"
		}
	).id("forbidden_arcanus:fungyss_fence")

	event.shaped("forbidden_arcanus:edelwood_fence_gate",
		[
			"SPS",
			"SPS"
		],
		{
			S: "#c:rods/wooden",
			P: "forbidden_arcanus:edelwood_planks"
		}
	).id("forbidden_arcanus:edelwood_fence_gate")

	event.shaped("3x forbidden_arcanus:edelwood_fence",
		[
			"PSP",
			"PSP"
		],
		{
			S: "#c:rods/wooden",
			P: "forbidden_arcanus:edelwood_planks"
		}
	).id("forbidden_arcanus:edelwood_fence")

	// WR torches and campfires

	function torch(type,plank)
	{
		event.shaped("6x wizards_reborn:"+type+"_salt_torch",
			[
				"S",
				"C",
				"P"
			],
			{
				P: "wizards_reborn:"+plank,
				C: "#minecraft:coals",
				S: "#forge:salt"
			}
		)

		event.shaped("12x wizards_reborn:"+type+"_salt_torch",
			[
				"S",
				"C",
				"P"
			],
			{
				P: "wizards_reborn:"+plank,
				C: "#forge:coal_coke",
				S: "#forge:salt"
			}
		)

		event.shaped("wizards_reborn:"+type+"_salt_campfire",
			[
				"S",
				"C",
				"P"
			],
			{
				P: "wizards_reborn:"+plank,
				C: "campfire",
				S: "#forge:salt"
			}
		)
		
		event.remove({id:"wizards_reborn:shaped/"+type+"_salt_torch"})
		event.remove({id:"wizards_reborn:shaped/"+type+"_salt_campfire"})
	}
	torch("arcane","arcane_wood_planks")
	torch("innocent","innocent_wood_planks")
	torch("cork_bamboo","cork_bamboo_planks")
	torch("wisestone","wisestone")

	const woodtype = ["oak","spruce","cherry","dark_oak","birch","jungle","bamboo","mangrove","acacia","warped","crimson"]

	woodtype.forEach(id => {
		
		event.shapeless("silly_oddities:"+id+"_pedestal",["wizards_reborn:arcane_pedestal","minecraft:"+id+"_planks"]).id("silly_oddities:integration/wizards_reborn/shaped/"+id+"/"+id+"_pedestal")
	});
	//event.shaped("6x wizards_reborn:arcane_salt_torch")

    
})