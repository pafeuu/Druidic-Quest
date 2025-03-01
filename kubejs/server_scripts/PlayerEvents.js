/*PlayerEvents.tick(event => {
    let player = event.player;
    
    // Get Curios inventory directly from player
    let curios = player.getCurios();

    if (player.age % 20 !== 0) return; // Run every second

    if (curios) {
        // Check if the player has the custom Emerald Ring equipped
        let ringEquipped = false;

        for (const [slot, item] of Object.entries(curios.slots)) {
            if (item && item.id === 'kubejs:daybloom_ring') {
                ringEquipped = true;
                break;
            }
        }

        if (ringEquipped) {
            // Apply a Luck effect when the ring is equipped
            if (!player.potionEffects.has('minecraft:luck')) {
                player.potionEffects.add('minecraft:luck', 200, 1, false, false); // Luck I for 10 seconds
                console.info(player.name + ' received Luck effect from Emerald Ring.');
            }
        } else {
            console.info(player.name + ' does NOT have the Emerald Ring equipped.');
        }
    } else {
        console.error('Curios component not found for player: ' + player.name);
    }
});*/
