ServerEvents.recipes(event => {
    
    function MillingNoExtras(count, output, input, damage, id)
    {
        event.shapeless(count+"x "+output, [input, '#forge:tools/mortars']).damageIngredient('#forge:tools/mortars', damage).id(id)

        event.recipes.naturesaura.altar(count+"x "+output, input,50,20,'naturesaura:crushing_catalyst')

        event.recipes.create.crushing(count+"x "+output, input)

        event.recipes.create.milling(count+"x "+output, input)

        event.recipes.thermal.pulverizer(count+"x "+output, input)

        event.custom({
            "type": "immersiveengineering:crusher",
            "energy": 1600,
            "input": {
                "item": input
            },
            "result": {
                "base_ingredient": {
                    "item": output
                },
                "count": count
            },
            "secondaries": []
        })  
    }

    function MillingWithExtras(count, output, magicCount, extrasCount, extras ,chance , input, damage, id)
    {
        event.shapeless(count+"x "+output, [input, '#forge:tools/mortars']).damageIngredient('#forge:tools/mortars', damage).id(id)

        event.recipes.naturesaura.altar(magicCount+"x "+output, input,50,20,'naturesaura:crushing_catalyst')

       /* event.custom(
            {
                "type": "elementalcraft:grinding",
                "element_amount": 1000,
                "ingredient": {
                  "item": input
                },
                "luck_ratio": 3,
                "output": {
                  "Count": magicCount,
                  "id": output
                }
            } 
        )*/

        event.recipes.create.crushing([count+"x "+output, Item.of(extras, extrasCount).withChance(chance)], input)

        event.recipes.create.milling([count+"x "+output, Item.of(extras, extrasCount).withChance(chance)], input)

        event.recipes.thermal.pulverizer([count+"x "+output,Item.of(extras, extrasCount).withChance(chance)], input)

        event.custom({
            "type": "immersiveengineering:crusher",
            "energy": 1600,
            "input": {
                "item": input
            },
            "result": {
                "base_ingredient": {
                    "item": output
                },
                "count": count
            },
            "secondaries": [
                {
                    "chance": chance,
                    "output": {
                      "item": extras
                    }
                  }
            ]
        })  
    }

    MillingWithExtras(4, "vintagedelight:salt_dust", 6, 1, "coal", 0.9, "wizards_reborn:nether_salt", 4, "wizards_reborn:salt_crushing")
    MillingWithExtras(1, "wizards_reborn:arcanum_dust", 2, 1, "wizards_reborn:arcanum_dust", 0.5, "wizards_reborn:arcanum", 4, "wizards_reborn:shapeless/arcanum_dust")
    event.remove({id:"wizards_reborn:shapeless/arcanum_dust_with_redstone"})

    MillingWithExtras(1, 'create:wheat_flour', 2, 1, 'create:wheat_flour', 0.5, 'minecraft:wheat', 2, 'create:milling/wheat')

    MillingWithExtras(2, 'naturesaura:gold_powder', 4, 2, 'naturesaura:gold_powder', 0.5, 'naturesaura:gold_leaf', 2, 'naturesaura:gold_powder')
    event.remove({id:"naturesaura:altar/gold_powder"})


    MillingNoExtras(9, 'bone_meal', 'bone_block', 6,'minecraft:bone_meal_from_bone_block')
    MillingNoExtras(1, 'thermal:ender_pearl_dust', 'ender_pearl', 2,'thermal:earth_charge/ender_pearl_dust_from_ender_pearl')

    MillingNoExtras(1, 'wizards_reborn:ground_brown_mushroom', 'brown_mushroom', 1,'wizards_reborn:mortar/ground_brown_mushroom')
    MillingNoExtras(1, 'wizards_reborn:ground_red_mushroom', 'red_mushroom', 1,'wizards_reborn:mortar/ground_red_mushroom')
    MillingNoExtras(1, 'wizards_reborn:ground_crimson_fungus', 'crimson_fungus', 1,'wizards_reborn:mortar/ground_crimson_fungus')
    MillingNoExtras(1, 'wizards_reborn:ground_warped_fungus', 'warped_fungus', 1,'wizards_reborn:mortar/ground_warped_fungus')
    MillingNoExtras(1, 'wizards_reborn:ground_elder_mor', 'wizards_reborn:elder_mor', 1,'wizards_reborn:mortar/ground_elder_mor')
    MillingNoExtras(1, 'wizards_reborn:ground_mor', 'wizards_reborn:mor', 1,'wizards_reborn:mortar/ground_mor')
    MillingNoExtras(1, "wizards_reborn:petals","wizards_reborn:flower_fertilizer",1,'wizards_reborn:petal_duping')
    


    MillingNoExtras(1, 'kubejs:zinc_dust', 'create:zinc_ingot', 8, 'kubejs:zinc_dust_from_zinc_ingot')
    MillingNoExtras(1, 'thermal:nickel_dust', 'thermal:nickel_ingot', 8, 'thermal:machines/pulverizer/pulverizer_nickel_ingot_to_dust')
    MillingNoExtras(1, 'thermal:lead_dust', 'thermal:lead_ingot', 8, 'thermal:machines/pulverizer/pulverizer_lead_ingot_to_dust')
    MillingNoExtras(1, 'thermal:tin_dust', 'thermal:tin_ingot', 8, 'thermal:machines/pulverizer/pulverizer_tin_ingot_to_dust')
    MillingNoExtras(1, 'thermal:iron_dust', 'iron_ingot', 8, 'thermal:machines/pulverizer/pulverizer_iron_ingot_to_dust')
    MillingNoExtras(1, 'thermal:gold_dust', 'gold_ingot', 8, 'thermal:machines/pulverizer/pulverizer_gold_ingot_to_dust')
    MillingNoExtras(1, 'thermal:silver_dust', 'thermal:silver_ingot', 8, 'thermal:machines/pulverizer/pulverizer_silver_ingot_to_dust')
    MillingNoExtras(1, 'thermal:netherite_dust', 'netherite_ingot', 8, 'thermal:machines/pulverizer/pulverizer_netherite_ingot_to_dust')
    MillingNoExtras(1, 'thermal:copper_dust', 'copper_ingot', 8, 'thermal:machines/pulverizer/pulverizer_copper_ingot_to_dust')

    
    event.remove({id: 'immersiveengineering:crusher/ingot_zinc'})

   
    MillingNoExtras(1, 'immersiveengineering:dust_coke', 'thermal:coal_coke', 6, 'immersiveengineering:crusher/coke')
    MillingNoExtras(1, 'thermal:apatite_dust', 'thermal:apatite', 6, 'thermal:machines/pulverizer/pulverizer_apatite')
    MillingNoExtras(1, 'thermal:ruby_dust', 'rubinated_nether:ruby', 6, 'thermal:ruby_dust_from_ruby')
    MillingNoExtras(1, 'thermal:sapphire_dust', 'kubejs:sapphire', 6, 'thermal:sapphire_dust_from_sapphire')
    MillingNoExtras(1, 'thermal:cinnabar_dust', 'thermal:cinnabar', 6, 'thermal:machines/pulverizer/pulverizer_cinnabar')
    MillingNoExtras(1, 'thermal:emerald_dust', 'emerald', 6, 'thermal:machines/pulverizer/pulverizer_emerald')
    MillingNoExtras(1, 'thermal:diamond_dust', 'diamond', 6, 'thermal:machines/pulverizer/pulverizer_diamond')
    MillingNoExtras(1, 'thermal:lapis_dust', 'lapis_lazuli', 3, 'thermal:machines/pulverizer/pulverizer_lapis')
    MillingNoExtras(1, 'thermal:quartz_dust', 'quartz', 3, 'thermal:machines/pulverizer/pulverizer_quartz')



    
    event.shapeless('3x bone_meal', ['bone','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',2).id('minecraft:bone_meal')

	event.shapeless('3x bone_meal', ['#twigs:seashells','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',1).id('twigs:bone_meal_from_seashells')

	event.shapeless('3x bone_meal', ['ars_nouveau:wilden_horn','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',2).id('ars_nouveau:horn_to_bonemeal')

	event.shapeless('6x bone_meal', ['tide:fish_bone','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',1).id('tide:bone_meal_from_fish_bone')

	event.shapeless('3x bone_meal', ['irons_spellbooks:frozen_bone','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',3).id('irons_spellbooks:frozen_bone_to_bonemeal')

	event.shapeless('2x bone_meal', ['alexsmobs:fish_bones','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',1).id('alexsmobs:bonemeal_from_fish_bones')

	event.shapeless('flint', ['gravel','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',1)

	event.shaped("flint",["GG","GG"],{G:"minecraft:gravel"})

	event.shapeless('sugar', ['sugar_cane','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',2).id('minecraft:sugar_from_sugar_cane')

	event.shapeless('minecraft:blaze_powder', ['blaze_rod','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',8).id('minecraft:blaze_powder')

	event.shapeless('thermal:basalz_powder', ['thermal:basalz_rod','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',8).id('thermal:basalz_powder')

	event.shapeless('thermal:blitz_powder', ['thermal:blitz_rod','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',8).id('thermal:blitz_powder')

	event.shapeless('thermal:blizz_powder', ['thermal:blizz_rod','#forge:tools/mortars']).damageIngredient('#forge:tools/mortars',8).id('thermal:blizz_powder')

})