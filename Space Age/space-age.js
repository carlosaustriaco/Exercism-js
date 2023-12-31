const PLANET_PERIOD = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }
  
  const EARTH_PERIOD_SECONDS = 31557600;
  
  export const age = (planet, period) => {
    let earthYear = period / EARTH_PERIOD_SECONDS;
  
    return +(earthYear / PLANET_PERIOD[planet]).toFixed(2);
  };
  