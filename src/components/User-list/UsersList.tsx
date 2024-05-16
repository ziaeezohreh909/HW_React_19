import UserCard from "../card/UserCard";
import { getUserData } from "../api/Post-use";

export default function UserList() {
  let userInfoData = {
    name: "Mohammad",
    family: "Masoomi",
    mobile: "0318721312",
    relative: "Boyfriend",
    mail: "en.masoomi@gmail.com",
  };

  return (
    <div>
      <header className="font-bold text-xl">
        <h1>لیست کاربران</h1>
      </header>
      <div className="bg-gray-100 rounded-md flex flex-wrap gap-4 px-2 py-1 h-[700px] overflow-auto shadow-md">
        <UserCard
          name={userInfoData.name}
          family={userInfoData.family}
          mobile={userInfoData.mobile}
          relative={userInfoData.relative}
          mail={userInfoData.mail}
        />
      </div>
    </div>
  );
}
