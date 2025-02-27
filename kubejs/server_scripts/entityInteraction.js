ItemEvents.entityInteracted("kubejs:primitive_shears",event =>{

    //let entityName = event.getTarget().entityType

    if (event.target.type == "minecraft:sheep")
    {
        event.target.attack(1)
    }
})