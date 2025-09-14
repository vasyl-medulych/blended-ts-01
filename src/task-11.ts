type User = { username: string; age: number; city?: string };
type Role = "admin" | "user" | "guest";

function createUserCard(user: User, role: Role): string {
  return `${user.username}(${user.age}) - ${role} from ${
    user.city ?? "Unknown"
  }`;
}
console.log(
  createUserCard({ username: "Anna", age: 25, city: "Kyiv" }, "admin")
);
// Anna (25) — admin from Kyiv

console.log(createUserCard({ username: "Max", age: 30 }, "guest"));
// Max (30) — guest from Unknown
