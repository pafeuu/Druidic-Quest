//This all goes in startup_scripts

let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
let $ISSAttributeRegistry = Java.loadClass('io.redspace.ironsspellbooks.api.registry.AttributeRegistry')

ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
	
	
	if (event.itemStack.hasTag("forge:tools") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('8de60aa9-1d4b-459f-b075-48e1c37523ce'), 'Tool modifier', 1.5, 'addition'))
	};
		
	if (event.itemStack.hasTag("forge:tools/iron") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('4cbad1f0-6d16-404c-a3bd-c3bf2f9980a7'), 'Tool modifier', 0.5, 'addition'))
	};
	
	
	if (event.itemStack.hasTag("forge:tools/botanist") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('4cb3d1f0-6d16-404c-a3bd-c3bf2f9980a7'), 'Tool modifier', 1, 'addition'))
	};

	if (event.itemStack.hasTag("forge:tools/zanite") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('4cb3d1f0-6d16-404c-a3bd-c3bf2f9980a7'), 'Tool modifier', 1, 'addition'))
	};

	if (event.itemStack.hasTag("forge:tools/skyjade") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('4cb3d1f0-6d16-404c-a3bd-c3bf2f9980a7'), 'Tool modifier', 0.5, 'addition'))
	};

	if (event.itemStack.hasTag("forge:tools/diamond") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('4cb3d1f0-6d16-404c-a3bd-c3bf2f9980a7'), 'Tool modifier', 1, 'addition'))
	};
	
	
	if (event.itemStack.hasTag("forge:tools/flint") && event.slotType == 'mainhand') {
					
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('15027461-3456-4228-9ea7-5186c762ef47'), 'Tool modifier', -0.5, 'addition'))
	};

	
	if (event.itemStack.hasTag("forge:tools/zinc") && event.slotType == 'mainhand') {
				
		event.addModifier("minecraft:generic.movement_speed", new $AttributeModifier(UUID.fromString('e43233b8-d144-44f8-a5f3-9e7a98831673'), 'Tool modifier', 0.2, 'multiply_base'))
	};
	
	
	if (event.itemStack.hasTag("forge:tools/brass") && event.slotType == 'mainhand') {
					
		event.addModifier("minecraft:generic.luck", new $AttributeModifier(UUID.fromString('be52e96b-1d94-4e73-b435-8157d4e8428a'), 'Tool modifier', 1, 'addition'))
		event.addModifier("minecraft:generic.knockback_resistance", new $AttributeModifier(UUID.fromString('c7ca563c-06da-4568-b875-61a414540307'), 'Tool modifier', 0.5, 'addition'))
	};
	 

	if (event.itemStack.hasTag("forge:tools/gold") && event.slotType == 'mainhand') {
					
		event.addModifier("minecraft:generic.luck", new $AttributeModifier(UUID.fromString('be52e96b-1d94-4e73-b435-8157d4e8428a'), 'Tool modifier', 1, 'addition'))
	};
 

	if (event.itemStack.id == "minecraft:elytra" && event.slotType == 'chest') {
			
		event.addModifier("minecraft:generic.armor", new $AttributeModifier(UUID.fromString('f0c03e91-0bc7-4269-a030-7763de91441e'), 'Armor modifier', 6, 'addition'))
	};

	if (event.itemStack.id == "immersiveengineering:glider" && event.slotType == 'chest') {
			
		event.addModifier("minecraft:generic.armor", new $AttributeModifier(UUID.fromString('f3c0ee91-0bc7-4269-a030-7763de91441e'), 'Armor modifier', 3, 'addition'))
	};

	if (event.itemStack.id == "quark:seed_pouch" && event.slotType == 'mainhand') {
			
		event.addModifier("forge:block_reach", new $AttributeModifier(UUID.fromString('f3c0ee33-0bc7-4269-a030-7763de91441e'), 'Tool Modifier', 3, 'addition'))
	};

	if (event.itemStack.id == "alexsmobs:tarantula_hawk_elytra" && event.slotType == 'chest') {
			
		event.addModifier("minecraft:generic.armor", new $AttributeModifier(UUID.fromString('f0c0ee91-0bc7-4449-a030-7763de91441e'), 'Armor modifier', 2, 'addition'))
	};

	
})