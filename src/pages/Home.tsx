import AddUsers from "../components/User-list/UsersList";
import Header from "../components/header/Header";
import UsersList from "../components/add-users/AddUsers";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4 text-center m-2">
        <AddUsers />
        <UsersList />
      </div>
    </>
  );
}
