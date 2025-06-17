ServerEvents.loaded(event => {
    event.server.gameRules.set("keepInventory", true)
    
})

PlayerEvents.respawned(event =>{

    event.player.runCommandSilent("/xp set @p 0 levels")
    event.player.runCommandSilent("/xp set @p 0 points")
    
})