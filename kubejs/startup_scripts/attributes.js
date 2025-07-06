//This all goes in startup_scripts

let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
let $ISSAttributeRegistry = Java.loadClass('io.redspace.ironsspellbooks.api.registry.AttributeRegistry')

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
	
	
	if (event.itemStack.hasTag("forge:tools") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Tool modifier', 1.5, 'addition'))
	};
		
	if (event.itemStack.hasTag("forge:tools/iron") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('4cbad1f0-6d16-404c-a3bd-c31f2f9980a7'), 'Tool modifier', 0.5, 'addition'))
	};

	if (event.itemStack.hasTag("forge:tools/ironwood") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('0c9fec79-55d0-49ad-a64e-aa711a39f460'), 'Tool modifier', 0.5, 'addition'))
		//event.addModifier("puffish_attributes:healing", new $AttributeModifier(UUID.fromString('c3a255ac-5cd6-4522-8d13-e9896465136e'), 'Tool modifier2', 0.25, 'multiply'))
	};

	if (event.itemStack.hasTag("forge:tools/steeleaf") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('0b458f9d-eee9-4d50-a304-cace74cf6ff1'), 'Tool modifier', 1, 'addition'))
		//event.addModifier("puffish_attributes:healing", new $AttributeModifier(UUID.fromString('6cd10078-a391-44f8-b803-a6973b9be8fb'), 'Tool modifier2', 0.5, 'multiply'))
	};
	
	
	if (event.itemStack.hasTag("forge:tools/botanist") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('ce51c139-c8f1-4c2e-a5a0-66731652658c'), 'Tool modifier', 1, 'addition'))
	};

	if (event.itemStack.hasTag("forge:tools/steel") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('ce51c229-c8f1-4c2e-a5a0-66731652658c'), 'Tool modifier', 1, 'addition'))
	};

	if (event.itemStack.hasTag("forge:tools/zanite") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('bac326ea-bb94-42d5-9d70-45eb7ceadd7e'), 'Tool modifier', 1, 'addition'))
	};

	if (event.itemStack.hasTag("forge:tools/skyjade") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('a9c7bf82-8ce6-4fd0-8421-6a09215d8f00'), 'Tool modifier', 0.5, 'addition'))
	};

	if (event.itemStack.hasTag("forge:tools/diamond") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('f5e5ab6e-c8ec-4357-bdfd-a8ab69323d03'), 'Tool modifier', 1, 'addition'))
	};
	
	
	if (event.itemStack.hasTag("forge:tools/flint") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('55420437-4ad0-4664-92bb-b313b2a87a2b'), 'Tool modifier', -0.5, 'addition'))
	};

	if (event.itemStack.hasTag("forge:tools/arcane_wood") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('55420437-4ad0-4664-92bb-b313b2a87a2b'), 'Tool modifier', -1, 'addition'))
	};

	
	if (event.itemStack.hasTag("forge:tools/silver") && event.slotType == 'mainhand') {
		
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('55420437-4ad0-4664-92bb-b313b2a87a2b'), 'Tool modifier', -0.5, 'addition'))
		event.addModifier("minecraft:generic.movement_speed", new $AttributeModifier(UUID.fromString('d741a316-7f07-48db-ae0b-7e7334070522'), 'Tool modifier', 0.1, 'multiply_base'))
	};
	
	
	if (event.itemStack.hasTag("forge:tools/lead") && event.slotType == 'mainhand') {
					
		
		event.addModifier("minecraft:generic.knockback_resistance", new $AttributeModifier(UUID.fromString('11c30003-b205-4f73-b088-c466ffda7a0c'), 'Tool modifier2', 0.5, 'addition'))
	};
	 

	if (event.itemStack.hasTag("forge:tools/gold") && event.slotType == 'mainhand') {
					
		event.addModifier("minecraft:generic.luck", new $AttributeModifier(UUID.fromString('1e13b050-b12b-4bb9-baf3-c3866298c019'), 'Tool modifier', 1, 'addition'))
	};
 

	if (event.itemStack.id == "minecraft:elytra" && event.slotType == 'chest') {
			
		event.addModifier("minecraft:generic.armor", new $AttributeModifier(UUID.fromString('648932e8-3370-4256-80e4-50abb3ff15b3'), 'Armor modifier', 6, 'addition'))
	};

	if (event.itemStack.id == "immersiveengineering:glider" && event.slotType == 'chest') {
			
		event.addModifier("minecraft:generic.armor", new $AttributeModifier(UUID.fromString('9ee5f8a6-c2e6-4ca7-afa6-e3ae1192f615'), 'Armor modifier', 3, 'addition'))
	};

	if (event.itemStack.id == "quark:seed_pouch" && event.slotType == 'mainhand') {
			
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('9796ee80-3d24-42f4-93cc-2cd067aa3017'), 'Tool Modifier', 3, 'addition'))
	};

	if (event.itemStack.id == "alexsmobs:tarantula_hawk_elytra" && event.slotType == 'chest') {
			
		event.addModifier("minecraft:generic.armor", new $AttributeModifier(UUID.fromString('2df18b64-ac1b-4bf5-93ca-8a4ed7ee346a'), 'Armor modifier', 2, 'addition'))
	};

	
})