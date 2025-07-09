StartupEvents.registry('fluid', event => {
    
  event.create('fire_element_fluid')
    .thickTexture(0xff8000)
    .bucketColor(0xff8000)
    .rarity("rare")
    .noBucket()

  event.create('air_element_fluid')
    .thickTexture(0xc8d4e1)
    .bucketColor(0xc8d4e1)
    .rarity("rare")
    .noBucket()

  event.create('earth_element_fluid')
    .thickTexture(0x563311)
    .bucketColor(0x563311)
    .rarity("rare")
    .noBucket()
  
  event.create('water_element_fluid')
    .thickTexture(0x15159a)
    .bucketColor(0x15159a)
    .rarity("rare")
    .noBucket()

})
