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

    event.create("minecraft:furnace").scene("furnace_crafting", "Furnace Crafting","kubejs:furnace", (scene, util) => {
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.DOWN);
        scene.idle(10);
        
        for(let i = 1; i < 4; i++){
        scene.world.showSection([i, 1, 1, i, 1, 4], Facing.DOWN);
        scene.idle(5)
        }

        scene.text(20,"Drop Coke in the middle",[3.0,1.5,3.0]).attachKeyFrame();
        scene.showControls(20,[3.0,1.5,3.0],"down").withItem("thermal:coal_coke");
    
        scene.idle(30);

        //scene.text(40,"testt",[3.0,2.5,3.0])//.attachKeyFrame();
        scene.showControls(15,[3.0,1.5,3.0],"down").withItem("minecraft:tnt");
        scene.text(20,"Cause an explosion to finish crafting!",[3.0,1.5,3.0]).attachKeyFrame();

        scene.idle(30);

        scene.world.replaceBlocks([1, 1, 1, 3, 1, 3], "minecraft:air", false);
        scene.world.createItemEntity(util.vector.topOf(2.5, 1.5, 2.5), util.vector.of(0, 0, 0), "minecraft:furnace");

        scene.idle(20);
    });

    event.create("kubejs:magical_generator_block").scene("magical_generator_crafting", "Magical Generator Crafting","kubejs:magical_generator", (scene, util) => {
        
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.DOWN);
        scene.idle(10);
        
        for(let i = 1; i < 4; i++){
        scene.world.showSection([i, 1, 1, i, 1, 4], Facing.DOWN);
        scene.idle(5)
        }

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
        
        scene.world.showSection([0, 0, 0, 8, 0, 8], Facing.DOWN);
        for(let i = 1; i < 8; i++){
            scene.world.showSection([i, 1, 1, i, 1, 8], Facing.DOWN);
            scene.idle(3)
        }
        for(let y = 2; y < 5; y++){
            scene.world.showSection([0,y , 0, 8, y, 8], Facing.DOWN);
            scene.idle(5)
        }
        
    });

    event.create(["naturesaura:animal_spawner"]).scene("animal_spawner","Building Animal Spawner","kubejs:animal_spawner",(scene, util)=>{
        scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.DOWN);
        for(let i = 0; i < 7; i++){
            scene.world.showSection([i, 1, 0, i, 1, 6], Facing.DOWN);
            scene.idle(3)
        }
        scene.world.showSection([0, 2, 0, 6, 2, 6], Facing.DOWN);
    });

    event.create(["naturesaura:auto_crafter"]).scene("autocrafter","Building Animal Spawner","kubejs:automatic_constructor",(scene, util)=>{
        scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.DOWN);
        for(let i = 0; i < 7; i++){
            scene.world.showSection([i, 1, 0, i, 1, 6], Facing.DOWN);
            scene.idle(3)
        }
    });

});
