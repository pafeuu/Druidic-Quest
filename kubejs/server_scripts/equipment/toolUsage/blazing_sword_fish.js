
ItemEvents.rightClicked(event=>{

    const item = event.item
    const player = event.player
    const server = event.server

    if(item.id == "tide:blazing_swordfish" && player.isCrouching()){
        player.setSecondsOnFire(5)
        server.runCommandSilent("/playsound irons_spellbooks:spell.fire_arrow.charge neutral @p")
        server.runCommandSilent("/effect give @p irons_spellbooks:hastened 30 1")
    }
})
