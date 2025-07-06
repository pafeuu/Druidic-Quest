ServerEvents.recipes(event=>{
    function pylonTag(output,input,exp){
        event.custom({  
        "type": "lychee:block_interacting",
        "hide_in_viewer": true,
        "contextual": [
            {
                "type": "execute",
                "secret": true,
                "command": "execute if entity @p[level=1..]"
            }
        ],
        "post": [
            {
                "type": "drop_item",
                "item": output,
                "count": 1
            },
            {
                "type": "execute",
                "command": "experience add @p -"+exp+" points",
                "hide": true
            },
            {
                "type": "execute",
                "command": "playsound wizards_reborn:totem_of_disenchant_start neutral @p",
                "hide": true
            },
            {
                "type": "execute",
                "command": "particle wizards_reborn:karma ~ ~ ~ 0.1 0.1 0.1 0 1 force",
                "hide": true
            }
        ],
        "item_in": {
            tag: input
        },
        "block_in": "kubejs:arcanum_pylon"
        })

        // Second Recipe for better display in EMI
        event.custom({  
        "type": "lychee:block_interacting",
        "ghost": true,
        "post": [
            {
                "type": "drop_item",
                "item": output,
                "count": 1
            },
            {
                "type": "drop_item",
                "item": "experience_bottle",
                "nbt": {
                    "display":
                        {"Name":"\"-10 experience points from the player\""}
                },
                "count": 1
            }
        ],
        "item_in": {
            tag: input
        },
        "block_in": "kubejs:arcanum_pylon"
        })
    }

    pylonTag("wizards_reborn:arcane_wood_log","minecraft:logs",10)
    
})