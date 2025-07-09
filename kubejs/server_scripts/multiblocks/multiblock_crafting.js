/////////////
//Based on script by 800020h
ServerEvents.recipes(event => {


  function LightningSquareCrafting(catalyst, output, sides, corners, middle){

    event.custom({
      "type": "lychee:lightning_channeling",
      "hide_in_viewer": true,
      "comment": "Needs additional blocks below the item to work. Check the ponder for details",
      "item_in": {
        "item": catalyst // Item that needs to be on top of the structure in the middle
      },
      "contextual": {
        "type": "and",
        "contextual": [ // Checks if the the blocks are in the correct position
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
          "command": `fill ~1 ~-1 ~1 ~-1 ~ ~-1 minecraft:air replace ${middle}`, // Clears blocks
          "hide": true
        },
        {
          "type": "execute",
          "command": `fill ~1 ~-1 ~1 ~-1 ~ ~-1 minecraft:air replace ${sides}`, // Clears blocks
          "hide": true
        },
        {
          "type": "execute",
          "command": `fill ~1 ~-1 ~1 ~-1 ~ ~-1 minecraft:air replace ${corners}`, // Clears blocks
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

    event.custom({
      "type": "lychee:lightning_channeling",
      "hide_in_viewer": false,
      "ghost":true,
      "comment": "Needs additional blocks below the item to work. Check the ponder for details",
      "item_in": {
        "item": catalyst // Item that needs to be on top of the structure in the middle
      },
      "post": [
        {
          "type": "drop_item",
          "item": output
        }
      ]
    })
  }

  function ClickingSquareCrafting(catalyst, output, sides, corners, middle){

    event.custom({
      "type": "lychee:block_interacting",
      "hide_in_viewer": true,
      "comment": "Needs additional blocks below the item to work. Check the ponder for details",
      "block_in": middle,
      "item_in": {
        "item": catalyst // Item that needs to be on top of the structure in the middle
      },
      "contextual": {
        "type": "and",
        "contextual": [ // Checks if the the blocks are in the correct position
          {
            "type": "execute",
            "command": `execute if block ~1 ~ ~1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~ ~-1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~1 ~ ~-1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~ ~1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~ ~ ~1 ${sides}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~ ~ ~-1 ${sides}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~1 ~ ~ ${sides}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~ ~ ${sides}`,
            "hide": true
          }
      
        ],
        "hide": true
      },
      "post": [
        {
          "type": "execute",
          "command": `fill ~1 ~-1 ~1 ~-1 ~ ~-1 minecraft:air replace ${middle}`, // Clears blocks
          "hide": true
        },
        {
          "type": "execute",
          "command": `fill ~1 ~-1 ~1 ~-1 ~ ~-1 minecraft:air replace ${sides}`, // Clears blocks
          "hide": true
        },
        {
          "type": "execute",
          "command": `fill ~1 ~-1 ~1 ~-1 ~ ~-1 minecraft:air replace ${corners}`, // Clears blocks
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

    event.custom({
      "type": "lychee:block_interacting",
      "hide_in_viewer": false,
      "ghost":true,
      "comment": "Needs additional blocks below the item to work. Check the ponder for details",
      "item_in": {
        "item": catalyst // Item that needs to be on top of the structure in the middle
      },
      "post": [
        {
          "type": "drop_item",
          "item": output
        }
      ]
    })
  }

  function Infusing(result, amount, ingredients) {
    const contextualConditions = [
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~-1 ~1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~-1 ~-1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~-2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~-1 ~-2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~-2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~-1 ~2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~2 ~-1 ~-1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~2 ~-1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~2 ~-1 ~1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-2 ~-1 ~-1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-2 ~-1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-2 ~-1 ~1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~1 thermal:ruby_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~-1 thermal:ruby_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~1 thermal:ruby_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~-1 thermal:ruby_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~2 ~3 kubejs:charged_copper_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~2 ~-3 kubejs:charged_copper_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~3 ~2 ~ kubejs:charged_copper_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~-3 ~2 ~ kubejs:charged_copper_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~-3 ~ ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-3 ~1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~3 ~ ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~3 ~1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~ ~-3 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~1 ~-3 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~ ~3 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~1 ~3 rubinated_nether:altar_stone_tiles', "hide": true }
    ];

    const itemInputs = ingredients.map(function(ingredient) {
      var obj = {};
      obj[ingredient.type] = ingredient.name;
      return obj;
    });

    event.custom({
        'type': 'lychee:item_inside',
        "hide_in_viewer": true,
        "contextual": {
            "type": "and",
            "contextual": contextualConditions
        },
        'post': [
            {
              "type": "drop_item",
              "count": amount,
              "item": result
            },
            {
              "type": "execute",
              "command": 'playsound minecraft:block.blastfurnace.fire_crackle neutral @p'  
            },
            {
              "type": "execute",
              "command": "fill ~3 ~2 ~3 ~-3 ~2 ~-3 minecraft:waxed_copper_block replace kubejs:charged_copper_block"
            },
            {
              "type": "execute",
              "command": "fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 kubejs:depleted_ruby_block replace thermal:ruby_block"
            },
            {
              "type": "delay",
              "s": 5
            },
            {
              "type": "execute",
              "command": "fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 thermal:ruby_block replace kubejs:depleted_ruby_block"
            }

        ],
        'item_in': itemInputs,
        'block_in': 'kubejs:infusing_altar'
    });

    // Second registration for JEI display
    event.custom({
        "type": "lychee:item_inside",
        "ghost": true,
        "comment": "Needs infusing altar multiblock to work. Check ponder by holding W while hovering over infusing altar for more info",
        'item_in': itemInputs,
        "block_in": 'kubejs:infusing_altar',
        "post": [
            {
                "type": "drop_item",
                "item": result,
                "count": amount
            }
        ]
    })
  }
  

  Infusing("thermal:ruby",1,[
    { type: 'item', name: 'rubinated_nether:ruby' },
    { type: 'item', name: 'rubinated_nether:ruby' },
    { type: 'item', name: 'rubinated_nether:ruby' },
    { type: 'item', name: 'rubinated_nether:ruby' },
    { type: 'item', name: 'kubejs:improved_alchemical_dust' }
  ]);

  Infusing("thermal:sapphire",1,[
    { type: 'item', name: 'kubejs:sapphire' },
    { type: 'item', name: 'kubejs:sapphire' },
    { type: 'item', name: 'kubejs:sapphire' },
    { type: 'item', name: 'kubejs:sapphire' },
    { type: 'item', name: 'kubejs:alchemical_dust' }
  ]);

  ClickingSquareCrafting("thermal:coal_coke","minecraft:furnace","quark:sturdy_stone","quark:sturdy_stone","minecraft:coal_block")
  
  LightningSquareCrafting("kubejs:lemon_quartz","kubejs:magical_generator_block","kubejs:source_alloy_block","kubejs:arcanum_alloy_block","kubejs:source_alloy_block")
  

})