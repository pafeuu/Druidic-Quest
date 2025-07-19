ServerEvents.recipes(event=>{

    event.custom({
		type: "lychee:block_interacting",
		post: [
			{ type: "drop_item", item: "kubejs:big_enchanting_rune", count: 1 },
			{ type: "execute", command: "playsound forbidden_arcanus:item.mundabitur_dust.use neutral @p", hide: true },
            { type: "place", block: "air"}
		],
		item_in: [
			{ item: "forbidden_arcanus:dark_rune" }
		],
        block_in: "kubejs:deepslate_rune"
	})

    event.custom({
		type: "lychee:block_interacting",
		post: [
			{ type: "drop_item", item: "forbidden_arcanus:dark_rune", count: 1 },
			{ type: "execute", command: "playsound forbidden_arcanus:item.mundabitur_dust.use neutral @p", hide: true },
            { type: "place", block: "air"}
		],
		item_in: [
			{ item: "forbidden_arcanus:corrupti_dust" }
		],
        block_in: "forbidden_arcanus:rune_block"
	}).id("forbidden_arcanus:dark_rune")

	
	event.shaped("kubejs:big_enchanting_rune",["AA","AA"],{A:"kubejs:medium_enchanting_rune"})
	event.shaped("kubejs:large_enchanting_rune",["AA","AA"],{A:"kubejs:big_enchanting_rune"})
	event.shapeless("4x kubejs:big_enchanting_rune","kubejs:large_enchanting_rune")
	event.shapeless("4x kubejs:enchanting_rune","kubejs:big_enchanting_rune")

    function RuneCrafting(output,input,wissen,experience)
    {

        const itemInputs = input.map(function(input) {
        return { item: input.item };
        });

        event.custom({
        "type": "wizards_reborn:arcane_iterator",
        "output": {
            "item": output,
            "count": 1
        },
        "wissen": wissen,
        "experience": experience,
        "ingredients": itemInputs
    })
    }

    RuneCrafting("kubejs:enchanting_rune_of_fire",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"ars_nouveau:fire_essence"},
        {"item":"ars_nouveau:fire_essence"},
        {"item":"ars_nouveau:fire_essence"},
        {"item":"ars_nouveau:fire_essence"},],2000,10)

    RuneCrafting("kubejs:enchanting_rune_of_water",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"ars_nouveau:water_essence"},
        {"item":"ars_nouveau:water_essence"},
        {"item":"ars_nouveau:water_essence"},
        {"item":"ars_nouveau:water_essence"},],2000,10)

    RuneCrafting("kubejs:enchanting_rune_of_ice",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"ars_nouveau:water_essence"},
        {"item":"ars_nouveau:water_essence"},
        {"item":"minecraft:blue_ice"},
        {"item":"minecraft:blue_ice"},],2000,10)

    RuneCrafting("kubejs:enchanting_rune_of_pain",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"ars_nouveau:wilden_spike"},
        {"item":"ars_nouveau:wilden_spike"},
        {"item":"kubejs:ivy_quartz"},
        {"item":"kubejs:ivy_quartz"},],3000,15)

    RuneCrafting("kubejs:big_enchanting_rune_of_pain",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"kubejs:death_essence"},
        {"item":"kubejs:ivy_quartz"},
        {"item":"kubejs:ivy_quartz"},
        {"item":"kubejs:ivy_quartz"},],5000,25)

    RuneCrafting("kubejs:enchanting_rune_of_nature",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"kubejs:nature_essence"},
        {"item":"kubejs:nature_essence"},
        {"item":"kubejs:nature_essence"},
        {"item":"kubejs:nature_essence"},],1000,5)

    RuneCrafting("kubejs:enchanting_rune_of_mana",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"irons_spellbooks:arcane_ingot"},
        {"item":"kubejs:source_alloy_ingot"},
        {"item":"ars_nouveau:source_berry_pie"},
        {"item":"ars_nouveau:source_berry_pie"},],1000,5)

    RuneCrafting("kubejs:large_enchanting_rune_of_infinity",[
        {"item":"kubejs:large_enchanting_rune"},
        {"item":"forbidden_arcanus:stellarite_piece"},
        {"item":"forbidden_arcanus:stellarite_piece"},
        {"item":"forbidden_arcanus:stellarite_piece"},
        {"item":"forbidden_arcanus:stellarite_piece"},],10000,30)

    RuneCrafting("kubejs:enchanting_rune_of_speed",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"ars_nouveau:air_essence"},],3000,15)
    
    RuneCrafting("kubejs:enchanting_rune_of_agility",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"ars_nouveau:wilden_wing"},
        {"item":"ars_nouveau:wilden_wing"},],2000,10)

    RuneCrafting("kubejs:big_enchanting_rune_of_steel",[
        {"item":"kubejs:big_enchanting_rune"},
        {"item":"kubejs:lead_chestplate"},
        {"item":"kubejs:silver_chestplate"},
        {"item":"kubejs:copper_chestplate"},
        {"item":"iron_chestplate"},],5000,25)
    
    RuneCrafting("kubejs:enchanting_rune_of_horror",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"kubejs:death_essence"},
        {"item":"kubejs:rotten_flesh_block"},
        {"item":"kubejs:rotten_flesh_block"},
        {"item":"kubejs:rotten_flesh_block"},],3000,15)

    RuneCrafting("kubejs:big_enchanting_rune_of_horror",[
        {"item":"kubejs:big_enchanting_rune"},
        {"item":"kubejs:death_essence"},
        {"item":"minecraft:wither_skeleton_skull"},
        {"item":"minecraft:wither_skeleton_skull"},
        {"item":"minecraft:wither_skeleton_skull"},],5000,25)

    RuneCrafting("kubejs:enchanting_rune_of_repulsion",[
        {"item":"kubejs:enchanting_rune"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"minecraft:shield"},],2000,10)

    RuneCrafting("kubejs:big_enchanting_rune_of_cosmos",[
        {"item":"kubejs:big_enchanting_rune"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"ars_nouveau:air_essence"},
        {"item":"minecraft:ender_pearl"},],5000,25)

    RuneCrafting("kubejs:large_enchanting_rune_of_luck",[
        {"item":"kubejs:large_enchanting_rune"},
        {"item":"minecraft:rabbit_foot"},
        {"item":"minecraft:golden_sword"},
        {"item":"minecraft:golden_sword"},
        {"item":"golden_pickaxe"},
        {"item":"golden_pickaxe"},
        {"item":"thermal:diamond_gear"}],10000,30)
    
    RuneCrafting("kubejs:big_enchanting_rune_of_wisdom",[
        {"item":"kubejs:big_enchanting_rune"},
        {"item":"thermal:xp_crystal"},
        {"item":"irons_spellbooks:emerald_stoneplate_ring"},
        {"item":"irons_spellbooks:emerald_stoneplate_ring"},
        {"item":"irons_spellbooks:emerald_stoneplate_ring"}],5000,20)

    RuneCrafting("kubejs:large_enchanting_rune_of_wisdom",[
        {"item":"kubejs:large_enchanting_rune"},
        {"item":"enigmaticlegacy:xp_scroll"},
        {"item":"irons_spellbooks:emerald_stoneplate_ring"},
        {"item":"irons_spellbooks:emerald_stoneplate_ring"},
        {"item":"irons_spellbooks:emerald_stoneplate_ring"}],10000,30)

    
    
})