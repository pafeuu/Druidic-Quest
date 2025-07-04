ServerEvents.recipes(event=>{

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "_CX",
            "_SC",
            "S__",
            "____"
        ],
        "key": {
            "S": {
            "item": "stick"
            },
            "X": {
            "item": "string"
            },
            "C": {
            "item": "quark:sturdy_stone"
            }
        },
        "output": {
            "item": "immersiveengineering:hammer"
        },
        "wissen": 250
    }).id("immersiveengineering:crafting/hammer")

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "###",
        "#A#",
        "###",
        "____"
    ],
    "key": {
        "#": {
        "item": "quark:sturdy_stone"
        },
        "A": {
        "tag": "wizards_reborn:arcanum"
        }
    },
    "output": {
        "item": "wizards_reborn:wisestone",
        "count": 8
    },
    "wissen": 100
    }).id("wizards_reborn:arcane_workbench/wisestone")

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "###",
        "#E#",
        "###",
        "AAAA"
    ],
    "key": {
        "E": {
        "item": "spider_eye"
        },
        "A": {
        "tag": "wizards_reborn:arcanum"
        },
        "#":{
        "item": "coal_block"    
        }
    },
    "output": {
        "item": "enigmaticlegacy:enigmatic_eye",
    },
    "wissen": 500
    })

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "A#A",
        "#E#",
        "A#A",
        "AAAA"
    ],
    "key": {
        "E": {
        "item": "ender_pearl"
        },
        "A": {
        "tag": "wizards_reborn:arcanum"
        },
        "#":{
        "item": "coal_block"    
        }
    },
    "output": {
        "item": "enigmaticlegacy:enigmatic_eye",
    },
    "wissen": 250
    })

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "###",
        "#E#",
        "###",
        "AAAA"
    ],
    "key": {
        "E": {
        "item": "ars_nouveau:ring_of_potential"
        },
        "A": {
        "tag": "forge:ingots/iron"
        },
        "#":{
        "tag": "immersive_weathering:bark"    
        }
    },
    "output": {
        "item": "enigmaticlegacy:iron_ring",
    },
    "wissen": 500
    }).id("enigmaticlegacy:iron_ring")
})