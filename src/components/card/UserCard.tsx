import Btn from "../btn/Btn";

export default function UserCard() {
  return (
    <div className="bg-zinc-300 border w-1/2 h-auto rounded-md px-2 py-4">
      <p className="flex rtl">
        <span className="font-bold">نام :</span>
        <span>محمد محمدی</span>
      </p>
      <p className="flex rtl">
        <span className="font-bold">شماره موبایل :</span>
        <span> 09122436784 </span>
      </p>
      <p className="flex rtl">
        <span className="font-bold">نسبت :</span>
        <span> دوست</span>
      </p>
      <p className="flex rtl">
        <span className="font-bold">ایمیل :</span>
        <span>zhgfaf@gmail.com</span>
      </p>
      <div className="mt-6 flex">
        <span className="bg-red-600 px-3 py-1 rounded-tl-md rounded-bl-md">
          <Btn ctaText="حذف" />
        </span>
        <span className="bg-blue-600 px-3 py-1 rounded-tr-md rounded-br-md">
          <Btn ctaText="ویرایش" />
        </span>
      </div>
    </div>
  );
}
