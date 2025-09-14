interface User {
  name: string;
  address?: Address;
}

interface Address {
  city: string;
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user.address?.city);
