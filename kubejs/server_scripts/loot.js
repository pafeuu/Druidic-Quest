
LootJS.modifiers((event) => {
    
    ///================================ Removing ===================================

    event.addLootTableModifier([LootType.CHEST])
        .removeLoot(/.*effortless.*/)
  
    ///=======================================Replacing Junk

    event.addLootTableModifier(/.*chests.*/)
        .replaceLoot("minecraft:stick","8x thermal:compost")
        .replaceLoot("minecraft:ice","fruitsdelight:hamimelon_popsicle")
        .replaceLoot("minecraft:snow","fruitsdelight:kiwi_popsicle")
        .replaceLoot("minecraft:flower_pot","immersive_weathering:mulch_block")
        .replaceLoot("minecraft:snowball",Item.of('minecraft:tipped_arrow', 3, '{CustomPotionColor:-6231318,CustomPotionEffects:[{Ambient:0b,Amplifier:0b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:3200,Id:112,ShowIcon:1b,ShowParticles:1b,"forge:id":"tombstone:frostbite"}],enchanted_arrow:1b}'))
        .replaceLoot("#minecraft:saplings","immersive_weathering:mulch_block")
        .replaceLoot("minecraft:cobbled_deepslate","alexsmobs:rocky_shell")
        .replaceLoot(/.*carpet.*/,"immersiveengineering:hemp_fabric")
        .replaceLoot("minecraft:rotten_flesh","immersive_weathering:mulch_block")
        .replaceLoot("minecraft:sand","farmersdelight:cod_roll")
        .replaceLoot("minecraft:stick","farmersdelight:organic_compost")
        .replaceLoot("minecraft:wheat","farmersdelight:dough")
        .replaceLoot("quark:moss_paste","immersive_weathering:golden_moss_clump")
        .replaceLoot("minecraft:glass_bottle","minecraft:honey_bottle")
        .replaceLoot("minecraft:sugar","thermal:copper_coin")
        .replaceLoot("#minecraft:candles","thermal:copper_coin")
        .replaceLoot("minecraft:paper","minecraft:ink_sac")
        .replaceLoot("#minecraft:flowers","immersive_weathering:mulch_block")
        .replaceLoot("supplementaries:goblet", "thermal:iron_plate")
        .replaceLoot("minecraft:stone", "kubejs:stone_plate")
        .replaceLoot("minecraft:smooth_stone", "kubejs:stone_plate")
        .replaceLoot("minecraft:stone_bricks", "kubejs:stone_plate")
        .replaceLoot("minecraft:snow_block", "elementalcraft:water_shard")
        .replaceLoot("minecraft:clay_ball", "elementalcraft:earth_shard")
        .replaceLoot("minecraft:brick", "elementalcraft:earth_shard")
        .replaceLoot("create:andesite_alloy", "architects_palette:algal_blend")
        .replaceLoot("minecraft:iron_horse_armor", "thermal:iron_plate")
        .replaceLoot("minecraft:golden_horse_armor", "thermal:iron_plate")
        .replaceLoot("minecraft:dead_bush", Item.of('fruitsdelight:jelly_bread', '{JellyEffectRoot:["PEAR"]}'))
        .replaceLoot("minecraft:green_dye",'fruitsdelight:pear_with_rock_sugar')
        .replaceLoot("minecraft:yellow_dye",Item.of('fruitsdelight:jelly_bread', '{JellyEffectRoot:["PINEAPPLE"]}'))
        .replaceLoot("minecraft:diamond_horse_armor", "thermal:iron_plate")
        .replaceLoot("large_fern","kubejs:infused_iron_nugget")
        .replaceLoot("spruce_sign","elementalcraft:earth_shard")
        .replaceLoot("supplementaries:ash","elementalcraft:fire_shard")
        .replaceLoot("minecraft:golden_sword","thermal:gold_plate")
        .replaceLoot("minecraft:golden_shovel","thermal:gold_plate")
        .replaceLoot("minecraft:golden_pickaxe","thermal:gold_plate")
        .replaceLoot("minecraft:golden_axe","thermal:gold_plate")
        .replaceLoot("minecraft:golden_hoe","kubejs:gold_upgrade_smithing_template")
        .replaceLoot("minecraft:golden_helmet","thermal:gold_plate")
        .replaceLoot("minecraft:golden_chestplate","3x thermal:gold_plate")
        .replaceLoot("minecraft:golden_leggings","2x thermal:gold_plate")
        .replaceLoot("minecraft:golden_boots","thermal:gold_plate")
        .replaceLoot("minecraft:netherite_upgrade_smithing_template","kubejs:gold_upgrade_smithing_template")
        .replaceLoot("create:large_cogwheel","kubejs:wooden_gear")
        .replaceLoot("create:cogwheel","kubejs:wooden_gear")
        .replaceLoot("create:andesite_ladder","thermal:silver_ingot")
        .replaceLoot("create:brass_ladder","thermal:lead_ingot")
        .replaceLoot("trident","kubejs:rusty_trident");
    // ====================================================Iron's
    event.addLootTableModifier("irons_spellbooks:chests/filler_storage_loot")
        .randomChance(0.9).addLoot("9x elementalcraft:inert_crystal")
        .randomChance(0.1).addLoot("2x thermal:ruby");

    event.addLootTableModifier("irons_spellbooks:chests/wheat")
        .randomChance(0.1).addLoot('3x vintagedelight:cheese_wheel')
        .randomChance(0.25).addLoot('4x vintagedelight:overnight_oats')
        .randomChance(0.8).addLoot("4x vintagedelight:oatmeal")
        .randomChance(0.01).addLoot("vintagedelight:magic_peanut")
        .randomChance(0.05).addLoot("vintagedelight:century_egg");

    event.addLootTableModifier(/.*irons_spellbooks.*/)
        .replaceLoot(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), "quark:bottled_cloud");

    

    // ====================================================IDAS

    event.addLootTableModifier(/.*idas:chests.*/)
        .randomChance(0.5)
        .addLoot("enigmaticlegacy:recall_potion");

    event.addLootTableModifier(/.*idas:chests.*/)
        .randomChance(0.05)
        .addLoot("enigmaticlegacy:mending_mixture");

    event.addLootTableModifier("minecraft:chests/jungle_temple")
        .randomChance(0.75)
        .addLoot("forbidden_arcanus:nipa");

    event.addLootTableModifier(/idas:chests\/desert_pyramid.*/)
        .randomChance(0.9)
        .addLoot("vintageimprovements:redstone_module");

    // ====================================================Elemental Craft

    event.addLootTableModifier(/.*elementalcraft:chests.*/)
        .replaceLoot(["elementalcraft:swift_alloy_nugget","elementalcraft:drenched_iron_nugget","elementalcraft:drenched_iron_ingot","elementalcraft:rune","elementalcraft:scroll","elementalcraft:scroll_paper"],"kubejs:infused_iron_nugget")
        .replaceLoot("elementalcraft:swift_alloy_ingot","naturesaura:infused_ingot")
        .randomChance(0.7)
        .addLoot("8x elementalcraft:inert_crystal");

    //======================================================== Dungeons Arise
    event.addLootTableModifier(/.*dungeons_arise:chests.*/)
        .randomChance(0.5)
        .addLoot("3x enigmaticlegacy:recall_potion")
        .randomChance(0.25)
        .addLoot("5x enigmaticlegacy:recall_potion")
        .randomChance(0.05)
        .addLoot("enigmaticlegacy:mending_mixture")
        .randomChance(0.025)
        .addLoot("3x enigmaticlegacy:mending_mixture")
        .randomChance(0.1)
        .addLoot("aether:leather_gloves")
        .randomChance(0.01)
        .addLoot("kubejs:overworld_key");
    //===================================================Rare Loot
    event.addLootTableModifier(/.*chests\/village.*/)
        .randomChance(0.1)
        .addLoot("2x farmersdelight:organic_compost");

    event.addLootTypeModifier([LootType.CHEST])
        .anyBiome("#forge:is_swamp","#forge:is_wet") 
        .randomChance(0.05)
        .addLoot("kubejs:frog_totem")

    event.addLootTableModifier(/.*chests.*/)
        .anyBiome("#forge:is_swamp","#forge:is_wet") 
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"alexsmobs:anaconda"},Name:"Anaconda",UUID:[I;719858050,1469468379,-1314582237,-2119634646]}}}'));

    event.addLootTableModifier(/.*chests.*/)
    .anyBiome("#forge:is_plains","minecraft:is_forest") 
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"minecraft:sheep"},Name:"Sheep",UUID:[I;719838050,1469468379,-1314582237,-2119634646]}}}'));
    
    event.addLootTableModifier(/.*chests.*/)
        .anyBiome("#forge:is_plains","minecraft:is_forest") 
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"minecraft:chicken"},Name:"Chicken",UUID:[I;719838050,1469468379,-1314582237,-2119634646]}}}'));
    
    event.addLootTableModifier(/.*chests.*/)
        .anyBiome("#forge:is_plains","minecraft:is_forest")  
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"minecraft:pig"},Name:"Pig",UUID:[I;719838050,1469468379,-1314582237,-2119634646]}}}'));
    
    event.addLootTableModifier(/.*chests.*/)
        .anyBiome("#forge:is_plains","minecraft:is_forest")  
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"minecraft:cow"},Name:"Cow",UUID:[I;719828050,1469468379,-1314582237,-2119634646]}}}'));

    event.addLootTableModifier(/.*chests.*/)
        .randomChance(0.02)
        .addLoot(Item.of('naturesaura:aura_cache', '{aura:200000}'));
    
    
    event.addLootTableModifier(/.*chests.*/)
        .anyDimension("minecraft:overworld") 
        .randomChance(0.02)
        .addLoot("kubejs:botanist_upgrade_smithing_template");
    
     event.addLootTableModifier(/.*chests.*/)
        .biome("#minecraft:is_forest") 
        .randomChance(0.05)
        .addLoot("sophisticatedstorage:upgrade_base");

    ///============================================= END REMASTERED

    event.addLootTableModifier(/.*chests.*/)
        .biome("#minecraft:is_beach") 
        .randomChance(0.025)
        .addLoot("endrem:black_eye");

    event.addLootTableModifier(/.*chests.*/)
        .biome("#minecraft:is_deep_ocean") 
        .randomChance(0.025)
        .addLoot("endrem:exotic_eye");

    event.addLootTableModifier(/.*chests.*/)
        .biome("#minecraft:is_forest") 
        .randomChance(0.025)
        .addLoot("endrem:corrupted_eye");

    event.addLootTableModifier(/.*chests.*/)
        .biome("#forge:is_cave") 
        .randomChance(0.025)
        .addLoot("endrem:lost_eye");

     event.addLootTableModifier(/.*chests.*/)
        .anyDimension("minecraft:the_nether") 
        .randomChance(0.025)
        .addLoot("endrem:nether_eye");
        
    event.addLootTableModifier(/.*chests.*/)
        .anyDimension("minecraft:the_nether") 
        .randomChance(0.025)
        .addLoot("endrem:cursed_eye");

    event.addLootTableModifier(/.*chests.*/)
        .biome("#forge:is_sandy") 
        .randomChance(0.025)
        .addLoot("endrem:old_eye");

    event.addLootTableModifier(/.*chests.*/)
        .biome("#minecraft:is_jungle") 
        .randomChance(0.025)
        .addLoot("endrem:rouge_eye");
           
    event.addLootTableModifier(/.*minecraft:chests\/village.*/)
        .randomChance(0.025)
        .addLoot("endrem:evil_eye");

    event.addLootTableModifier(/.*minecraft:chests\/ancient.*/)
        .randomChance(0.085)
        .addLoot("endrem:cryptic_eye");
    //======================================================= Custom Stuff

    event.addLootTypeModifier([LootType.CHEST])
        .and((and) => {
            and.biome("#minecraft:is_forest").randomChance(0.25)
        })
        .addLoot(Item.of('minecraft:leather_chestplate', '{AttributeModifiers:[{Amount:10,AttributeName:"generic.max_health",Name:"generic.max_health",Operation:0,Slot:"chest",UUID:[I;-236697065,-5617923,-2001116034,-608749569]},{Amount:1,AttributeName:"puffish_attributes:player.axe_speed",Name:"generic.attack_damage",Operation:0,Slot:"chest",UUID:[I;-189118490,-261665280,-1270797720,314376330]}],Damage:0,Trim:{material:"minecraft:lapis",pattern:"ancient_aether:royal"},display:{Name:\'{"text":"Lumberjack\\\'s Shirt","color":"dark_green","bold":true}\',color:11546150}}'))
    
    event.addLootTypeModifier([LootType.CHEST])
        .and((and) => {
            and.biome("#minecraft:is_savanna").randomChance(0.25)
        })
        .addLoot(Item.of('minecraft:leather_helmet', '{AttributeModifiers:[{Amount:2,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"head",UUID:[I;2089079096,-2049685849,-1333650003,724275160]},{Amount:2,AttributeName:"alembic:lightning_damage.resistance",Name:"generic.armor_toughness",Operation:0,Slot:"head",UUID:[I;1627639245,-28031523,-1683504156,382157949]},{Amount:1,AttributeName:"alembic:lightning_damage",Name:"generic.max_health",Operation:0,Slot:"head",UUID:[I;-831823483,-1026012736,-1142156795,721857813]}],Damage:0,display:{Name:\'{"text":"Thunder Cap","color":"dark_blue","bold":true}\',color:3898306}}'))
    
    event.addLootTypeModifier([LootType.CHEST])
        .and((and) => {
            and.biome("#forge:is_snowy").randomChance(0.25)
         })
         .addLoot(Item.of('minecraft:leather_boots', '{AttributeModifiers:[{Amount:2,AttributeName:"generic.armor",Name:"generic.armor",Operation:0,Slot:"feet",UUID:[I;454154958,2103133474,-1242695491,-485396269]},{Amount:2,AttributeName:"alembic:ice_damage.resistance",Name:"generic.armor_toughness",Operation:0,Slot:"feet",UUID:[I;-429574747,642403351,-1679343235,-1987867171]},{Amount:1,AttributeName:"generic.max_health",Name:"generic.max_health",Operation:0,Slot:"feet",UUID:[I;1174972107,1056001029,-1625354475,-1180550624]}],Damage:0,display:{Name:\'{"text":"Cozy Boots","color":"light_purple","bold":true}\',color:16383998}}'))
    
    event.addLootTypeModifier([LootType.CHEST])
        .and((and) => {
            and.anyDimension("minecraft:the_nether").randomChance(0.008)
    })
    .addLoot("kubejs:nether_key")

    event.addLootTypeModifier([LootType.CHEST])
        .and((and) => {
            and.anyDimension("twilightforest:twilight_forest").randomChance(0.008)
    })
    .addLoot("kubejs:twilight_key")
     //================================================ MOBS

    event.addEntityLootModifier("minecraft:zombie")
        .randomChance(0.0125)
        .addLoot("kubejs:wooden_crucifix")
        .randomChance(0.0125)
        .addLoot("kubejs:lesser_blood_ring");
    
    event.addEntityLootModifier("minecraft:skeleton")
        .randomChance(0.025)
        .addLoot(Item.of('minecraft:shield', '{AttributeModifiers:[{Amount:4,AttributeName:"alembic:true_damage.resistance",Name:"blood_res",Operation:0,Slot:"offhand",UUID:[I;-1557455832,876039081,-1987753483,-1828574738]}],BlockEntityTag:{Base:7,Patterns:[{Color:8,Pattern:"ss"},{Color:8,Pattern:"bri"}],id:"minecraft:banner"},Damage:0,display:{Name:\'{"text":"Bone Shield","color":"#303837","bold":true}\'}}'))
    
    event.addEntityLootModifier("minecraft:pillager")
        .randomChance(0.01)
        .addLoot(Item.of('minecraft:crossbow', '{AttributeModifiers:[{Amount:2,AttributeName:"attributeslib:draw_speed",Name:"sa",Operation:1,Slot:"mainhand",UUID:[I;1092535222,-450213868,-2139553788,1708566011]},{Amount:-0.95d,AttributeName:"attributeslib:arrow_damage",Name:"rea",Operation:1,Slot:"mainhand",UUID:[I;-1366993219,-935376953,-1925440782,-1055852673]}],Charged:0b,ChargedProjectiles:[],Damage:0,display:{Name:\'{"text":"Utility Crossbow","color":"green"}\'}}'))

    event.addEntityLootModifier("twilightforest:skeleton_druid")
        .randomChance(0.0125)
        .addLoot("kubejs:lesser_nature_ring")
    
    event.addLootTypeModifier([LootType.ENTITY])
    .and((and) => {
        and.anyDimension("minecraft:overworld").randomChance(0.001).killedByPlayer()
    })
    .addLoot("kubejs:overworld_key")

    event.addLootTypeModifier([LootType.ENTITY])
    .and((and) => {
        and.anyDimension("minecraft:the_nether").randomChance(0.001).killedByPlayer()
    })
    .addLoot("kubejs:nether_key")

    event.addLootTypeModifier([LootType.ENTITY])
    .and((and) => {
        and.anyDimension("twilightforest:twilight_forest").randomChance(0.001).killedByPlayer()
    })
    .addLoot("kubejs:twilight_key")
    //================================================ BLOCKS

    event.addBlockLootModifier("#forge:tall_grass")
        .matchMainHand("#forge:tools/knives")
        .randomChanceWithEnchantment("minecraft:looting", [0.1, 0.15, 0.2, 0.25]) 
        .addLoot("farmersdelight:straw")

    event.addBlockLootModifier("kubejs:charged_copper_block")
        .replaceLoot("kubejs:charged_copper_block","minecraft:copper_block")

    event.addBlockLootModifier("gravel")
        .replaceLoot("flint","gravel")
    



   
});