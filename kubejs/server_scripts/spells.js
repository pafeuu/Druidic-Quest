ServerEvents.recipes(e=>{

    e.remove({id:"ars_nouveau:glyph_craft"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "naturesaura:auto_crafter"
            }
          }
        ],
        "output": "ars_nouveau:glyph_craft"
    })

    e.remove({id:"ars_nouveau:glyph_ender_inventory"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "enigmaticlegacy:ender_ring"
            }
          }
        ],
        "output": "ars_nouveau:glyph_ender_inventory"
    })

    e.remove({id:"ars_nouveau:glyph_grow"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "enigmaticlegacy:infinimeal"
            }
          }
        ],
        "output": "ars_nouveau:glyph_grow"
    })

    e.remove({id:"ars_nouveau:glyph_harvest"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "minecraft:diamond_hoe"
            }
          }
        ],
        "output": "ars_nouveau:glyph_harvest"
    })

    e.remove({id:"ars_nouveau:glyph_crush"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "create:millstone"
            }
          }
        ],
        "output": "ars_nouveau:glyph_crush"
    })

    e.remove({id:"ars_nouveau:glyph_heal"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "irons_spellbooks:greater_healing_potion"
            }
          }
        ],
        "output": "ars_nouveau:glyph_heal"
    })

    e.remove({id:"ars_nouveau:glyph_glide"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "alexsmobs:tarantula_hawk_elytra"
            }
          }
        ],
        "output": "ars_nouveau:glyph_glide"
    })

    e.remove({id:"ars_nouveau:glyph_explosion"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "kubejs:rainbow_feather"
            }
          }
        ],
        "output": "ars_nouveau:glyph_explosion"
    })

    e.remove({id:"ars_nouveau:glyph_wololo"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "naturesaura:color_changer"
            }
          }
        ],
        "output": "ars_nouveau:wololo"
    }).id("ars_nouveau:wololo")

    e.remove({id:"ars_nouveau:glyph_light"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "naturesaura:light_staff"
            }
          }
        ],
        "output": "ars_nouveau:glyph_light"
    })

    e.remove({id:"ars_nouveau:glyph_break"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "minecraft:diamond_pickaxe"
            },
          },
          {
            "item": {
              "item": "thermal:drill_head"
            }
          }
        ],
        "output": "ars_nouveau:glyph_break"
    })

    e.remove({id:"ars_nouveau:glyph_fell"})
    e.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "exp": 27,
        "inputItems": [
          {
            "item": {
              "item": "minecraft:diamond_axe"
            }
          },
          {
            "item": {
              "item": "thermal:saw_blade"
            }
          }
        ],
        "output": "ars_nouveau:glyph_fell"
    })

    e.remove({id:"ars_nouveau:glyph_fortune"})
    e.custom({
      "type": "ars_nouveau:glyph",
      "count": 1,
      "exp": 160,
      "inputItems": [
        {
          "item": {
            "item": "enigmaticlegacy:golden_ring"
          }
        },
        {
          "item": {
            "item": "minecraft:golden_sword"
          }
        },
        {
          "item": {
            "item": "minecraft:golden_shovel"
          }
        },
        {
          "item": {
            "item": "minecraft:golden_hoe"
          }
        },
        {
          "item": {
            "item": "minecraft:golden_pickaxe"
          }
        },
        {
          "item": {
            "item": "minecraft:golden_axe"
          }
        }
      ],
      "output": "ars_nouveau:glyph_fortune"
    })
})