export function createNewHabit(name) {
  return {
    id: crypto.randomUUID(),
    name: name,
    history: [],
  };
}
