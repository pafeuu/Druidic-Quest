/////////////
//Based on script by 800020h
ServerEvents.recipes(event => {

  function LightningSquareCrafting(catalyst, output, sides, corners, middle){

    event.custom({
      "type": "lychee:lightning_channeling",
      "hide_in_viewer": false,
      "item_in": {
        "item": catalyst
      },
      "contextual": {
        "type": "and",
        "contextual": [
          {
            "type": "execute",
            "command": `execute if block ~ ~-1 ~ ${middle}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~1 ~-1 ~1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~-1 ~-1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~1 ~-1 ~-1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~-1 ~1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~ ~-1 ~1 ${sides}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~ ~-1 ~-1 ${sides}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~1 ~-1 ~ ${sides}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~-1 ~ ${sides}`,
            "hide": true
          }
      
        ],
        "hide": true
      },
      "post": [
        {
          "type": "execute",
          "command": `fill ~1 ~-1 ~1 ~-1 ~ ~-1 minecraft:air replace ${middle}`,
          "hide": true
        },
        {
          "type": "execute",
          "command": `fill ~1 ~-1 ~1 ~-1 ~ ~-1 minecraft:air replace ${sides}`,
          "hide": true
        },
        {
          "type": "execute",
          "command": `fill ~1 ~-1 ~1 ~-1 ~ ~-1 minecraft:air replace ${corners}`,
          "hide": true
        },
        {
          "type": "execute",
          "command": 'particle irons_spellbooks:unstable_ender ~ ~-1 ~ 1.5 0.5 1.5 0.1 240 force',
          "hide": true
        },
        {
          "type": "delay",
          "s": 1
        },
        {
          "type": "drop_item",
          "item": output
        },
        {
          "type": "execute",
          "command": 'particle irons_spellbooks:wisp ~ ~ ~ 0.3 0.3 0.3 0.1 80 force',
          "hide": true
        },
        {
          "type": "execute",
          "command": "playsound forbidden_arcanus:item.mundabitur_dust.use neutral @a",
          "hide": true
        }
      ]
    })
  }

  LightningSquareCrafting("kubejs:lemon_quartz","kubejs:magical_generator_block","kubejs:arcane_alloy_block","kubejs:inert_alloy_block","kubejs:arcane_alloy_block")
  

})