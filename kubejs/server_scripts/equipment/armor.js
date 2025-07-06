ServerEvents.recipes(event => {

    const armorslot = ["helmet","chestplate","leggings","boots"]

    function naturearmorup(input,output,smith,material)
	{
		// Upgrades the armor
		event.smithing("naturesaura:"+output+"_helmet","kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_helmet"),"naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_chest" ,"kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_chestplate"),"naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_pants" ,"kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_leggings"),"naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_shoes" ,"kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_boots"),"naturesaura:"+material)
		
		// Removes the old recipes
		event.remove([{output:"naturesaura"+output+"_helmet", output:"naturesaura:"+output+"_chest", output:"naturesaura:"+output+"_pants",output:"naturesaura:"+output+"_shoes"}])
		event.remove({output:"naturesaura:"+output+"_shoes"})
	}

    naturearmorup("diamond","sky","skyseeker","sky_ingot")
	naturearmorup("iron","infused_iron","botanist","infused_iron")

	event.smithing('immersiveengineering:armor_steel_helmet',"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_helmet","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_helmet")
	event.smithing('immersiveengineering:armor_steel_chestplate' ,"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_chest","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_chestplate")
	event.smithing('immersiveengineering:armor_steel_leggings' ,"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_pants","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_leggings")
	event.smithing('immersiveengineering:armor_steel_boots' ,"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_shoes","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_boots")

	event.remove({output:[
        "naturesaura:sky_helmet",
        "naturesaura:sky_chest",
        "naturesaura:sky_pants",
        "naturesaura:sky_shoes"]})

	event.remove({output:[
        "naturesaura:infused_iron_helmet",
        "naturesaura:infused_iron_chest",
        "naturesaura:infused_iron_pants",
        "naturesaura:infused_iron_shoes"]})


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

    simplearmor("thermal:beekeeper_fabric","thermal:beekeeper_helmet","thermal:beekeeper_chestplate","thermal:beekeeper_leggings","thermal:beekeeper_boots")

    simplearmor("#forge:plates/copper","kubejs:copper_helmet","kubejs:copper_chestplate","kubejs:copper_leggings","kubejs:copper_boots")
	
    simplearmor("#forge:plates/lead","kubejs:lead_helmet","kubejs:lead_chestplate","kubejs:lead_leggings","kubejs:lead_boots")
	
    simplearmor("#forge:plates/silver","kubejs:silver_helmet","kubejs:silver_chestplate","kubejs:silver_leggings","kubejs:silver_boots")

    simplearmor("#forge:plates/iron","iron_helmet","iron_chestplate","iron_leggings","iron_boots")
	simplearmor("#forge:plates/diamond","diamond_helmet","diamond_chestplate","diamond_leggings","diamond_boots")
	simplearmor("minecraft:chain","chainmail_helmet","chainmail_chestplate","chainmail_leggings","chainmail_boots")

    simplearmor('immersiveengineering:hemp_fabric',"immersiveengineering:armor_faraday_helmet","immersiveengineering:armor_faraday_chestplate","immersiveengineering:armor_faraday_leggings","immersiveengineering:armor_faraday_boots")

    event.remove([
        {output:"iron_helmet"},
        {output:"iron_chestplate"},
        {output:"iron_leggings"},
        {output:"iron_boots"},
        {output:"diamond_helmet"},
        {output:"diamond_chestplate"},
        {output:"diamond_leggings"},
        {output:"diamond_boots"},
		{output:"chainmail_helmet"},
        {output:"chainmail_chestplate"},
        {output:"chainmail_leggings"},
        {output:"chainmail_boots"},
        {output:"immersiveengineering:armor_faraday_helmet"},
        {output:"immersiveengineering:armor_faraday_chestplate"},
        {output:"immersiveengineering:armor_faraday_leggings"},
        {output:"immersiveengineering:armor_faraday_boots"}])


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

    SimpleArmorUpgrade("#forge:gems/zanite","iron_helmet","iron_chestplate","iron_leggings","iron_boots","aether:zanite_helmet","aether:zanite_chestplate","aether:zanite_leggings","aether:zanite_boots")
	
    SimpleArmorUpgrade("#forge:gems/skyjade","iron_helmet","iron_chestplate","iron_leggings","iron_boots","deep_aether:skyjade_helmet","deep_aether:skyjade_chestplate","deep_aether:skyjade_leggings","deep_aether:skyjade_boots")

    event.remove([
        {output:"aether:zanite_helmet"},
        {output:"aether:zanite_chestplate"},
        {output:"aether:zanite_leggings"},
        {output:"aether:zanite_boots"}])

	event.remove([
        {output:"deep_aether:skyjade_helmet"},
        {output:"deep_aether:skyjade_chestplate"},
        {output:"deep_aether:skyjade_leggings"},
        {output:"deep_aether:skyjade_boots"}])

    armorslot.forEach(id=>{
    
        event.smithing("golden_"+id,"kubejs:gold_upgrade_smithing_template",Item.of("kubejs:silver_"+id).ignoreNBT(),"kubejs:gold_upgrade_parts").id("minecraft:golden_"+id)
   
	})

    /// Thermal Diving Suit

    event.shaped("thermal:diving_helmet", 
    [
        " G ",
        "GBG",
        "FBF"
    ],
    {
        G: "#forge:plates/gold",
        B: "quark:gold_bars",
        F: "thermal:diving_fabric"
    }).id("thermal:armor/diving_helmet")

    event.shaped("thermal:diving_chestplate",
    [
        "G G",
        "FGF",
        "FFF"
    ],
    {
        G: "#forge:plates/gold",
        F: "thermal:diving_fabric"
    }).id("thermal:armor/diving_chestplate")

    event.shaped("thermal:diving_leggings",
    [
        "FFF",
        "G G",
        "F F"
    ],
    {
        G: "#forge:plates/gold",
        F: "thermal:diving_fabric"
    }).id("thermal:armor/diving_leggings")

    event.shaped("thermal:diving_boots",
    [
        "G G",
        "F F",
        "G G"
    ],
    {
        G: "#forge:plates/gold",
        F: "thermal:diving_fabric"
    }).id("thermal:armor/diving_boots")

	event.shaped("twilightforest:naga_chestplate",
		[
			"SLS",
			"SSS",
			"SSS"
		],
		{
			S: "twilightforest:naga_scale",
			L: "leather_chestplate"
		}
	).id("twilightforest:equipment/naga_chestplate")

	event.shaped("twilightforest:naga_leggings",
		[
			"SSS",
			"SLS",
			"S S"
		],
		{
			S: "twilightforest:naga_scale",
			L: "leather_leggings"
		}
	).id("twilightforest:equipment/naga_leggings")

	event.replaceInput([{id:"irons_spellbooks:wandering_magician_helmet"},{id:"irons_spellbooks:wandering_magician_chestplate"},{id:"irons_spellbooks:wandering_magician_leggings"},{id:"irons_spellbooks:wandering_magician_boots"}], "irons_spellbooks:arcane_essence","kubejs:arcane_leather")

	event.shaped("irons_spellbooks:wandering_magician_helmet",
		[
			"LAL",
			"L L"
		],
		{
			A: "kubejs:arcane_leather",
			L: "leather"
		}
	)

	event.shaped("irons_spellbooks:wandering_magician_chestplate",
		[
			"L L",
			"LAL",
			"LLL"
		],
		{
			A: "kubejs:arcane_leather",
			L: "leather"
		}
	)

	event.shaped("irons_spellbooks:wandering_magician_leggings",
		[
			"LAL",
			"L L",
			"L L"
		],
		{
			A: "kubejs:arcane_leather",
			L: "leather"
		}
	)

	event.shaped("irons_spellbooks:wandering_magician_boots",
		[
			"A L",
			"L L"
		],
		{
			A: "kubejs:arcane_leather",
			L: "leather"
		}
	)

	SimpleArmorUpgrade("twilightforest:fiery_ingot",
		"iron_helmet",
		"iron_chestplate",
		"iron_leggings",
		"iron_boots",
		"twilightforest:fiery_helmet",
		"twilightforest:fiery_chestplate",
		"twilightforest:fiery_leggings",
		"twilightforest:fiery_boots")
		
	event.shaped("umbral_skies:fiery_gloves",
		[
			" F ",
			"FXF",
			" F "
		],
		{
			F: "twilightforest:fiery_ingot",
			X: "aether:iron_gloves"
		}
	)

	event.remove([
		{output:"twilightforest:fiery_helmet"},
		{output:"twilightforest:fiery_chestplate"},
		{output:"twilightforest:fiery_leggings"},
		{output:"twilightforest:fiery_boots"}
	])
	armorslot.forEach(id => {
		event.smithing("aether:phoenix_"+id,"kubejs:phoenix_upgrade_smithing_template","twilightforest:fiery_"+id,"kubejs:phoenix_ingot").id("aether:crafting/armor/phoenix_"+id)
	})

	event.smithing("aether:phoenix_gloves","kubejs:phoenix_upgrade_smithing_template","umbral_skies:fiery_gloves","kubejs:phoenix_ingot").id("aether:crafting/armor/phoenix_gloves")
	event.remove({output:"thermal:hazmat_fabric"})
})