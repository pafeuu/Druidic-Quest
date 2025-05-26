StartupEvents.modifyCreativeTab('minecraft:redstone_blocks', event => {
	// Adds example item after hazmat boots
	event.addAfter('minecraft:redstone', 'thermal:beekeeper_helmet')
    event.addAfter('minecraft:redstone',"thermal:beekeeper_chestplate")
    event.addAfter('minecraft:redstone',"thermal:beekeeper_leggings")
    event.addAfter('minecraft:redstone',"thermal:beekeeper_boots")
})

StartupEvents.modifyCreativeTab('thermal:tools', event => {
	// Adds example item after hazmat boots
	event.addAfter('thermal:hazmat_boots', 'thermal:beekeeper_helmet')
})