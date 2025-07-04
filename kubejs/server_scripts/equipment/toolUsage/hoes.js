ServerEvents.recipes(event => {

    function AoeHoe(block,farmland){
        event.custom({
            "type": "lychee:block_interacting",
            "post": [
              {
                "type": "execute",
                "command": `fill ~-1 ~ ~-1 ~1 ~ ~1 ${farmland} replace ${block}`,
                "hide": true
              },
              {
                "type": "damage_item",
                "amount": 5,
              },
              {
                "type": "execute",
                "command": "playsound minecraft:item.hoe.till neutral @p"
              }
            ],
            "item_in": [
              {
                "tag": "dq:primitive_hoes"
              }
            ],
            "block_in": block
          }   
        )

        event.custom({
            "type": "lychee:block_interacting",
            "post": [
              {
                "type": "execute",
                "command": `fill ~-2 ~ ~-2 ~2 ~ ~2 ${farmland} replace ${block}`,
                "hide": true
              },
              {
                "type": "damage_item",
                "amount": 15,
              },
              {
                "type": "execute",
                "command": "playsound minecraft:item.hoe.till neutral @p"
              }
            ],
            "item_in": [
              {
                "tag": "dq:basic_hoes"
              }
            ],
            "block_in": block
          }   
        )

        event.custom({
            "type": "lychee:block_interacting",
            "post": [
              {
                "type": "execute",
                "command": `fill ~-3 ~ ~-3 ~3 ~ ~3 ${farmland} replace ${block}`,
                "hide": true
              },
              {
                "type": "damage_item",
                "amount": 30,
              },
              {
                "type": "execute",
                "command": "playsound minecraft:item.hoe.till neutral @p"
              }
            ],
            "item_in": [
              {
                "tag": "dq:advanced_hoes"
              }
            ],
            "block_in": block
          }   
        )
    }

    AoeHoe("minecraft:grass_block", "minecraft:farmland")
    AoeHoe("minecraft:dirt", "minecraft:farmland")
    AoeHoe("minecraft:coarse_dirt", "minecraft:dirt")
    AoeHoe("minecraft:dirt_path", "minecraft:farmland")

    AoeHoe("farmersdelight:rich_soil","farmersdelight:rich_soil_farmland")
    AoeHoe("vintagedelight:lush_grass_block","farmersdelight:rich_soil_farmland")

    AoeHoe("immersive_weathering:grassy_earthen_clay","immersive_weathering:earthen_clay_farmland")
    AoeHoe("immersive_weathering:earthen_clay","immersive_weathering:earthen_clay_farmland")

    AoeHoe("immersive_weathering:loam","immersive_weathering:loamy_farmland")

    AoeHoe("aether_redux:coarse_aether_dirt","aether:aether_dirt")
    AoeHoe("deep_aether:aether_coarse_dirt","aether:aether_dirt")
    AoeHoe("aether:aether_dirt","aether:aether_farmland")

    AoeHoe("immersive_weathering:sandy_dirt","immersive_weathering:sandy_farmland")
    AoeHoe("immersive_weathering:grassy_sandy_dirt","immersive_weathering:sandy_farmland")

    AoeHoe("immersive_weathering:silt","immersive_weathering:silty_farmland")
    AoeHoe("immersive_weathering:grassy_silt","immersive_weathering:silty_farmland")

    /*AoeHoe("regions_unexplored:peat_dirt","regions_unexplored:peat_farmland")
    AoeHoe("regions_unexplored:peat_grass_block","regions_unexplored:peat_farmland")
    AoeHoe("regions_unexplored:peat_coarse_dirt","regions_unexplored:peat_dirt")

    AoeHoe("regions_unexplored:silt_dirt","regions_unexplored:silt_farmland")
    AoeHoe("regions_unexplored:silt_grass_block","regions_unexplored:silt_farmland")
    AoeHoe("regions_unexplored:silt_coarse_dirt","regions_unexplored:silt_dirt")*/

    AoeHoe("mynethersdelight:resurgent_soil","mynethersdelight:resurgent_soil_farmland")
    AoeHoe("biomeswevegone:sandy_dirt","biomeswevegone:sandy_farmland")
    AoeHoe("biomeswevegone:lush_dirt","biomeswevegone:lush_farmland")
    AoeHoe("biomeswevegone:lush_grass_block","biomeswevegone:lush_farmland")
    
    //AoeHoe("minecraft:podzol", "minecraft:dirt")
    
})