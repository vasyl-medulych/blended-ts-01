import axios from "axios";

interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  company: Company;
}

interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

const getUserName = async (id: number) => {
  const user = await fetchUser(id);
  console.log("Name:", user.name);
};

getUserName(1);
