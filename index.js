// Code your solution here

function findMatching(drivers, strng) {
  return drivers.filter(driver =>
    driver.toLowerCase() === strng.toLowerCase()
  );
}
function fuzzyMatch(drivers, strng) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(strng.toLowerCase())
  );
}
function matchName(drivers, name) {
  return drivers.filter(driver =>
    driver.name.toLowerCase() === name.toLowerCase()
  );
}
