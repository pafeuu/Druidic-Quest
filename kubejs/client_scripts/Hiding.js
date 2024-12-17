RecipeViewerEvents.removeRecipes(event => {
	event.remove('emi:/composting/item/minecraft/hanging_roots')
    event.remove('composting:item/minecraft/hanging_roots')
})

RecipeViewerEvents.removeEntries('item', event => {
	event.remove('twigs:calcite_wall')
    event.remove("twigs:tuff_wall")
    event.remove("twigs:calcite_stairs")
    event.remove("kubejs:recipe_changed")
	
})