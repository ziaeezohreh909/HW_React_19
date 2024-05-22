import Btn from "../btn/Btn";

interface userInfoType {
  id: string;
  name: string;
  family: string;
  mobile: string;
  relative: string;
  mail: string;
  onDelete: (id: number) => void;
}

export default function UserCard({
  id,
  name,
  family,
  mobile,
  relative,
  mail,
  onDelete,
}: userInfoType) {
  return (
    <div className="bg-zinc-300 border w-auto rounded-md px-2 py-4 h-[190px]">
      <p className="flex rtl">
        <span className="font-bold">نام :</span>
        <span>{name + " " + family}</span>
      </p>
      <p className="flex rtl">
        <span className="font-bold">شماره موبایل :</span>
        <span> {mobile} </span>
      </p>
      <p className="flex rtl">
        <span className="font-bold">نسبت :</span>
        <span> {relative} </span>
      </p>
      <p className="flex rtl">
        <span className="font-bold">ایمیل :</span>
        <span> {mail} </span>
      </p>
      <div className="mt-6 flex">
        <span className="bg-red-600 px-3 py-1 rounded-tl-md rounded-bl-md">
          <Btn ctaText="حذف" onClick={() => onDelete(id)} />
        </span>
        <span className="bg-blue-600 px-3 py-1 rounded-tr-md rounded-br-md">
          <Btn ctaText="ویرایش" />
        </span>
      </div>
    </div>
  );
}
