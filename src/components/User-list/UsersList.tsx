import Btn from "../btn/Btn";

export default function UserList() {
  return (
    <div className="bg-orange-300">
      <span className="bg-red-600  px-3 py-1 rounded-md">
        <Btn ctaText="حذف" />
      </span>
      <span className="bg-blue-600 px-3 py-1 rounded-md">
        <Btn ctaText="ویرایش" />
      </span>
    </div>
  );
}
