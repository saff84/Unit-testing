export function sortPersons(persons) {
  return persons.sort((prev, next) => next.health - prev.health);
}
