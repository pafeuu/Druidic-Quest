ServerEvents.recipes(event=>{

    function binding(output,element,amount,input1,input2,input3,input4,input5,input6,input7,input8,id){

        event.recipes.mbd2.elemental_binding()
        .inputFluids("kubejs:"+element+"_element_fluid "+amount)
        .slotName("1", builder=> builder.inputItems(input1))
        .slotName("2", builder=> builder.inputItems(input2))
        .slotName("3", builder=> builder.inputItems(input3))
        .slotName("4", builder=> builder.inputItems(input4))
        .slotName("5", builder=> builder.inputItems(input5))
        .slotName("6", builder=> builder.inputItems(input6))
        .slotName("7", builder=> builder.inputItems(input7))
        .slotName("8", builder=> builder.inputItems(input8))
        .slotName("output", builder=>builder.outputItems(output))
        .duration(200)
        .id(id)
        .priority(0)
    }

    function binding4ingredients(output,element,amount,input1,input2,input3,input4,id){

        event.recipes.mbd2.elemental_binding()
        //.inputItems(input1,input2,input3,input4,input5,input6,input7,input8)
        .inputFluids("kubejs:"+element+"_element_fluid "+amount)
        //.outputItems(output)
        .slotName("1", builder=> builder.inputItems(input1))
        .slotName("2", builder=> builder.inputItems(input2))
        .slotName("3", builder=> builder.inputItems(input3))
        .slotName("4", builder=> builder.inputItems(input4))
        .slotName("output", builder=>builder.outputItems(output))
        .duration(100)
        .id(id)
        .priority(0)

    }

    event.remove({id:"vintageimprovements:sequenced_assembly/redstone_module"})

    binding("kubejs:light_essence","water",1250,
        "quark:glowberry_sack",
        "#forge:froglights",
        "glow_ink_sac",
        "ars_nouveau:fire_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:fire_essence",
        "light_essence")
    
    event.remove({output:"create:smart_chute"})
    binding4ingredients("create:smart_chute","water",250,
        "#forge:plates/brass",
        "create:filter",
        "vintageimprovements:redstone_module",
        "create:chute",
        "chute"
    )

    event.remove({output:"create:brass_tunnel"})
    binding4ingredients("create:brass_tunnel","water",250,
        "#forge:plates/brass",
        "create:filter",
        "vintageimprovements:redstone_module",
        "create:andesite_tunnel",
        "tunnel"
    )

    event.remove({output:"create:brass_funnel"})
    binding4ingredients("create:brass_funnel","water",250,
        "#forge:plates/brass",
        "create:filter",
        "vintageimprovements:redstone_module",
        "create:andesite_funnel",
        "funnel"
    )

    binding("kubejs:rainbow_magic_feather","water",250,
        "ars_nouveau:fire_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:earth_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence",
        "kubejs:fiery_magic_feather",
        "rainbow_magic_feather"
    )

})