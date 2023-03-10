export function health(person) {
  if (person.health > 100) {
    return 'Ошибка, здоровье не может быть больше 100';
  }
  if (person.health > 50) {
    return 'healthy';
  } if (person.health <= 50 && person.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
