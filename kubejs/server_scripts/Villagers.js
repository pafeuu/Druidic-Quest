
MoreJSEvents.villagerTrades((event) => {
   
    event.removeVanillaTrades();
	event.removeModdedTrades();
	
	///===============================================================Farmer
	
	event.addTrade("farmer", 1, [TradeItem.of("minecraft:apple", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("farmer", 1, [TradeItem.of("minecraft:wheat", 16, 32)], "2x thermal:copper_coin");
	event.addTrade("farmer", 1, [TradeItem.of("minecraft:beetroot", 16, 32)], "2x thermal:copper_coin");
	event.addTrade("farmer", 1, [TradeItem.of("minecraft:carrot", 16, 32)], "2x thermal:copper_coin");
	
	event.addTrade("farmer", 2, [TradeItem.of("minecraft:brown_mushroom", 16, 32)], "4x thermal:copper_coin");
	event.addTrade("farmer", 2, [TradeItem.of("minecraft:red_mushroom", 16, 32)], "4x thermal:copper_coin");
	
	event.addTrade("farmer", 3, [TradeItem.of("thermal:copper_coin", 4, 12)], "minecraft:bread");
	event.addTrade("farmer", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "farmersdelight:cooked_rice");
	
	event.addTrade("farmer", 4, [TradeItem.of("thermal:silver_coin", 2, 6)], "farmersdelight:vegetable_soup");
	event.addTrade("farmer", 4, [TradeItem.of("thermal:gold_coin", 2, 6)], "farmersdelight:vegetable_noodles");
	
	
	event.addTrade("farmer", 5, "8x thermal:gold_coin",Item.of('minecraft:wooden_hoe', '{AttributeModifiers:[{Amount:0.02d,AttributeName:"generic.movement_speed",Name:"generic.movement_speed",Slot:"mainhand",UUID:[I;-12456,35926,205856,-71852]}],Damage:0,Unbreakable:1,display:{Name:\'{"text":"Expert Farmer\\\'s Hoe"}\'}}'));
	event.addTrade("farmer", 5, "8x thermal:gold_coin",Item.of('minecraft:leather_boots', "{Damage:0,Unbreakable:1,display:{Name:'{\"text\":\"Farmer\\'s Boots\"}'}}").enchant('minecraft:feather_falling', 1));
	
	///===========================================================Librarian
	
	event.addTrade("librarian", 1, [TradeItem.of("minecraft:sugar_cane", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("librarian", 1, [TradeItem.of("minecraft:paper", 8, 12)], "2x thermal:copper_coin");
	
	event.addTrade("librarian", 2, [TradeItem.of("minecraft:ink_sac", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("librarian", 2, [TradeItem.of("minecraft:feather", 8, 12)], "4x thermal:copper_coin");
	
	event.addTrade("librarian", 3, [TradeItem.of("thermal:copper_coin", 4, 12)], "32x minecraft:glass");
	event.addTrade("librarian", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "32x minecraft:lantern");
	event.addTrade("librarian", 3, [TradeItem.of("thermal:silver_coin", 8, 24)], "32x minecraft:bookshelf");
	
	event.addTrade("librarian", 4, [TradeItem.of("thermal:silver_coin", 2, 6)], "minecraft:name_tag");
	event.addTrade("librarian", 4, [TradeItem.of("thermal:gold_coin", 2, 6)], "irons_spellbooks:common_ink");
	
	event.addTrade("librarian", 5, [TradeItem.of("thermal:silver_coin", 2, 4)], "enigmaticlegacy:thicc_scroll");
	event.addTrade("librarian", 5, [TradeItem.of("thermal:enderium_coin", 2, 4)], "ars_nouveau:stable_warp_scroll");

	///========================================================Shepherd

	event.addTrade("shepherd", 1, [TradeItem.of("minecraft:white_wool", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("shepherd", 1, [TradeItem.of("minecraft:light_gray_wool", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("shepherd", 1, [TradeItem.of("minecraft:gray_wool", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("shepherd", 1, [TradeItem.of("minecraft:black_wool", 10, 20)], "2x thermal:copper_coin");
	
	event.addTrade("shepherd", 2, [TradeItem.of("lime_wool", 10, 20)], "3x thermal:copper_coin");
	event.addTrade("shepherd", 2, [TradeItem.of("yellow_wool", 10, 20)], "3x thermal:copper_coin");
	event.addTrade("shepherd", 2, [TradeItem.of("magenta_wool", 10, 20)], "3x thermal:copper_coin");
	event.addTrade("shepherd", 2, [TradeItem.of("blue_wool", 10, 20)], "3x thermal:copper_coin");
	event.addTrade("shepherd", 2, [TradeItem.of("red_wool", 10, 20)], "3x thermal:copper_coin");
	
	event.addTrade("shepherd", 3, [TradeItem.of("thermal:copper_coin", 4, 12)], "3x minecraft:mutton");
	event.addTrade("shepherd", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "20x minecraft:white_carpet");
	
	event.addTrade("shepherd", 4, [TradeItem.of("thermal:silver_coin", 2, 6)], "4x vintagedelight:cheese_slice");
	event.addTrade("shepherd", 4, [TradeItem.of("thermal:silver_coin", 2, 6)], "vintagedelight:cheese_wheel");
	
	
	event.addTrade("shepherd", 5, "8x thermal:netherite_coin",Item.of('minecraft:shears', '{AttributeModifiers:[{Amount:0.02d,AttributeName:"generic.movement_speed",Name:"generic.movement_speed",Slot:"mainhand",UUID:[I;-12436,35926,205856,-71852]}],Damage:0,Unbreakable:1,display:{Name:\'{"text":"Expert shepherd\\\'s shears"}\'}}'));
	event.addTrade("shepherd", 5, "5x thermal:silver_coin",Item.of("farmersdelight:shepherds_pie"));
	///===========================================================Cartographer

	event.addTrade("cartographer", 1, [TradeItem.of("minecraft:paper", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("cartographer", 1, [TradeItem.of("minecraft:glass", 8, 12)], "2x thermal:copper_coin");
	
	event.addTrade("cartographer", 2, [TradeItem.of("minecraft:ink_sac", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("cartographer", 2, [TradeItem.of("minecraft:feather", 8, 12)], "4x thermal:copper_coin");
	
	event.addTrade("cartographer", 3, [TradeItem.of("thermal:copper_coin", 4, 12)], "16x minecraft:item_frame");
	event.addTrade("cartographer", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "2x supplementaries:antique_ink");
	event.addTrade("cartographer", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "8x quark:glass_item_frame");
	
	event.addTrade("cartographer", 4, [TradeItem.of("thermal:gold_coin", 1, 4)], "supplementaries:globe");
	event.addTrade("cartographer", 4, [TradeItem.of("thermal:gold_coin", 12, 24)], 'quark:diamond_heart');
	
	
	event.addTrade("cartographer", 5, [TradeItem.of("thermal:enderium_coin", 2, 4)], "explorerscompass:explorerscompass");

	///=======================================================Armorer

	event.addTrade("armorer", 1, [TradeItem.of("minecraft:coal", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("armorer", 1, [TradeItem.of("minecraft:raw_iron", 8, 12)], "2x thermal:copper_coin");
	
	event.addTrade("armorer", 2, [TradeItem.of("#forge:coal_coke", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("armorer", 2, [TradeItem.of("#forge:ingots/iron", 8, 12)], "4x thermal:copper_coin");
	
	//event.addTrade("armorer", 3, [TradeItem.of("thermal:copper_coin", 4, 12)], "decorative_blocks:chain");
	event.addTrade("armorer", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "16x minecraft:chain");
	event.addTrade("armorer", 3, [TradeItem.of("thermal:gold_coin", 2, 12)], 'irons_spellbooks:heavy_chain_necklace');
	
	event.addTrade("armorer", 4, [TradeItem.of("thermal:netherite_coin", 4, 8)], Item.of('minecraft:chainmail_boots', "{Damage:0,Unbreakable:1,display:{Name:'{\"text\":\"Armorer\\'s Boots\"}'}}").enchant('minecraft:protection', 1));
	event.addTrade("armorer", 4, [TradeItem.of("thermal:netherite_coin", 10, 20)], Item.of('minecraft:chainmail_helmet', "{Damage:0,Unbreakable:1,display:{Name:'{\"text\":\"Armorer\\'s Helmet\"}'}}").enchant('minecraft:protection', 1));
	
	
	event.addTrade("armorer", 5, [TradeItem.of("thermal:netherite_coin", 8, 16)], Item.of('minecraft:chainmail_chestplate', "{Damage:0,Unbreakable:1,display:{Name:'{\"text\":\"Armorer\\'s Chestplate\"}'}}").enchant('minecraft:protection', 1));
	event.addTrade("armorer", 5, [TradeItem.of("thermal:netherite_coin", 7, 14)], Item.of('minecraft:chainmail_leggings', "{Damage:0,Unbreakable:1,display:{Name:'{\"text\":\"Armorer\\'s Leggings\"}'}}").enchant('minecraft:protection', 1));


    ///===========================================================Cleric

	event.addTrade("cleric", 1, [TradeItem.of("minecraft:rotten_flesh", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("cleric", 1, [TradeItem.of("minecraft:redstone", 4, 12)], "2x thermal:copper_coin");
	
	event.addTrade("cleric", 2, [TradeItem.of("#forge:gems/lapis", 4, 8)], "4x thermal:copper_coin");
	event.addTrade("cleric", 2, [TradeItem.of("minecraft:nether_wart", 8, 12)], "4x thermal:copper_coin");
	
	event.addTrade("cleric", 3, [TradeItem.of("thermal:silver_coin", 8, 24)], "16x minecraft:glowstone");
	event.addTrade("cleric", 3, [TradeItem.of("thermal:silver_coin", 2, 12)], '32x minecraft:shroomlight');
	
	event.addTrade("cleric", 4, [TradeItem.of("thermal:gold_coin", 8, 16)], Item.of('ars_nouveau:potion_flask', '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:strong_strength",includedPotions:["minecraft:strong_strength"]},count:8}}'));
	event.addTrade("cleric", 4, [TradeItem.of("thermal:gold_coin", 10, 20)], Item.of('ars_nouveau:potion_flask', '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:night_vision",includedPotions:["minecraft:strong_strength"]},count:8}}'));
	
	
	event.addTrade("cleric", 5, [TradeItem.of("thermal:gold_coin", 4, 8)], '2x enigmaticlegacy:mending_mixture');
	event.addTrade("cleric", 5, [TradeItem.of("thermal:gold_coin", 1, 2)], 'enigmaticlegacy:cosmic_cake');

	///==============================================================Mason

	event.addTrade("mason", 1, [TradeItem.of("minecraft:clay_ball", 32, 48)], "2x thermal:copper_coin");
	event.addTrade("mason", 1, [TradeItem.of("minecraft:cobblestone", 48, 64)], "2x thermal:copper_coin");
	
	event.addTrade("mason", 2, [TradeItem.of("thermal:silver_coin", 1, 4)], "24x minecraft:diorite");
	event.addTrade("mason", 2, [TradeItem.of("thermal:silver_coin", 1, 4)], '24x minecraft:granite');
	event.addTrade("mason", 2, [TradeItem.of("thermal:silver_coin", 2, 6)], '24x minecraft:deepslate');
	event.addTrade("mason", 2, [TradeItem.of("thermal:silver_coin", 2, 6)], '24x minecraft:blackstone');
	
	
	event.addTrade("mason", 3, [TradeItem.of("thermal:silver_coin", 4, 8)], "24x minecraft:andesite");
	event.addTrade("mason", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x minecraft:calcite");
	event.addTrade("mason", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x minecraft:tuff");
	event.addTrade("mason", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x minecraft:dripstone_block");
	
	
	event.addTrade("mason", 4, [TradeItem.of("thermal:silver_coin", 4, 8)], "24x minecraft:packed_mud");
	event.addTrade("mason", 4, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x minecraft:bricks");
	event.addTrade("mason", 4, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x supplementaries:ash_bricks");
	event.addTrade("mason", 4, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x supplementaries:daub");
	event.addTrade("mason", 4, [TradeItem.of("thermal:gold_coin", 1, 3)], "24x forbidden_arcanus:darkstone");
	event.addTrade("mason", 4, [TradeItem.of("thermal:gold_coin", 1, 3)], "24x ars_nouveau:sourcestone");
	
	
	event.addTrade("mason", 5, [TradeItem.of("thermal:netherite_coin", 3, 6)], Item.of('minecraft:leather_chestplate', '{AttributeModifiers:[{Amount:2,AttributeName:"forge:block_reach",Name:"forge:block_reach",Slot:"chest",UUID:[I;-12465,23062,11154,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Mason\\\'s Shirt","italic":false}]\',color:7698297}}'));
	event.addTrade("mason", 5, [TradeItem.of("thermal:netherite_coin", 2, 4)], Item.of('minecraft:leather_leggings', '{AttributeModifiers:[{Amount:1,AttributeName:"forge:block_reach",Name:"forge:block_reach",Slot:"chest",UUID:[I;-12435,24062,12154,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Mason\\\'s Pants","italic":false}]\',color:7698297}}'));

	///============================================================Weaponsmith

	event.addTrade("weaponsmith", 1, [TradeItem.of("thermal:steel_ingot", 4, 8)], "2x thermal:silver_coin");
	event.addTrade("weaponsmith", 1, ["thermal:netherite_coin","ars_nouveau:fire_essence"], "tide:blazing_swordfish");
	
	/*event.addTrade("weaponsmith", 2, [TradeItem.of("#forge:gems/lapis", 4, 8)], "4x thermal:copper_coin");
	event.addTrade("weaponsmith", 2, [TradeItem.of("minecraft:nether_wart", 8, 12)], "4x thermal:copper_coin");
	
	event.addTrade("weaponsmith", 3, [TradeItem.of("thermal:silver_coin", 8, 24)], "16x minecraft:glowstone");
	event.addTrade("weaponsmith", 3, [TradeItem.of("thermal:silver_coin", 2, 12)], '32x minecraft:shroomlight');
	
	event.addTrade("weaponsmith", 4, [TradeItem.of("thermal:gold_coin", 8, 16)], Item.of('ars_nouveau:potion_flask', '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:strong_strength",includedPotions:["minecraft:strong_strength"]},count:8}}'));
	event.addTrade("weaponsmith", 4, [TradeItem.of("thermal:gold_coin", 10, 20)], Item.of('ars_nouveau:potion_flask', '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:night_vision",includedPotions:["minecraft:strong_strength"]},count:8}}'));
	
	
	event.addTrade("Weaponsmith", 5, [TradeItem.of("thermal:gold_coin", 3, 6)], 'enigmaticlegacy:mending_mixture');
	event.addTrade("Weaponsmith", 5, [TradeItem.of("thermal:gold_coin", 1, 2)], 'enigmaticlegacy:cosmic_cake'); */

	///===================================================================Toolsmith

	event.addTrade("toolsmith", 1, [TradeItem.of("kubejs:zinc_tool_handle", 1, 4)], "thermal:silver_coin");
	
	/*event.addTrade("weaponsmith", 2, [TradeItem.of("#forge:gems/lapis", 4, 8)], "4x thermal:copper_coin");
	event.addTrade("weaponsmith", 2, [TradeItem.of("minecraft:nether_wart", 8, 12)], "4x thermal:copper_coin");
	
	event.addTrade("weaponsmith", 3, [TradeItem.of("thermal:silver_coin", 8, 24)], "16x minecraft:glowstone");
	event.addTrade("weaponsmith", 3, [TradeItem.of("thermal:silver_coin", 2, 12)], '32x minecraft:shroomlight');
	
	event.addTrade("weaponsmith", 4, [TradeItem.of("thermal:gold_coin", 8, 16)], Item.of('ars_nouveau:potion_flask', '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:strong_strength",includedPotions:["minecraft:strong_strength"]},count:8}}'));
	event.addTrade("weaponsmith", 4, [TradeItem.of("thermal:gold_coin", 10, 20)], Item.of('ars_nouveau:potion_flask', '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:night_vision",includedPotions:["minecraft:strong_strength"]},count:8}}'));
	
	
	event.addTrade("Weaponsmith", 5, [TradeItem.of("thermal:gold_coin", 3, 6)], 'enigmaticlegacy:mending_mixture');
	event.addTrade("Weaponsmith", 5, [TradeItem.of("thermal:gold_coin", 1, 2)], 'enigmaticlegacy:cosmic_cake'); */

	///==========================================================Fisherman

	event.addTrade("fisherman", 1, [TradeItem.of("minecraft:cod", 2, 8)], "2x thermal:copper_coin");
	event.addTrade("fisherman", 1, [TradeItem.of("minecraft:salmon", 2, 8)], "2x thermal:copper_coin");
	event.addTrade("fisherman", 1, [TradeItem.of("alexsmobs:raw_catfish", 2, 6)], "2x thermal:copper_coin");
	event.addTrade("fisherman", 1, [TradeItem.of("alexsmobs:flying_fish", 1, 4)], "2x thermal:copper_coin");

	event.addTrade("fisherman", 2, [TradeItem.of("minecraft:pufferfish", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("fisherman", 2, [TradeItem.of("minecraft:tropical_fish", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("fisherman", 2, [TradeItem.of("quark:crab_leg", 1, 4)], "4x thermal:copper_coin");
	event.addTrade("fisherman", 2, [TradeItem.of("alexsmobs:fish_bones", 1, 4)], "4x thermal:copper_coin");

	event.addTrade("fisherman", 3, [TradeItem.of("thermal:silver_coin", 4, 8)], 'minecraft:tropical_fish_bucket');
	event.addTrade("fisherman", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], 'minecraft:tadpole_bucket');

	event.addTrade("fisherman", 4, [TradeItem.of("thermal:silver_coin", 8, 16)], '3x farmersdelight:rice_roll_medley_block');

	event.addTrade("fisherman", 5, [TradeItem.of("thermal:gold_coin", 12, 24)], Item.of('minecraft:leather_helmet', '{AttributeModifiers:[{Amount:2,AttributeName:"minecraft:generic.luck",Name:"minecraft:generic.luck",Slot:"head",UUID:[I;-12465,23362,15254,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Fisherman\\\'s Hat","italic":false}]\',color:3451000}}'));
	event.addTrade("fisherman", 5, [TradeItem.of("thermal:gold_coin", 12, 24)], Item.of('alexsmobs:flying_fish_boots', '{AttributeModifiers:[{Amount:2,AttributeName:"minecraft:generic.armor",Name:"minecraft:generic.armor",Slot:"chest",UUID:[I;-12465,24062,53154,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Fisherman\\\'s Shoes","italic":false}]\'}}'));
	event.addTrade("fisherman",5,"2x thermal:netherite_coin","tide:blazing_swordfish");
	///==============================================================Butcher

	event.addTrade("butcher", 1, [TradeItem.of("minecraft:porkchop", 2, 8)], "2x thermal:copper_coin");
	event.addTrade("butcher", 1, [TradeItem.of("minecraft:beef", 2, 8)], "2x thermal:copper_coin");
	event.addTrade("butcher", 1, [TradeItem.of("minecraft:mutton", 2, 6)], "2x thermal:copper_coin");
	event.addTrade("butcher", 1, [TradeItem.of("minecraft:chicken", 1, 4)], "2x thermal:copper_coin");

	event.addTrade("butcher", 2, [TradeItem.of("minecraft:rabbit", 2, 4)], "4x thermal:copper_coin");
	event.addTrade("butcher", 2, [TradeItem.of("alexsmobs:moose_ribs", 2, 4)], "4x thermal:copper_coin");
	event.addTrade("butcher", 2, [TradeItem.of("alexsmobs:kangaroo_meat", 2, 4)], "4x thermal:copper_coin");
	event.addTrade("butcher", 2, [TradeItem.of("alexsdelight:raw_bison", 2, 4)], "4x thermal:copper_coin");

	event.addTrade("butcher", 3, [TradeItem.of("thermal:silver_coin", 2, 4)], "3x farmersdelight:barbecue_stick");
	event.addTrade("butcher", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "3x farmersdelight:smoked_ham");
	event.addTrade("butcher", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "3x farmersdelight:bacon_and_eggs");

	event.addTrade("butcher", 4, [TradeItem.of("thermal:silver_coin", 8, 16)], "farmersdelight:roast_chicken");
	event.addTrade("butcher", 4, [TradeItem.of("thermal:silver_coin", 8, 16)], "farmersdelight:honey_glazed_ham");

	event.addTrade("butcher", 5, [TradeItem.of("thermal:netherite_coin", 1, 3)], Item.of('farmersdelight:iron_knife', '{AttributeModifiers:[{Amount:2,AttributeName:"attributeslib:fire_damage",Name:"attributeslib:fire_damage",Slot:"mainhand",UUID:[I;-32444,23362,15254,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Butcher\\\'s Knife","italic":false}]\'}}').enchant('minecraft:looting', 3));
	
	///================================================================Fletcher

	event.addTrade("fletcher", 1, [TradeItem.of("immersiveengineering:stick_treated", 24, 48)], "2x thermal:copper_coin");
	event.addTrade("fletcher", 1, [TradeItem.of("minecraft:string", 6, 18)], "2x thermal:copper_coin");

	event.addTrade("fletcher", 2, [TradeItem.of("minecraft:flint", 32, 48)], "3x thermal:copper_coin");
	event.addTrade("fletcher", 2, "3x thermal:gold_coin",Item.of('minecraft:bow', '{AttributeModifiers:[{Amount:0.01d,AttributeName:"generic.movement_speed",Name:"1723313263725",Slot:"mainhand",UUID:[I;-124710,30612,20421,-61224]},{Amount:0.1d,AttributeName:"attributeslib:draw_speed",Name:"1723313263725",Slot:"mainhand",UUID:[I;-124710,30912,20421,-61824]}],Damage:0,display:{Name:\'["",{"text":"Quickshot","italic":false,"color":"dark_green"}]\'}}').enchant('mending', 1) );
	event.addTrade("fletcher", 2, "5x thermal:gold_coin",Item.of('minecraft:bow', '{AttributeModifiers:[{Amount:-0.3d,AttributeName:"attributeslib:draw_speed",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,43912,20421,-87824]},{Amount:1,AttributeName:"attributeslib:arrow_damage",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,44212,20421,-88424]},{Amount:1,AttributeName:"attributeslib:arrow_velocity",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,44512,20421,-89024]}],Damage:0,display:{Name:\'["",{"text":"Long Bow","italic":false,"color":"dark_green"}]\'}}').enchant('mending', 1));

	event.addTrade("fletcher", 3, "3x thermal:gold_coin","supplementaries:quiver" );
	event.addTrade("fletcher", 3, "2x thermal:gold_coin",'64x archers_paradox:quartz_arrow');

	event.addTrade("fletcher", 4, "3x thermal:gold_coin","64x archers_paradox:lightning_arrow");
	event.addTrade("fletcher", 4, "3x thermal:gold_coin","64x archers_paradox:phantasmal_arrow");

	event.addTrade("fletcher", 5, "2x thermal:netherite_coin",Item.of('minecraft:bow', '{AttributeModifiers:[{Amount:-0.3d,AttributeName:"attributeslib:draw_speed",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,43912,20421,-87824]},{Amount:1,AttributeName:"attributeslib:arrow_damage",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,44212,20421,-88424]},{Amount:1,AttributeName:"attributeslib:arrow_velocity",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,44512,20421,-89024]}],Unbreakable:1,display:{Name:\'["",{"text":"Reinforced Long Bow","italic":false,"color":"dark_green"}]\'}}'));
	
	///================================================================Carpenter

	event.addTrade("sawmill:carpenter",1, "4x mangrove_log", "thermal:copper_coin");
	event.addTrade("sawmill:carpenter",1, "4x oak_log", "thermal:copper_coin");
	event.addTrade("sawmill:carpenter",1, "4x jungle_log", "thermal:copper_coin");
	event.addTrade("sawmill:carpenter",1, "4x birch_log", "thermal:copper_coin");

	event.addTrade("sawmill:carpenter",2,"3x thermal:gold_coin","64x mangrove_log");
	event.addTrade("sawmill:carpenter",2,"2x thermal:gold_coin","64x jungle_log");
	event.addTrade("sawmill:carpenter",2,"2x thermal:gold_coin","64x dark_oak_log");

	event.addTrade("sawmill:carpenter",3,"3x thermal:gold_coin","64x crimson_stem");
	event.addTrade("sawmill:carpenter",3,"3x thermal:gold_coin","64x warped_stem");

	event.addTrade("sawmill:carpenter",4,"1x thermal:netherite_coin",Item.of('minecraft:iron_axe', "{Damage:0,display:{Name:'[\"\",{\"text\":\"Sharp Lumber Axe\",\"italic\":false,\"color\":\"dark_red\"}]'}}").enchant('mending', 1).enchant('minecraft:efficiency', 3));
	event.addTrade("sawmill:carpenter",5,"3x thermal:netherite_coin",Item.of('minecraft:stone_axe', "{Damage:0,Unbreakable:1,display:{Name:'[\"\",{\"text\":\"Sharp Lumber Axe\",\"italic\":false,\"color\":\"dark_red\"}]'}}").enchant('minecraft:efficiency', 5));

	//================================================================Leatherworker

	event.addTrade("leatherworker",1,"4x leather","2x thermal:copper_coin")
	event.addTrade("leatherworker",1,"4x rabbit_hide","4x thermal:copper_coin")

	event.addTrade("leatherworker",2,"4x alexsmobs:bear_fur","4x thermal:copper_coin")
	event.addTrade("leatherworker",2,"4x alexsmobs:bison_fur","4x thermal:copper_coin")

	event.addTrade("leatherworker",3,"4x alexsmobs:kangaroo_hide","4x thermal:copper_coin")
	event.addTrade("leatherworker",3,"4x irons_spellbooks:hogskin","3x thermal:copper_coin")

	event.addTrade("leatherworker",4,"thermal:gold_coin","minecraft:bundle")
	event.addTrade("leatherworker",4,"16x immersiveengineering:ersatz_leather","3x thermal:copper_coin")

	event.addTrade("leatherworker",5,"thermal:netherite_coin","immersiveengineering:glider")
	event.addTrade("leatherworker",5,"6x thermal:gold_coin","alexsmobs:shed_snake_skin")

	//=============================================================Shady Wizard

	event.addTrade("ars_nouveau:shady_wizard",1,"8x ars_nouveau:sourceberry_bush","2x thermal:copper_coin")
	event.addTrade("ars_nouveau:shady_wizard",1,"wizards_reborn:arcane_linen_hay","2x thermal:copper_coin")

	event.addTrade("ars_nouveau:shady_wizard",2,"4x ars_nouveau:bastion_pod","4x thermal:copper_coin")
	event.addTrade("ars_nouveau:shady_wizard",2,"4x ars_nouveau:frostaya_pod","4x thermal:copper_coin")
	event.addTrade("ars_nouveau:shady_wizard",2,"4x ars_nouveau:bombegranate_pod","4x thermal:copper_coin")
	event.addTrade("ars_nouveau:shady_wizard",2,"4x ars_nouveau:mendosteen_pod","4x thermal:copper_coin")

	/*event.addTrade("ars_nouveau:shady_wizard",3,"4x thermal:silver_coin",)
	event.addTrade("ars_nouveau:shady_wizard",3,"4x thermal:silver_coin",)
	event.addTrade("ars_nouveau:shady_wizard",3,"4x thermal:silver_coin",)*/

	event.addTrade("ars_nouveau:shady_wizard",5,"8x thermal:gold_coin","ars_nouveau:music_disc_aria_biblio")
	event.addTrade("ars_nouveau:shady_wizard",5,"8x thermal:gold_coin","ars_nouveau:music_disc_firel_the_wild_hunt")
	event.addTrade("ars_nouveau:shady_wizard",5,"8x thermal:gold_coin","ars_nouveau:music_disc_thistle_the_sound_of_glass")
});
