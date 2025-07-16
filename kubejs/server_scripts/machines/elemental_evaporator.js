ServerEvents.recipes(event=>{
    function evaporating(input,element,amount)
    {
    event.recipes.mbd2.evaporating()
    .inputItems(input)
    .outputFluids("kubejs:"+element+"_element_fluid "+amount)  
    }
    evaporating("bone_meal","earth",10)
    evaporating("#forge:mushrooms","earth",50)

    evaporating("feather","air",50)
    evaporating("quark:bottled_cloud","air",10)

    evaporating("#minecraft:logs","fire",10)
    evaporating("coal","fire",20)
    evaporating("charcoal","fire",20)
    evaporating("thermal:coal_coke","fire",50)

    evaporating("ink_sac","water",10)
    evaporating("#minecraft:fishes","water",25)
    evaporating("seagrass","water",50)

    

})