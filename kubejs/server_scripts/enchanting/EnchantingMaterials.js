ServerEvents.recipes(event=>{

    function RuneCrafting(output,input,wissen,experience)
    {

        const itemInputs = input.map(function(input) {
        return { item: input.item };
        });

        event.custom({
        "type": "wizards_reborn:arcane_iterator",
        "output": {
            "item": output,
            "count": 1
        },
        "wissen": wissen,
        "experience": experience,
        "ingredients": itemInputs
    })
    }

    RuneCrafting("kubejs:big_enchanting_rune",[
        {"item":"kubejs:medium_enchanting_rune"},
        {"item":"kubejs:medium_enchanting_rune"},],2000,15)
    
})