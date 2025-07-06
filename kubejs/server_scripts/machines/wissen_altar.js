ServerEvents.recipes(event=>{

    function altar(input,wissen)
    {
        event.custom({
            "type": "wizards_reborn:wissen_altar",
            "ingredient": {
                "item": input
            },
            "wissen": wissen
        })
    }
    

    altar("kubejs:earth_infused_arcanum",1500)
    altar("kubejs:air_infused_arcanum",1500)
    altar("kubejs:water_infused_arcanum",1250)
    altar("kubejs:fire_infused_arcanum",1250)
})