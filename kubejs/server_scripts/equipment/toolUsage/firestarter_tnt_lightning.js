ServerEvents.recipes(event=>{

    event.custom(
        {
        "type": "lychee:block_interacting",
        "hide_in_viewer": true,
        "post": [
            {
            "type": "place",
            "block": "air"
            },
            {
            "type": "damage_item",
            "damage": 1
            },
            {
            "type": "execute",
            "command": "summon tnt ~ ~ ~ {Fuse:40}"
            },
            {
            "type": "prevent_default"
            }
        ],
        "item_in": {
            "item": "kubejs:primitive_firestarter"
        },
        "block_in": "minecraft:tnt"
        }
    )
})