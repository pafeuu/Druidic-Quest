ServerEvents.loaded(event => {
    event.server.gameRules.set("keepInventory", true)
    
})

PlayerEvents.respawned(event =>{

    event.server.runCommandSilent("/xp set @p 0 levels")
    event.server.runCommandSilent("/xp set @p 0 points")
    
})