
ItemEvents.modification(event => {
  
  let stacking16 = ['minecraft:potion','minecraft:saddle',"minecraft:writable_book","enigmaticlegacy:recall_potion","enigmaticlegacy:mending_mixture","minecraft:splash_potion","minecraft:lingering_potion","minecraft:cake",
    "enigmaticlegacy:common_potion","enigmaticlegacy:common_potion_splash","enigmaticlegacy:common_potion_lingering","enigmaticlegacy:ultimate_potion","enigmaticlegacy:ultimate_potion_splash","enigmaticlegacy:ultimate_potion_lingering"]

  let stacking64 = ["minecraft:snowball","ender_pearl"]
 
  let tooltype =['pickaxe','shovel','hoe','axe']

  stacking16.forEach((id)=>{

    event.modify(id, item=>{
      item.maxStackSize = 16
    })
  })

  stacking64.forEach((id)=>{

    event.modify(id, item=>{
      item.maxStackSize = 64
    })
  })
  //========================================Swords
  event.modify('minecraft:iron_sword', item=>{
    item.maxDamage = 512
  })

  event.modify('minecraft:golden_sword', item=>{
    item.maxDamage = 512
  })

  event.modify('minecraft:wooden_sword', item=>{
    item.maxDamage = 128
  })

  event.modify('minecraft:stone_sword', item=>{
    item.maxDamage = 128
  })

  event.modify('create_sa:copper_sword', item=>{
    item.maxDamage = 1024
  })

  event.modify('create_sa:zinc_sword', item=>{
    item.maxDamage = 512
  })

  event.modify('create_sa:brass_sword', item=>{
    item.maxDamage = 1024
  })

  event.modify('create_sa:experience_sword', item=>{
    item.maxDamage = 256
  })

  event.modify('naturesaura:infused_iron_sword', item=>{
    item.maxDamage = 1536
  })

  event.modify('deep_aether:skyjade_sword', item=>{
    item.maxDamage = 1024
  })

  event.modify('aether:zanite_sword', item=>{
    item.maxDamage = 1024
  })

  event.modify('minecraft:diamond_sword', item=>{
    item.maxDamage = 2048
  })

  event.modify('kubejs:golden_magic_feather', item=>{
    item.maxDamage = 64
  })

  event.modify('kubejs:fiery_magic_feather', item=>{
    item.maxDamage = 512
  })

  event.modify('kubejs:rainbow_magic_feather', item=>{
    item.maxDamage = 1024
  })

  event.modify('minecraft:diamond_sword', item=>{
    item.maxDamage = 2048
  })
  ////========================================Tools
  event.modify('aether:hammer_of_kingbdogz', item=>{
    item.maxDamage = 1024
  })

  event.modify('elementalcraft:chisel', item=>{
    item.maxDamage = 512
  })
  
  tooltype.forEach((id) => {
    
    event.modify('minecraft:wooden_'+id, item => {
      item.digSpeed = 6,
      item.maxDamage = 128
    })

    event.modify('minecraft:golden_'+id, item=>{
        item.maxDamage = 512,
        item.digSpeed = 8
        // +1 Luck and +2 looting or fortune
    })
    event.modify('minecraft:stone_'+id, item => {
      item.maxDamage = 128
    })

    event.modify('create_sa:copper_'+id, item=> {
      item.digSpeed = 4,
      item.maxDamage = 1024
    })

    event.modify('minecraft:iron_'+id, item=>{
      item.maxDamage = 512
      // +0.5 block range
    })

    event.modify('create_sa:zinc_'+id, item=>{
      item.maxDamage = 512
      // +20% movement speed
    })

    event.modify('create_sa:brass_'+id, item=>{
      item.digSpeed = 7,
      item.maxDamage = 1024
      // +1 Luck and 50% knockback resistance
    })

    event.modify('naturesaura:infused_iron_'+id, item=>{
      item.maxDamage = 1536,
      item.digSpeed = 7
      // +1 block range
    })

    event.modify('deep_aether:skyjade_'+id, item=>{
      item.maxDamage = 1024
      // +0.5 block range
    })

    event.modify('aether:zanite_'+id, item=>{
      item.maxDamage = 1024
      // +1 block range
    })

    event.modify('create_sa:experience_'+id, item=>{
      item.maxDamage = 256
      // +1 block range
    })

    event.modify('minecraft:diamond_'+id, item=>{
      item.maxDamage = 2048
      // ??+1 block range
    })

    event.modify('minecraft:netherite_'+id, item=>{
      item.maxDamage = 4096
      // ??+1 block range
    })
  })
  
  //========================================Armor

  event.modify("twilightforest:fiery_helmet", item=>{
    item.armorProtection = 2,
    item.armorToughness = 0
  })

  event.modify("twilightforest:fiery_chestplate", item=>{
    item.armorProtection = 6,
    item.armorToughness = 0
  })

  event.modify("twilightforest:fiery_leggings", item=>{
    item.armorProtection = 5,
    item.armorToughness = 0
  })

  event.modify("twilightforest:fiery_boots", item=>{
    item.armorProtection = 2,
    item.armorToughness = 0
  })

  event.modify("quark:forgotten_hat", item=>{
    item.maxDamage = 110
  })

  event.modify("deep_aether:skyjade_helmet", item=>{
    item.maxDamage = 165
  })

  event.modify("deep_aether:skyjade_boots", item=>{
    item.maxDamage = 195
  })

  event.modify("deep_aether:skyjade_leggings", item=>{
    item.maxDamage = 225
  })
  
  event.modify("deep_aether:skyjade_chestplate", item=>{
    item.maxDamage = 240
  })

  event.modify('immersiveengineering:glider', item=>{
    item.maxDamage = 512
  })

  event.modify('minecraft:elytra', item=>{
    item.maxDamage = 512
  })

  event.modify('alexsmobs:tarantula_hawk_elytra', item=>{
    item.maxDamage = 1024,
    item.armorProtection = 8
  })

  event.modify("immersiveengineering:armor_steel_helmet", item=>{
    item.armorKnockbackResistance = 0.1,
    item.armorProtection = 4,
    item.armorToughness = 3
  })

  event.modify("immersiveengineering:armor_steel_chestplate", item=>{
    item.armorKnockbackResistance = 0.1,
    item.armorProtection = 9,
    item.armorToughness = 3
  })

  event.modify("immersiveengineering:armor_steel_leggings", item=>{
    item.armorKnockbackResistance = 0.1,
    item.armorProtection = 7,
    item.armorToughness = 3
  })

  event.modify("immersiveengineering:armor_steel_boots", item=>{
    item.armorKnockbackResistance = 0.1,
    item.armorProtection = 4,
    item.armorToughness = 3
  })
  ///======================================== Other

  event.modify("create:sand_paper", item=>{
    item.maxDamage = 128
  })

  event.modify("create:red_sand_paper", item=>{
    item.maxDamage = 128
  })
})
