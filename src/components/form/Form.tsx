import { useState } from "react";
import Btn from "../btn/Btn";

interface typeButton {
  ctaText: string;
  onClick: () => void;
}

export default function Form({}: typeButton) {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [mobile, setMobile] = useState("");
  const [relative, setRelative] = useState("");
  const [mail, setMail] = useState("");
  const resetForm = () => {
    setName("");
    setFamily("");
    setMobile("");
    setRelative("");
    setMail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      id: Math.floor(Math.random() * 100),
      name: name,
      family: family,
      mobile: mobile,
      relative: relative,
      mail: mail,
    };
    resetForm();
  };
  return (
    <form
      className="rtl border border-gray-100 rounded-md shadow-lg p-4 text-sm font-bold"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col text-right gap-2 mb-2">
        <span>نام:</span>
        <input
          type="text"
          placeholder="نام..."
          className="border border-gray-200 shadow-md rounded-md px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="flex flex-col text-right gap-2 mb-2">
        <span>نام خانوادگی:</span>
        <input
          type="text"
          placeholder="نام خانوادگی..."
          className="border border-gray-200 shadow-md rounded-md px-2 py-1"
          value={family}
          onChange={(e) => setFamily(e.target.value)}
        />
      </label>
      <label className="flex flex-col text-right gap-2 mb-2">
        <span>شماره موبایل:</span>
        <input
          type="text"
          placeholder="موبایل..."
          className="border border-gray-200 shadow-md rounded-md px-2 py-1"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </label>
      <label className="flex flex-col text-right gap-2 mb-2">
        <span>نسبت:</span>
        <input
          type="text"
          placeholder="نسبت..."
          className="border border-gray-200 shadow-md rounded-md px-2 py-1"
          value={relative}
          onChange={(e) => setRelative(e.target.value)}
        />
      </label>
      <label className="flex flex-col text-right gap-2 mb-2">
        <span>ایمیل:</span>
        <input
          type="text"
          placeholder="ایمیل..."
          className="border border-gray-200 shadow-md rounded-md px-2 py-1"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </label>
      <span className="bg-gray-600 px-3 py-1 rounded-md flex w-24">
        <Btn ctaText="اضافه کردن" />
      </span>
    </form>
  );
}
