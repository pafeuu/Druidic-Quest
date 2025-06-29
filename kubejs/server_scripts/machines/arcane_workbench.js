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
})