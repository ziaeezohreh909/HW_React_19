import { useState } from "react";
import UserList from "../components/User-list/UsersList";
import AddUsers from "../components/add-users/AddUsers";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4 text-center m-2">
        <UserList />
        <AddUsers />
      </div>
    </>
  );
}
