import UserCard from "../card/UserCard";

export default function UserList() {
  return (
    <div>
      <header className="font-bold text-xl">
        <h1>لیست کاربران</h1>
      </header>
      <div className="bg-gray-100 rounded-md flex flex-wrap gap-4 px-2 py-1 h-[700px] overflow-auto shadow-md">
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
