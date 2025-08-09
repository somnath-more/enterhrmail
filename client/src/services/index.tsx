import axios from "axios";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

const CREATE_USER = async ({ name, email, password }: UserProps) => {
    console.log(process.env.API_URL)
    console.log(name, email, password)
//   const res = await axios.post(`${process.env.API_URL}/users`, {
//     name,
//     email,
//     password
//   });
//   return res.data;
};

export default CREATE_USER;
