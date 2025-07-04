ServerEvents.recipes(event=>{

    event.custom(
        {
            "type": "forbidden_arcanus:clibano_combustion",
            "cooking_time": 200,
            "experience": 5.0,
            "fire_type": "soul_fire",
            "ingredient": {
                "item": "kubejs:fiery_clay_blend"
            },
            "result": "kubejs:blast_brick"
        }
    )
})