PlayerEvents.tick(event => {
    const { player } = event;

    // Fires event once a second
    if (!(player.age % 20 === 0)) return;
    if (player.chestArmorItem?.nbt?.MyNbtTag) {
        // Apply regeneration potion effect
        let potion = event.player.potionEffects
        potion.add('minecraft:regeneration', 200, 0, false, false)
    }
});