ServerEvents.recipes(e=>{

  e.replaceInput({mod:"sophisticatedstorage"},"minecraft:iron_ingot","#forge:plates/iron")
  e.replaceInput({mod:"sophisticatedbackpacks"},"minecraft:iron_ingot","#forge:plates/iron")

  e.remove({output:"sophisticatedstorage:packing_tape"})
  e.shapeless(Item.of('sophisticatedstorage:packing_tape', '{Damage:7}'),["#forge:slimeballs","paper"])

  e.replaceInput({mod:"sophisticatedstorage"},"minecraft:gold_ingot","naturesaura:tainted_gold")
  e.replaceInput({mod:"sophisticatedbackpacks"},"minecraft:gold_ingot","naturesaura:tainted_gold")

  e.replaceInput({mod:"sophisticatedstorage"},"#forge:gems/diamond","#forge:plates/diamond")
  e.replaceInput({mod:"sophisticatedbackpacks"},"#forge:gems/diamond","#forge:plates/diamond")
  //============================CHESTS AND BARRELS
  
  /*e.custom({
    "type": "sophisticatedstorage:storage_tier_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedstorage:iron_chest",
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "III",
      "ISI",
      "III"
    ],
    "key": {
      "I": {
        "tag": "forge:plates/iron"
      },
      "S": {
        "item": "sophisticatedstorage:chest"
      }
    },
    "result": {
      "item": "sophisticatedstorage:iron_chest"
    }
  })

  e.custom({
    "type": "sophisticatedstorage:storage_tier_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedstorage:iron_barrel",
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "III",
      "ISI",
      "III"
    ],
    "key": {
      "I": {
        "tag": "forge:plates/iron"
      },
      "S": {
        "item": "sophisticatedstorage:barrel"
      }
    },
    "result": {
      "item": "sophisticatedstorage:iron_barrel"
    }
  })

  e.custom({
    "type": "sophisticatedstorage:storage_tier_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedstorage:gold_chest",
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "III",
      "ISI",
      "III"
    ],
    "key": {
      "I": {
        "item": "naturesaura:tainted_gold"
      },
      "S": {
        "item": "sophisticatedstorage:iron_chest"
      }
    },
    "result": {
      "item": "sophisticatedstorage:gold_chest"
    }
  })

  e.custom({
    "type": "sophisticatedstorage:storage_tier_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedstorage:gold_barrel",
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "III",
      "ISI",
      "III"
    ],
    "key": {
      "I": {
        "item": "naturesaura:tainted_gold"
      },
      "S": {
        "item": "sophisticatedstorage:iron_barrel"
      }
    },
    "result": {
      "item": "sophisticatedstorage:gold_barrel"
    }
  })

  e.custom({
    "type": "sophisticatedstorage:storage_tier_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedstorage:diamond_chest",
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "III",
      "ISI",
      "III"
    ],
    "key": {
      "I": {
        "item": "naturesaura:tainted_gold"
      },
      "S": {
        "item": "kubejs:diamond_plate"
      }
    },
    "result": {
      "item": "sophisticatedstorage:diamond_chest"
    }
  })

  e.custom({
    "type": "sophisticatedstorage:storage_tier_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedstorage:diamond_barrel",
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "III",
      "ISI",
      "III"
    ],
    "key": {
      "I": {
        "item": "kubejs:diamond_plate"
      },
      "S": {
        "item": "sophisticatedstorage:gold_barrel"
      }
    },
    "result": {
      "item": "sophisticatedstorage:diamond_barrel"
    }
  })
  */
  //============================BACKPACKS
  e.remove({id:"sophisticatedbackpacks:gold_backpack"})
  e.remove({id:"sophisticatedbackpacks:iron_backpack"})
  e.remove({id:"sophisticatedbackpacks:diamond_backpack"})
  e.remove({id:"sophisticatedbackpacks:iron_backpack_from_copper"})
 
  e.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedbackpacks:gold_backpack",
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "GGG",
      "GBG",
      "GGG"
    ],
    "key": {
      "G": {
        "tag": "forge:plates/tainted_gold"
      },
      "B": {
        "item": "sophisticatedbackpacks:iron_backpack"
      }
    },
    "result": {
      "item": "sophisticatedbackpacks:gold_backpack"
    }


  })

  e.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedbackpacks:iron_backpack",
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "GGG",
      "GBG",
      "GGG"
    ],
    "key": {
      "G": {
        "tag": "forge:plates/iron"
      },
      "B": {
        "item": "sophisticatedbackpacks:copper_backpack"
      }
    },
    "result": {
      "item": "sophisticatedbackpacks:iron_backpack"
    }
  })

  e.custom({
    "type": "sophisticatedbackpacks:backpack_upgrade",
    "conditions": [
      {
        "itemRegistryName": "sophisticatedbackpacks:diamond_backpack",
        "type": "sophisticatedcore:item_enabled"
      }
    ],
    "pattern": [
      "DDD",
      "DBD",
      "DDD"
    ],
    "key": {
      "D": {
        "tag": "forge:plates/diamond"
      },
      "B": {
        "item": "sophisticatedbackpacks:gold_backpack"
      }
    },
    "result": {
      "item": "sophisticatedbackpacks:diamond_backpack"
    }
  }

  )
  e.remove({id:"sophisticatedbackpacks:upgrade_base"})
  e.shaped(
	  Item.of('sophisticatedbackpacks:upgrade_base'), 
	  [
      'XIX',
      'IGI', 
      'XIX'
	  ],
	  {
      I: '#forge:ingots/iron',
      X: '#forge:leather',
      G: '#forge:gems/diamond'
	  }
	)

  function exch(item)
  {
    e.remove({id:"sophisticatedstorage:backpack_"+item+"_upgrade_from_storage_"+item+"_upgrade"})
    e.remove({id:"sophisticatedstorage:storage_"+item+"_upgrade_from_backpack_"+item+"_upgrade"})
    e.remove({id:"sophisticatedbackpacks:"+item+"_upgrade"})
    e.shaped(
      Item.of('sophisticatedbackpacks:'+item+'_upgrade'), 
      [
        'XIX',
        'IGI', 
        'XIX'
      ],
      {
        I: '#forge:ingots/iron',
        X: '#forge:leather',
        G: 'sophisticatedstorage:'+item+'_upgrade'
      }
    )

    e.shaped(
      Item.of('sophisticatedstorage:'+item+'_upgrade'), 
      [
        'XXX',
        'XGX', 
        'XXX'
      ],
      {
        I: 'forge:ingots/iron',
        X: 'kubejs:wooden_plate',
        G: 'sophisticatedbackpacks:'+item+'_upgrade'
      }
    )
  }

  function easy(output,input)
  {
    e.remove({id:"sophisticatedstorage:"+output+"_upgrade"})
    e.shapeless("sophisticatedstorage:"+output+"_upgrade",["sophisticatedstorage:upgrade_base",input])
  }

  exch("crafting")
  exch("pickup")
  exch("magnet")
  exch("advanced_magnet")
  exch("jukebox")
  exch("smelting")
  exch("filter")
  exch("advanced_filter")
  exch("pump")
  exch("advanced_pump")
  easy("jukebox","minecraft:jukebox")
  easy("crafting","ars_nouveau:glyph_craft")
  easy("smelting","ars_nouveau:glyph_smelt")
  easy("pickup","minecraft:hopper")
  easy("filter","create:filter")

  e.remove({id:"sophisticatedstorage:advanced_filter_upgrade"})
  e.shapeless("sophisticatedstorage:advanced_filter_upgrade",["sophisticatedstorage:filter_upgrade","create:attribute_filter"])

  e.remove({id:"sophisticatedstorage:magnet_upgrade"})
  e.shapeless("sophisticatedstorage:magnet_upgrade",["sophisticatedstorage:pickup_upgrade","enigmaticlegacy:magnet_ring"])
  e.shapeless("sophisticatedstorage:magnet_upgrade",["sophisticatedstorage:pickup_upgrade","naturesaura:hopper_upgrade"])

  e.remove({id:"sophisticatedstorage:advanced_magnet_ring"})
  e.shapeless("sophisticatedstorage:advanced_magnet_upgrade",["sophisticatedstorage:magnet_upgrade","enigmaticlegacy:super_magnet_ring"])
  e.shapeless("sophisticatedstorage:advanced_magnet_upgrade",["sophisticatedstorage:magnet_upgrade","naturesaura:hopper_upgrade"])
})