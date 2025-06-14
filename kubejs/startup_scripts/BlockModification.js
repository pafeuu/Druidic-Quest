BlockEvents.modification(event => {
    event.modify('minecraft:spawner', block => {
      block.destroySpeed = 20.0
    })

    
    function logs(mod,type){

      event.modify(mod+":stripped_"+type+"_log", block => {
        block.destroySpeed = 4.0
      })

      event.modify(mod+":"+type+"_log", block => {
        block.destroySpeed = 4.0
      })
    }

    logs("minecraft","oak")
    logs("minecraft","spruce")
    logs("minecraft","birch")
    logs("minecraft","jungle")
    logs("minecraft","acacia")
    logs("minecraft","dark_oak")
    logs("minecraft","crimson")
    logs("minecraft","warped")
    logs("minecraft","mangrove")
    logs("minecraft","cherry")
    logs("minecraft","bamboo")
    logs("ancient_aether","highsproot")
    logs("ancient_aether","sakura")
    logs("deep_aether","yagroot")
    logs("deep_aether","cruderoot")
    logs("deep_aether","conberry")
    logs("deep_aether","sunroot")
    logs("deep_aether","roseroot")
    logs("deeperdarker","echo")
    logs("deeperdarker","bloom")
    logs("forbidden_arcanus","aurum")
    logs("mynethersdelight","powdery")
    logs("quark","ancient")
    logs("quark","azalea")
    logs("quark","blossom")
    //logs("minecraft","bamboo")
    logs("aether","skyroot")
    logs("aether_redux","fieldsproot")
    logs("aether_redux","blightwillow")
    logs("aether_redux","jellyshroom")
    logs("aether_redux","jellyshroom")
    logs("aether_redux","cloudcap")
    logs("aether_redux","crystal")
    logs("aether_redux","glacia")
    logs("twilightforest","twilight_oak")
    logs("twilightforest","canopy")
    logs("twilightforest","mangrove")
    logs("twilightforest","dark")
    logs("twilightforest","transformation")
    logs("twilightforest","mining")
    logs("twilightforest","sorting")
    logs("twilightforest","time")
    logs("thermal","rubberwood")
    logs("ars_nouveau","blue_archwood")
    logs("ars_nouveau","red_archwood")
    logs("ars_nouveau","purple_archwood")
    logs("ars_nouveau","green_archwood")

  })