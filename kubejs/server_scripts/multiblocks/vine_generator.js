ServerEvents.recipes(event => {

    function VineGenerator(vine)
    {
        event.custom({
            "type": "lychee:random_block_ticking",
            "contextual": [
                {
                "type": "and",
                "contextual": [
                    {
                        "type": "execute",
                        "command": `execute if block ~ ~-1 ~ minecraft:mossy_cobblestone`,
                        "hide": true
                    },
                    {
                        "type": "execute",
                        "command": `execute if block ~-1 ~ ~ ${vine}`,
                        "hide": true
                    },
                    {
                        "type": "execute",
                        "command": `execute if block ~1 ~ ~ ${vine}`,
                        "hide": true
                    },
                    {
                        "type": "execute",
                        "command": `execute if block ~ ~ ~-1 ${vine}`,
                        "hide": true
                    },
                    {
                        "type": "execute",
                        "command": `execute if block ~ ~ ~1 ${vine}`,
                        "hide": true
                    }
                ]
                }
            ],
            "post": [
                {
                    "type": "drop_item",
                    "item": vine,
                    "count": 16

                },
                {
                    "type": "execute",
                    "command": `fill ~1 ~-1 ~1 ~-3 ~ ~-1 minecraft:cobblestone replace minecraft:mossy_cobblestone`, 
                    "hide": true
                },
                {
                    "type": "execute",
                    "command": "naaura remove 400",
                    "hide": true
                }
            ],
            "block_in": "kubejs:vine_generator"
            })
        
        event.custom({
            "type": "lychee:block_interacting",
            "contextual": [
                {
                "type": "and",
                "contextual": [
                    {
                        "type": "execute",
                        "command": `execute if block ~ ~-1 ~ minecraft:mossy_cobblestone`,
                        "hide": true
                    },
                    {
                        "type": "execute",
                        "command": `execute if block ~-1 ~ ~ ${vine}`,
                        "hide": true
                    },
                    {
                        "type": "execute",
                        "command": `execute if block ~1 ~ ~ ${vine}`,
                        "hide": true
                    },
                    {
                        "type": "execute",
                        "command": `execute if block ~ ~ ~-1 ${vine}`,
                        "hide": true
                    },
                    {
                        "type": "execute",
                        "command": `execute if block ~ ~ ~1 ${vine}`,
                        "hide": true
                    }
                ]
                }
            ],
            "post": [
                {
                    "type": "drop_item",
                    "item": vine,
                    "count": 16

                },
                {
                    "type": "execute",
                    "command": `fill ~1 ~-1 ~1 ~-3 ~ ~-1 minecraft:cobblestone replace minecraft:mossy_cobblestone`, 
                    "hide": true
                },
                {
                    "type": "execute",
                    "command": "naaura remove 400",
                    "hide": true
                }
            ],
            "item_in": {
            "item": "ars_nouveau:earth_essence"
            },
            "block_in": "kubejs:vine_generator"
        })
    }

    VineGenerator("minecraft:vine")
    VineGenerator("immersive_weathering:ivy")
})