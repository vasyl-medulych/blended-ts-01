enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function getPermissions(role: Role) {
  switch (role) {
    case Role.Admin:
      return ["create", "read", "update", "delete"];
    case Role.User:
      return ["read", "update"];
    case Role.Guest:
      return ["read"];
    default:
      [];
      break;
  }
}

console.log(getPermissions("ADMIN"));
