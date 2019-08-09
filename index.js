// Code your solution here
function findMatching(drivers, string){
  return drivers.filter(driver => driver.toLowerCase === string.toLowerCase)
}

function fuzzyMatch(drivers, string){
  return divers.filter(driver => driver.charAt(0) === string)
}
