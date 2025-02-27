JEIEvents.removeRecipes(event => {  
    event.remove('minecraft:crafting', 'ars_nouveau:imbuement_chamber')
    event.remove('minecraft:crafting',"quark:tweaks/crafting/slab_to_block")
    event.remove('ars_nouveau:imbuement',"ars_nouveau:imbuement_air_essence")
    event.remove('ars_nouveau:imbuement',"ars_nouveau:imbuement_fire_essence")
    event.remove('ars_nouveau:imbuement',"ars_nouveau:imbuement_water_essence")
    event.remove('ars_nouveau:imbuement',"ars_nouveau:imbuement_earth_essence")
    event.remove('ars_nouveau:enchanting_apparatus',"ars_nouveau:enchanters_shield") 
})

JEIEvents.information(event => {
    event.addItem(['regions_unexplored:alpha_slab',
                   'regions_unexplored:baobab_slab',
                   'regions_unexplored:larch_slab',
                   'regions_unexplored:magnolia_slab',
                   'regions_unexplored:maple_slab',
                   'regions_unexplored:cobalt_slab',
                   'regions_unexplored:brimwood_slab',
                   'regions_unexplored:blue_bioshroom_slab',
                   'regions_unexplored:blackwood_slab',
                   'regions_unexplored:kapok_slab',
                   'regions_unexplored:joshua_slab',
                   'regions_unexplored:green_bioshroom_slab',
                   'regions_unexplored:eucalyptus_slab',
                   'regions_unexplored:dead_slab',
                   'regions_unexplored:cypress_slab',
                   'regions_unexplored:mauve_slab',
                   'regions_unexplored:yellow_bioshroom_slab',
                   'regions_unexplored:willow_slab',
                   'regions_unexplored:socotra_slab',
                   'regions_unexplored:redwood_slab',
                   'regions_unexplored:pink_bioshroom_slab',
                   'regions_unexplored:pine_slab',
                   'regions_unexplored:palm_slab',
                   'ars_nouveau:archwood_slab'], ['If you cant see recipe for this', 'Try restarting your game', "It's a known issue, Sorry for the inconvenience"])
  })