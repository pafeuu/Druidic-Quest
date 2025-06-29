ServerEvents.recipes(event=>{

    function infusing(output,element,amount,inputItem,id,duration)
    {
        event.recipes.mbd2.elemental_infusing()
        .inputFluids("kubejs:"+element+"_element_fluid "+amount)
        .inputItems(inputItem)
        .outputItems(output)
        .id(id)
        .duration(duration)
    }

    infusing("wizards_reborn:wisestone","earth",100,"quark:sturdy_stone","sturdy_stone_to_wisestone",100)
    infusing("2x wizards_reborn:wisestone","earth",200,"kubejs:sturdy_deepslate","sturdy_deepslate_to_wisestone",200)
    
})