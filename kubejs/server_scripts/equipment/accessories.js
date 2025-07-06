ServerEvents.recipes(event => {

    event.shaped("immersiveengineering:earmuffs",[
        " S ",
        "S S",
        "W W"
    ],
    {
        S: "#forge:string",
        W: "#minecraft:wool"
    }
    ).id("immersiveengineering:crafting/earmuffs")

    event.shaped("kubejs:sturdy_boots_cover",[
        "S S",
        "P P",
        "D D"
    ],
    {
        S: "#forge:ropes",
        P: "#forge:plates/lead",
        D: "kubejs:sturdy_deepslate",
    }
    )

    event.shaped("kubejs:silent_boots_cover",[
        "S S",
        "P P",
        "D D"
    ],
    {
        S: "string",
        P: "leather",
        D: "#minecraft:wool",
    }
    )

    event.shaped("kubejs:fall_boots_cover",[
        "S S",
        "P P",
        "D D"
    ],
    {
        S: "elementalcraft:air_silk",
        P: "immersiveengineering:cushion",
        D: "#handcrafted:cushions"
    }
    )

    event.recipes.naturesaura.tree_ritual("kubejs:gravity_boots_cover", [
        "thermal:ruby", 
        "kubejs:fall_boots_cover",
        "thermal:sapphire",
        "thermal:sapphire",
        "#forge:plates/source_alloy",
        "#forge:plates/source_alloy",
        "#forge:plates/source_alloy",
        "#forge:plates/source_alloy"],
        "quark:ancient_sapling",200)
    
    event.recipes.naturesaura.tree_ritual("kubejs:bouncy_boots_cover", [
        "kubejs:infused_emerald", 
        "kubejs:fall_boots_cover",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald",
        "slime_block",
        "slime_block",
        "slime_block",
        "slime_block"],
        "quark:ancient_sapling",200)
})