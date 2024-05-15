import AddUsers from "../components/add-users/AddUsers";
import Header from "../components/header/Header";
import UsersList from "../components/users-list/UsersList";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4 text-center">
        <AddUsers />
        <UsersList />
      </div>
    </>
  );
}
