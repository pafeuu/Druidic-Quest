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

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "LEL",
        "ECE",
        "LEL",
        "AAAA"
    ],
    "key": {
        "E": {
        "tag": "forge:gems/emerald"
        },
        "L": {
        "tag": "forge:gems/lapis"
        },
        "A": {
        "item": "forbidden_arcanus:xpetrified_orb"
        },
        "C":{
        "item": "minecraft:amethyst_cluster"    
        }
    },
    "output": {
        "item": "thermal:xp_crystal",
    },
    "wissen": 500
    }).id("thermal:tools/xp_crystal")

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "NEN",
        "NCN",
        "NNN",
        "AAAA"
    ],
    "key": {
        "E": {
        "item": "kubejs:infused_emerald"
        },
        "C": {
        "item": "aether:golden_ring"
        },
        "A": {
        "item": "forbidden_arcanus:xpetrified_orb"
        },
        "N":{
        "tag": "forge:nuggets/gold"    
        }
    },
    "output": {
        "item": "irons_spellbooks:emerald_stoneplate_ring",
    },
    "wissen": 500
    }).id("irons_spellbooks:curios/emerald_stoneplate_ring")

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        " Z ",
        "NCN",
        " X ",
        "BBAA"
    ],
    "key": {
        "Z": {
        "item": "lodestone"
        },
        "X": {
        "tag": "forge:gems/diamond"
        },
        "C": {
        "item": "ars_nouveau:ring_of_potential"
        },
        "A": {
        "tag": "forge:storage_blocks/lapis"
        },
        "B": {
        "tag": "forge:storage_blocks/redstone"
        },
        "N":{
        "tag": "forge:ingots/iron"    
        }
    },
    "output": {
        "item": 'enigmaticlegacy:magnet_ring',
    },
    "wissen": 500
    }).id("enigmaticlegacy:magnet_ring")

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "NNN",
        "NCN",
        "NNN",
        "AAAA"
    ],
    "key": {
        "C": {
        "item": "kubejs:metal_crucifix"
        },
        "A": {
        "item": "wizards_reborn:arcanum"
        },
        "N":{
        "tag": "forge:plates/gold"    
        }
    },
    "output": {
        "item": "kubejs:bejeweled_crucifix",
    },
    "wissen": 500
    })

    event.shaped("ars_nouveau:apprentice_spell_book",["   "," X ","   "],{X:"kubejs:recipe_changed"}).id("ars_nouveau:apprentice_spell_book_upgrade")
    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "RRR",
        "RXS",
        "SSS",
        "ABCD"
    ],
    "key": {
        "X": {
        "item": "ars_nouveau:novice_spell_book"
        },
        "A": {
        "item": "ars_nouveau:fire_essence"
        },
        "B": {
        "item": "ars_nouveau:earth_essence"
        },
        "C": {
        "item": "ars_nouveau:water_essence"
        },
        "D": {
        "item": "ars_nouveau:air_essence"
        },
        "R":{
        "item": "thermal:ruby"    
        },
        "S":{
        "item": "thermal:sapphire"    
        }
    },
    "output": {
        "item": "ars_nouveau:apprentice_spell_book",
    },
    "wissen": 500
    })

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "RRR",
        "RXR",
        "RRR",
        "__S_"
    ],
    "key": {
        "X": {
        "item": "ars_nouveau:mundane_belt"
        },
        "S": {
        "item": "thermal:sapphire"
        },
        "R":{
        "item": "minecraft:bricks"    
        }
    },
    "output": {
        "item": "kubejs:builders_belt",
    },
    "wissen": 500
    })

    /*event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "RXR",
        " S ",
        " S",
        "NNN"
    ],
    "key": {
        "X": {
        "item": "minecraft:stone_shovel"
        },
        "S": {
        "item": "immersiveengineering:stick_treated"
        },
        "N": {
        "item": "twilightforest:naga_scale"
        },
        "R":{
        "item": "quark:sturdy_stone"    
        }
    },
    "output": {
        "item": Item.of('kubejs:primitive_excavator', '{Damage:0,Modifier:"forbidden_arcanus:demolishing",display:{Name:\'{"italic":false,"text":"Primitive Excavator"}\'}}'),
    },
    "wissen": 500
    })

    event.custom({
    "type": "wizards_reborn:arcane_workbench",
    "pattern": [
        "RXR",
        " S ",
        " S",
        "NNN"
    ],
    "key": {
        "X": {
        "item": "minecraft:stone_shovel"
        },
        "S": {
        "item": "immersiveengineering:stick_treated"
        },
        "N": {
        "item": "twilightforest:naga_scale"
        },
        "R":{
        "item": "quark:sturdy_stone"    
        }
    },
    "output": {
        "item": Item.of('kubejs:primitive_mining_hammer', '{Damage:0,Modifier:"forbidden_arcanus:demolishing",display:{Name:\'{"italic":false,"text":"Primitive Mining Hammer"}\'}}')
    },
    "wissen": 500
    })*/

})