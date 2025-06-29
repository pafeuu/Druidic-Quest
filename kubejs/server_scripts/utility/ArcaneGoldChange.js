ServerEvents.recipes(event=>{

    event.custom({
        "type": "lychee:block_interacting",
        "post": [
            {
            "type": "prevent_default"
            }
        ],
        "item_in": {
            "item": "wizards_reborn:arcanum_dust"
        },
        "block_in": {
            "blocks": [
                "minecraft:gold_ore",
                "minecraft:nether_gold_ore",
                "minecraft:deepslate_gold_ore"
            ]
        }
    })
})