ServerEvents.recipes(e=>{
    
    e.recipes.create.sequenced_assembly("immersiveengineering:blastbrick","kubejs:blast_brick",
        [
        e.recipes.create.deploying("kubejs:incomplete_blast_bricks",["kubejs:incomplete_blast_bricks","kubejs:brick_glue"]),
        e.recipes.create.deploying("kubejs:incomplete_blast_bricks",["kubejs:incomplete_blast_bricks","kubejs:blast_brick"])
    ]).transitionalItem("kubejs:incomplete_blast_bricks").loops(7)
    .id("immersiveengineering:crafting/blastbrick")

    e.recipes.create.sequenced_assembly("forbidden_arcanus:clibano_core","#forge:gears/fiery",
        [
        e.recipes.create.deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","forbidden_arcanus:dark_rune"]),
        e.recipes.create.deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","#forge:ingots/phoenix"]),
        e.recipes.create.deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","forbidden_arcanus:dark_rune"]),
        e.recipes.create.deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","kubejs:death_essence"]),
        e.recipes.create.deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","forbidden_arcanus:dark_rune"]),
        e.recipes.create.deploying("kubejs:incomplete_clibano_core",["kubejs:incomplete_clibano_core","immersiveengineering:alloybrick"]),
    ]).transitionalItem("kubejs:incomplete_clibano_core").loops(8)
    .id("forbidden_arcanus:clibano_core")
})