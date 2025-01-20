/////////////
// by 800020h
ServerEvents.recipes(event => {

  let craft = (output, block) => {

    //////////////////////
    // REI/JEI display
    event.custom({
      "type": "lychee:block_interacting",
      "ghost": true,
      "comment": "Place 5 planks as shown\n\n# #  <top layer\n#I#  <bottom layer\n\ninteract with \"I\"\n\nConsumes the planks",
      "item_in": {
        "item": "minecraft:wooden_shovel"
      },
      "block_in": block,
      "post": [
        {
          "type": "drop_item",
          "item": output
        }
      ]
    })

    /////////
    // x axis
    event.custom({
      "type": "lychee:block_interacting",
      "hide_in_viewer": true,
      "item_in": {
        "item": "minecraft:wooden_shovel"
      },
      "block_in": block,
      "contextual": {
        "type": "and",
        "contextual": [
          {
            "type": "execute",
            "command": `execute if block ~1 ~1 ~ ${block}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~1 ~ ${block}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~1 ~ ~ ${block}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~ ~ ${block}`,
            "hide": true
          },
          {
            "type": "not",
            "contextual": {
              "type": "execute",
              "command": `execute if block ~ ~1 ~ ${block}`
            },
            "hide": true
          }
        ],
        "hide": true
      },
      "post": [
        {
          "type": "drop_item",
          "item": output
        },
        {
          "type": "execute",
          "command": `fill ~1 ~1 ~ ~-1 ~ ~ minecraft:air replace ${block}`,
          "hide": true
        },
        {
          "type": "execute",
          "command": "playsound minecraft:block.anvil.use block @a ~ ~ ~",
          "hide": true
        }
      ]
    })

    /////////
    // z axis
    event.custom({
      "type": "lychee:block_interacting",
      "hide_in_viewer": true,
      "item_in": {
        "item": "minecraft:wooden_shovel"
      },
      "block_in": block,
      "contextual": {
        "type": "and",
        "contextual": [
          {
            "type": "execute",
            "command": `execute if block ~ ~1 ~1 ${block}`
          },
          {
            "type": "execute",
            "command": `execute if block ~ ~1 ~-1 ${block}`
          },
          {
            "type": "execute",
            "command": `execute if block ~ ~ ~1 ${block}`
          },
          {
            "type": "execute",
            "command": `execute if block ~ ~ ~-1 ${block}`
          },
          {
            "type": "not",
            "contextual": {
              "type": "execute",
              "command": `execute if block ~ ~1 ~ ${block}`
            }
          }
        ]
      },
      "post": [
        {
          "type": "drop_item",
          "item": output
        },
        {
          "type": "execute",
          "command": `fill ~ ~1 ~1 ~ ~ ~-1 minecraft:air replace ${block}`,
          "hide": true
        },
        {
          "type": "execute",
          "command": "playsound minecraft:block.anvil.use block @a ~ ~ ~",
          "hide": true
        }
      ]
    })

  }

  craft('minecraft:oak_boat', 'minecraft:oak_planks')
  craft('minecraft:spruce_boat', 'minecraft:spruce_planks')
  craft('minecraft:birch_boat', 'minecraft:birch_planks')
  craft('minecraft:jungle_boat', 'minecraft:jungle_planks')
  craft('minecraft:acacia_boat', 'minecraft:acacia_planks')
  craft('minecraft:dark_oak_boat', 'minecraft:dark_oak_planks')
  craft('minecraft:mangrove_boat', 'minecraft:mangrove_planks')
  craft('ecologics:coconut_boat', 'ecologics:coconut_planks')
  craft('ecologics:walnut_boat', 'ecologics:walnut_planks')
  craft('ecologics:azalea_boat', 'ecologics:azalea_planks')
  craft('ecologics:flowering_azalea_boat', 'ecologics:flowering_azalea_planks')
  craft('regions_unexplored:baobab_boat', 'regions_unexplored:baobab_planks')
  craft('regions_unexplored:blackwood_boat', 'regions_unexplored:blackwood_planks')
  craft('regions_unexplored:cherry_boat', 'regions_unexplored:cherry_planks')
  craft('regions_unexplored:cypress_boat', 'regions_unexplored:cypress_planks')
  craft('regions_unexplored:dead_boat', 'regions_unexplored:dead_planks')
  craft('regions_unexplored:eucalyptus_boat', 'regions_unexplored:eucalyptus_planks')
  craft('regions_unexplored:joshua_boat', 'regions_unexplored:joshua_planks')
  craft('regions_unexplored:larch_boat', 'regions_unexplored:larch_planks')
  craft('regions_unexplored:maple_boat', 'regions_unexplored:maple_planks')
  craft('regions_unexplored:mauve_boat', 'regions_unexplored:mauve_planks')
  craft('regions_unexplored:palm_boat', 'regions_unexplored:palm_planks')
  craft('regions_unexplored:pine_boat', 'regions_unexplored:pine_planks')
  craft('regions_unexplored:redwood_boat', 'regions_unexplored:redwood_planks')
  craft('regions_unexplored:willow_boat', 'regions_unexplored:willow_planks')
  craft('regions_unexplored:sculkwood_boat', 'regions_unexplored:sculkwood_planks')
  craft('terrestria:redwood_boat', 'terrestria:redwood_planks')
  craft('terrestria:hemlock_boat', 'terrestria:hemlock_planks')
  craft('terrestria:rubber_boat', 'terrestria:rubber_planks')
  craft('terrestria:cypress_boat', 'terrestria:cypress_planks')
  craft('terrestria:willow_boat', 'terrestria:willow_planks')
  craft('terrestria:japanese_maple_boat', 'terrestria:japanese_maple_planks')
  craft('terrestria:rainbow_eucalyptus_boat', 'terrestria:rainbow_eucalyptus_planks')
  craft('terrestria:sakura_boat', 'terrestria:sakura_planks')
  craft('terrestria:yucca_palm_boat', 'terrestria:yucca_palm_planks')
  craft('traverse:fir_boat', 'traverse:fir_planks')

})