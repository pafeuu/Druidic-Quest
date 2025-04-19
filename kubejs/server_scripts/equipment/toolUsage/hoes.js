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
    //AoeHoe("minecraft:podzol", "minecraft:dirt")
    
})