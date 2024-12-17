ClientEvents.lang("en_us", event => {
	function tools(material,material2){
		event.renameItem('minecraft:'+material+'_axe', material2+' Axe')
		event.renameItem('minecraft:'+material+'_pickaxe', material2+' Pickaxe')
		event.renameItem('minecraft:'+material+'_hoe', material2+' Hoe')
		event.renameItem('minecraft:'+material+'_sword', material2+' Sword')
		event.renameItem('minecraft:'+material+'_shovel', material2+' Shovel')
	}
	
	tools('wooden','Flint')
})