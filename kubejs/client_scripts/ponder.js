Ponder.tags((event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:in_world", "kubejs:magical_generator_block", "Multiblock in world crafting", "Explanation of in world crafting with multiple placed blocks", [
        // some default items
        "kubejs:magical_generator_block",
        "minecraft:furnace",
    ]);

    event.createTag("kubejs:nature_aura","naturesaura:nature_altar","Nature's aura Multiblocks","Building guide for natures aura multiblocks",
        [
            "naturesaura:nature_altar",
            "naturesaura:animal_spawner",
            "naturesaura:auto_crafter",
            "naturesaura:wood_stand",
            "naturesaura:gold_powder",
            "naturesaura:gold_bricks",
        ]
    )
});

Ponder.registry((event) => {

    event.create("kubejs:magical_generator_block").scene("set_replace_modify_tutorial", "Magical Generator Crafting", (scene, util) => {
        scene.showStructure();

        scene.world.setBlocks([1, 1, 1, 3, 1, 3], "kubejs:arcane_alloy_block", true);
        scene.world.setBlock([1, 1, 1], "kubejs:inert_alloy_block", true);
        scene.world.setBlock([3, 1, 1], "kubejs:inert_alloy_block", true);
        scene.world.setBlock([1, 1, 3], "kubejs:inert_alloy_block", true);
        scene.world.setBlock([3, 1, 3], "kubejs:inert_alloy_block", true);

        scene.text(20,"Drop Lemon Quartz in the middle",[3.0,1.5,3.0]).attachKeyFrame();
        scene.showControls(20,[3.0,1.5,3.0],"down").withItem("kubejs:lemon_quartz");
    
        scene.idle(30);

        //scene.text(40,"testt",[3.0,2.5,3.0])//.attachKeyFrame();
        scene.showControls(15,[3.0,1.5,3.0],"down").withItem("thermal:lightning_charge");
        scene.text(20,"Summon Lightning to finish crafting!",[3.0,1.5,3.0]).attachKeyFrame();

        scene.idle(30);

        scene.world.replaceBlocks([1, 1, 1, 3, 1, 3], "minecraft:air", false);
        scene.world.createItemEntity(util.vector.topOf(2.5, 1.5, 2.5), util.vector.of(0, 0, 0), "kubejs:magical_generator_block");

        scene.idle(20);
    });

    event.create(["naturesaura:wood_stand","naturesaura:gold_powder"]).scene("tree_ritual","Tree ritual usage","kubejs:tree_ritual",(scene, util)=>{
        
        scene.showStructure();
        scene.text(40,"It doesnt matter which block you use for the floor, except for the middle which need to be able to plant sapling on",[5.5,0,5.5]).placeNearTarget().attachKeyFrame();
        scene.idle(50);

        scene.text(20,"Place items on the wooden stand",[5.5,0,5.5]).placeNearTarget().attachKeyFrame();
        scene.idle(25);
        scene.showControls(30,[1,2,1],"down").withItem("minecraft:clay").rightClick()
        scene.showControls(30,[4,2,0],"down").withItem("minecraft:clay").rightClick()
        scene.showControls(30,[7,2,1],"down").withItem("minecraft:clay").rightClick()
        scene.showControls(30,[8,2,4],"down").withItem("minecraft:sand").rightClick()
        scene.showControls(30,[0,2,4],"down").withItem("minecraft:sand").rightClick()
        scene.showControls(30,[1,2,7],"down").withItem("minecraft:ink_sac").rightClick()
        scene.idle(40);

        scene.world.setBlock([4,1,4],"minecraft:spruce_sapling",false);
        scene.text(20,"Make the sapling grow to finish the craft!",[5.5,0,5.5]).placeNearTarget().attachKeyFrame();
        scene.idle(30)
        scene.world.replaceBlocks([2, 1, 2, 6, 1, 6], "minecraft:air", false);
        scene.world.createItemEntity(util.vector.topOf(4.5, 1.5, 4.5), util.vector.of(0, 0, 0), "immersiveengineering:cokebrick");
        scene.text(20,"Gold powder is consumed in the process",[5.5,0,5.5]).placeNearTarget().attachKeyFrame();

    });

    event.create(["naturesaura:nature_altar","naturesaura:gold_brick"]).scene("nature_altar","Building nature altar in the overworld","kubejs:natural_altar",(scene, util)=>{
        
        scene.world.showSection([0, 0, 0, 8, 1, 8], Facing.DOWN);
        scene.idle(20);
        scene.world.showSection([0, 2, 0, 8, 5, 8], Facing.DOWN);
    });

    event.create(["naturesaura:animal_spawner"]).scene("animal_spawner","Building Animal Spawner","kubejs:animal_spawner",(scene, util)=>{
        scene.world.showSection([0, 0, 0, 6, 1, 6], Facing.DOWN);
        scene.idle(20);
        scene.world.showSection([0, 2, 0, 6, 2, 6], Facing.DOWN);
    });

    event.create(["naturesaura:auto_crafter"]).scene("animal_spawner","Building Animal Spawner","kubejs:automatic_constructor",(scene, util)=>{
        scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.DOWN);
        scene.idle(20);
        scene.world.showSection([0, 1, 0, 6, 2, 6], Facing.DOWN);
    });

});
