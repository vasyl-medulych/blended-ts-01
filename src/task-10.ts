interface User {
  id: number;
  name: string;
}

const users = ["alice", "bob", "charlie"];
function toUserObjects(users: string[]): User[] {
  return users.map((user, index) => ({ id: index + 1, name: user }));
}

console.log(toUserObjects(users));
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
