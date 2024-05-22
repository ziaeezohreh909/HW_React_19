import { useEffect, useState } from "react";
import UserCard from "../card/UserCard";
import axios from "axios";

interface userType {
  id: string;
  name: String;
  family: String;
  mobile: String;
  relative: String;
  mail: String;
}

export default function UserList() {
  const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:3000/users");
      setUsers(res.data);
    }
    getData();
  }, []);

  const deleteUser = (id: string) => {
    // setUsers(users.filter((user) => user.id !== id));
    console.log("ok");
  };

  return (
    <div>
      <header className="font-bold text-xl">
        <h1>لیست کاربران</h1>
      </header>
      <div className="bg-gray-100 rounded-md flex flex-wrap gap-4 px-2 py-1 h-[700px] overflow-auto shadow-md">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            family={user.family}
            mobile={user.mobile}
            relative={user.relative}
            mail={user.mail}
            onDelete={deleteUser}
          />
        ))}
      </div>
    </div>
  );
}
